---
title: 1. GEPA Overview - DSPy
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dspy.ai/api/optimizers/GEPA/overview/
published_at: '2026-06-28T03:50:47.814012+05:30'
collected_at: '2026-06-28T03:50:47.814028+05:30'
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
first_seen: '2026-06-28T03:50:47.814028+05:30'
last_seen: '2026-06-28T03:50:47.814028+05:30'
last_checked: '2026-06-28T03:50:47.814028+05:30'
health_score: 100
---

# 1. GEPA Overview - DSPy

## Summary

- **GEPA** is an evolutionary optimizer that adaptively evolves textual components (e.g., prompts) using reflection, leveraging both scalar scores and textual feedback to guide optimization, enabling high-performing prompts with minimal rollouts.

- **Key parameters** include `metric` (required feedback/evaluation function), `reflection_lm` (required strong LLM for reflection), and optimization controls like `auto`, `max_full_evals`, or `max_metric_calls`, with advanced features such as merge-based optimization (`use_merge`), component selection strategies (`component_selector`), and detailed logging (`log_dir`, `track_stats`).

- **Implementation** requires a `GEPAFeedbackMetric` function that optionally returns `{'score': float, 'feedback': str}` for individual predictors or program-level feedback, with GEPA capturing execution traces (`DSPyTrace`) to introspect and propose improvements.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T03:50:47.814012+05:30

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
