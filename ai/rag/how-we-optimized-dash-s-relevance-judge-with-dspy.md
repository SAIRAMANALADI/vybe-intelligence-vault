---
title: How we optimized Dash's relevance judge with DSPy - Dropbox
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dropbox.tech/machine-learning/optimizing-dropbox-dash-relevance-judge-with-dspy
published_at: '2026-07-20T03:47:23.905234+05:30'
collected_at: '2026-07-20T03:47:23.905252+05:30'
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
first_seen: '2026-07-20T03:47:23.905252+05:30'
last_seen: '2026-07-20T03:47:23.905252+05:30'
last_checked: '2026-07-20T03:47:23.905252+05:30'
health_score: 100
---

# How we optimized Dash's relevance judge with DSPy - Dropbox

## Summary

- **DSPy Optimization Framework**: Replaced manual prompt tuning with DSPy's GEPA optimizer to systematically adapt relevance judges across models (e.g., from OpenAI o3 to gpt-oss-120b), reducing NMSE by 45% (8.83 → 4.86) and cutting adaptation time from weeks to days while maintaining human alignment.

- **Cost-Efficiency & Scalability**: Enabled 10–100x data labeling at equivalent cost by migrating to cheaper models (e.g., gpt-oss-120b), while DSPy's structured feedback loop prevented overfitting and preserved task parameters (e.g., 1–5 rating scale).

- **Operational Reliability**: Reduced malformed JSON outputs by >97% (40% baseline → <1%) for gemma-3-12b via DSPy optimization, ensuring machine-readable outputs for automated pipelines while improving NMSE (46.88 → 17.26).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T03:47:23.905234+05:30

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
