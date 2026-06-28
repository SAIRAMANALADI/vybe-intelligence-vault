---
title: 'Ilya Rice: How I Won the Enterprise RAG Challenge'
archive_category: rag-systems
source_category: ai/rag
source_url: https://abdullin.com/ilya/how-to-build-best-rag/
resource_id: blog:ilya-rice-how-i-won-the-enterprise-rag-challenge
local_vault_path: ai/rag/ilya-rice-how-i-won-the-enterprise-rag-challenge.md
quality_score: 70
archive_score: 80
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- hackernews
- leaderboard
- meta-ai
- models
- openai
- paper
- producthunt
- rag
- reddit
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Ilya Rice: How I Won the Enterprise RAG Challenge

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 80 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Parser Optimization & GPU Acceleration**: Utilized Docling (IBM-developed parser) with custom modifications for improved PDF-to-MD/HTML conversion, including table serialization. Achieved 40-minute parsing of 100 reports (~15k pages) via GPU-accelerated VM (NVIDIA 4090) on Runpod, addressing parsing challenges like rotated tables, OCR for corrupted fonts, and metadata preservation.

- **Chunking & Vectorization Strategy**: Implemented recursive chunking (300 tokens, 50-token overlap) per pag

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://abdullin.com/ilya/how-to-build-best-rag/

## Local Vault File

Path: [ilya-rice-how-i-won-the-enterprise-rag-challenge.md](../../ai/rag/ilya-rice-how-i-won-the-enterprise-rag-challenge.md)
