---
title: Testset Generation for RAG - Ragas
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
published_at: '2026-08-01T21:48:42.325232+05:30'
collected_at: '2026-08-01T21:48:42.325248+05:30'
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
first_seen: '2026-08-01T21:48:42.325248+05:30'
last_seen: '2026-08-01T21:48:42.325248+05:30'
last_checked: '2026-08-01T21:48:42.325248+05:30'
health_score: 100
---

# Testset Generation for RAG - Ragas

## Summary

- **Testset Generation Pipeline**: Consists of two core operations: (1) **Knowledge Graph Creation** from input documents using transformations (e.g., `default_transforms`) to enrich graph nodes/relationships with LLM/embedding models, and (2) **Testset Generation** using the graph to synthesize scenarios (e.g., `SingleHopSpecificQuerySynthesizer`) with configurable query distributions (e.g., `default_query_distribution`).

- **LLM/Embedding Integration**: Supports multi-provider setups (OpenAI, AWS Bedrock, Google Cloud Vertex AI, Azure OpenAI) via `LangchainLLMWrapper`/`LangchainEmbeddingsWrapper` or `LlamaIndexLLMWrapper` for non-LangChain models, with configuration for model IDs, API keys, and deployment-specific parameters.

- **Output and Customization**: Generated testsets are exportable to Pandas DataFrames for analysis, with synthetic data generation pipelines customizable via graph transformations (e.g., `apply_transforms`) and query synthesizers (e.g., `TestsetGenerator` with `knowledge_graph` input).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T21:48:42.325232+05:30

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
