---
title: How we optimized Dash's relevance judge with DSPy - Dropbox
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dropbox.tech/machine-learning/optimizing-dropbox-dash-relevance-judge-with-dspy
published_at: '2026-07-21T09:20:23.921991+05:30'
collected_at: '2026-07-21T09:20:23.921999+05:30'
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
first_seen: '2026-07-21T09:20:23.921999+05:30'
last_seen: '2026-07-21T09:20:23.921999+05:30'
last_checked: '2026-07-21T09:20:23.921999+05:30'
health_score: 100
---

# How we optimized Dash's relevance judge with DSPy - Dropbox

## Summary

- **DSPy Optimization Framework**: Dropbox used DSPy’s GEPA optimizer to systematically adapt a relevance judge from a high-cost proprietary model (OpenAI’s o3) to a lower-cost open-weight model (gpt-oss-120b), reducing NMSE by 45% (from 8.83 to 4.86) and cutting adaptation time from weeks to days while maintaining human alignment.

- **Operational Reliability Enhancement**: DSPy optimization reduced malformed JSON outputs by >97% when adapting the judge to a smaller model (gemma-3-12b), improving valid response rates from 58% to 99% while simultaneously enhancing relevance scoring accuracy (NMSE dropped from 46.88 to 17.26).

- **Scalability & Cost Efficiency**: The optimized judge enabled 10–100x more data labeling at the same cost, improving downstream model training robustness and reducing regression risks during model swaps while preserving task constraints (e.g., 1–5 rating scale).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T09:20:23.921991+05:30

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
