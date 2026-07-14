---
title: Testset Generation for RAG - Ragas
archive_category: datasets
source_category: ai/rag
source_url: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
resource_id: blog:testset-generation-for-rag-ragas
local_vault_path: ai/rag/testset-generation-for-rag-ragas.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- anthropic
- dataset
- meta-ai
- models
- openai
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Testset Generation for RAG - Ragas

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Testset Generation Pipeline**: Uses a two-phase process—(1) **Knowledge Graph Creation** from input documents with transformations (e.g., default_transforms) enriching nodes/relationships via LLM/embedding models, and (2) **Testset Generation** leveraging the knowledge graph to synthesize scenarios (e.g., SingleHopSpecificQuerySynthesizer, MultiHopAbstractQuerySynthesizer) into a structured test dataset.

- **LLM/Embedding Integration**: Supports multiple providers (OpenAI, AWS Bedrock, Goog

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/

## Local Vault File

Path: [testset-generation-for-rag-ragas.md](../../ai/rag/testset-generation-for-rag-ragas.md)
