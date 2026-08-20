---
title: Quickstart - OpenAI Agents SDK
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://openai.github.io/openai-agents-python/voice/quickstart/
published_at: '2026-08-08T12:55:41.498181+05:30'
collected_at: '2026-08-08T12:55:41.498194+05:30'
tags:
- agents
- openai
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:quickstart-openai-agents-sdk
first_seen: '2026-08-08T12:55:41.498194+05:30'
last_seen: '2026-08-08T12:55:41.498194+05:30'
last_checked: '2026-08-08T12:55:41.498194+05:30'
health_score: 100
---

# Quickstart - OpenAI Agents SDK

## Summary

- **VoicePipeline Architecture**: The `VoicePipeline` consists of three sequential steps: speech-to-text transcription, agentic workflow execution (e.g., agent-based reasoning or tool usage), and text-to-speech synthesis, forming a closed-loop audio processing system.

- **Agent Configuration**: Agents are defined with handoff capabilities (`handoffs`) and tools (e.g., `get_weather`), with language-specific agents (e.g., `spanish_agent`) triggered via handoff instructions in the primary agent's workflow.

- **Runtime Implementation**: The pipeline is executed asynchronously using `VoicePipeline.run()`, streaming audio input/output via `sounddevice` with real-time playback handled by `OutputStream`, processing 24kHz, 16-bit mono audio buffers.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-08T12:55:41.498181+05:30

## Related Tags

- agents
- openai
- web-crawled
- workflows
- youtube

## Source

Original source: https://openai.github.io/openai-agents-python/voice/quickstart/
