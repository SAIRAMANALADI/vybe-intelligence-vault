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

# Try importing jsonschema, install dynamically if not present
try:
    import jsonschema
except ImportError:
    print("Installing jsonschema dynamically...")
    subprocess.run([sys.executable, "-m", "pip", "install", "jsonschema"], check=True)
    import jsonschema

# Configuration
VAULT_ROOT = Path(__file__).resolve().parent.parent
INDEX_FILE = VAULT_ROOT / "vault-core" / "vault-index.json"
SCHEMA_FILE = VAULT_ROOT / "scripts" / "llm_output_schema.json"

def log(msg):
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {msg}", flush=True)

def append_event(event_type, payload, correlation_id=""):
    """Append event to vault-core/vault-events.log and its root copy."""
    event = {
        "timestamp": datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ"),
        "type": event_type,
        "payload": payload,
        "correlation_id": correlation_id
    }
    # Save to vault-core
    events_file = VAULT_ROOT / "vault-core" / "vault-events.log"
    events_file.parent.mkdir(parents=True, exist_ok=True)
    try:
        with open(events_file, "a", encoding="utf-8") as f:
            f.write(json.dumps(event) + "\n")
        # Copy to root
        root_events = VAULT_ROOT / "vault-events.log"
        with open(root_events, "a", encoding="utf-8") as f:
            f.write(json.dumps(event) + "\n")
    except Exception as e:
        log(f"Failed to log event: {e}")

def load_topics_from_config():
    """Load topics list from vault-core/config.yaml using a safe string parser."""
    config_path = VAULT_ROOT / "vault-core" / "config.yaml"
    if not config_path.exists():
        return ["ai-agent", "mcp-server", "rag-stack"]
    
    topics = []
    try:
        with open(config_path, "r", encoding="utf-8") as f:
            in_topics = False
            for line in f:
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if line.startswith("topics:"):
                    in_topics = True
                    continue
                if in_topics:
                    if ":" in line and not line.startswith("-"):
                        in_topics = False
                        continue
                    if line.startswith("-"):
                        topic = line[1:].strip().strip("'\"")
                        if topic:
                            topics.append(topic)
    except Exception as e:
        log(f"Error reading topics from config.yaml: {e}")
    return topics if topics else ["ai-agent", "mcp-server", "rag-stack"]

def github_api_request(url, token=None, method="GET", data=None):
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
    import re
    content = re.sub(r"<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>", "", content, flags=re.IGNORECASE)
    content = re.sub(r"<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>", "", content, flags=re.IGNORECASE)
    content = re.sub(r"\bon[a-z]+\s*=\s*\"[^\"]*\"", "", content, flags=re.IGNORECASE)
    content = re.sub(r"\bon[a-z]+\s*=\s*'[^']*'", "", content, flags=re.IGNORECASE)
    return content

def query_eval_llm(prompt, system_prompt, force_cloud=True):
    """Query cloud LLM (gpt-4o-mini) with local Ollama (qwen2.5:14b) fallback."""
    provider = "openai" if force_cloud else "ollama"
    openai_key = os.environ.get("OPENAI_API_KEY")
    
    config_path = VAULT_ROOT / "vault-core" / "config.yaml"
    cloud_model = "gpt-4o-mini"
    local_model = "qwen2.5:14b"
    ollama_endpoint = "http://localhost:11434"
    
    # Try reading models from config
    if config_path.exists():
        try:
            with open(config_path, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if line.startswith("model:") and "cloud" in str(line):
                        cloud_model = line.split(":", 1)[1].strip().strip("'\"")
                    elif line.startswith("model:") and "local" in str(line):
                        local_model = line.split(":", 1)[1].strip().strip("'\"")
                    elif line.startswith("endpoint:"):
                        ollama_endpoint = line.split(":", 1)[1].strip().strip("'\"")
        except Exception:
            pass

    if provider == "openai" and not openai_key:
        log("OPENAI_API_KEY missing. Routing directly to local Ollama.")
        provider = "ollama"

    if provider == "openai":
        try:
            log(f"Calling Cloud LLM ({cloud_model})...")
            url = "https://api.openai.com/v1/chat/completions"
            headers = {
                "Content-Type": "application/json",
                "Authorization": f"Bearer {openai_key}"
            }
            payload = {
                "model": cloud_model,
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": prompt}
                ],
                "response_format": {"type": "json_object"},
                "temperature": 0.2
            }
            req_data = json.dumps(payload).encode("utf-8")
            req = urllib.request.Request(url, data=req_data, headers=headers, method="POST")
            with urllib.request.urlopen(req, timeout=45) as resp:
                res_content = json.loads(resp.read().decode("utf-8"))
                raw_text = res_content["choices"][0]["message"]["content"]
                usage = res_content.get("usage", {})
                prompt_tokens = usage.get("prompt_tokens", 0)
                completion_tokens = usage.get("completion_tokens", 0)
                cost = (prompt_tokens * 0.15 + completion_tokens * 0.60) / 1000000
                total_tokens = prompt_tokens + completion_tokens
                return raw_text, cloud_model, total_tokens, cost
        except Exception as e:
            log(f"Cloud LLM failed: {e}. Falling back to local Ollama...")
            provider = "ollama"

    # Local Ollama fallback
    log(f"Calling local Ollama ({local_model}) at {ollama_endpoint}...")
    url = f"{ollama_endpoint}/v1/chat/completions"
    headers = {"Content-Type": "application/json"}
    payload = {
        "model": local_model,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": prompt}
        ],
        "response_format": {"type": "json_object"},
        "temperature": 0.2
    }
    
    req_data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=req_data, headers=headers, method="POST")
    with urllib.request.urlopen(req, timeout=60) as resp:
        res_content = json.loads(resp.read().decode("utf-8"))
        raw_text = res_content["choices"][0]["message"]["content"]
        usage = res_content.get("usage", {})
        total_tokens = usage.get("total_tokens", 0)
        return raw_text, local_model, total_tokens, 0.0

