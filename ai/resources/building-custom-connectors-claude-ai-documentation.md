---
title: Building custom connectors - Claude.ai Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://claude.com/docs/connectors/building
published_at: '2026-06-26T10:17:19.899387+05:30'
collected_at: '2026-06-26T10:17:19.899399+05:30'
tags:
- anthropic
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:building-custom-connectors-claude-ai-documentation
first_seen: '2026-06-26T10:17:19.899399+05:30'
last_seen: '2026-06-26T10:17:19.899399+05:30'
last_checked: '2026-06-26T10:17:19.899399+05:30'
health_score: 100
---

# Building custom connectors - Claude.ai Documentation

## Summary

- **Transport & Authentication**:
  - Supports **Streamable HTTP** (legacy HTTP+SSE deprecated) and OAuth 2.0 with Dynamic Client Registration (DCR), token refresh, and custom credentials.
  - OAuth callback URL: `https://claude.ai/api/mcp/auth_callback` (hosted) or loopback for Claude Code.

- **Protocol Features**:
  - Supports **tools, prompts, resources** (text/binary), and **image-based tool results**.
  - **Unsupported**: Resource subscriptions, sampling, and advanced/draft capabilities.

- **Technical Constraints**:
  - **Claude.ai/Desktop**: ~150K chars/tool result, 300s timeout.
  - **Claude Code**: 25K tokens/tool result (configurable), configurable timeout via `MCP_TOOL_TIMEOUT`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-26T10:17:19.899387+05:30

## Related Tags

- anthropic
- hackernews
- reddit
- web-crawled

## Source

Original source: https://claude.com/docs/connectors/building
