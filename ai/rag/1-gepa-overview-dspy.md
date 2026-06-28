---
title: 1. GEPA Overview - DSPy
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dspy.ai/api/optimizers/GEPA/overview/
published_at: '2026-06-28T22:11:25.621677+05:30'
collected_at: '2026-06-28T22:11:25.621693+05:30'
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
first_seen: '2026-06-28T22:11:25.621693+05:30'
last_seen: '2026-06-28T22:11:25.621693+05:30'
last_checked: '2026-06-28T22:11:25.621693+05:30'
health_score: 100
---

# 1. GEPA Overview - DSPy

## Summary

- **GEPA** is an evolutionary optimizer that adaptively evolves textual components (e.g., prompts) using reflection, leveraging both scalar scores and textual feedback to guide optimization, achieving high performance in few rollouts.

- **Key parameters** include `metric` (required feedback function), `reflection_lm` (strong LLM for reflection), `candidate_selection_strategy` (Pareto or current_best), and `component_selector` (round_robin or all predictors), with advanced options like `use_merge` for merging successful variants.

- **Outputs** include detailed optimization logs (via `log_dir`), Pareto frontiers of batch tasks (when `track_stats=True`), and best outputs per task (via `detailed_results.best_outputs_valset`), with optional Weights & Biases or MLflow integration.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T22:11:25.621677+05:30

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
