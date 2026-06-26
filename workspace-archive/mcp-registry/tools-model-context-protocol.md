---
title: Tools - Model Context Protocol
archive_category: mcp-registry
source_category: ai/resources
source_url: https://modelcontextprotocol.io/specification/latest/server/tools
resource_id: blog:tools-model-context-protocol
local_vault_path: ai/resources/tools-model-context-protocol.md
quality_score: 70
archive_score: 76
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

# Tools - Model Context Protocol

## Why This Is In The Archive

- Matched archive category: `MCP Registry`
- Quality score: 70 | Archive score: 76 (useful)
- Resource kind: mcp-server
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Tool Discovery & Invocation**: MCP servers expose tools via `tools/list` (paginated) and `tools/call` JSON-RPC methods, where tools are defined with JSON Schema `inputSchema`/`outputSchema`, optional icons, and execution metadata (e.g., `taskSupport`).
- **User Control & Safety**: Tools are model-controlled but require human-in-the-loop validation; servers must provide UI indicators for tool exposure and confirmations for invocations, with tool names restricted to `[A-Za-z0-9_\-.]` (1–128 ch

## Use Cases

- IDE extension
- Assistant tools discovery
- Context injection config

## Source

Original source URL: https://modelcontextprotocol.io/specification/latest/server/tools

## Local Vault File

Path: [tools-model-context-protocol.md](../../ai/resources/tools-model-context-protocol.md)
