---
title: Add and manage MCP servers in VS Code
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/chat/mcp-servers
published_at: '2026-08-07T09:00:46.802526+05:30'
collected_at: '2026-08-07T09:00:46.802535+05:30'
tags:
- agents
- anthropic
- rag
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:add-and-manage-mcp-servers-in-vs-code
first_seen: '2026-08-07T09:00:46.802535+05:30'
last_seen: '2026-08-07T09:00:46.802535+05:30'
last_checked: '2026-08-07T09:00:46.802535+05:30'
health_score: 100
---

# Add and manage MCP servers in VS Code

## Summary

- **MCP Integration**: VS Code supports Model Context Protocol (MCP) servers as an open standard to connect AI models to external tools/services (e.g., file ops, databases, APIs), providing tools, resources, prompts, and interactive apps for AI customization and agent workflows.

- **Server Management**: MCP servers can be installed via the Extensions view (`@mcp` search), configured in `mcp.json` (workspace/user-level), or managed centrally with trust policies; servers run locally unless specified for remote execution in dev containers or remote environments.

- **Security & Configuration**: Local MCP servers execute arbitrary code—only trusted sources should be used; sensitive data (e.g., API keys) must be handled via input variables or environment files, with IntelliSense support for `mcp.json` schema validation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-07T09:00:46.802526+05:30

## Related Tags

- agents
- anthropic
- rag
- scripts
- web-crawled
- workflows

## Source

Original source: https://code.visualstudio.com/docs/copilot/chat/mcp-servers
