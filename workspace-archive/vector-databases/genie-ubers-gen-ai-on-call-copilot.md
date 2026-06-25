---
title: 'Genie: Uber’s Gen AI On-Call Copilot'
archive_category: vector-databases
source_category: ai/rag
source_url: https://www.uber.com/en-GB/blog/genie-ubers-gen-ai-on-call-copilot
resource_id: blog:genie-ubers-gen-ai-on-call-copilot
local_vault_path: ai/rag/genie-ubers-gen-ai-on-call-copilot.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- benchmark
- hackernews
- models
- openai
- producthunt
- rag
- reddit
- scripts
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Useful for project building
---

# Genie: Uber’s Gen AI On-Call Copilot

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Genie Architecture**: Uber’s on-call copilot uses **Retrieval-Augmented Generation (RAG)** with OpenAI embeddings stored in a vector database (Sia) to answer ~45K monthly Slack questions, replacing slow manual responses with automated, context-aware replies.

- **ETL Pipeline**: A **PySpark-based ETL** ingests data from Uber’s internal wiki (Engwiki) and Stack Overflow, chunks content via LangChain, generates embeddings with OpenAI models, and pushes vectors to Terrablob for retrieval during

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://www.uber.com/en-GB/blog/genie-ubers-gen-ai-on-call-copilot

## Local Vault File

Path: [genie-ubers-gen-ai-on-call-copilot.md](../../ai/rag/genie-ubers-gen-ai-on-call-copilot.md)
