---
title: 'monday Service + LangSmith: Building a Code-First Evaluation Strategy from
  Day 1'
archive_category: model-providers
source_category: ai/rag
source_url: https://blog.langchain.com/customers-monday/
resource_id: blog:monday-service-langsmith-building-a-code-first-eva
local_vault_path: ai/rag/monday-service-langsmith-building-a-code-first-eva.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- agents
- anthropic
- benchmark
- dataset
- frontend_ui
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Useful for project building
---

# monday Service + LangSmith: Building a Code-First Evaluation Strategy from Day 1

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Dual-Layered Evaluation Framework**: Implemented offline evaluations (unit-testing layer) for core logic, edge cases, and KB grounding, alongside online evaluations (real-time monitoring) using LangSmith's Multi-Turn Evaluators to track business metrics like resolution rates and user satisfaction in production.

- **Optimized Parallel Evaluation Pipeline**: Achieved 8.7x speedup (18s vs. 162s) by leveraging Vitest's parallelism (CPU-bound) and LangSmith's `ls.describe.concurrent` (I/O-bound)

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://blog.langchain.com/customers-monday/

## Local Vault File

Path: [monday-service-langsmith-building-a-code-first-eva.md](../../ai/rag/monday-service-langsmith-building-a-code-first-eva.md)
