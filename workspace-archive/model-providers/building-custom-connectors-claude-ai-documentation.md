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

- **Transport & Authentication**:
  - Supports **Streamable HTTP** (legacy HTTP+SSE deprecated) and OAuth 2.0 with Dynamic Client Registration (DCR), token refresh, and custom credentials.
  - OAuth callback URL: `https://claude.ai/api/mcp/auth_callback` (hosted) or loopback for Claude Code.

- **Protocol Features**:
  - Supports **tools, prompts, resources** (text/binary), and **image-based tool results**.
  - **Unsupported**: Resource subscriptions, sampling, and advanced/draft capabilities.

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://claude.com/docs/connectors/building

## Local Vault File

Path: [building-custom-connectors-claude-ai-documentation.md](../../ai/resources/building-custom-connectors-claude-ai-documentation.md)
