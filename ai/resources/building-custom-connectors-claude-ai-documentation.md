---
title: Building custom connectors - Claude.ai Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://claude.com/docs/connectors/building
published_at: '2026-07-02T15:10:15.774061+05:30'
collected_at: '2026-07-02T15:10:15.774072+05:30'
tags:
- anthropic
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:building-custom-connectors-claude-ai-documentation
first_seen: '2026-07-02T15:10:15.774072+05:30'
last_seen: '2026-07-02T15:10:15.774072+05:30'
last_checked: '2026-07-02T15:10:15.774072+05:30'
health_score: 100
---

# Building custom connectors - Claude.ai Documentation

## Summary

- **Authentication**: Supports MCP auth specs (2025-03-26, 2025-06-18, 2025-11-25), Dynamic Client Registration (DCR), OAuth callback (`https://claude.ai/api/mcp/auth_callback`), token refresh/expiry, and custom credentials for non-DCR servers.

- **Transports & Limits**: Streamable HTTP is the primary transport (legacy HTTP+SSE deprecated); tool result limits: ~150k chars (Claude.ai/Desktop), 25k tokens (Claude Code), with configurable timeouts (300s default for Desktop, `MCP_TOOL_TIMEOUT` for Code).

- **Protocol Features**: Supports tools, prompts, resources (text/binary), and image-based tool results; lacks resource subscriptions, sampling, and advanced/draft capabilities.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-02T15:10:15.774061+05:30

## Related Tags

- anthropic
- hackernews
- reddit
- web-crawled

## Source

Original source: https://claude.com/docs/connectors/building
