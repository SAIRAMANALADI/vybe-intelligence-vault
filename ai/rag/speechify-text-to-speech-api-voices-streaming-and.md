---
title: Speechify Text to Speech API — Voices, Streaming, and SSML | Speechify API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.speechify.ai/tts/guides/welcome
published_at: '2026-06-24T20:51:07.570152+05:30'
collected_at: '2026-06-24T20:51:07.570165+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:speechify-text-to-speech-api-voices-streaming-and
first_seen: '2026-06-24T20:51:07.570165+05:30'
last_seen: '2026-06-24T20:51:07.570165+05:30'
last_checked: '2026-06-24T20:51:07.570165+05:30'
health_score: 100
---

# Speechify Text to Speech API — Voices, Streaming, and SSML | Speechify API

## Summary

- **API Endpoint & Authentication**: Single POST endpoint `/v1/audio/speech` with Bearer token authentication (`Authorization: Bearer <API_KEY>`), supporting JSON input with fields like `input`, `voice_id`, `audio_format`, and `model`.

- **Voice Cloning & Multilingual Support**: Clone voices from 10-30s samples; cloned voices work across 30+ languages. Models include `simba-english` (flagship), `simba-multilingual` (30+ languages), and `simba-3.0` (low-latency streaming).

- **Advanced Features**: SSML for fine-grained control (pitch, rate, pauses, emotion presets), streaming up to 20k chars/request, and speech marks for word-level timestamps. SDKs available in Python (`speechify-api`) and TypeScript (`@speechify/api`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T20:51:07.570152+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://docs.speechify.ai/tts/guides/welcome
