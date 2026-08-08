---
title: Add and manage MCP servers in VS Code
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/chat/mcp-servers
published_at: '2026-08-08T12:55:44.603764+05:30'
collected_at: '2026-08-08T12:55:44.603775+05:30'
tags:
- agents
- anthropic
- rag
- scripts
- web-crawled
status: active
resource_id: blog:add-and-manage-mcp-servers-in-vs-code
first_seen: '2026-08-08T12:55:44.603775+05:30'
last_seen: '2026-08-08T12:55:44.603775+05:30'
last_checked: '2026-08-08T12:55:44.603775+05:30'
health_score: 100
---

# Add and manage MCP servers in VS Code

## Summary

- **MCP Integration**: Visual Studio Code supports the Model Context Protocol (MCP) for connecting AI models to external tools/services, enabling file operations, database interactions, and API integrations via MCP servers, which provide tools, resources, prompts, and interactive apps.

- **MCP Server Management**: MCP servers can be installed globally (user profile) or locally (workspace via `.vscode/mcp.json`), with configurations managed through VS Code’s `mcp.json` schema; trust verification is required for local servers due to potential arbitrary code execution risks.

- **Agent Host & Configuration**: MCP configurations are forwarded to the Agent Host (except interactive inputs), with portable setups recommended via workspace `.mcp.json` or user `~/.copilot/mcp-config.json`; sensitive data must be handled via input variables or environment files to avoid hardcoding.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T12:55:44.603764+05:30

## Related Tags

- agents
- anthropic
- rag
- scripts
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/chat/mcp-servers
