---
title: Prompts - Model Context Protocol
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://modelcontextprotocol.io/specification/latest/server/prompts
published_at: '2026-08-02T14:19:36.680992+05:30'
collected_at: '2026-08-02T14:19:36.681005+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:prompts-model-context-protocol
first_seen: '2026-08-02T14:19:36.681005+05:30'
last_seen: '2026-08-02T14:19:36.681005+05:30'
last_checked: '2026-08-02T14:19:36.681005+05:30'
health_score: 100
---

# Prompts - Model Context Protocol

## Summary

- **User Interaction Model**: Prompts are user-controlled, exposed via servers to clients for explicit selection (e.g., slash commands), with content defined by the server and triggered by user-initiated actions.

- **Protocol Messages**: Clients use `prompts/list` (with pagination/caching) and `prompts/get` (with optional arguments) to retrieve prompts; servers may respond with `InputRequiredResult` for missing inputs, following multi-round-trip requests.

- **Data Types**: Prompts include `name`, `title`, `description`, `icons`, and `arguments`; messages support `text`, `image`, `audio`, `resource_link`, and `embedded_resources` content types, with strict MIME type and encoding requirements.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T14:19:36.680992+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://modelcontextprotocol.io/specification/latest/server/prompts
