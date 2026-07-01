---
title: Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
published_at: '2026-07-02T01:59:24.791919+05:30'
collected_at: '2026-07-02T01:59:24.791935+05:30'
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
first_seen: '2026-07-02T01:59:24.791935+05:30'
last_seen: '2026-07-02T01:59:24.791935+05:30'
last_checked: '2026-07-02T01:59:24.791935+05:30'
health_score: 100
---

# Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack

## Summary

- **Pipeline Architecture**: Implements a RAG pipeline using `InMemoryDocumentStore`, `SentenceTransformersDocumentEmbedder` for document embeddings, `SentenceTransformersTextEmbedder` for query embeddings, `InMemoryEmbeddingRetriever` for document retrieval, `ChatPromptBuilder` for prompt templating, and a `ChatGenerator` (e.g., `OpenAIChatGenerator`, `MistralChatGenerator`, or `TransformersChatGenerator`) for answer generation.

- **Document Processing**: Documents (e.g., Wikipedia pages) are embedded using `SentenceTransformersDocumentEmbedder` (`all-MiniLM-L6-v2` model) and stored in `InMemoryDocumentStore` for retrieval.

- **Query Execution**: User queries are embedded via `SentenceTransformersTextEmbedder`, retrieved via `InMemoryEmbeddingRetriever`, and combined with a prompt template in `ChatPromptBuilder` before being passed to the `ChatGenerator` for answer synthesis.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T01:59:24.791919+05:30

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
