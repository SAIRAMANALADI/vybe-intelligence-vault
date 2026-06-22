import os
import re
import sys
import json
import logging
from pathlib import Path
from typing import Optional
import yaml
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse

# Setup logger to write to stderr so stdio channel is not corrupted
logging.basicConfig(
    level=logging.INFO,
    stream=sys.stderr,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("mcp-vault-server")

# Try importing FastMCP from mcp or fastmcp
try:
    from mcp.server.fastmcp import FastMCP
except ImportError:
    try:
        from fastmcp import FastMCP
    except ImportError:
        logger.error("FastMCP could not be imported. Please install mcp[cli] or fastmcp.")
        sys.exit(1)

# Paths configuration
VAULT_ROOT = Path(os.environ.get("VAULT_PATH", Path(__file__).resolve().parent.parent.parent)).resolve()
SKILLS_DIR = VAULT_ROOT / "skills"

logger.info(f"Initializing MCP Server. Resolved Vault Root: {VAULT_ROOT}")

# Path Traversal Security Verification
def is_safe_path(target_path: Path) -> bool:
    try:
        target_path = target_path.resolve()
        return VAULT_ROOT in target_path.parents or target_path == VAULT_ROOT
    except Exception:
        return False

# Starlette Token Authentication Middleware for HTTP/SSE
class TokenAuthMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, token: str):
        super().__init__(app)
        self.token = token

    async def dispatch(self, request, call_next):
        path = request.url.path
        if path.startswith("/sse") or path.startswith("/messages"):
            auth_header = request.headers.get("Authorization")
            expected_auth = f"Bearer {self.token}"
            query_token = request.query_params.get("token")
            
            if auth_header != expected_auth and query_token != self.token:
                return JSONResponse(
                    {"error": "Unauthorized", "message": "Invalid or missing access token"},
                    status_code=401
                )
        return await call_next(request)

# Initialize the FastMCP app
mcp = FastMCP(
    "Vybe Intelligence Vault",
    instructions="Vybe Intelligence Vault MCP Server. Access resources (crawled items and skills), tools (vault_search), and dynamic prompts."
)

# --- 1. Resources ---

@mcp.resource("vault://{path}")
def read_vault_resource(path: str) -> str:
    """Read a markdown file or document from the vault by its relative path (e.g. skills/rag.md)."""
    normalized_path = path.replace("\\", "/")
    target_path = (VAULT_ROOT / normalized_path).resolve()
    
    if not is_safe_path(target_path):
        raise ValueError(f"Security Access Denied: Path '{path}' is outside the vault boundaries.")
        
    if not target_path.exists():
        raise FileNotFoundError(f"File not found: {path}")
        
    if not target_path.is_file():
        raise ValueError(f"Path is a directory, not a file: {path}")
        
    content = target_path.read_text(encoding="utf-8")
    
    # Simple chunking if contents are extremely large (e.g., > 100KB)
    # Most files in vault are short. If over 100KB, return a truncation warning
    if len(content) > 100000:
        logger.warning(f"File {path} is very large ({len(content)} characters). Returning truncated content.")
        return content[:100000] + "\n\n... [TRUNCATED BY MCP SERVER FOR CONTEXT SIZE] ..."
        
    return content

@mcp.resource("vault://search-index.json", description="The master search index cataloging all intelligence vault resources.")
def get_search_index() -> str:
    """Returns the search-index.json file contents."""
    path = VAULT_ROOT / "search-index.json"
    if path.exists():
        return path.read_text(encoding="utf-8")
    return "[]"

@mcp.resource("vault://CHANGELOG.md", description="The weekly change history of additions and upgrades in the vault.")
def get_changelog() -> str:
    """Returns the CHANGELOG.md file contents."""
    path = VAULT_ROOT / "CHANGELOG.md"
    if path.exists():
        return path.read_text(encoding="utf-8")
    return "# Changelog not found"

