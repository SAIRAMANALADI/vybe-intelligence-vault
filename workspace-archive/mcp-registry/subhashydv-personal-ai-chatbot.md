---
title: personal-ai-chatbot/mcp/server.js at main · subhashydv/personal-ai-chatbot
  · GitHub
archive_category: mcp-registry
source_category: ai/resources
source_url: https://github.com/subhashydv/personal-ai-chatbot/blob/main/mcp/server.js
resource_id: github:subhashydv/personal-ai-chatbot-19522037
local_vault_path: ai/resources/subhashydv-personal-ai-chatbot.md
quality_score: 70
archive_score: 79
archive_tier: useful
resource_kind: mcp-server
importance: medium
tags:
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# personal-ai-chatbot/mcp/server.js at main · subhashydv/personal-ai-chatbot · GitHub

## Why This Is In The Archive

- Matched archive category: `MCP Registry`
- Quality score: 70 | Archive score: 79 (useful)
- Resource kind: mcp-server
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **MCP Server Implementation**: Uses `@modelcontextprotocol/sdk` to create an MCP-compliant server (`McpServer`) with tool registration and stdio transport (`StdioServerTransport`).

- **Tool Registration**: Exposes an `askQuestion` tool with Zod schema validation (`z.string()`) for input, forwarding requests to `http://localhost:8181/ask` with a 5-second timeout via `AbortController`.

- **Error Handling & Response**: Implements upstream error handling (`resp.ok` check) and returns structured

## Use Cases

- IDE extension
- Assistant tools discovery
- Context injection config

## Source

Original source URL: https://github.com/subhashydv/personal-ai-chatbot/blob/main/mcp/server.js

## Local Vault File

Path: [subhashydv-personal-ai-chatbot.md](../../ai/resources/subhashydv-personal-ai-chatbot.md)
