---
title: Building custom connectors - Claude.ai Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://claude.com/docs/connectors/building
published_at: '2026-07-08T14:24:07.536089+05:30'
collected_at: '2026-07-08T14:24:07.536104+05:30'
tags:
- anthropic
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:building-custom-connectors-claude-ai-documentation
first_seen: '2026-07-08T14:24:07.536104+05:30'
last_seen: '2026-07-08T14:24:07.536104+05:30'
last_checked: '2026-07-08T14:24:07.536104+05:30'
health_score: 100
---

# Building custom connectors - Claude.ai Documentation

## Summary

- **Authentication**: Supports MCP auth specs (2025-03-26, 2025-06-18, 2025-11-25), Dynamic Client Registration (DCR), OAuth callback (`https://claude.ai/api/mcp/auth_callback`), token refresh/expiry, and custom credentials for non-DCR servers.

- **Transports & Protocol**: Uses Streamable HTTP (legacy HTTP+SSE deprecated); supports tools, prompts, resources, text/image-based tool results, and binary/text resources; excludes subscriptions, sampling, and draft capabilities.

- **Technical Limits**: Max tool result size ~150K chars (Claude.ai/Desktop) / 25K tokens (Claude Code); timeouts configurable (300s default for desktop, `MCP_TOOL_TIMEOUT` for Code).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-08T14:24:07.536089+05:30

## Related Tags

- anthropic
- hackernews
- reddit
- web-crawled

## Source

Original source: https://claude.com/docs/connectors/building
