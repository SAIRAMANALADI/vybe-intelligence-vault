---
title: 1. GEPA Overview - DSPy
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://dspy.ai/api/optimizers/GEPA/overview
published_at: '2026-06-22T10:24:32.818199+05:30'
collected_at: '2026-06-22T10:24:32.818212+05:30'
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
first_seen: '2026-06-22T10:24:32.818212+05:30'
last_seen: '2026-06-22T10:24:32.818212+05:30'
last_checked: '2026-06-22T10:24:32.818212+05:30'
health_score: 100
---

# 1. GEPA Overview - DSPy

## Summary

- **GEPA** is an evolutionary optimizer that adaptively evolves textual components (e.g., prompts) using reflection, leveraging both scalar scores and textual feedback to guide optimization, enabling high-performing prompts in few rollouts.

- **Core Parameters**: Requires a `metric` function returning `{'score': float, 'feedback': str}` for predictor-level optimization; supports auto budget modes (`light`/`medium`/`heavy`), merge-based optimization (`use_merge=True`), and parallel evaluation (`num_threads`).

- **Advanced Features**: Supports Pareto-frontier candidate selection, custom instruction proposers (`ProposalFn`), component selectors (`round_robin`/`all`), and detailed logging (`track_stats`, `log_dir`, `use_wandb`); reflection LM (`dspy.LM(model='gpt-5')`) is critical for performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T10:24:32.818199+05:30

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

Original source: https://dspy.ai/api/optimizers/GEPA/overview
