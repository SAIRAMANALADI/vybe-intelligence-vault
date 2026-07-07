---
title: 'GitHub - pinecone-io/contextual-webinar-rag: Contextual RAG over webinar videos
  using Pinecone, Claude and AWS. · GitHub'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/pinecone-io/contextual-webinar-rag/tree/main
published_at: '2026-07-07T15:39:09.383979+05:30'
collected_at: '2026-07-07T15:39:09.383993+05:30'
tags:
- anthropic
- producthunt
- rag
- web-crawled
- workflows
- youtube
status: active
resource_id: github:pinecone-io/contextual-webinar-rag
first_seen: '2026-07-07T15:39:09.383993+05:30'
last_seen: '2026-07-07T15:39:09.383993+05:30'
last_checked: '2026-07-07T15:39:09.383993+05:30'
health_score: 100
---

# GitHub - pinecone-io/contextual-webinar-rag: Contextual RAG over webinar videos using Pinecone, Claude and AWS. · GitHub

## Summary

- **Contextual Video RAG Pipeline**: Implements a Retrieval-Augmented Generation (RAG) system for video data (YouTube, Zoom, meetings) using Pinecone for vector storage, AWS Bedrock for Claude model access, and contextual retrieval for enhanced Q&A.

- **Multi-Component Workflow**: Includes preprocessing (video → text via AWS services), contextual embedding generation (Claude via Bedrock), and vector upsertion into Pinecone, orchestrated via Makefile commands (`setup`, `preprocess`, `enrich`, `upsert`).

- **Streamlit Deployment**: Local web app (`app.py`) for interactive querying, requiring AWS Bedrock/Claude access, Pinecone API key, and video files in `data/videos/` (`.mp4` format), launched via `make run-app`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T15:39:09.383979+05:30

## Related Tags

- anthropic
- producthunt
- rag
- web-crawled
- workflows
- youtube

## Source

Original source: https://github.com/pinecone-io/contextual-webinar-rag/tree/main
