---
title: Chroma - open-source search infrastructure for AI
archive_category: rag-systems
source_category: ai/rag
source_url: https://trychroma.com
resource_id: blog:chroma-open-source-search-infrastructure-for-ai
local_vault_path: ai/rag/chroma-open-source-search-infrastructure-for-ai.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- agents
- benchmark
- dataset
- hackernews
- models
- rag
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Chroma - open-source search infrastructure for AI

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Multi-modal search engine**: Supports vector, full-text, regex, and metadata search with 90-100% recall, optimized for object storage (S3/GCS) with automatic tiering between hot (memory/SSD) and cold (object storage) layers.

- **Scalable, serverless architecture**: Achieves p50 latency of 20ms (warm) / 650ms (cold) for 100k vectors (384-dim), auto-scales to 1M collections and 5M records per collection with 30 MB/s write throughput and 2000+ QPS.

- **Enterprise-grade features**: BYOC in VPC

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://trychroma.com

## Local Vault File

Path: [chroma-open-source-search-infrastructure-for-ai.md](../../ai/rag/chroma-open-source-search-infrastructure-for-ai.md)
