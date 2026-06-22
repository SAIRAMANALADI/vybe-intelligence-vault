#!/usr/bin/env python3
import os
import sys
import json
import time
import argparse
import urllib.request
import urllib.parse
import subprocess
from datetime import datetime
from pathlib import Path

# Try importing jsonschema, install dynamically if not present (helps in self-contained runs)
try:
    import jsonschema
except ImportError:
    print("Installing jsonschema dynamically...")
    subprocess.run([sys.executable, "-m", "pip", "install", "jsonschema"], check=True)
    import jsonschema

# Configuration
VAULT_ROOT = Path(__file__).resolve().parent.parent
INDEX_FILE = VAULT_ROOT / "vault-index.json"
SCHEMA_FILE = VAULT_ROOT / "scripts" / "llm_output_schema.json"

def log(msg):
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {msg}", flush=True)

def github_api_request(url, token=None, method="GET", data=None):
    """Make an authenticated request to the GitHub API."""
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "Vybe-Intelligence-Vault-Harvester"
    }
    if token:
        headers["Authorization"] = f"token {token}"
        
    req_data = None
    if data is not None:
        req_data = json.dumps(data).encode("utf-8")
        headers["Content-Type"] = "application/json"
        
    req = urllib.request.Request(url, headers=headers, method=method, data=req_data)
    
    attempts = 3
    for attempt in range(attempts):
        try:
            with urllib.request.urlopen(req) as resp:
                if resp.status in (200, 201, 204):
                    content = resp.read()
                    if content:
                        return json.loads(content.decode("utf-8"))
                    return {}
        except urllib.error.HTTPError as e:
            if e.code == 403 and "rate limit" in str(e.read()).lower():
                log("GitHub rate limit hit. Waiting 60 seconds...")
                time.sleep(60)
                continue
            log(f"HTTP Error {e.code} for URL {url}: {e.reason}")
            if attempt == attempts - 1:
                raise e
            time.sleep(2 ** attempt)
        except Exception as e:
            log(f"Connection error for URL {url}: {e}")
            if attempt == attempts - 1:
                raise e
            time.sleep(2 ** attempt)
    return None

def fetch_raw_readme(owner, repo, token=None):
    """Fetch raw README content from the GitHub repository."""
    url = f"https://api.github.com/repos/{owner}/{repo}/readme"
    headers = {
        "Accept": "application/vnd.github.raw+json",
        "User-Agent": "Vybe-Intelligence-Vault-Harvester"
    }
    if token:
        headers["Authorization"] = f"token {token}"
        
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.read().decode("utf-8", errors="ignore")
    except Exception as e:
        log(f"Failed to fetch README for {owner}/{repo}: {e}")
        return ""

def sanitize_markdown(content: str) -> str:
    """Sanitize markdown content to prevent basic XSS or script injections."""
    # Simple sanitization removing <script> and <iframe> elements
    import re
    content = re.sub(r"<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>", "", content, flags=re.IGNORECASE)
    content = re.sub(r"<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>", "", content, flags=re.IGNORECASE)
    # Strip dangerous HTML attributes
    content = re.sub(r"\bon[a-z]+\s*=\s*\"[^\"]*\"", "", content, flags=re.IGNORECASE)
    content = re.sub(r"\bon[a-z]+\s*=\s*'[^']*'", "", content, flags=re.IGNORECASE)
    return content

