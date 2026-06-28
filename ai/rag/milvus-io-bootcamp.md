---
title: bootcamp/tutorials/quickstart/apps/rag_search_with_milvus at master · milvus-io/bootcamp
  · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/milvus-io/bootcamp/tree/master/tutorials/quickstart/apps/rag_search_with_milvus
published_at: '2026-06-28T10:26:23.625142+05:30'
collected_at: '2026-06-28T10:26:23.625152+05:30'
tags:
- openai
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: github:milvus-io/bootcamp
first_seen: '2026-06-28T10:26:23.625152+05:30'
last_seen: '2026-06-28T10:26:23.625152+05:30'
last_checked: '2026-06-28T10:26:23.625152+05:30'
health_score: 100
---

# bootcamp/tutorials/quickstart/apps/rag_search_with_milvus at master · milvus-io/bootcamp · GitHub

## Summary

- **RAG Pipeline Integration**: Combines Milvus for document retrieval with OpenAI's generative model for text augmentation, enabling context-aware responses by first retrieving relevant documents (via vector similarity search) before generating output.

- **Milvus Configuration**: Uses `Milvus Lite` (default local DB) or scalable Milvus/Zilliz Cloud instances; requires environment variables (`OPENAI_API_KEY`, `MILVUS_ENDPOINT`, `COLLECTION_NAME`) for API and database connectivity.

- **Data Processing Workflow**: Ingests Milvus documentation (Markdown files) via `insert.py`, splitting into ~4K chunks and storing embeddings in Milvus; Streamlit (`app.py`) provides a chat interface to query the RAG system, displaying retrieved context and LLM-generated responses.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T10:26:23.625142+05:30

## Related Tags

- openai
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://github.com/milvus-io/bootcamp/tree/master/tutorials/quickstart/apps/rag_search_with_milvus