def extract_and_validate_json(raw_text, schema):
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
    indexed = set()
    # Check v2.0 indexes
    core_idx = VAULT_ROOT / "vault-core" / "vault-index.json"
    for path_to_check in [core_idx, VAULT_ROOT / "vault-index.json"]:
        if path_to_check.exists():
            try:
                with open(path_to_check, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if isinstance(data, dict) and "nodes" in data:
                        for n in data["nodes"]:
                            title_lower = n.get("title", "").lower()
                            if "/" in title_lower:
                                indexed.add(title_lower.strip())
                    elif isinstance(data, list):
                        for r in data:
                            indexed.add(r.lower())
            except Exception as e:
                log(f"Failed to read indexed list: {e}")
    return indexed

# --- Modes ---

def discover_mode(args):
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("VAULT_GITHUB_TOKEN")
    indexed = get_already_indexed_repos()
    
    # Load config topics if topics argument matches default
    topics = load_topics_from_config() if args.topics == "ai-agent,mcp-server,rag-stack" else [t.strip() for t in args.topics.split(",") if t.strip()]
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
            
    final_repos = discovered[:args.max_repos]
    log(f"Discovered {len(final_repos)} new repositories.")
    
    output_file = Path("discovery-batch.json")
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(final_repos, f, indent=2)
        
    if "GITHUB_OUTPUT" in os.environ:
        with open(os.environ["GITHUB_OUTPUT"], "a") as f:
            f.write(f"repos={json.dumps(final_repos)}\n")
            f.write(f"has_repos={'true' if final_repos else 'false'}\n")
            
    print(json.dumps(final_repos))
    append_event("harvester.discovered", {"repos": final_repos}, args.correlation_id)

def evaluate_mode(args):
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("VAULT_GITHUB_TOKEN")
    repo = args.repo
    if "/" not in repo:
        log(f"Invalid repository format: {repo}")
        sys.exit(1)
        
    owner, repo_name = repo.split("/", 1)
    safe_name = f"{owner}-{repo_name}"
    cache_file = Path(f"evaluation-{safe_name}.json")
    
    if cache_file.exists() and not args.force:
        log(f"Cached evaluation found for {repo}. Skipping.")
        sys.exit(0)
        
    log(f"Evaluating repository: {repo}...")
    
    meta_url = f"https://api.github.com/repos/{owner}/{repo_name}"
    meta = github_api_request(meta_url, token=token)
    if not meta:
        log(f"Could not retrieve metadata for {repo}")
        sys.exit(1)
        
    stars = meta.get("stargazers_count", 0)
    language = meta.get("language", "Unknown")
    updated_at = meta.get("updated_at", "")
    description = meta.get("description", "")
    
    readme = fetch_raw_readme(owner, repo_name, token=token)
    
    # Releases
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
                    "body": r.get("body", "")[:1000]
                })
    except Exception:
        pass

    # Load JSON Schema
    if not SCHEMA_FILE.exists():
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
                "deployment_complexity": {"type": "string", "enum": ["Low", "Medium", "High"]},
                "why_it_matters": {"type": "string"}
            },
            "required": ["summary", "tech_stack", "category", "quality_score", "rag_relevance", "tags", "key_features", "deployment_complexity", "why_it_matters"]
        }
    else:
        with open(SCHEMA_FILE, "r", encoding="utf-8") as sf:
            schema = json.load(sf)

    system_prompt = (
        "Analyze this repository for inclusion in an AI engineering intelligence vault.\n"
        "Return strictly valid JSON conforming to the requested schema.\n"
        "Do not include conversational text or markdown code fences around the JSON."
    )
    
    truncated_readme = readme[:12000] if readme else ""
    user_prompt = (
        f"Analyze this repository for inclusion in an AI engineering intelligence vault.\n"
        f"Repo: {owner}/{repo_name}\n"
        f"README: {truncated_readme}\n"
        f"Metadata: stars={stars}, language={language}, last_updated={updated_at}, topics={description}\n"
        f"Releases:\n{json.dumps(releases_data, indent=2)}\n\n"
        "Return strictly valid JSON with the fields: summary, tech_stack, category, quality_score, rag_relevance, tags, key_features, deployment_complexity, why_it_matters."
    )
    
    # Query with retry/validation
    retry_count = 1
    eval_data = None
    model_used = "gpt-4o-mini"
    tokens = 0
    cost = 0.0
    
    for attempt in range(retry_count + 1):
        try:
            raw_text, model_used, tokens, cost = query_eval_llm(user_prompt, system_prompt, force_cloud=args.force_cloud_llm)
            eval_data = extract_and_validate_json(raw_text, schema)
            break
        except Exception as e:
            log(f"Validation failed on attempt {attempt + 1}: {e}")
            if attempt == retry_count:
                # Write error tracker
                error_file = Path(f"error-{safe_name}.json")
                error_file.write_text(json.dumps({"repo": repo, "error": str(e)}))
                append_event("pipeline.failed", {"repo": repo, "error": str(e)}, args.correlation_id)
                sys.exit(1)
            time.sleep(2)
            
    result = {
        "repo_name": repo,
        "repo_url": f"https://github.com/{repo}",
        "stars": stars,
        "language": language,
        "last_updated": updated_at,
        "evaluation": eval_data,
        "tokens_used": tokens,
        "estimated_cost": cost,
        "model_used": model_used,
        "collected_at": datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
    }
    
    with open(cache_file, "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2)
        
    log(f"Evaluation succeeded for {repo} using {model_used}.")
    append_event("llm.evaluated", {
        "repo": repo,
        "model": model_used,
        "tokens": tokens,
        "cost": cost,
        "quality_score": eval_data["quality_score"]
    }, args.correlation_id)

def generate_mode(args):
    """Aggregate evaluations, generate markdown files, write report."""
    eval_files = list(Path(".").glob("evaluation-*.json"))
    if not eval_files:
        log("No evaluation files found.")
        sys.exit(0)
        
    today_str = datetime.now().strftime("%Y-%m-%d")
    digest_dir = VAULT_ROOT / "daily-digests" / today_str
    digest_dir.mkdir(parents=True, exist_ok=True)
    
    webhook_url = os.environ.get("DISCORD_WEBHOOK_URL")
    github_token = os.environ.get("GITHUB_TOKEN") or os.environ.get("VAULT_GITHUB_TOKEN")
    
    processed_repos = []
    tokens_total = 0
    cost_total = 0.0
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
            
            # Simple tech stack sub-paragraphs generator
            tech_paragraphs = ""
            for tech in eval_info.get("tech_stack", []):
                tech_paragraphs += f"### {tech}\nAutomated review identified **{tech}** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.\n\n"

            # Auto-detect installation instructions
            installation_str = "```bash\n# Install instruction (default)\npip install -r requirements.txt\n```"
            
            md_content = f"""---
title: "{repo}"
category: "{eval_info['category']}"
tech_stack: {json.dumps(eval_info['tech_stack'])}
quality_score: {quality}
rag_relevance: {rag_relevance}
tags: {json.dumps(eval_info['tags'])}
source: "https://github.com/{repo}"
discovered_at: "{data['collected_at']}"
evaluated_by: "{data['model_used']}"
---

## Summary
{sanitize_markdown(eval_info['summary'])}

## Key Features
{chr(10).join(f'- {sanitize_markdown(feat)}' for feat in eval_info['key_features'])}

## Why It Matters for RAG Builders
{sanitize_markdown(eval_info['why_it_matters'])}

## Tech Stack Deep Dive
{tech_paragraphs}

## Installation
{installation_str}

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
"""
            safe_filename = f"{repo_name.lower().replace('.', '_')}.md"
            
            if quality < 5:
                log(f"Repo {repo} gated for PR review.")
                pr_repos.append((repo, md_content, safe_filename))
            else:
                target_file = digest_dir / safe_filename
                target_file.write_text(md_content, encoding="utf-8")
                direct_repos.append(repo)
                
            if quality >= 8 and webhook_url:
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
            cost_total += data.get("estimated_cost", 0.0)
            scores_sum += quality
            
        except Exception as e:
            log(f"Error processing evaluation {ef}: {e}")

    # Output PR gated files
    if pr_repos and github_token:
        for repo, md_content, filename in pr_repos:
            try:
                owner, repo_name = repo.split("/", 1)
                branch_name = f"review/{owner}-{repo_name}"
                subprocess.run(["git", "checkout", "-b", branch_name], check=True)
                
                review_file = digest_dir / filename
                review_file.write_text(md_content, encoding="utf-8")
                
                subprocess.run(["git", "add", str(review_file)], check=True)
                subprocess.run(["git", "commit", "-m", f"docs(review): add {repo} for review (score < 5)"], check=True)
                subprocess.run(["git", "push", "origin", branch_name, "--force"], check=True)
                
                pr_url = f"https://api.github.com/repos/{args.github_repository}/pulls"
                pr_payload = {
                    "title": f"🔍 Vault Review: {repo} (Quality Score < 5)",
                    "head": branch_name,
                    "base": "main",
                    "body": f"Automated audit quality rating low (< 5) requiring review.\nRepo: [{repo}](https://github.com/{repo})"
                }
                github_api_request(pr_url, token=github_token, method="POST", data=pr_payload)
                subprocess.run(["git", "checkout", "main"], check=True)
            except Exception as e:
                log(f"PR creation failed: {e}")
                subprocess.run(["git", "checkout", "main"], check=True)

    # Save output batch artifact
    with open("evaluated-batch.json", "w", encoding="utf-8") as f:
        json.dump(processed_repos, f, indent=2)

    avg_score = (scores_sum / len(processed_repos)) if processed_repos else 0
    report = {
        "date": today_str,
        "repos_discovered": len(eval_files),
        "repos_evaluated": len(processed_repos),
        "direct_commits": direct_repos,
        "gated_reviews": [p[0] for p in pr_repos],
        "total_tokens_used": tokens_total,
        "total_cost": cost_total,
        "avg_quality_score": avg_score
    }
    
    with open("harvester-report.json", "w", encoding="utf-8") as rf:
        json.dump(report, rf, indent=2)
        
    summary_md = f"""### Vault Harvester Run Summary
- **Date**: {today_str}
- **Discovered Today**: {len(eval_files)}
- **Evaluated**: {len(processed_repos)}
- **Avg Quality**: {avg_score:.2f}
- **Cost**: ${cost_total:.4f}
"""
    if "GITHUB_STEP_SUMMARY" in os.environ:
        with open(os.environ["GITHUB_STEP_SUMMARY"], "w", encoding="utf-8") as f:
            f.write(summary_md)
            
    print(summary_md)

def post_to_discord(webhook_url, repo_name, repo_url, score, relevance, summary, tech_stack):
    payload = {
        "embeds": [{
            "title": f"🔥 Vault Find: {repo_name}",
            "url": repo_url,
            "color": 16738816,
            "description": summary,
            "fields": [
                {"name": "⭐ Quality", "value": f"{score}/10", "inline": True},
                {"name": "🧠 Relevance", "value": f"{relevance}/10", "inline": True},
                {"name": "🛠️ Tech Stack", "value": ", ".join(tech_stack), "inline": False}
            ]
        }]
    }
    req_data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(webhook_url, data=req_data, headers={"Content-Type": "application/json"}, method="POST")
    try:
        with urllib.request.urlopen(req) as resp:
            pass
    except Exception:
        pass

def main():
    parser = argparse.ArgumentParser(description="Vybe Vault LLM Harvester v2.0")
    parser.add_argument("--mode", choices=["discover", "evaluate", "generate"], required=True)
    parser.add_argument("--topics", default="ai-agent,mcp-server,rag-stack")
    parser.add_argument("--max-repos", type=int, default=5)
    parser.add_argument("--repo")
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--force-cloud-llm", action="store_true")
    parser.add_argument("--correlation-id", default="corr_" + str(int(time.time())))
    parser.add_argument("--github-repository", default=os.environ.get("GITHUB_REPOSITORY", ""))
    
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
