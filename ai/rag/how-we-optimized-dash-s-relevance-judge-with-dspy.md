---
title: How we optimized Dash's relevance judge with DSPy - Dropbox
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dropbox.tech/machine-learning/optimizing-dropbox-dash-relevance-judge-with-dspy
published_at: '2026-07-01T15:50:05.888863+05:30'
collected_at: '2026-07-01T15:50:05.888876+05:30'
tags:
- benchmark
- dataset
- hackernews
- models
- openai
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:how-we-optimized-dash-s-relevance-judge-with-dspy
first_seen: '2026-07-01T15:50:05.888876+05:30'
last_seen: '2026-07-01T15:50:05.888876+05:30'
last_checked: '2026-07-01T15:50:05.888876+05:30'
health_score: 100
---

# How we optimized Dash's relevance judge with DSPy - Dropbox

## Summary

- **DSPy Optimization Framework**: Used DSPy's GEPA optimizer to systematically adapt a relevance judge from OpenAI's o3 to OpenAI's gpt-oss-120b, reducing NMSE by 45% (8.83 → 4.86) and cutting adaptation time from weeks to days while maintaining human alignment.

- **Operational Reliability**: Optimized a smaller model (gemma-3-12b) to reduce malformed JSON outputs by >97% (40% baseline → <1% invalid) while improving NMSE from 46.88 to 17.26, ensuring machine-readable outputs for downstream pipelines.

- **Scalability & Cost Efficiency**: Enabled 10–100x more data labeling at the same cost by migrating to cheaper models, while preserving evaluation quality and reducing regression risks during model swaps.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T15:50:05.888863+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- models
- openai
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://dropbox.tech/machine-learning/optimizing-dropbox-dash-relevance-judge-with-dspy
