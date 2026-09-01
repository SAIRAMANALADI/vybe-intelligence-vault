---
title: 'SpeechifyAI Build Docs: TTS API Reference | SpeechifyAI API'
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.speechify.ai/tts/guides/welcome
published_at: '2026-09-02T04:22:49.988022+05:30'
collected_at: '2026-09-02T04:22:49.988034+05:30'
tags:
- agents
- web-crawled
status: active
resource_id: blog:speechifyai-build-docs-tts-api-reference-speechify
first_seen: '2026-09-02T04:22:49.988034+05:30'
last_seen: '2026-09-02T04:22:49.988034+05:30'
last_checked: '2026-09-02T04:22:49.988034+05:30'
health_score: 100
---

# SpeechifyAI Build Docs: TTS API Reference | SpeechifyAI API

## Summary

- **API Integration**: Single REST API endpoint (`/v1/audio/speech`) supports TTS generation, streaming (up to 20k chars/request), voice cloning (10-30s sample), and SSML-based delivery control with models like `simba-3.2` (English) and `simba-3.0` (6 European languages).

- **Authentication & SDKs**: Uses `Authorization: Bearer <API_KEY>`; official Python (`pip install speechify-api`) and TypeScript (`npm install @speechify/api`) SDKs auto-read `SPEECHIFY_API_KEY` from environment.

- **Advanced Features**: Supports real-time streaming, 13 emotion presets, word-level speech marks for sync, and cross-platform integrations via plugins (LiveKit) or `tts-shims` proxy (Vapi, Deepgram). Legacy models (`simba-multilingual`, `simba-english`) deprecated post-2026-11-21.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-09-02T04:22:49.988022+05:30

## Related Tags

- agents
- web-crawled

## Source

Original source: https://docs.speechify.ai/tts/guides/welcome
