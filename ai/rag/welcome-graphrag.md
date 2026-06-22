---
title: Welcome - GraphRAG
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://microsoft.github.io/graphrag
published_at: '2026-06-22T15:23:52.794677+05:30'
collected_at: '2026-06-22T15:23:52.794693+05:30'
tags:
- dataset
- hackernews
- models
- openai
- rag
- web-crawled
status: active
resource_id: blog:welcome-graphrag
first_seen: '2026-06-22T15:23:52.794693+05:30'
last_seen: '2026-06-22T15:23:52.794693+05:30'
last_checked: '2026-06-22T15:23:52.794693+05:30'
health_score: 100
---

# Welcome - GraphRAG

## Summary

- **GraphRAG Architecture**: Structured hierarchical RAG method that constructs a knowledge graph from raw text, performs hierarchical clustering (e.g., Leiden algorithm), and generates community summaries for improved reasoning over private datasets.

- **Query Modes**: Supports multiple retrieval strategies—*Global Search* (holistic corpus reasoning via community summaries), *Local Search* (entity-centric traversal), *DRIFT Search* (entity-centric with community context), and *Basic Search* (baseline vector similarity).

- **Pipeline Steps**: *Index* phase extracts entities/relationships, clusters hierarchically, and summarizes communities; *Query* phase augments LLM prompts with graph-derived context; *Prompt Tuning* is recommended for optimization.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T15:23:52.794677+05:30

## Related Tags

- dataset
- hackernews
- models
- openai
- rag
- web-crawled

## Source

Original source: https://microsoft.github.io/graphrag
