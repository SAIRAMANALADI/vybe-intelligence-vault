---
title: Quickstart - OpenAI Agents SDK
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://openai.github.io/openai-agents-python/voice/quickstart/
published_at: '2026-08-03T09:34:06.386953+05:30'
collected_at: '2026-08-03T09:34:06.386968+05:30'
tags:
- agents
- openai
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:quickstart-openai-agents-sdk
first_seen: '2026-08-03T09:34:06.386968+05:30'
last_seen: '2026-08-03T09:34:06.386968+05:30'
last_checked: '2026-08-03T09:34:06.386968+05:30'
health_score: 100
---

# Quickstart - OpenAI Agents SDK

## Summary

- **VoicePipeline Architecture**: A 3-step process comprising speech-to-text transcription, agentic workflow execution (e.g., `SingleAgentVoiceWorkflow`), and text-to-speech synthesis for audio output.
- **Agent Integration**: Agents (e.g., `spanish_agent`, `agent`) use handoffs (`handoffs=[spanish_agent]`) and tools (`@tool`-decorated functions like `get_weather`) to process voice inputs and generate responses.
- **Real-Time Audio Handling**: Uses `AudioInput` for input buffering and `sounddevice.OutputStream` for streaming audio output, with async event processing (`result.stream()`) for low-latency interaction.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-03T09:34:06.386953+05:30

## Related Tags

- agents
- openai
- web-crawled
- workflows
- youtube

## Source

Original source: https://openai.github.io/openai-agents-python/voice/quickstart/
