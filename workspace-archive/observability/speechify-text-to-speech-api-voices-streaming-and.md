---
title: Speechify Text to Speech API — Voices, Streaming, and SSML | Speechify API
archive_category: observability
source_category: ai/rag
source_url: https://docs.speechify.ai/tts/guides/welcome
resource_id: blog:speechify-text-to-speech-api-voices-streaming-and
local_vault_path: ai/rag/speechify-text-to-speech-api-voices-streaming-and.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Speechify Text to Speech API — Voices, Streaming, and SSML | Speechify API

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **API Endpoint & Authentication**: Single POST endpoint `/v1/audio/speech` with `Authorization: Bearer` token for authentication; supports streaming up to 20,000 characters per request.
- **Voice Cloning & Multilingual Support**: Clone voices from 10-30s samples; `simba-multilingual` model supports 30+ languages with unified voice IDs and SSML/emotion control.
- **Model Variants & Features**: `simba-english` (flagship, full SSML/emotion), `simba-3.0` (low-latency streaming); includes speech ma

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://docs.speechify.ai/tts/guides/welcome

## Local Vault File

Path: [speechify-text-to-speech-api-voices-streaming-and.md](../../ai/rag/speechify-text-to-speech-api-voices-streaming-and.md)
