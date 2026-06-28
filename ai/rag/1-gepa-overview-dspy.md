---
title: 1. GEPA Overview - DSPy
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dspy.ai/api/optimizers/GEPA/overview/
published_at: '2026-06-28T19:50:56.023552+05:30'
collected_at: '2026-06-28T19:50:56.023566+05:30'
tags:
- anthropic
- benchmark
- hackernews
- models
- openai
- paper
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:1-gepa-overview-dspy
first_seen: '2026-06-28T19:50:56.023566+05:30'
last_seen: '2026-06-28T19:50:56.023566+05:30'
last_checked: '2026-06-28T19:50:56.023566+05:30'
health_score: 100
---

# 1. GEPA Overview - DSPy

## Summary

- **GEPA** is an evolutionary optimizer that adaptively evolves textual components (e.g., prompts) using reflection, leveraging both scalar scores and textual feedback to guide optimization, enabling high-performing prompts with minimal rollouts.

- **Core mechanism**: Captures execution traces, identifies predictor-specific sub-traces, and uses reflection to propose improved instructions; supports granular textual feedback at predictor or system level via a custom `GEPAFeedbackMetric` function.

- **Key parameters**: Requires `metric` and `reflection_lm`; supports auto-budget presets (`light`/`medium`/`heavy`), merge-based optimization (`use_merge=True`), parallel evaluation (`num_threads`), and detailed logging/tracking (`log_dir`, `track_stats`, `use_wandb`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T19:50:56.023552+05:30

## Related Tags

- anthropic
- benchmark
- hackernews
- models
- openai
- paper
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://dspy.ai/api/optimizers/GEPA/overview/
