---
title: Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
published_at: '2026-08-03T20:58:43.800647+05:30'
collected_at: '2026-08-03T20:58:43.800659+05:30'
tags:
- anthropic
- dataset
- meta-ai
- mistral
- models
- openai
- rag
- web-crawled
- workflows
status: active
resource_id: blog:creating-your-first-qa-pipeline-with-retrieval-aug
first_seen: '2026-08-03T20:58:43.800659+05:30'
last_seen: '2026-08-03T20:58:43.800659+05:30'
last_checked: '2026-08-03T20:58:43.800659+05:30'
health_score: 100
---

# Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack

## Summary

- **Pipeline Components**: Uses `InMemoryDocumentStore` with `SentenceTransformersDocumentEmbedder` for document embeddings, `SentenceTransformersTextEmbedder` for query embeddings, `InMemoryEmbeddingRetriever` for document retrieval, `ChatPromptBuilder` for prompt templating, and a `ChatGenerator` (e.g., `OpenAIChatGenerator`, `MistralChatGenerator`, or `TransformersChatGenerator`) for LLM-based answer generation.

- **RAG Workflow**: Implements retrieval-augmented generation (RAG) by embedding user queries, retrieving relevant documents via semantic similarity, constructing a prompt with retrieved context, and generating answers using an LLM (cloud-hosted or local).

- **Execution**: Pipeline execution involves embedding the query (`text_embedder`), retrieving documents (`retriever`), formatting the prompt (`prompt_builder`), and generating the answer (`llm`), with explicit component connections (`text_embedder.embedding → retriever.query_embedding`, `retriever → prompt_builder`, `prompt_builder.prompt → llm.messages`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T20:58:43.800647+05:30

## Related Tags

- anthropic
- dataset
- meta-ai
- mistral
- models
- openai
- rag
- web-crawled
- workflows

## Source

Original source: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
