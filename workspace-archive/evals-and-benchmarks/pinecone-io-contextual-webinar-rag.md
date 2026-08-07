---
title: 'GitHub - pinecone-io/contextual-webinar-rag: Contextual RAG over webinar videos
  using Pinecone, Claude and AWS. · GitHub'
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://github.com/pinecone-io/contextual-webinar-rag/tree/main
resource_id: github:pinecone-io/contextual-webinar-rag
local_vault_path: ai/rag/pinecone-io-contextual-webinar-rag.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- anthropic
- producthunt
- rag
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Active open-source repository
---

# GitHub - pinecone-io/contextual-webinar-rag: Contextual RAG over webinar videos using Pinecone, Claude and AWS. · GitHub

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **Implementation**: Uses Pinecone for vector storage, AWS (Bedrock) for LLM inference (Claude), and a Streamlit web app for user interaction, enabling RAG over video content (YouTube, Zoom, meetings) via contextual retrieval.
- **Pipeline**: Video preprocessing (`.mp4` in `data/videos`), contextual embedding generation via Claude, and upsertion into Pinecone; controlled via Makefile commands (`setup`, `preprocess`, `enrich`, `upsert`).
- **Dependencies**: Requires AWS Bedrock/Claude access, Pi

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://github.com/pinecone-io/contextual-webinar-rag/tree/main

## Local Vault File

Path: [pinecone-io-contextual-webinar-rag.md](../../ai/rag/pinecone-io-contextual-webinar-rag.md)