def register_static_skill_resources():
    if not SKILLS_DIR.exists():
        return
    for filepath in SKILLS_DIR.glob("*.md"):
        rel_path = filepath.relative_to(VAULT_ROOT).as_posix()
        uri = f"vault://{rel_path}"
        name = f"Skill: {filepath.stem.replace('-', ' ').title()}"
        
        def make_reader(path):
            def reader():
                return path.read_text(encoding="utf-8")
            reader.__name__ = f"read_skill_{path.stem.replace('-', '_')}"
            return reader
            
        mcp.resource(
            uri, 
            title=name, 
            description=f"Direct guide and signals list for the {filepath.stem} skill."
        )(make_reader(filepath))
        logger.info(f"Registered static resource: {uri}")

register_static_skill_resources()

# --- 2. Tools ---

def parse_markdown_metadata(filepath: Path) -> Optional[dict]:
    try:
        content = filepath.read_text(encoding="utf-8")
        title = filepath.stem.replace("-", " ").title()
        summary = ""
        tags = []
        
        if content.startswith("---"):
            parts = content.split("---", 2)
            if len(parts) >= 3:
                meta = yaml.safe_load(parts[1]) or {}
                title = meta.get("title", title)
                tags = meta.get("tags", [])
                summary = meta.get("summary", "")
                body = parts[2]
            else:
                body = content
        else:
            body = content
            
        if not summary:
            lines = [l.strip() for l in body.strip().split("\n") if l.strip() and not l.strip().startswith("#")]
            summary = " ".join(lines[:3])[:200]
            
        return {
            "title": title,
            "local_path": filepath.relative_to(VAULT_ROOT).as_posix(),
            "summary": summary,
            "tags": tags,
            "content": body
        }
    except Exception as e:
        logger.error(f"Error parsing metadata for {filepath}: {e}")
        return None

def scan_directories_for_search() -> list:
    candidates = []
    dirs_to_scan = ["skills", "maps", "daily-digests", "build-ideas", "learning-paths", "reports"]
    for dir_name in dirs_to_scan:
        dir_path = VAULT_ROOT / dir_name
        if not dir_path.exists():
            continue
        for filepath in dir_path.rglob("*.md"):
            if filepath.name.lower() == "readme.md":
                continue
            meta = parse_markdown_metadata(filepath)
            if meta:
                candidates.append(meta)
    return candidates

@mcp.tool()
def vault_search(query: str, category: Optional[str] = None, max_results: int = 5) -> str:
    """
    Perform a keyword search across the Vybe Intelligence Vault resources.
    
    Args:
        query: The search term or keyword (e.g. 'RAG', 'Swarm', 'Agent').
        category: Optional category filter. Choose from: 'maps', 'skills', 'daily-digests', 'ai', 'web-development'.
        max_results: The maximum number of results to return (default is 5).
    """
    candidates = []
    
    # Load from index
    index_path = VAULT_ROOT / "search-index.json"
    if index_path.exists():
        try:
            with open(index_path, "r", encoding="utf-8") as f:
                index_data = json.load(f)
                for item in index_data:
                    candidates.append({
                        "title": item.get("title", ""),
                        "local_path": item.get("local_path", ""),
                        "summary": item.get("summary", ""),
                        "tags": item.get("tags", []),
                        "content": ""
                    })
        except Exception as e:
            logger.error(f"Failed to load search-index.json: {e}")
            
    # Load other folders
    candidates.extend(scan_directories_for_search())
    
    query_lower = query.lower()
    results = []
    
    for item in candidates:
        local_path = item["local_path"]
        
        # Apply category filters
        if category:
            cat_lower = category.lower()
            if cat_lower == "maps" and not local_path.startswith("maps/"):
                continue
            elif cat_lower == "skills" and not local_path.startswith("skills/"):
                continue
            elif cat_lower == "daily-digests" and not (local_path.startswith("daily-digests/") or local_path.startswith("weekly-reports/") or local_path.startswith("change-log/")):
                continue
            elif cat_lower == "ai" and not (local_path.startswith("ai/") or "agent" in local_path or "rag" in local_path or "vector" in local_path):
                continue
            elif cat_lower == "web-development" and not local_path.startswith("web-development/"):
                continue
                
        score = 0
        title_lower = item["title"].lower()
        summary_lower = item["summary"].lower()
        tags_lower = [t.lower() for t in item["tags"]]
        content_lower = item.get("content", "").lower()
        
        if query_lower == title_lower:
            score += 100
        elif query_lower in title_lower:
            score += 50
            
        if any(query_lower == t for t in tags_lower):
            score += 40
        elif any(query_lower in t for t in tags_lower):
            score += 20
            
        if query_lower in summary_lower:
            score += 20
            
        if query_lower in content_lower:
            score += 10
            
        if score > 0:
            results.append({
                "title": item["title"],
                "file_path": local_path,
                "summary": item["summary"],
                "tags": item["tags"],
                "relevance_score": score
            })
            
    results.sort(key=lambda x: x["relevance_score"], reverse=True)
    return json.dumps(results[:max_results], indent=2)

