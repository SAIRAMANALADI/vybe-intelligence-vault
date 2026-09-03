---
title: Building Production-Ready RAG Systems from Scratch | Md. Zahid Hasan
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://z4hid.github.io/blog/building-rag-systems-from-scratch/
published_at: '2026-09-03T18:26:09.165106+05:30'
collected_at: '2026-09-03T18:26:09.165119+05:30'
tags:
- agents
- anthropic
- benchmark
- dataset
- hackernews
- models
- openai
- paper
- rag
- web-crawled
status: active
resource_id: blog:building-production-ready-rag-systems-from-scratch
first_seen: '2026-09-03T18:26:09.165119+05:30'
last_seen: '2026-09-03T18:26:09.165119+05:30'
last_checked: '2026-09-03T18:26:09.165119+05:30'
health_score: 100
---

# Building Production-Ready RAG Systems from Scratch | Md. Zahid Hasan

## Summary

- **RAG Pipeline Architecture**: Indexing phase converts raw documents into embeddings via chunking (800 tokens, 200 overlap) and stores them in a vector DB (Chroma/Pinecone); querying phase embeds user input, retrieves top-K relevant chunks (hybrid BM25+semantic search), and generates answers with LLM while enforcing strict context adherence and citation requirements.

- **Critical Optimization Parameters**: Embedding model choice (e.g., OpenAI `text-embedding-3-small` vs. BAAI `BGE-large-en-v1.5`), chunking strategy (semantic vs. fixed-size), and retrieval enhancements (re-ranking via Cohere/Sentence Transformers, metadata filtering) directly impact hallucination rates (42% reduction per Microsoft Research) and retrieval precision.

- **Production Hardening**: Implements nightly incremental indexing, semantic caching for repeated queries, exhaustive logging (query, retrieved docs, LLM prompt/output), and fallback mechanisms for empty retrievals; enforces context length limits (3–5 chunks) to balance cost/performance while maintaining faithfulness metrics via RAGAS evaluation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-03T18:26:09.165106+05:30

## Related Tags

- agents
- anthropic
- benchmark
- dataset
- hackernews
- models
- openai
- paper
- rag
- web-crawled

## Source

Original source: https://z4hid.github.io/blog/building-rag-systems-from-scratch/
