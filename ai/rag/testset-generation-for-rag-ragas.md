---
title: Testset Generation for RAG - Ragas
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
published_at: '2026-07-14T13:02:59.934376+05:30'
collected_at: '2026-07-14T13:02:59.934393+05:30'
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
first_seen: '2026-07-14T13:02:59.934393+05:30'
last_seen: '2026-07-14T13:02:59.934393+05:30'
last_checked: '2026-07-14T13:02:59.934393+05:30'
health_score: 100
---

# Testset Generation for RAG - Ragas

## Summary

- **Testset Generation Pipeline**: Uses a two-phase process—(1) **Knowledge Graph Creation** from input documents with transformations (e.g., default_transforms) enriching nodes/relationships via LLM/embedding models, and (2) **Testset Generation** leveraging the knowledge graph to synthesize scenarios (e.g., SingleHopSpecificQuerySynthesizer, MultiHopAbstractQuerySynthesizer) into a structured test dataset.

- **LLM/Embedding Integration**: Supports multiple providers (OpenAI, AWS Bedrock, Google Cloud Vertex AI, Azure) via LangChain wrappers (LangchainLLMWrapper, LangchainEmbeddingsWrapper) or LlamaIndex (LlamaIndexLLMWrapper), with configurations for model IDs, API keys, and deployment-specific parameters (e.g., AWS region, Azure endpoint).

- **Output & Customization**: Generates a testset DataFrame (dataset.to_pandas()) with configurable query distributions (default_query_distribution), and allows saving/loading the intermediate KnowledgeGraph (e.g., kg.save("knowledge_graph.json")) for reuse or further analysis.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-14T13:02:59.934376+05:30

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
