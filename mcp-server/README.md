# Vybe Vault MCP Server

This is a native Model Context Protocol (MCP) server for **Vybe Intelligence Vault**. It exposes the vault as a dynamic resource provider, a search tool, and a set of dynamic prompt templates for AI clients (like Claude Desktop, Cursor, and Ollama agents).

---

## Features

### 1. 📂 Resource Provider
Allows AI clients to list and read vault markdown files directly:
*   **Static/Discoverable Resources**:
    *   `vault://search-index.json`: Master index cataloging all vault contents.
    *   `vault://CHANGELOG.md`: Vault updates log.
    *   `vault://skills/*.md`: Reference files inside the `skills/` directory.
*   **Dynamic Read Template**:
    *   `vault://{relative_path}`: Read any markdown file from the vault (e.g. `vault://ai/rag/arxiv-2606-16344.md`). Enforces security against directory traversal.

### 2. 🔍 Search Tool (`vault_search`)
Performs case-insensitive searches across titles, tags, summaries, and contents in the vault.
*   **Parameters**:
    *   `query` (string, required): Term to search for (e.g. `RAG`, `Agent`).
    *   `category` (string, optional): Filter results. Choose from `maps`, `skills`, `daily-digests`, `ai`, or `web-development`.
    *   `max_results` (number, optional, default 5): Limit results.

### 3. 💬 Dynamic Prompts
Dynamically scans files in the `skills/` directory at startup and exposes them as system-aligned prompts (e.g., `rag`, `ai_agents`, `prompt_engineering`):
*   **Parameters**:
    *   `user_query` (string, optional): Specific questions or code to check.
*   **Output**: Renders instructions and embeds the relevant vault reference material as system context.

---

## Installation & Setup

1.  Navigate into the `mcp-server/` directory:
    ```bash
    cd mcp-server
    ```
2.  Create and activate a virtual environment:
    ```bash
    python -m venv .venv
    # On Windows:
    .venv\Scripts\activate
    # On macOS/Linux:
    source .venv/bin/activate
    ```
3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

---

## Connection Instructions

### 1. Claude Desktop
Add the following configuration to your `claude_desktop_config.json` (located at `%APPDATA%\Claude\claude_desktop_config.json` on Windows or `~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "vybe-vault": {
      "command": "C:\\path\\to\\vybe-intelligence-vault\\mcp-server\\.venv\\Scripts\\python.exe",
      "args": [
        "-m",
        "mcp_server.server"
      ],
      "env": {
        "VAULT_PATH": "C:\\path\\to\\vybe-intelligence-vault"
      }
    }
  }
}
```
*(Make sure to replace the paths above with the actual absolute paths on your local machine, and escape backslashes on Windows).*

### 2. Cursor / Windsurf
1.  Go to **Cursor Settings** -> **Features** -> **MCP**.
2.  Click **+ Add New MCP Server**.
3.  Fill out the details:
    *   **Name**: `vybe-vault`
    *   **Type**: `command`
    *   **Command**: `C:\path\to\vybe-intelligence-vault\mcp-server\.venv\Scripts\python.exe -m mcp_server.server`
4.  Specify the environment variable `VAULT_PATH` pointing to the repository root.

### 3. Ollama / Qwen / Gemma Agents (via HTTP/SSE Transport)
For remote integrations or clients that connect over HTTP rather than standard I/O (STDIO), start the server in **SSE** mode:

```bash
# Set environment access token (Recommended for security)
set MCP_ACCESS_TOKEN=your_super_secret_token
set VAULT_PATH=C:\path\to\vybe-intelligence-vault

# Start the server on port 8000
python -m mcp_server.server --transport sse --port 8000
```

*   **Endpoint**: `http://localhost:8000/sse`
*   **Authentication**: Connecting clients must include the header `Authorization: Bearer your_super_secret_token` or pass `?token=your_super_secret_token` in the connection URL.
