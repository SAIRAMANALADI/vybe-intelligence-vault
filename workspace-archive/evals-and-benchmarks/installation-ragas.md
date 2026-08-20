---
title: Installation - Ragas
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://docs.ragas.io/en/latest/getstarted/install/
resource_id: blog:installation-ragas
local_vault_path: ai/rag/installation-ragas.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- openai
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Installation - Ragas

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Installation via `pip install ragas` for stable releases; use `pip install git+https://github.com/vibrantlabsai/ragas.git` for latest features.
- Editable install for development: `git clone https://github.com/vibrantlabsai/ragas.git` followed by `pip install -e .`.
- Explicit dependency management recommended: `pip install -U "langchain-core>=0.2,<0.3" "langchain-openai>=0.1,<0.2" openai` to avoid version conflicts.

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://docs.ragas.io/en/latest/getstarted/install/

## Local Vault File

Path: [installation-ragas.md](../../ai/rag/installation-ragas.md)