def query_llm(prompt, system_prompt):
    """Call the configured LLM API (OpenAI, Anthropic, Gemini, or Ollama) with retry logic."""
    provider = os.environ.get("LLM_PROVIDER", "openai").lower()
    
    openai_key = os.environ.get("OPENAI_API_KEY")
    anthropic_key = os.environ.get("ANTHROPIC_API_KEY")
    gemini_key = os.environ.get("GEMINI_API_KEY")
    ollama_endpoint = os.environ.get("OLLAMA_ENDPOINT", "http://localhost:11434")
    
    # Auto-detect Ollama if running on self-hosted runner and no external keys exist
    is_self_hosted = os.environ.get("GITHUB_RUNNER_IMAGE") is None
    if is_self_hosted and not any([openai_key, anthropic_key, gemini_key]):
        provider = "ollama"
        log("Self-hosted runner and no API keys detected. Defaulting to Ollama.")

    # Setup payload based on provider
    url = ""
    headers = {"Content-Type": "application/json"}
    payload = {}
    
    if provider == "openai":
        if not openai_key:
            raise ValueError("OPENAI_API_KEY environment variable is missing")
        url = "https://api.openai.com/v1/chat/completions"
        headers["Authorization"] = f"Bearer {openai_key}"
        payload = {
            "model": "gpt-4o",
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            "response_format": {"type": "json_object"},
            "temperature": 0.2
        }
    elif provider == "anthropic":
        if not anthropic_key:
            raise ValueError("ANTHROPIC_API_KEY environment variable is missing")
        url = "https://api.anthropic.com/v1/messages"
        headers["x-api-key"] = anthropic_key
        headers["anthropic-version"] = "2023-06-01"
        payload = {
            "model": "claude-3-5-sonnet-20241022",
            "max_tokens": 2048,
            "system": system_prompt,
            "messages": [
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.2
        }
    elif provider == "gemini":
        if not gemini_key:
            raise ValueError("GEMINI_API_KEY environment variable is missing")
        # Standard Gemini API v1beta generateContent endpoint
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={gemini_key}"
        payload = {
            "contents": [{
                "parts": [{"text": f"{system_prompt}\n\nUser Prompt:\n{prompt}"}]
            }],
            "generationConfig": {
                "responseMimeType": "application/json",
                "temperature": 0.2
            }
        }
    elif provider == "ollama":
        url = f"{ollama_endpoint}/v1/chat/completions"
        payload = {
            "model": "llama3",
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            "response_format": {"type": "json_object"},
            "temperature": 0.2
        }
    else:
        raise ValueError(f"Unknown LLM provider: {provider}")

    # Make HTTP Call with backoff retry
    attempts = 5
    for attempt in range(attempts):
        try:
            req_data = json.dumps(payload).encode("utf-8")
            req = urllib.request.Request(url, data=req_data, headers=headers, method="POST")
            with urllib.request.urlopen(req, timeout=60) as resp:
                res_content = json.loads(resp.read().decode("utf-8"))
                
                # Parse response structure based on provider
                if provider in ("openai", "ollama"):
                    raw_text = res_content["choices"][0]["message"]["content"]
                    tokens_used = res_content.get("usage", {}).get("total_tokens", 0)
                elif provider == "anthropic":
                    raw_text = res_content["content"][0]["text"]
                    tokens_used = res_content.get("usage", {}).get("input_tokens", 0) + res_content.get("usage", {}).get("output_tokens", 0)
                elif provider == "gemini":
                    raw_text = res_content["candidates"][0]["content"]["parts"][0]["text"]
                    tokens_used = 0 # Gemini API doesn't return usage cleanly here
                    
                return raw_text, tokens_used
        except Exception as e:
            log(f"LLM call failure ({provider}) on attempt {attempt + 1}: {e}")
            if attempt == attempts - 1:
                raise e
            time.sleep(2 ** (attempt + 1))
            
    return "", 0

def extract_and_validate_json(raw_text, schema):
    """Sanitize the LLM response fences, load it as JSON, and validate against schema."""
    text = raw_text.strip()
    if text.startswith("```json"):
        text = text[7:]
    elif text.startswith("```"):
        text = text[3:]
    if text.endswith("```"):
        text = text[:-3]
    text = text.strip()
    
    parsed = json.loads(text)
    jsonschema.validate(instance=parsed, schema=schema)
    return parsed

def get_already_indexed_repos():
    """Retrieve list of repositories already present in vault-index.json or search-index.json."""
    indexed = set()
    if INDEX_FILE.exists():
        try:
            with open(INDEX_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                if isinstance(data, list):
                    for r in data:
                        indexed.add(r.lower())
        except Exception as e:
            log(f"Failed to read {INDEX_FILE}: {e}")
            
    # Check search-index.json as fallback/cross-reference
    search_idx = VAULT_ROOT / "search-index.json"
    if search_idx.exists():
        try:
            with open(search_idx, "r", encoding="utf-8") as f:
                data = json.load(f)
                if isinstance(data, list):
                    for item in data:
                        path = item.get("local_path", "")
                        # github-repos/ai-repos/owner-repo.md => owner/repo
                        if path.startswith("github-repos/"):
                            parts = Path(path).stem.split("-")
                            if len(parts) >= 2:
                                repo_name = f"{parts[0]}/{parts[1]}"
                                indexed.add(repo_name.lower())
        except Exception as e:
            log(f"Failed to read search-index.json: {e}")
            
    return indexed

def save_indexed_repo(repo_name):
    """Add a repo to the vault-index.json file."""
    indexed = list(get_already_indexed_repos())
    if repo_name.lower() not in [r.lower() for r in indexed]:
        indexed.append(repo_name)
        with open(INDEX_FILE, "w", encoding="utf-8") as f:
            json.dump(indexed, f, indent=2)

def post_to_discord(webhook_url, repo_name, repo_url, score, relevance, summary, tech_stack):
    """Trigger immediate Discord alert for top-tier repositories."""
    payload = {
        "embeds": [{
            "title": f"🔥 High-Value Vault Harvester Find: {repo_name}",
            "url": repo_url,
            "color": 16738816, # Vibrant orange
            "description": summary,
            "fields": [
                {"name": "⭐ Quality Score", "value": f"{score}/10", "inline": True},
                {"name": "🧠 RAG Relevance", "value": f"{relevance}/10", "inline": True},
                {"name": "🛠️ Tech Stack", "value": ", ".join(tech_stack), "inline": False}
            ],
            "footer": {
                "text": f"Collected at {datetime.now().strftime('%Y-%m-%d %H:%M:%S IST')}"
            }
        }]
    }
    
    req_data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        webhook_url,
        data=req_data,
        headers={"Content-Type": "application/json", "User-Agent": "Vybe-Vault-Harvester"},
        method="POST"
    )
    try:
        with urllib.request.urlopen(req) as resp:
            if resp.status in (200, 204):
                log(f"Discord alert posted successfully for {repo_name}!")
    except Exception as e:
        log(f"Failed to post to Discord for {repo_name}: {e}")

# --- Modes implementation ---

def discover_mode(args):
    """Discover repositories matching configuring topics and filter already indexed ones."""
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("VAULT_GITHUB_TOKEN")
    indexed = get_already_indexed_repos()
    
    topics = [t.strip() for t in args.topics.split(",") if t.strip()]
    discovered = []
    
    for topic in topics:
        log(f"Searching GitHub for topic: {topic}...")
        escaped_topic = urllib.parse.quote(topic)
        url = f"https://api.github.com/search/repositories?q=topic:{escaped_topic}&sort=stars&order=desc&per_page=30"
        
        try:
            results = github_api_request(url, token=token)
            if results and "items" in results:
                for item in results["items"]:
                    full_name = item["full_name"]
                    if full_name.lower() in indexed:
                        continue
                    if full_name not in discovered:
                        discovered.append(full_name)
        except Exception as e:
            log(f"Error searching for topic {topic}: {e}")
            
    # Cap to max results requested
    final_repos = discovered[:args.max_repos]
    log(f"Discovered {len(final_repos)} new repositories after filtering indexed ones.")
    
    # Save target list to file and write to GITHUB_OUTPUT if present
    output_file = Path("discovered_repos.json")
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(final_repos, f, indent=2)
        
    if "GITHUB_OUTPUT" in os.environ:
        with open(os.environ["GITHUB_OUTPUT"], "a") as f:
            f.write(f"repos={json.dumps(final_repos)}\n")
            f.write(f"has_repos={'true' if final_repos else 'false'}\n")
            
    # Output to stdout for pipeline discovery parsing
    print(json.dumps(final_repos))

def evaluate_mode(args):
    """Fetch repo README/Metadata/Releases and run LLM evaluation."""
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("VAULT_GITHUB_TOKEN")
    repo = args.repo
    if "/" not in repo:
        log(f"Invalid repository format: {repo}")
        sys.exit(1)
        
    owner, repo_name = repo.split("/", 1)
    
    # Check cache first
    safe_name = f"{owner}-{repo_name}"
    cache_file = Path(f"evaluation-{safe_name}.json")
    if cache_file.exists() and not args.force:
        log(f"Cached evaluation found for {repo}. Skipping.")
        sys.exit(0)
        
    log(f"Evaluating repository: {repo}...")
    
    # 1. Fetch metadata
    meta_url = f"https://api.github.com/repos/{owner}/{repo_name}"
    meta = github_api_request(meta_url, token=token)
    if not meta:
        log(f"Could not retrieve metadata for {repo}")
        sys.exit(1)
        
    stars = meta.get("stargazers_count", 0)
    language = meta.get("language", "Unknown")
    updated_at = meta.get("updated_at", "")
    description = meta.get("description", "")
    
    # 2. Fetch README
    readme = fetch_raw_readme(owner, repo_name, token=token)
    
    # 3. Fetch Top 3 Releases
    releases_url = f"https://api.github.com/repos/{owner}/{repo_name}/releases?per_page=3"
    releases_data = []
    try:
        releases = github_api_request(releases_url, token=token)
        if releases:
            for r in releases:
                releases_data.append({
                    "name": r.get("name", "Unnamed Release"),
                    "tag_name": r.get("tag_name", ""),
                    "published_at": r.get("published_at", ""),
                    "body": r.get("body", "")[:2000] # Limit size
                })
    except Exception:
        log(f"Releases not available for {repo}.")

    # Load JSON Schema
    if not SCHEMA_FILE.exists():
        log(f"JSON Schema not found at {SCHEMA_FILE}. Creating default...")
        # Create it in case it was deleted
        schema = {
            "type": "object",
            "properties": {
                "summary": {"type": "string"},
                "tech_stack": {"type": "array", "items": {"type": "string"}},
                "category": {"type": "string", "enum": ["Vector DB", "Agent Framework", "UI Component", "SaaS Template", "Orchestrator", "Tooling"]},
                "quality_score": {"type": "integer", "minimum": 1, "maximum": 10},
                "rag_relevance": {"type": "integer", "minimum": 1, "maximum": 10},
                "tags": {"type": "array", "items": {"type": "string"}},
                "key_features": {"type": "array", "items": {"type": "string"}},
                "deployment_complexity": {"type": "string", "enum": ["Low", "Medium", "High"]}
            },
            "required": ["summary", "tech_stack", "category", "quality_score", "rag_relevance", "tags", "key_features", "deployment_complexity"]
        }
    else:
        with open(SCHEMA_FILE, "r", encoding="utf-8") as sf:
            schema = json.load(sf)

    # 4. Construct Prompt
    system_prompt = (
        "You are an expert AI software architect auditing GitHub repositories.\n"
        "You must analyze the provided repository details and return a strictly formatted JSON object.\n"
        "Do not include any conversational text, markdown formatting code fences outside of raw JSON, or trailing explanations.\n"
        "The output must strictly conform to this JSON Schema:\n" + json.dumps(schema, indent=2)
    )
    
    truncated_readme = readme[:12000] if readme else ""
    user_prompt = (
        f"REPOSITORY: {owner}/{repo_name}\n"
        f"STARS: {stars}\n"
        f"PRIMARY LANGUAGE: {language}\n"
        f"DESCRIPTION: {description}\n"
        f"LAST UPDATED: {updated_at}\n\n"
        f"RELEASES NOTES:\n{json.dumps(releases_data, indent=2)}\n\n"
        f"README MD CONTENT (TRUNCATED):\n{truncated_readme}\n\n"
        "Perform a thorough technical evaluation. Focus on accuracy when listing tech_stack, category, tags, and features."
    )
    
    # Call LLM
    start_time = time.time()
    try:
        raw_text, tokens = query_llm(user_prompt, system_prompt)
        eval_data = extract_and_validate_json(raw_text, schema)
    except Exception as e:
        log(f"Evaluation failed for {repo}: {e}")
        # Write error to output for tracking
        error_file = Path(f"error-{safe_name}.json")
        error_file.write_text(json.dumps({"repo": repo, "error": str(e)}))
        sys.exit(1)
        
    duration = time.time() - start_time
    
    # Store complete evaluation structure
    result = {
        "repo_name": repo,
        "repo_url": f"https://github.com/{repo}",
        "stars": stars,
        "language": language,
        "last_updated": updated_at,
        "evaluation": eval_data,
        "tokens_used": tokens,
        "processing_time": duration,
        "collected_at": datetime.now().strftime('%Y-%m-%dT%H:%M:%SZ')
    }
    
    # Write to local cache
    with open(cache_file, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2)
        
    log(f"Evaluation succeeded for {repo}. Saved to {cache_file}.")

def generate_mode(args):
    """Aggregate evaluations, generate markdown daily-digest, handle PR gating, notify Discord, write report."""
    eval_files = list(Path(".").glob("evaluation-*.json"))
    if not eval_files:
        log("No evaluation files found. Nothing to generate.")
        sys.exit(0)
        
    log(f"Processing {len(eval_files)} evaluation files...")
    
    today_str = datetime.now().strftime("%Y-%m-%d")
    digest_dir = VAULT_ROOT / "daily-digests" / today_str
    digest_dir.mkdir(parents=True, exist_ok=True)
    
    webhook_url = os.environ.get("DISCORD_WEBHOOK_URL")
    github_token = os.environ.get("GITHUB_TOKEN") or os.environ.get("VAULT_GITHUB_TOKEN")
    
    # Metrics
    processed_repos = []
    tokens_total = 0
    scores_sum = 0
    pr_repos = []
    direct_repos = []
    
    for ef in eval_files:
        try:
            with open(ef, "r", encoding="utf-8") as f:
                data = json.load(f)
                
            repo = data["repo_name"]
            owner, repo_name = repo.split("/", 1)
            eval_info = data["evaluation"]
            
            quality = eval_info["quality_score"]
            rag_relevance = eval_info["rag_relevance"]
            
            # Generate markdown digest entry
            md_content = f"""---
title: "{repo}"
repo_url: "{data['repo_url']}"
stars: {data['stars']}
language: "{data['language']}"
last_updated: "{data['last_updated']}"
tech_stack:
{chr(10).join(f'  - "{t}"' for t in eval_info['tech_stack'])}
category: "{eval_info['category']}"
quality_score: {quality}
rag_relevance: {rag_relevance}
tags:
{chr(10).join(f'  - "{t}"' for t in eval_info['tags'])}
key_features:
{chr(10).join(f'  - "{f}"' for f in eval_info['key_features'])}
deployment_complexity: "{eval_info['deployment_complexity']}"
collected_at: "{data['collected_at']}"
---

# {repo}

## Summary
{sanitize_markdown(eval_info['summary'])}

## Why It Matters
This repository provides essential functionality classified under **{eval_info['category']}**. With a quality rating of **{quality}/10** and a RAG relevance score of **{rag_relevance}/10**, it serves as a valuable asset for developers constructing agentic and modular AI systems.

## Key Features
{chr(10).join(f'- **Feature {i+1}**: {sanitize_markdown(feat)}' for i, feat in enumerate(eval_info['key_features']))}

## Deployment Complexity
Rating: **{eval_info['deployment_complexity']}**
"""
            # Sanitized file name
            safe_filename = f"{repo_name.lower().replace('.', '_')}.md"
            target_md_path = digest_dir / safe_filename
            
            # Determine gating
            if quality < 5:
                # Review Gated: create separate PR branch
                log(f"Repo {repo} has low quality score ({quality} < 5). Gated for human review.")
                pr_repos.append((repo, md_content, safe_filename))
            else:
                # Direct commit to main
                target_md_path.write_text(md_content, encoding="utf-8")
                save_indexed_repo(repo)
                direct_repos.append(repo)
                
            # Discord Notification alert for high-value
            if quality >= 8 and rag_relevance >= 8 and webhook_url:
                post_to_discord(
                    webhook_url=webhook_url,
                    repo_name=repo,
                    repo_url=data["repo_url"],
                    score=quality,
                    relevance=rag_relevance,
                    summary=eval_info["summary"],
                    tech_stack=eval_info["tech_stack"]
                )
                
            processed_repos.append(repo)
            tokens_total += data.get("tokens_used", 0)
            scores_sum += quality
            
        except Exception as e:
            log(f"Error processing evaluation file {ef}: {e}")
            
    # Handle PR Gating commits & Pull Requests
    if pr_repos and github_token:
        for repo, md_content, filename in pr_repos:
            try:
                owner, repo_name = repo.split("/", 1)
                branch_name = f"review/{owner}-{repo_name}"
                log(f"Creating review branch {branch_name} for {repo}...")
                
                # Git workflow commands via subprocess
                subprocess.run(["git", "checkout", "-b", branch_name], check=True)
                
                # Write file in the branch
                review_file = digest_dir / filename
                review_file.write_text(md_content, encoding="utf-8")
                
                # Add and commit
                subprocess.run(["git", "add", str(review_file)], check=True)
                subprocess.run(["git", "commit", "-m", f"docs(digest): add {repo} for review (score < 5)"], check=True)
                
                # Push branch
                subprocess.run(["git", "push", "origin", branch_name, "--force"], check=True)
                
                # Submit Pull Request via GitHub API
                pr_url = f"https://api.github.com/repos/{args.github_repository}/pulls"
                pr_payload = {
                    "title": f"🔍 Vault Review: {repo} (Quality Score < 5)",
                    "head": branch_name,
                    "base": "main",
                    "body": (
                        f"This repository was harvested by the automated pipeline but received a quality score of "
                        f"less than 5. A human review is required before merging into the main intelligence vault.\n\n"
                        f"### Repository Details:\n"
                        f"- **Name**: [{repo}](https://github.com/{repo})\n"
                        f"- **Digest File**: `daily-digests/{today_str}/{filename}`\n"
                    )
                }
                
                log(f"Opening Pull Request for branch {branch_name}...")
                github_api_request(pr_url, token=github_token, method="POST", data=pr_payload)
                
                # Return to main branch
                subprocess.run(["git", "checkout", "main"], check=True)
            except Exception as e:
                log(f"Failed to create review PR for {repo}: {e}")
                # Revert to main if errored
                subprocess.run(["git", "checkout", "main"], check=True)
                
    # Observability: Write reports
    avg_score = (scores_sum / len(processed_repos)) if processed_repos else 0
    report = {
        "date": today_str,
        "repos_discovered": len(eval_files),
        "repos_processed": processed_repos,
        "direct_commits": direct_repos,
        "gated_reviews": [p[0] for p in pr_repos],
        "total_tokens_used": tokens_total,
        "avg_quality_score": avg_score
    }
    
    with open(VAULT_ROOT / "harvester-report.json", "w", encoding="utf-8") as rf:
        json.dump(report, rf, indent=2)
        
    # Write Step Summary
    summary_md = f"""### Vault Harvester Execution Summary
- **Date**: {today_str}
- **Total Repos Evaluated**: {len(processed_repos)}
- **Directly Merged**: {len(direct_repos)}
- **Gated for Review (PRs opened)**: {len(pr_repos)}
- **LLM Tokens Consumed**: {tokens_total}
- **Average Quality Score**: {avg_score:.2f}/10
"""
    if "GITHUB_STEP_SUMMARY" in os.environ:
        with open(os.environ["GITHUB_STEP_SUMMARY"], "w", encoding="utf-8") as f:
            f.write(summary_md)
            
    print(summary_md)

def main():
    parser = argparse.ArgumentParser(description="Vybe Vault LLM Harvester Script")
    parser.add_argument("--mode", choices=["discover", "evaluate", "generate"], required=True)
    parser.add_argument("--topics", default="ai-agent,mcp-server,rag-stack", help="Comma-separated topics for discovery")
    parser.add_argument("--max-repos", type=int, default=5, help="Max repos to discover")
    parser.add_argument("--repo", help="Target repository for evaluation (owner/repo)")
    parser.add_argument("--force", action="store_true", help="Force re-evaluation ignoring cache")
    parser.add_argument("--github-repository", default=os.environ.get("GITHUB_REPOSITORY", ""), help="Target vault github repository (owner/repo)")
    
    args = parser.parse_args()
    
    if args.mode == "discover":
        discover_mode(args)
    elif args.mode == "evaluate":
        if not args.repo:
            parser.error("--repo is required in evaluate mode")
        evaluate_mode(args)
    elif args.mode == "generate":
        generate_mode(args)

if __name__ == "__main__":
    main()
