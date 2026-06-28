---
title: 1. GEPA Overview - DSPy
archive_category: model-providers
source_category: ai/rag
source_url: https://dspy.ai/api/optimizers/GEPA/overview/
resource_id: blog:1-gepa-overview-dspy
local_vault_path: ai/rag/1-gepa-overview-dspy.md
quality_score: 70
archive_score: 74
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
- Strong keyword match
- Valuable developer reference
---

# 1. GEPA Overview - DSPy

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **GEPA** is an evolutionary optimizer that adaptively evolves textual components (e.g., prompts) using reflection, leveraging both scalar scores and textual feedback to guide optimization, achieving high performance in few rollouts.

- **Key parameters** include `metric` (required feedback function), `reflection_lm` (strong LLM for reflection), `candidate_selection_strategy` (Pareto or current_best), and `component_selector` (round_robin or all predictors), with advanced options like `use_merg

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://dspy.ai/api/optimizers/GEPA/overview/

## Local Vault File

Path: [1-gepa-overview-dspy.md](../../ai/rag/1-gepa-overview-dspy.md)
