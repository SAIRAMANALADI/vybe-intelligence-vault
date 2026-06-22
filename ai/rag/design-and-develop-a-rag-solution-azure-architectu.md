---
title: Design and Develop a RAG Solution - Azure Architecture Center | Microsoft Learn
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide
published_at: '2026-06-22T11:13:08.777205+05:30'
collected_at: '2026-06-22T11:13:08.777217+05:30'
tags:
- agents
- benchmark
- hackernews
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:design-and-develop-a-rag-solution-azure-architectu
first_seen: '2026-06-22T11:13:08.777217+05:30'
last_seen: '2026-06-22T11:13:08.777217+05:30'
last_checked: '2026-06-22T11:13:08.777217+05:30'
health_score: 100
---

# Design and Develop a RAG Solution - Azure Architecture Center | Microsoft Learn

## Summary

- **RAG Architecture Flow**: User query processed via orchestrator (e.g., LangChain, Semantic Kernel) which queries Azure AI Search; top *N* results + query form context for LLM prompt, returning response to user.

- **Data Pipeline Workflow**: Documents/media undergo chunking (semantically relevant parts), enrichment (metadata fields like title/summary), embedding (vectorization), and persistence in search index.

- **Evaluation Considerations**: Multi-phase process including preparation (domain definition, test media/queries), chunking (economics, approaches, file structure), enrichment (cleaning/augmentation), embedding (model selection/evaluation), retrieval (index config, search types), and LLM evaluation (metrics like groundedness, completeness, relevancy).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:13:08.777205+05:30

## Related Tags

- agents
- benchmark
- hackernews
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide
