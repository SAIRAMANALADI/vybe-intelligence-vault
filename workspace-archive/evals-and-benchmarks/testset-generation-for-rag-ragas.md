---
title: Testset Generation for RAG - Ragas
archive_category: evals-and-benchmarks
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

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Testset Generation Pipeline**: Uses a two-phase process—**Knowledge Graph Creation** (extracting nodes/relationships from documents via `KnowledgeGraph` and `Node` objects) and **Testset Generation** (synthesizing queries using `TestsetGenerator` with configurable distributions like `default_query_distribution`).

- **LLM/Embedding Integration**: Supports multiple providers (OpenAI, AWS Bedrock, Google AI/Vertex AI, Azure) via `LangchainLLMWrapper`/`LangchainEmbeddingsWrapper` or `LlamaIndex

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/

## Local Vault File

Path: [testset-generation-for-rag-ragas.md](../../ai/rag/testset-generation-for-rag-ragas.md)
