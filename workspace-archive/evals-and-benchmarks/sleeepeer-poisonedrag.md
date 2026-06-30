---
title: sleeepeer/PoisonedRAG
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://github.com/sleeepeer/PoisonedRAG
resource_id: github:sleeepeer/poisonedrag
local_vault_path: ai/rag/sleeepeer-poisonedrag.md
quality_score: 70
archive_score: 79
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- benchmark
- github-repo
- hackernews
- python
- rag
- reddit
selection_reason:
- Strong keyword match
- Useful for project building
---

# sleeepeer/PoisonedRAG

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 79 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by poisoning the retrieval corpus, causing LLMs to generate adversarially manipulated outputs while maintaining high retrieval relevance.

- **Technical Mechanism**: Leverages *trigger-based poisoning* where adversaries inject carefully crafted documents into the retrieval database, exploiting the RAG pipeline’s reliance on retrieved context

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://github.com/sleeepeer/PoisonedRAG

## Local Vault File

Path: [sleeepeer-poisonedrag.md](../../ai/rag/sleeepeer-poisonedrag.md)
