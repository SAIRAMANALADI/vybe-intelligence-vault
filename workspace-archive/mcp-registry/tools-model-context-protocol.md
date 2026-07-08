---
title: Tools - Model Context Protocol
archive_category: mcp-registry
source_category: ai/resources
source_url: https://modelcontextprotocol.io/specification/latest/server/tools
resource_id: blog:tools-model-context-protocol
local_vault_path: ai/resources/tools-model-context-protocol.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Tools - Model Context Protocol

## Why This Is In The Archive

- Matched archive category: `MCP Registry`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Tool Definition & Discovery**: Tools are uniquely identified by name, described via JSON Schema (`inputSchema`/`outputSchema`), and exposed via `tools/list` requests with pagination support; servers must declare the `tools` capability (including `listChanged` for dynamic updates).

- **Invocation & Response**: Tools are invoked via `tools/call` with structured arguments, returning results as unstructured (text/image/audio/resource links) or structured content (validated against `outputSchema

## Use Cases

- IDE extension
- Assistant tools discovery
- Context injection config

## Source

Original source URL: https://modelcontextprotocol.io/specification/latest/server/tools

## Local Vault File

Path: [tools-model-context-protocol.md](../../ai/resources/tools-model-context-protocol.md)
