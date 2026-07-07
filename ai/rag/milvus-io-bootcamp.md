---
title: bootcamp/tutorials/quickstart/apps/rag_search_with_milvus at master · milvus-io/bootcamp
  · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/milvus-io/bootcamp/tree/master/tutorials/quickstart/apps/rag_search_with_milvus
published_at: '2026-07-07T15:38:31.197228+05:30'
collected_at: '2026-07-07T15:38:31.197239+05:30'
tags:
- hackernews
- openai
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: github:milvus-io/bootcamp
first_seen: '2026-07-07T15:38:31.197239+05:30'
last_seen: '2026-07-07T15:38:31.197239+05:30'
last_checked: '2026-07-07T15:38:31.197239+05:30'
health_score: 100
---

# bootcamp/tutorials/quickstart/apps/rag_search_with_milvus at master · milvus-io/bootcamp · GitHub

## Summary

- **RAG Pipeline Integration**: Combines Milvus for document retrieval with OpenAI's generative model to produce context-aware responses, where Milvus indexes and retrieves relevant document chunks (e.g., from Milvus 2.4.x docs) based on vector similarity, and the LLM synthesizes answers using retrieved context.

- **Milvus Deployment & Configuration**: Supports local (Milvus Lite via `./milvus_demo.db`), Docker/Kubernetes, or Zilliz Cloud deployments; requires environment variables (`OPENAI_API_KEY`, `MILVUS_ENDPOINT`, `COLLECTION_NAME`) and pre-processes markdown docs into ~4,000 chunks via `insert.py`.

- **Technical Workflow**: `encoder.py` generates embeddings (e.g., using `sentence-transformers`), `milvus_utils.py` handles vector search, and `app.py` (Streamlit) provides a UI to submit queries, display top-3 retrieved chunks with distance scores, and stream LLM responses.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T15:38:31.197228+05:30

## Related Tags

- hackernews
- openai
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://github.com/milvus-io/bootcamp/tree/master/tutorials/quickstart/apps/rag_search_with_milvus
