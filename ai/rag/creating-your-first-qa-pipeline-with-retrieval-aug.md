---
title: Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
published_at: '2026-07-08T14:27:22.205665+05:30'
collected_at: '2026-07-08T14:27:22.205681+05:30'
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
first_seen: '2026-07-08T14:27:22.205681+05:30'
last_seen: '2026-07-08T14:27:22.205681+05:30'
last_checked: '2026-07-08T14:27:22.205681+05:30'
health_score: 100
---

# Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack

## Summary

- **Document Embedding & Storage**: Uses `SentenceTransformersDocumentEmbedder` (e.g., `all-MiniLM-L6-v2`) to generate embeddings for documents, stored in an `InMemoryDocumentStore` via `write_documents()`.

- **RAG Pipeline Components**: Constructs a pipeline with `SentenceTransformersTextEmbedder` (query embedding), `InMemoryEmbeddingRetriever` (document retrieval), `ChatPromptBuilder` (template-based prompt generation), and a `ChatGenerator` (e.g., `OpenAIChatGenerator`, `MistralChatGenerator`, or local `TransformersChatGenerator`).

- **Execution Flow**: Connects components via `Pipeline` with explicit edges (`text_embedder → retriever → prompt_builder → llm`), where the query embedding and user question are passed to the retriever and prompt builder, respectively, for answer generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T14:27:22.205665+05:30

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
