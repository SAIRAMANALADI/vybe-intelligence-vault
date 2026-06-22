---
title: Speechify Voice Agents — Real-Time Voice AI Overview | Speechify API
archive_category: mcp-registry
source_category: ai/rag
source_url: https://docs.speechify.ai/voice-agents/guides/welcome
resource_id: blog:speechify-voice-agents-real-time-voice-ai-overview
local_vault_path: ai/rag/speechify-voice-agents-real-time-voice-ai-overview.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: mcp-server
importance: medium
tags:
- agents
- benchmark
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Useful for project building
---

# Speechify Voice Agents — Real-Time Voice AI Overview | Speechify API

## Why This Is In The Archive

- Matched archive category: `MCP Registry`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: mcp-server
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Real-time voice agents** with sub-2s per-turn latency, leveraging a curated catalog of natural voices (`GET /v1/agents/voices`) and a low-latency pipeline for seamless speech-to-speech interactions.
- **Multi-modal tool integration** via webhook, client-side, MCP server, or built-ins (`end_call`, `transfer_to_number`), with full transcript persistence (timestamps + tool traces) and post-call LLM-graded evaluations.
- **Deployment flexibility** through `POST /v1/agents/{id}/conversations` for

## Use Cases

- IDE extension
- Assistant tools discovery
- Context injection config

## Source

Original source URL: https://docs.speechify.ai/voice-agents/guides/welcome

## Local Vault File

Path: [speechify-voice-agents-real-time-voice-ai-overview.md](../../ai/rag/speechify-voice-agents-real-time-voice-ai-overview.md)
