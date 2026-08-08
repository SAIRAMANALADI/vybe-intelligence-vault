---
title: Testset Generation for RAG - Ragas
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
published_at: '2026-08-08T15:32:52.997219+05:30'
collected_at: '2026-08-08T15:32:52.997235+05:30'
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
first_seen: '2026-08-08T15:32:52.997235+05:30'
last_seen: '2026-08-08T15:32:52.997235+05:30'
last_checked: '2026-08-08T15:32:52.997235+05:30'
health_score: 100
---

# Testset Generation for RAG - Ragas

## Summary

- **Testset Generation Pipeline**: Uses a two-phase process—**Knowledge Graph Creation** (extracting nodes/relationships from documents via `KnowledgeGraph` and enriching with transformations like `default_transforms`) and **Testset Generation** (synthesizing queries using `TestsetGenerator` with configurable distributions like `default_query_distribution`).

- **Multi-LLM/Embedding Integration**: Supports arbitrary LLMs/embeddings via `LangchainLLMWrapper`/`LangchainEmbeddingsWrapper` (e.g., OpenAI, AWS Bedrock, Google Cloud, Azure) or `LlamaIndexLLMWrapper` for LlamaIndex compatibility.

- **Output Analysis**: Generates synthetic testsets (e.g., 10 queries) exportable to Pandas DataFrames for validation, with nodes/relationships in the knowledge graph saved/loaded as JSON (e.g., `KnowledgeGraph(nodes: 48, relationships: 605)`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T15:32:52.997219+05:30

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
