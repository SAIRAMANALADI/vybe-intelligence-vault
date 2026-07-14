---
title: sleeepeer/PoisonedRAG
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://github.com/sleeepeer/PoisonedRAG
resource_id: github:sleeepeer/poisonedrag
local_vault_path: ai/rag/sleeepeer-poisonedrag.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- github-repo
- hackernews
- python
- rag
- reddit
selection_reason:
- Strong keyword match
- Active open-source repository
---

# sleeepeer/PoisonedRAG

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **Attack Mechanism**: Introduces *PoisonedRAG*, a novel knowledge corruption attack targeting Retrieval-Augmented Generation (RAG) systems by manipulating the retrieval database to inject adversarial content, causing LLMs to generate misleading or harmful outputs.

- **Technical Implementation**: Leverages *trigger-based poisoning* where adversaries subtly alter or insert malicious documents into the retrieval corpus, exploiting the RAG pipeline’s reliance on external knowledge sources to prop

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://github.com/sleeepeer/PoisonedRAG

## Local Vault File

Path: [sleeepeer-poisonedrag.md](../../ai/rag/sleeepeer-poisonedrag.md)
