---
title: 'SpeechifyAI Agents: Real-Time Voice AI Overview | SpeechifyAI API'
archive_category: evals-and-benchmarks
source_category: ai/agents
source_url: https://docs.speechify.ai/voice-agents/guides/welcome
resource_id: blog:speechifyai-agents-real-time-voice-ai-overview-spe
local_vault_path: ai/agents/speechifyai-agents-real-time-voice-ai-overview-spe.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: mcp-server
importance: medium
tags:
- agents
- benchmark
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Useful for project building
---

# SpeechifyAI Agents: Real-Time Voice AI Overview | SpeechifyAI API

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: mcp-server
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Agent Definition**: Reusable configuration combining prompt, voice, tools (backend calls, device code execution, MCP servers, built-ins like `end_call`), and evaluation criteria for real-time voice interactions via `POST /v1/agents/{id}/conversations`.

- **Real-Time Pipeline**: Low-latency, full-duplex audio processing with transcripts (timestamps + tool traces) and post-call LLM-graded evaluations, provisioned via short-lived session tokens/URLs.

- **Use Cases**: Inbound support, outbound

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://docs.speechify.ai/voice-agents/guides/welcome

## Local Vault File

Path: [speechifyai-agents-real-time-voice-ai-overview-spe.md](../../ai/agents/speechifyai-agents-real-time-voice-ai-overview-spe.md)
