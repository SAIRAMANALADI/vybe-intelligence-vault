---
title: Testset Generation for RAG - Ragas
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
published_at: '2026-08-04T20:16:20.286152+05:30'
collected_at: '2026-08-04T20:16:20.286168+05:30'
tags:
- anthropic
- dataset
- meta-ai
- models
- openai
- rag
- reddit
- web-crawled
status: active
resource_id: blog:testset-generation-for-rag-ragas
first_seen: '2026-08-04T20:16:20.286168+05:30'
last_seen: '2026-08-04T20:16:20.286168+05:30'
last_checked: '2026-08-04T20:16:20.286168+05:30'
health_score: 100
---

# Testset Generation for RAG - Ragas

## Summary

- **LLM Integration**: Supports multiple LLM providers (OpenAI, AWS Bedrock, Google AI/Vertex AI, Azure) via `LangchainLLMWrapper` or `LlamaIndexLLMWrapper` for testset generation, with configuration for model, temperature, and credentials.
- **Knowledge Graph Pipeline**: Constructs a `KnowledgeGraph` from input documents, enriches it using transformations (e.g., `default_transforms`), and persists it (e.g., `knowledge_graph.json`) for structured test data synthesis.
- **Testset Generation**: Uses `TestsetGenerator` with a query distribution (e.g., `default_query_distribution`) to produce synthetic queries (single/multi-hop) and evaluates RAG pipelines via metrics like `answer_relevancy` and `answer_correctness`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T20:16:20.286152+05:30

## Related Tags

- anthropic
- dataset
- meta-ai
- models
- openai
- rag
- reddit
- web-crawled

## Source

Original source: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
