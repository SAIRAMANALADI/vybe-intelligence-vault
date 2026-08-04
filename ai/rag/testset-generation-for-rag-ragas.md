---
title: Testset Generation for RAG - Ragas
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
published_at: '2026-08-04T22:41:09.161102+05:30'
collected_at: '2026-08-04T22:41:09.161110+05:30'
tags:
- anthropic
- benchmark
- dataset
- meta-ai
- models
- openai
- rag
- reddit
- web-crawled
status: active
resource_id: blog:testset-generation-for-rag-ragas
first_seen: '2026-08-04T22:41:09.161110+05:30'
last_seen: '2026-08-04T22:41:09.161110+05:30'
last_checked: '2026-08-04T22:41:09.161110+05:30'
health_score: 100
---

# Testset Generation for RAG - Ragas

## Summary

- **Knowledge Graph Construction**: Documents are parsed into a structured `KnowledgeGraph` with nodes (e.g., `NodeType.DOCUMENT`) and metadata, followed by enrichment via transformations (e.g., `default_transforms`) using an LLM and embedding model to extract relationships and context.

- **Testset Generation Pipeline**: Uses the enriched `KnowledgeGraph` to synthesize test scenarios via `TestsetGenerator`, with configurable query distributions (e.g., `default_query_distribution`) to produce diverse multi-hop and single-hop queries for RAG evaluation.

- **Multi-Provider LLM Integration**: Supports wrapping LLMs (OpenAI, AWS Bedrock, Google AI/Vertex, Azure) and embeddings (e.g., `LangchainLLMWrapper`, `LangchainEmbeddingsWrapper`) for testset generation, with optional safety settings and custom configurations for different cloud providers.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T22:41:09.161102+05:30

## Related Tags

- anthropic
- benchmark
- dataset
- meta-ai
- models
- openai
- rag
- reddit
- web-crawled

## Source

Original source: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
