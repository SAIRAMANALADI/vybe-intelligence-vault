---
title: openai-agents-python/examples/voice/static at main · openai/openai-agents-python
  · GitHub
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://github.com/openai/openai-agents-python/tree/main/examples/voice/static
published_at: '2026-08-03T09:36:24.147985+05:30'
collected_at: '2026-08-03T09:36:24.147997+05:30'
tags:
- agents
- openai
- web-crawled
- workflows
status: active
resource_id: github:openai/openai-agents-python
first_seen: '2026-08-03T09:36:24.147997+05:30'
last_seen: '2026-08-03T09:36:24.147997+05:30'
last_checked: '2026-08-03T09:36:24.147997+05:30'
health_score: 100
---

# openai-agents-python/examples/voice/static at main · openai/openai-agents-python · GitHub

## Summary

- **Pipeline Execution**: The demo initiates via `python -m examples.voice.static.main`, capturing audio input, transcribing it, feeding the transcription to a `VoicePipeline` workflow, and streaming the agent's output to a TTS model for playback.

- **Workflow Structure**: The `VoicePipeline` uses a custom workflow with an Agent, including conditional responses (e.g., secret word detection) and tool integration (e.g., `get_weather` for weather queries).

- **Multilingual & Secret Handling**: Supports language handoff (e.g., Spanish agent) and triggers a hardcoded response upon detecting the secret word (e.g., "Tell me about dogs").

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-03T09:36:24.147985+05:30

## Related Tags

- agents
- openai
- web-crawled
- workflows

## Source

Original source: https://github.com/openai/openai-agents-python/tree/main/examples/voice/static
