---
title: How we optimized Dash's relevance judge with DSPy - Dropbox
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dropbox.tech/machine-learning/optimizing-dropbox-dash-relevance-judge-with-dspy
published_at: '2026-07-08T01:52:08.894801+05:30'
collected_at: '2026-07-08T01:52:08.894816+05:30'
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
first_seen: '2026-07-08T01:52:08.894816+05:30'
last_seen: '2026-07-08T01:52:08.894816+05:30'
last_checked: '2026-07-08T01:52:08.894816+05:30'
health_score: 100
---

# How we optimized Dash's relevance judge with DSPy - Dropbox

## Summary

- **DSPy Optimization Framework**: Implemented DSPy's GEPA optimizer to systematically adapt Dropbox Dash's relevance judge from a high-cost proprietary model (OpenAI o3) to a lower-cost open-weight model (gpt-oss-120b), reducing NMSE by **45%** (from 8.83 to 4.86) and cutting model adaptation time from weeks to days while maintaining human alignment.

- **Operational Reliability Enhancement**: Optimized the judge for **structural reliability** using a smaller model (gemma-3-12b), reducing malformed JSON outputs by **>97%** (from 40% to <1%) while improving NMSE from 46.88 to 17.26, ensuring robust machine-readable outputs for automated pipelines.

- **Scalability & Cost Efficiency**: Enabled **10–100x data labeling** at the same cost by leveraging the optimized, lower-cost judge, improving statistical power for experiments and reducing overfitting risks in downstream models.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T01:52:08.894801+05:30

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
