---
title: Testset Generation for RAG - Ragas
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.ragas.io/en/latest/getstarted/rag_testset_generation/
published_at: '2026-08-07T08:54:35.637882+05:30'
collected_at: '2026-08-07T08:54:35.637902+05:30'
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
first_seen: '2026-08-07T08:54:35.637902+05:30'
last_seen: '2026-08-07T08:54:35.637902+05:30'
last_checked: '2026-08-07T08:54:35.637902+05:30'
health_score: 100
---

# Testset Generation for RAG - Ragas

## Summary

- **Knowledge Graph Construction**: Documents are parsed into nodes (`NodeType.DOCUMENT`) with metadata, forming a `KnowledgeGraph`; transformations (e.g., `default_transforms`) enrich the graph with additional nodes/relationships using LLM/embeddings for contextual augmentation.

- **Testset Generation Pipeline**: Uses `TestsetGenerator` with a configured LLM/embeddings model to synthesize queries from the `KnowledgeGraph` via scenario-based synthesizers (e.g., `SingleHopSpecificQuerySynthesizer`, `MultiHopAbstractQuerySynthesizer`), producing a structured test dataset.

- **Query Distribution Customization**: Default query distributions (e.g., 50% single-hop, 25% multi-hop abstract) can be modified; generated testsets are exportable as Pandas DataFrames for analysis/validation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-07T08:54:35.637882+05:30

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
