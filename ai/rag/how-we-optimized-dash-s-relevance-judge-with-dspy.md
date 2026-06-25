---
title: How we optimized Dash's relevance judge with DSPy - Dropbox
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dropbox.tech/machine-learning/optimizing-dropbox-dash-relevance-judge-with-dspy
published_at: '2026-06-25T20:48:36.591505+05:30'
collected_at: '2026-06-25T20:48:36.591521+05:30'
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
first_seen: '2026-06-25T20:48:36.591521+05:30'
last_seen: '2026-06-25T20:48:36.591521+05:30'
last_checked: '2026-06-25T20:48:36.591521+05:30'
health_score: 100
---

# How we optimized Dash's relevance judge with DSPy - Dropbox

## Summary

- **DSPy Optimization Framework**: Used DSPy’s GEPA optimizer to systematically adapt a relevance judge from OpenAI’s o3 to OpenAI’s gpt-oss-120b, reducing NMSE (Normalized Mean Squared Error) by 45% (from 8.83 to 4.86) while enabling 10–100x more data labeling at the same cost by optimizing prompts against a fixed human-alignment metric.

- **Operational Reliability**: Improved JSON output reliability of a smaller model (gemma-3-12b) by >97% (malformed outputs dropped from 41% to <1%) while reducing NMSE from 46.88 to 17.26, demonstrating DSPy’s ability to optimize both alignment with human judgments and structural correctness.

- **Scalable Adaptation Pipeline**: Replaced weeks of manual prompt tuning with a 1–2 day DSPy optimization loop, enabling rapid model swaps and reducing regression risks while maintaining task stability (e.g., enforcing 1–5 rating scale and avoiding overfitting to specific examples).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T20:48:36.591505+05:30

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
