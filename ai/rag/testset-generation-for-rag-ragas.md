---
title: Testset Generation for RAG - Ragas
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
published_at: '2026-08-03T15:42:53.739087+05:30'
collected_at: '2026-08-03T15:42:53.739103+05:30'
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
first_seen: '2026-08-03T15:42:53.739103+05:30'
last_seen: '2026-08-03T15:42:53.739103+05:30'
last_checked: '2026-08-03T15:42:53.739103+05:30'
health_score: 100
---

# Testset Generation for RAG - Ragas

## Summary

- **Testset Generation Pipeline**: Uses a two-phase process—**Knowledge Graph Creation** (with nodes/relationships from documents via `KnowledgeGraph` and `default_transforms`) and **Testset Generation** (via `TestsetGenerator` with configurable query distributions like `default_query_distribution`).

- **LLM/Embedding Integration**: Supports multiple providers (OpenAI, AWS Bedrock, Google AI/Vertex, Azure) via `LangchainLLMWrapper`/`LangchainEmbeddingsWrapper` or native `LlamaIndexLLMWrapper`, requiring API keys/configs (e.g., `OPENAI_API_KEY`, `GOOGLE_API_KEY`).

- **Output & Customization**: Generates synthetic testsets (exportable to pandas DataFrame) with adjustable parameters (e.g., `testset_size=10`), and allows saving/loading the intermediate `KnowledgeGraph` (e.g., `kg.save("knowledge_graph.json")`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T15:42:53.739087+05:30

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
