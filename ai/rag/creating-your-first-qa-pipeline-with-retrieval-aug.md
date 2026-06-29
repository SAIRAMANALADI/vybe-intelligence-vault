---
title: Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
published_at: '2026-06-30T03:59:50.506810+05:30'
collected_at: '2026-06-30T03:59:50.506822+05:30'
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
first_seen: '2026-06-30T03:59:50.506822+05:30'
last_seen: '2026-06-30T03:59:50.506822+05:30'
last_checked: '2026-06-30T03:59:50.506822+05:30'
health_score: 100
---

# Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack

## Summary

- **Document Processing Pipeline**: Uses `SentenceTransformersDocumentEmbedder` (model: `all-MiniLM-L6-v2`) to generate embeddings for Wikipedia documents (Seven Wonders dataset) stored in an `InMemoryDocumentStore`.

- **RAG Pipeline Components**: Combines `SentenceTransformersTextEmbedder` (same model), `InMemoryEmbeddingRetriever`, `ChatPromptBuilder` (Jinja2 template with `documents` and `question` variables), and a `ChatGenerator` (e.g., `OpenAIChatGenerator`, `MistralChatGenerator`, or `TransformersChatGenerator` for local LLMs).

- **Execution Flow**: Pipeline connects `text_embedder → retriever → prompt_builder → llm`, where the retriever fetches relevant documents based on query embeddings, the prompt builder constructs the context-aware prompt, and the generator produces the final answer.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T03:59:50.506810+05:30

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
