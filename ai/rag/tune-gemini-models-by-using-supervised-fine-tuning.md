---
title: Tune Gemini models by using supervised fine-tuning | Gemini Enterprise Agent
  Platform | Google Cloud Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://cloud.google.com/gemini-enterprise-agent-platform/models/gemini-use-supervised-tuning
published_at: '2026-08-10T08:20:36.917716+05:30'
collected_at: '2026-08-10T08:20:36.917729+05:30'
tags:
- agents
- benchmark
- dataset
- models
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:tune-gemini-models-by-using-supervised-fine-tuning
first_seen: '2026-08-10T08:20:36.917729+05:30'
last_seen: '2026-08-10T08:20:36.917729+05:30'
last_checked: '2026-08-10T08:20:36.917729+05:30'
health_score: 100
---

# Tune Gemini models by using supervised fine-tuning | Gemini Enterprise Agent Platform | Google Cloud Documentation

## Summary

- **Supported Models & Tuning Types**: Supervised fine-tuning is supported for **Gemini 3.5 Flash, 3.1 Flash-Lite, 2.5 Pro, 2.5 Flash, and 2.5 Flash-Lite**, with tuning available for **text, image, document, audio, video, and function-calling** modalities via JSONL-formatted datasets in Cloud Storage.

- **Tuning Job Configuration**: Tuning jobs can be initiated via **Google Cloud Console, Gen AI SDK, Agent Platform SDK, or REST API**, with parameters including **epochs, adapter size, learning rate multiplier, validation datasets, and optional evaluation metrics** (e.g., FLUENCY, BLEU, ROUGE) for automated post-tuning assessment.

- **Output & Deployment**: Tuned models are deployed as endpoints with **intermediate checkpoints** (optional single-checkpoint export), and results are stored in specified Cloud Storage buckets, with Python SDK examples demonstrating job polling, metric logging, and endpoint retrieval.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T08:20:36.917716+05:30

## Related Tags

- agents
- benchmark
- dataset
- models
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://cloud.google.com/gemini-enterprise-agent-platform/models/gemini-use-supervised-tuning
