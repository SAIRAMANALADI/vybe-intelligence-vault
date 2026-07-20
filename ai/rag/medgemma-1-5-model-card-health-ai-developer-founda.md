---
title: MedGemma 1.5 model card | Health AI Developer Foundations | Google for Developers
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/health-ai-developer-foundations/medgemma/model-card
published_at: '2026-07-20T01:15:32.009080+05:30'
collected_at: '2026-07-20T01:15:32.009091+05:30'
tags:
- agents
- benchmark
- dataset
- deepmind
- hackernews
- models
- paper
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:medgemma-1-5-model-card-health-ai-developer-founda
first_seen: '2026-07-20T01:15:32.009091+05:30'
last_seen: '2026-07-20T01:15:32.009091+05:30'
last_checked: '2026-07-20T01:15:32.009091+05:30'
health_score: 100
---

# MedGemma 1.5 model card | Health AI Developer Foundations | Google for Developers

## Summary

- **MedGemma 1.5 Variants**: Includes a 4B multimodal version (instruction-tuned), a 27B text-only version, and a 27B multimodal version, with multimodal models using a SigLIP image encoder pre-trained on de-identified medical data (e.g., CT/MRI, dermatology, histopathology).

- **Technical Specifications**: Decoder-only Transformer architecture (Gemma 3-based), supports 128K token context length, grouped-query attention (GQA), and outputs text with a max of 8192 tokens; optimized for medical text generation and multimodal inputs (896x896 images encoded to 256 tokens).

- **Performance Benchmarks**: Evaluated on clinically relevant tasks (e.g., 3D radiology classification, visual question answering, WSI histopathology) with notable improvements over MedGemma 1 (e.g., 64.7% macro accuracy on MRI Dataset 1 vs. 51.3% in MedGemma 1 4B).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T01:15:32.009080+05:30

## Related Tags

- agents
- benchmark
- dataset
- deepmind
- hackernews
- models
- paper
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://developers.google.com/health-ai-developer-foundations/medgemma/model-card
