---
title: RAGatouille
archive_category: datasets
source_category: ai/rag
source_url: https://ben.clavie.eu/ragatouille
resource_id: blog:ragatouille
local_vault_path: ai/rag/ragatouille.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- benchmark
- dataset
- meta-ai
- mistral
- models
- openai
- paper
- rag
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# RAGatouille

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Philosophy & Design**: RAGatouille aims to bridge the gap between Information Retrieval (IR) research and practical applications by leveraging late-interaction retrievers (e.g., ColBERT), offering parameterizable defaults and reusable components (e.g., `RAGPretrainedModel`, `RAGTrainer`) while avoiding reinvention by integrating existing tools like `LlamaIndex` and `DSPy`.

- **Late-Interaction Retrieval**: ColBERT employs a **bag-of-embeddings** approach, representing documents as sums of c

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://ben.clavie.eu/ragatouille

## Local Vault File

Path: [ragatouille.md](../../ai/rag/ragatouille.md)
