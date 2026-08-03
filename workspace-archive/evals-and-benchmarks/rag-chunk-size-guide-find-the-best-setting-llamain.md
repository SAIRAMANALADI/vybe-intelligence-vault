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

- **Chunk Size Impact**: Optimal `chunk_size` balances granularity and efficiency; smaller sizes (e.g., 128) risk missing critical context, while larger sizes (e.g., 512–2048) improve relevancy but increase response time.
- **Evaluation Metrics**: Faithfulness (hallucination-free responses) and Relevancy (query alignment) are measured using GPT-4 evaluators, alongside average response time across chunk sizes.
- **Optimal Configuration**: Empirical results suggest `chunk_size=1024` maximizes Fait

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://www.llamaindex.ai/blog/evaluating-the-ideal-chunk-size-for-a-rag-system-using-llamaindex-6207e5d3fec5

## Local Vault File

Path: [rag-chunk-size-guide-find-the-best-setting-llamain.md](../../ai/rag/rag-chunk-size-guide-find-the-best-setting-llamain.md)
