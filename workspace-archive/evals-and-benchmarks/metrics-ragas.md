---
title: Metrics - Ragas
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://docs.ragas.io/en/stable/concepts/metrics/
resource_id: blog:metrics-ragas
local_vault_path: ai/rag/metrics-ragas.md
quality_score: 70
archive_score: 76
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- benchmark
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Metrics - Ragas

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 76 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Metric Design Principles**: Ragas metrics follow a modular architecture emphasizing **faithfulness**, **answer relevance**, and **contextual precision** to evaluate RAG pipelines without ground truth, using LLM-based scoring functions.

- **Core Metrics**: Includes **Faithfulness** (measures hallucination via entailment checks), **Answer Relevance** (assesses alignment with input query), and **Context Precision** (evaluates retrieved context utility), all computed via probabilistic LLM judgm

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://docs.ragas.io/en/stable/concepts/metrics/

## Local Vault File

Path: [metrics-ragas.md](../../ai/rag/metrics-ragas.md)
