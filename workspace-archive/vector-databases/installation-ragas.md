---
title: Installation - Ragas
archive_category: vector-databases
source_category: ai/rag
source_url: https://docs.ragas.io/en/latest/getstarted/install/
resource_id: blog:installation-ragas
local_vault_path: ai/rag/installation-ragas.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- openai
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# Installation - Ragas

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Valuable developer reference

## Summary

- Ragas can be installed via `pip install ragas` or from the GitHub main branch using `pip install git+https://github.com/vibrantlabsai/ragas.git`.
- For development, clone the repository and install in editable mode: `git clone https://github.com/vibrantlabsai/ragas.git && pip install -e .`.
- To avoid dependency conflicts with `langchain_openai`, explicitly install `langchain-core>=0.2,<0.3`, `langchain-openai>=0.1,<0.2`, and `openai`.

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.ragas.io/en/latest/getstarted/install/

## Local Vault File

Path: [installation-ragas.md](../../ai/rag/installation-ragas.md)