# --- 3. Prompts ---

def register_dynamic_prompts():
    if not SKILLS_DIR.exists():
        return
    for filepath in SKILLS_DIR.glob("*.md"):
        skill_name = filepath.stem
        try:
            content = filepath.read_text(encoding="utf-8")
            title = skill_name.replace("-", " ").title()
            description = f"Guidance prompt template for the {title} skill from the vault."
            
            # Find ## What It Is section for description
            match = re.search(r"## What It Is\s*\n+(.*?)(?=\n##|\Z)", content, re.DOTALL | re.IGNORECASE)
            if match:
                description = " ".join(match.group(1).strip().split())[:200]
                
            def make_prompt_handler(name, file_content, desc):
                def prompt_handler(user_query: str = "") -> str:
                    return (
                        f"You are an expert AI assistant specialized in {name}.\n"
                        f"Below is reference documentation and signals from the Vybe Intelligence Vault on {name}:\n\n"
                        f"=== VAULT SKILL REFERENCE ===\n"
                        f"{file_content}\n"
                        f"=============================\n\n"
                        f"Please address the following user request/query using the reference material above:\n"
                        f"{user_query}"
                    )
                prompt_handler.__name__ = name.replace("-", "_")
                prompt_handler.__doc__ = f"Reference guidance for {name}: {desc}"
                return prompt_handler
                
            handler = make_prompt_handler(skill_name, content, description)
            mcp.prompt()(handler)
            logger.info(f"Dynamically registered prompt: {skill_name}")
        except Exception as e:
            logger.error(f"Failed to register prompt for {skill_name}: {e}")

register_dynamic_prompts()

# --- 4. Main / Run ---

def main():
    import argparse
    parser = argparse.ArgumentParser(description="Vybe Vault MCP Server")
    parser.add_argument("--transport", choices=["stdio", "sse"], default="stdio", help="Transport mechanism (stdio or sse)")
    parser.add_argument("--host", default="0.0.0.0", help="HTTP host for SSE")
    parser.add_argument("--port", type=int, default=8000, help="HTTP port for SSE")
    args = parser.parse_args()
    
    transport_mode = os.environ.get("MCP_TRANSPORT", args.transport)
    token = os.environ.get("MCP_ACCESS_TOKEN")
    
    if transport_mode == "sse":
        host = os.environ.get("MCP_HOST", args.host)
        port = int(os.environ.get("MCP_PORT", str(args.port)))
        
        mcp.settings.host = host
        mcp.settings.port = port
        
        logger.info(f"Starting MCP server in SSE mode on http://{host}:{port}")
        
        starlette_app = mcp.sse_app()
        if token:
            logger.info("Enabling environment-based TokenAuthMiddleware validation...")
            starlette_app.add_middleware(TokenAuthMiddleware, token=token)
        else:
            logger.warning("MCP_ACCESS_TOKEN is not set. SSE transport will run WITHOUT authentication!")
            
        import uvicorn
        import anyio
        
        config = uvicorn.Config(
            starlette_app,
            host=host,
            port=port,
            log_level="info"
        )
        server = uvicorn.Server(config)
        anyio.run(server.serve)
    else:
        logger.info("Starting MCP server in STDIO mode...")
        mcp.run(transport="stdio")

if __name__ == "__main__":
    main()
