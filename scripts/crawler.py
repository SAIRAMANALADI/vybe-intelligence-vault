#!/usr/bin/env python3
"""
crawler.py — crawl4ai-powered content enrichment for the V2.0 harvester.

Given a URL (typically a project homepage, docs site, or blog post), this module
fetches and returns clean LLM-ready Markdown that can be fed into evaluate_repo.py
alongside the GitHub README, giving the LLM real content instead of just the README.

Install: pip install crawl4ai
Docs:    https://github.com/unclecode/crawl4ai

Usage (standalone):
    python scripts/crawler.py --url https://example.com/docs --max-chars 8000

Usage (from evaluate_repo.py):
    from scripts.crawler import crawl_url
    content = crawl_url(url, max_chars=8000)
"""

import os
import sys
import time
import argparse
import urllib.parse
from pathlib import Path
from datetime import datetime

# --- Config loader (reads vault-core/config.yaml without yaml dependency) ---

VAULT_ROOT = Path(__file__).resolve().parent.parent


def _load_crawler_config() -> dict:
    """Read crawler settings from vault-core/config.yaml using a simple line parser."""
    config_path = VAULT_ROOT / "vault-core" / "config.yaml"
    defaults = {
        "enabled": True,
        "headless": True,
        "max_content_chars": 8000,
        "request_timeout": 30,
        "skip_domains": [
            "arxiv.org", "twitter.com", "x.com",
            "linkedin.com", "reddit.com", "youtube.com",
        ],
    }
    if not config_path.exists():
        return defaults

    try:
        with open(config_path, "r", encoding="utf-8") as f:
            lines = f.readlines()

        in_crawler = False
        in_skip = False
        cfg: dict = dict(defaults)

        for line in lines:
            stripped = line.rstrip()
            if not stripped.strip() or stripped.strip().startswith("#"):
                continue

            # Detect crawler: block
            if stripped.startswith("crawler:"):
                in_crawler = True
                in_skip = False
                continue

            # Leave crawler block when we hit a top-level key
            if in_crawler and stripped and not stripped[0].isspace():
                in_crawler = False
                in_skip = False
                continue

            if in_crawler:
                inner = stripped.strip()
                if inner.startswith("skip_domains:"):
                    in_skip = True
                    cfg["skip_domains"] = []
                    continue
                if in_skip:
                    if inner.startswith("-"):
                        domain = inner[1:].strip().strip("'\"")
                        if domain:
                            cfg["skip_domains"].append(domain)
                        continue
                    else:
                        in_skip = False

                if ":" in inner and not inner.startswith("-"):
                    key, _, val = inner.partition(":")
                    key = key.strip()
                    val = val.strip().strip("'\"")
                    if key == "enabled":
                        cfg["enabled"] = val.lower() != "false"
                    elif key == "headless":
                        cfg["headless"] = val.lower() != "false"
                    elif key == "max_content_chars":
                        cfg["max_content_chars"] = int(val) if val.isdigit() else defaults["max_content_chars"]
                    elif key == "request_timeout":
                        cfg["request_timeout"] = int(val) if val.isdigit() else defaults["request_timeout"]

        return cfg

    except Exception:
        return defaults


CRAWLER_CONFIG = _load_crawler_config()


# ---------------------------------------------------------------------------
# Core crawl function
# ---------------------------------------------------------------------------

def _is_skip_domain(url: str) -> bool:
    """Return True if this URL's domain is on the skip list."""
    try:
        hostname = urllib.parse.urlparse(url).hostname or ""
        for skip in CRAWLER_CONFIG.get("skip_domains", []):
            if hostname == skip or hostname.endswith("." + skip):
                return True
    except Exception:
        pass
    return False


def crawl_url(url: str, max_chars: int | None = None) -> str:
    """
    Fetch the page at `url` and return clean Markdown suitable for LLM prompts.

    Returns an empty string if:
    - The URL domain is in the skip list
    - crawl4ai is not installed (graceful degradation)
    - The request times out or fails

    The caller (evaluate_repo.py) treats an empty string as "no extra context".
    """
    if not CRAWLER_CONFIG.get("enabled", True):
        return ""

    if _is_skip_domain(url):
        _log(f"Skipping crawl for skip-listed domain: {url}")
        return ""

    if max_chars is None:
        max_chars = CRAWLER_CONFIG.get("max_content_chars", 8000)

    try:
        from crawl4ai import AsyncWebCrawler, CrawlerRunConfig  # type: ignore
    except ImportError:
        _log(
            "crawl4ai not installed — skipping URL enrichment. "
            "Install with: pip install crawl4ai"
        )
        return ""

    import asyncio

    async def _do_crawl() -> str:
        config = CrawlerRunConfig(
            headless=CRAWLER_CONFIG.get("headless", True),
            page_timeout=CRAWLER_CONFIG.get("request_timeout", 30) * 1000,  # ms
            # Ask crawl4ai to return clean Markdown (strips nav/footer boilerplate)
            word_count_threshold=10,
            remove_overlay_elements=True,
            excluded_tags=["nav", "footer", "header", "script", "style", "aside"],
        )
        try:
            async with AsyncWebCrawler() as crawler:
                result = await crawler.arun(url=url, config=config)
                if result and result.success and result.markdown:
                    content = result.markdown.strip()
                    if len(content) > max_chars:
                        content = content[:max_chars] + "\n\n[...content truncated by crawler.py]"
                    return content
        except Exception as e:
            _log(f"crawl4ai error for {url}: {e}")
        return ""

    try:
        # Use asyncio.run() but fall back to get_event_loop() if a loop is already running
        try:
            return asyncio.run(_do_crawl())
        except RuntimeError:
            loop = asyncio.get_event_loop()
            return loop.run_until_complete(_do_crawl())
    except Exception as e:
        _log(f"Unexpected crawler error for {url}: {e}")
        return ""


# ---------------------------------------------------------------------------
# Helper
# ---------------------------------------------------------------------------

def _log(msg: str) -> None:
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] [crawler] {msg}", flush=True)


# ---------------------------------------------------------------------------
# Standalone CLI for quick testing
# ---------------------------------------------------------------------------

def main() -> None:
    parser = argparse.ArgumentParser(
        description="crawl4ai-powered URL content extractor for the Vybe Vault"
    )
    parser.add_argument("--url", required=True, help="URL to crawl")
    parser.add_argument(
        "--max-chars",
        type=int,
        default=CRAWLER_CONFIG.get("max_content_chars", 8000),
        help="Max characters to return (default: from config.yaml)",
    )
    args = parser.parse_args()

    _log(f"Crawling: {args.url}")
    start = time.time()
    content = crawl_url(args.url, max_chars=args.max_chars)
    elapsed = time.time() - start

    if content:
        _log(f"Done in {elapsed:.1f}s — {len(content)} chars extracted")
        print("\n" + "=" * 60)
        print(content)
    else:
        _log(f"No content extracted (elapsed: {elapsed:.1f}s)")
        sys.exit(1)


if __name__ == "__main__":
    main()
