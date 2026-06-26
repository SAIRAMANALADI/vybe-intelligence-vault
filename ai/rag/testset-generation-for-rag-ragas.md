---
title: Testset Generation for RAG - Ragas
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
published_at: '2026-06-26T20:22:06.039457+05:30'
collected_at: '2026-06-26T20:22:06.039475+05:30'
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
first_seen: '2026-06-26T20:22:06.039475+05:30'
last_seen: '2026-06-26T20:22:06.039475+05:30'
last_checked: '2026-06-26T20:22:06.039475+05:30'
health_score: 100
---

# Testset Generation for RAG - Ragas

## Summary

- **Testset Generation Pipeline**: Uses a two-phase process—**Knowledge Graph Creation** (extracting nodes/relationships from documents via `KnowledgeGraph` and `Node` objects) and **Testset Generation** (synthesizing queries using `TestsetGenerator` with configurable distributions like `default_query_distribution`).

- **LLM/Embedding Integration**: Supports multiple providers (OpenAI, AWS Bedrock, Google AI/Vertex AI, Azure) via `LangchainLLMWrapper`/`LangchainEmbeddingsWrapper` or `LlamaIndexLLMWrapper`, with explicit configuration for API keys, model IDs, and deployment settings.

- **Customization & Output**: Allows custom transformations (e.g., `default_transforms`) on the knowledge graph and exports testsets as Pandas DataFrames (`dataset.to_pandas()`) for analysis, with optional persistence via `kg.save()`/`KnowledgeGraph.load()`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T20:22:06.039457+05:30

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
