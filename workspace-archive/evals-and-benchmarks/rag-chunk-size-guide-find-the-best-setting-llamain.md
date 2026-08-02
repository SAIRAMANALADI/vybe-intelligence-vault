---
title: 'RAG Chunk Size Guide: Find The Best Setting | LlamaIndex'
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://www.llamaindex.ai/blog/evaluating-the-ideal-chunk-size-for-a-rag-system-using-llamaindex-6207e5d3fec5
resource_id: blog:rag-chunk-size-guide-find-the-best-setting-llamain
local_vault_path: ai/rag/rag-chunk-size-guide-find-the-best-setting-llamain.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- benchmark
- dataset
- meta-ai
- models
- openai
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# RAG Chunk Size Guide: Find The Best Setting | LlamaIndex

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Chunk size impact**: Small chunk sizes (e.g., 128) risk missing critical information in top retrieved chunks, while larger sizes (e.g., 512) ensure context inclusion but may slow response generation.
- **Evaluation metrics**: Faithfulness (hallucination avoidance) and Relevancy (query-context alignment) are key metrics for assessing RAG performance alongside average response time.
- **Optimal balance**: Empirical testing (e.g., with LlamaIndex’s `Response Evaluation`) shows chunk size **1024

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://www.llamaindex.ai/blog/evaluating-the-ideal-chunk-size-for-a-rag-system-using-llamaindex-6207e5d3fec5

## Local Vault File

Path: [rag-chunk-size-guide-find-the-best-setting-llamain.md](../../ai/rag/rag-chunk-size-guide-find-the-best-setting-llamain.md)
