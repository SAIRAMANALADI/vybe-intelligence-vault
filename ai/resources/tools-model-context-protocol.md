---
title: Tools - Model Context Protocol
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://modelcontextprotocol.io/specification/latest/server/tools
published_at: '2026-07-08T14:26:13.682651+05:30'
collected_at: '2026-07-08T14:26:13.682667+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:tools-model-context-protocol
first_seen: '2026-07-08T14:26:13.682667+05:30'
last_seen: '2026-07-08T14:26:13.682667+05:30'
last_checked: '2026-07-08T14:26:13.682667+05:30'
health_score: 100
---

# Tools - Model Context Protocol

## Summary

- **Tool Definition & Discovery**: Tools are uniquely identified by name, described via JSON Schema (`inputSchema`/`outputSchema`), and exposed via `tools/list` requests with pagination support; servers must declare the `tools` capability (including `listChanged` for dynamic updates).

- **Invocation & Response**: Tools are invoked via `tools/call` with structured arguments, returning results as unstructured (text/image/audio/resource links) or structured content (validated against `outputSchema`); errors are flagged via `isError: true`.

- **Security & Human Oversight**: MCP enforces human-in-the-loop validation for tool calls, requires UI indicators for exposed tools, and mandates client-side validation of untrusted tool annotations unless sourced from trusted servers.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-08T14:26:13.682651+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://modelcontextprotocol.io/specification/latest/server/tools
