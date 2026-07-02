---
title: API Overview | OpenAI API Reference
archive_category: observability
source_category: ai/rag
source_url: https://platform.openai.com/docs/api-reference
resource_id: blog:api-overview-openai-api-reference
local_vault_path: ai/rag/api-overview-openai-api-reference.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- models
- openai
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# API Overview | OpenAI API Reference

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **API Surface & Authentication**: OpenAI API offers three primary surfaces—**Responses** (for model/text/audio/image interactions), **Realtime API** (low-latency WebRTC/WebSocket/SIP audio sessions), and **Administration** (user/project/key management). Authentication uses **HTTP Bearer tokens** (API keys or short-lived tokens via workload identity federation), with optional `OpenAI-Organization` and `OpenAI-Project` headers for multi-tenant setups.

- **Debugging & Rate Limits**: API response

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://platform.openai.com/docs/api-reference

## Local Vault File

Path: [api-overview-openai-api-reference.md](../../ai/rag/api-overview-openai-api-reference.md)
