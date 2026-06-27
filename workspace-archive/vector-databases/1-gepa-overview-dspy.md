---
title: 1. GEPA Overview - DSPy
archive_category: vector-databases
source_category: ai/rag
source_url: https://dspy.ai/api/optimizers/GEPA/overview/
resource_id: blog:1-gepa-overview-dspy
local_vault_path: ai/rag/1-gepa-overview-dspy.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: prompt
importance: medium
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
selection_reason:
- Valuable developer reference
---

# 1. GEPA Overview - DSPy

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: prompt
- Selection reasons:
  - Valuable developer reference

## Summary

- **GEPA** is an evolutionary optimizer that adaptively evolves textual components (e.g., prompts) using reflection, leveraging both scalar scores and textual feedback to guide optimization, enabling high-performing prompts with minimal rollouts.

- **Key parameters** include `metric` (required feedback/evaluation function), `reflection_lm` (required strong LLM for reflection), and optimization controls like `auto`, `max_full_evals`, or `max_metric_calls`, with advanced features such as merge-ba

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://dspy.ai/api/optimizers/GEPA/overview/

## Local Vault File

Path: [1-gepa-overview-dspy.md](../../ai/rag/1-gepa-overview-dspy.md)
