---
title: Building custom connectors - Claude.ai Documentation
archive_category: model-providers
source_category: ai/resources
source_url: https://claude.com/docs/connectors/building
resource_id: blog:building-custom-connectors-claude-ai-documentation
local_vault_path: ai/resources/building-custom-connectors-claude-ai-documentation.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- anthropic
- hackernews
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Building custom connectors - Claude.ai Documentation

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Authentication**: Supports MCP auth specs (2025-03-26, 2025-06-18, 2025-11-25), Dynamic Client Registration (DCR), OAuth callback (`https://claude.ai/api/mcp/auth_callback`), token refresh/expiry, and custom credentials for non-DCR servers.

- **Transports & Limits**: Streamable HTTP is the primary transport (legacy HTTP+SSE deprecated); tool result limits: ~150k chars (Claude.ai/Desktop), 25k tokens (Claude Code), with configurable timeouts (300s default for Desktop, `MCP_TOOL_TIMEOUT` for

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://claude.com/docs/connectors/building

## Local Vault File

Path: [building-custom-connectors-claude-ai-documentation.md](../../ai/resources/building-custom-connectors-claude-ai-documentation.md)
