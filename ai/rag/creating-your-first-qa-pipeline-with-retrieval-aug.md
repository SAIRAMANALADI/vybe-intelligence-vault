---
title: Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
published_at: '2026-07-07T04:17:35.644519+05:30'
collected_at: '2026-07-07T04:17:35.644527+05:30'
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
first_seen: '2026-07-07T04:17:35.644527+05:30'
last_seen: '2026-07-07T04:17:35.644527+05:30'
last_checked: '2026-07-07T04:17:35.644527+05:30'
health_score: 100
---

# Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack

## Summary

- Uses **Haystack** framework to implement a **Retrieval-Augmented Generation (RAG)** pipeline with components: `InMemoryDocumentStore`, `SentenceTransformersDocumentEmbedder`, `SentenceTransformersTextEmbedder`, `InMemoryEmbeddingRetriever`, `ChatPromptBuilder`, and a `ChatGenerator` (e.g., `OpenAIChatGenerator`, `MistralChatGenerator`, or `TransformersChatGenerator`).

- **Document processing pipeline**: Loads Wikipedia data (e.g., *Seven Wonders of the Ancient World*), embeds documents using `SentenceTransformersDocumentEmbedder` (`all-MiniLM-L6-v2`), and stores them in `InMemoryDocumentStore` for retrieval.

- **Query flow**: Embeds user queries via `SentenceTransformersTextEmbedder`, retrieves top-k relevant documents using `InMemoryEmbeddingRetriever`, constructs a prompt with `ChatPromptBuilder`, and generates answers via a `ChatGenerator` (local or API-based).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T04:17:35.644519+05:30

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
