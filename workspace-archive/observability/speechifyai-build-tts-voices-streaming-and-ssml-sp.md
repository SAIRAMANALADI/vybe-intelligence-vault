---
title: 'SpeechifyAI Build: TTS, Voices, Streaming, and SSML | SpeechifyAI API'
archive_category: observability
source_category: ai/agents
source_url: https://docs.speechify.ai/tts/guides/welcome
resource_id: blog:speechifyai-build-tts-voices-streaming-and-ssml-sp
local_vault_path: ai/agents/speechifyai-build-tts-voices-streaming-and-ssml-sp.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# SpeechifyAI Build: TTS, Voices, Streaming, and SSML | SpeechifyAI API

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **API Endpoint**: Single POST request to `/v1/audio/speech` with JSON payload (`input`, `voice_id`, `audio_format`, `model`) for TTS generation, supporting streaming up to 20,000 characters.
- **Voice Customization**: Supports voice cloning from 10-30s samples, SSML for fine-grained control (pitch, rate, emotion presets), and speech marks for word-level timestamps.
- **Model & Integration**: Offers multilingual models (`simba-multilingual` for 30+ languages, `simba-3.2` for low-latency English

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://docs.speechify.ai/tts/guides/welcome

## Local Vault File

Path: [speechifyai-build-tts-voices-streaming-and-ssml-sp.md](../../ai/agents/speechifyai-build-tts-voices-streaming-and-ssml-sp.md)
