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
resource_kind: template
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
- Useful for project building
---

# Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: template
- Selection reasons:
  - Useful for project building

## Summary

- **Document Embedding & Storage**: Uses `SentenceTransformersDocumentEmbedder` (e.g., `all-MiniLM-L6-v2`) to generate embeddings for documents, stored in an `InMemoryDocumentStore` via `write_documents()`.

- **RAG Pipeline Components**: Constructs a pipeline with `SentenceTransformersTextEmbedder` (query embedding), `InMemoryEmbeddingRetriever` (document retrieval), `ChatPromptBuilder` (template-based prompt generation), and a `ChatGenerator` (e.g., `OpenAIChatGenerator`, `MistralChatGenerator

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline

## Local Vault File

Path: [creating-your-first-qa-pipeline-with-retrieval-aug.md](../../ai/rag/creating-your-first-qa-pipeline-with-retrieval-aug.md)
