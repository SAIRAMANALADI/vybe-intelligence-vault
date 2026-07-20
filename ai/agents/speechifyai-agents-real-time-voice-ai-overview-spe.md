---
title: 'SpeechifyAI Agents: Real-Time Voice AI Overview | SpeechifyAI API'
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.speechify.ai/voice-agents/guides/welcome
published_at: '2026-07-20T20:12:11.972556+05:30'
collected_at: '2026-07-20T20:12:11.972571+05:30'
tags:
- agents
- benchmark
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:speechifyai-agents-real-time-voice-ai-overview-spe
first_seen: '2026-07-20T20:12:11.972571+05:30'
last_seen: '2026-07-20T20:12:11.972571+05:30'
last_checked: '2026-07-20T20:12:11.972571+05:30'
health_score: 100
---

# SpeechifyAI Agents: Real-Time Voice AI Overview | SpeechifyAI API

## Summary

- **Realtime Voice Pipeline**: Agents use a low-latency realtime pipeline (`POST /v1/agents/{id}/conversations`) to process speech input, agent response, and speech output, with audio, transcripts, and tool calls streamed over a session.

- **Agent Definition & Tools**: Agents are reusable configurations (prompt, voice, tools, evaluation criteria) supporting tools like backend calls, device execution, MCP server connections, and built-ins (`end_call`, `transfer_to_number`).

- **Post-Call Processing**: Conversations persist transcripts with timestamps/tool traces, and post-call evaluations include LLM-graded criteria and structured data extraction, with lifecycle events and results stored via API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-20T20:12:11.972556+05:30

## Related Tags

- agents
- benchmark
- reddit
- web-crawled
- workflows

## Source

Original source: https://docs.speechify.ai/voice-agents/guides/welcome
