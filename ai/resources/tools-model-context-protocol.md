---
title: Tools - Model Context Protocol
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://modelcontextprotocol.io/specification/latest/server/tools
published_at: '2026-08-08T12:58:29.145329+05:30'
collected_at: '2026-08-08T12:58:29.145369+05:30'
tags:
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:tools-model-context-protocol
first_seen: '2026-08-08T12:58:29.145369+05:30'
last_seen: '2026-08-08T12:58:29.145369+05:30'
last_checked: '2026-08-08T12:58:29.145369+05:30'
health_score: 100
---

# Tools - Model Context Protocol

## Summary

- **Tool Discovery & Invocation**: MCP servers expose tools via `tools/list` (JSON-RPC) for discovery and `tools/call` for invocation, with tools defined by unique names, JSON Schema-based `inputSchema`/`outputSchema`, and optional metadata like `icons` and `annotations`.

- **Stateful & Interactive Workflow**: Tools support multi-round-trip interactions via `InputRequiredResult` responses, enabling servers to request additional input (`inputResponses`) before completing execution, with `requestState` for session continuity.

- **Security & Capabilities**: Servers declare `tools` capability (with `listChanged` support) and enforce human-in-the-loop controls; tool names follow strict syntax rules (A-Z, 0-9, `_`, `-`, `.`), while `x-mcp-header` enables HTTP header injection for Streamable HTTP transport.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T12:58:29.145329+05:30

## Related Tags

- reddit
- web-crawled
- workflows

## Source

Original source: https://modelcontextprotocol.io/specification/latest/server/tools
