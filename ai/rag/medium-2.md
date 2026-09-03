---
title: Medium
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
published_at: '2026-09-04T00:53:19.609620+05:30'
collected_at: '2026-09-04T00:53:19.609634+05:30'
tags:
- agents
- anthropic
- benchmark
- hackernews
- meta-ai
- mistral
- models
- openai
- producthunt
- rag
- web-crawled
- youtube
status: active
resource_id: blog:medium
first_seen: '2026-09-04T00:53:19.609634+05:30'
last_seen: '2026-09-04T00:53:19.609634+05:30'
last_checked: '2026-09-04T00:53:19.609634+05:30'
health_score: 100
---

# Medium

## Summary

- **RAG Architecture**: Divided into two pipelines—**Injection Pipeline** (data ingestion via chunking and embedding) and **Retrieval Pipeline** (query processing via vector similarity search). Injection involves breaking documents into fixed-token chunks (e.g., 1,000 tokens), converting them to vector embeddings (e.g., 3,072 dimensions via OpenAI’s `text-embedding-3-large`), and storing in vector databases (e.g., Pinecone, Weaviate). Retrieval converts user queries to embeddings, retrieves top-*k* semantically similar chunks via similarity search (e.g., cosine similarity), and augments the LLM prompt with these chunks for answer generation.

- **Embedding Fundamentals**: Vector embeddings are high-dimensional numerical representations (e.g., 3,072D for OpenAI’s large model) capturing semantic meaning, where proximity in vector space correlates with semantic similarity. For example, "cat" (`[34, 8, 7.5]`) and "kitten" (`[33, 8, 7.2]`) are closer than "elephant" (`[95, 62, 45]`). Embedding models (e.g., OpenAI, Cohere, Voyage) convert text chunks/queries into these vectors, enabling efficient similarity-based retrieval despite context window limitations (e.g., GPT-4.1: 1M tokens).

- **Enterprise-Scale RAG Challenges**: Standard LLMs cannot process petabyte-scale enterprise data (e.g., 1.3 quintillion tokens) due to context window constraints. RAG mitigates this by indexing documents into retrievable chunks (e.g., 10,000 chunks from 10M tokens) and using vector databases for scalable similarity search. Hybrid search (combining keyword + vector retrieval) and rerankers further refine results, distinguishing amateur implementations from production-grade systems.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-04T00:53:19.609620+05:30

## Related Tags

- agents
- anthropic
- benchmark
- hackernews
- meta-ai
- mistral
- models
- openai
- producthunt
- rag
- web-crawled
- youtube

## Source

Original source: https://pragatimehraa.medium.com/rag-tutorial-2025-complete-course-notes-part-1-d10bb5769280
