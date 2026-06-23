---
title: How we optimized Dash's relevance judge with DSPy - Dropbox
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dropbox.tech/machine-learning/optimizing-dropbox-dash-relevance-judge-with-dspy
published_at: '2026-06-23T09:53:36.137146+05:30'
collected_at: '2026-06-23T09:53:36.137152+05:30'
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
first_seen: '2026-06-23T09:53:36.137152+05:30'
last_seen: '2026-06-23T09:53:36.137152+05:30'
last_checked: '2026-06-23T09:53:36.137152+05:30'
health_score: 100
---

# How we optimized Dash's relevance judge with DSPy - Dropbox

## Summary

- **DSPy Optimization Framework**: Used DSPy's GEPA optimizer to systematically adapt a relevance judge from a high-cost proprietary model (OpenAI’s o3) to a lower-cost open model (gpt-oss-120b), reducing NMSE by 45% (from 8.83 to 4.86) while cutting adaptation time from weeks to days.

- **Structural Reliability Enhancement**: Optimized a smaller model (gemma-3-12b) to reduce malformed JSON outputs by >97% (from 40% to <3%), ensuring operational dependability for downstream pipelines despite model size and cost constraints.

- **Scalable Evaluation Metrics**: Defined NMSE (Normalized Mean Squared Error) as the primary metric for alignment with human judgments, combining deviation penalties with structural correctness penalties to ensure both accuracy and usability in production systems.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T09:53:36.137146+05:30

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
