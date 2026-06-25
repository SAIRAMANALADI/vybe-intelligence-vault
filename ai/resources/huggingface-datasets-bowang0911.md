---
title: bowang0911/ToolSearch · Datasets at Hugging Face
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://huggingface.co/datasets/bowang0911/ToolSearch
published_at: '2026-06-26T01:57:33.816359+05:30'
collected_at: '2026-06-26T01:57:33.816373+05:30'
tags:
- benchmark
- dataset
- hackernews
- reddit
- web-crawled
status: active
resource_id: huggingface:datasets/bowang0911
first_seen: '2026-06-26T01:57:33.816373+05:30'
last_seen: '2026-06-26T01:57:33.816373+05:30'
last_checked: '2026-06-26T01:57:33.816373+05:30'
health_score: 100
---

# bowang0911/ToolSearch · Datasets at Hugging Face

## Summary

- **Dataset Composition**: Contains 580 English programming tools with descriptions and corresponding natural language prompts, structured as a retrieval benchmark with `test`, `corpus`, and `queries` splits for relevance judgments, tool documents, and user prompts respectively.

- **Technical Format**: Distributed in Parquet format via Hugging Face `datasets` library, with a standardized MTEB retrieval schema (`query-id`, `corpus-id`, `score`) and metadata fields (`title`, `text`).

- **Benchmark Performance**: Evaluates embedding models on tool retrieval with metrics like Recall@K; top-performing models include `ToolRet-trained-bge-large` (Recall@10: 94.1%) and `Qwen3-Embedding-0.6B` (Recall@10: 87.9%), outperforming lexical baseline BM25 (Recall@10: 81.6%).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-26T01:57:33.816359+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- reddit
- web-crawled

## Source

Original source: https://huggingface.co/datasets/bowang0911/ToolSearch
