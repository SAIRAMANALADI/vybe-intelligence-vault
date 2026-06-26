---
title: Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack
archive_category: vector-databases
source_category: ai/rag
source_url: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
resource_id: blog:creating-your-first-qa-pipeline-with-retrieval-aug
local_vault_path: ai/rag/creating-your-first-qa-pipeline-with-retrieval-aug.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- anthropic
- dataset
- meta-ai
- mistral
- models
- openai
- rag
- web-crawled
selection_reason:
- Valuable developer reference
---

# Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: prompt
- Selection reasons:
  - Valuable developer reference

## Summary

- **Document Processing Pipeline**: Uses `SentenceTransformersDocumentEmbedder` (e.g., `all-MiniLM-L6-v2`) to generate embeddings for documents stored in `InMemoryDocumentStore`, enabling vector-based retrieval.

- **RAG Pipeline Architecture**: Combines `SentenceTransformersTextEmbedder` for query embedding, `InMemoryEmbeddingRetriever` for document retrieval, `ChatPromptBuilder` for structured prompt generation, and a `ChatGenerator` (e.g., `OpenAIChatGenerator`, `TransformersChatGenerator`) f

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline

## Local Vault File

Path: [creating-your-first-qa-pipeline-with-retrieval-aug.md](../../ai/rag/creating-your-first-qa-pipeline-with-retrieval-aug.md)
