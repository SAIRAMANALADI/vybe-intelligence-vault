---
title: Tools - Model Context Protocol
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://modelcontextprotocol.io/specification/latest/server/tools
published_at: '2026-06-26T10:19:22.751276+05:30'
collected_at: '2026-06-26T10:19:22.751291+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:tools-model-context-protocol
first_seen: '2026-06-26T10:19:22.751291+05:30'
last_seen: '2026-06-26T10:19:22.751291+05:30'
last_checked: '2026-06-26T10:19:22.751291+05:30'
health_score: 100
---

# Tools - Model Context Protocol

## Summary

- **Tool Discovery & Invocation**: MCP servers expose tools via `tools/list` (paginated) and `tools/call` JSON-RPC methods, where tools are defined with JSON Schema `inputSchema`/`outputSchema`, optional icons, and execution metadata (e.g., `taskSupport`).
- **User Control & Safety**: Tools are model-controlled but require human-in-the-loop validation; servers must provide UI indicators for tool exposure and confirmations for invocations, with tool names restricted to `[A-Za-z0-9_\-.]` (1–128 chars, case-sensitive).
- **Content & Schema Handling**: Tool results support unstructured (text/image/audio/resource links) and structured content (validated against `outputSchema`), with embedded resources and annotations for metadata (e.g., audience, priority).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-26T10:19:22.751276+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://modelcontextprotocol.io/specification/latest/server/tools
