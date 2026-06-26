---
title: Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
published_at: '2026-06-27T01:46:28.616687+05:30'
collected_at: '2026-06-27T01:46:28.616701+05:30'
tags:
- anthropic
- dataset
- meta-ai
- mistral
- models
- openai
- rag
- web-crawled
status: active
resource_id: blog:creating-your-first-qa-pipeline-with-retrieval-aug
first_seen: '2026-06-27T01:46:28.616701+05:30'
last_seen: '2026-06-27T01:46:28.616701+05:30'
last_checked: '2026-06-27T01:46:28.616701+05:30'
health_score: 100
---

# Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack

## Summary

- **Document Processing Pipeline**: Uses `SentenceTransformersDocumentEmbedder` (e.g., `all-MiniLM-L6-v2`) to generate embeddings for documents stored in `InMemoryDocumentStore`, enabling vector-based retrieval.

- **RAG Pipeline Architecture**: Combines `SentenceTransformersTextEmbedder` for query embedding, `InMemoryEmbeddingRetriever` for document retrieval, `ChatPromptBuilder` for structured prompt generation, and a `ChatGenerator` (e.g., `OpenAIChatGenerator`, `TransformersChatGenerator`) for answer synthesis.

- **Execution Flow**: Pipeline connects components sequentially: query embedding → document retrieval → prompt construction → LLM inference, with explicit variable mapping (e.g., `text_embedder.embedding` → `retriever.query_embedding`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T01:46:28.616687+05:30

## Related Tags

- anthropic
- dataset
- meta-ai
- mistral
- models
- openai
- rag
- web-crawled

## Source

Original source: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
