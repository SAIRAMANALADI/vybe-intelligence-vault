---
title: 'Genie: Uber’s Gen AI On-Call Copilot'
archive_category: automation-workflows
source_category: ai/rag
source_url: https://www.uber.com/gb/en/blog/genie-ubers-gen-ai-on-call-copilot
resource_id: blog:genie-ubers-gen-ai-on-call-copilot
local_vault_path: ai/rag/genie-ubers-gen-ai-on-call-copilot.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
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
- Valuable developer reference
---

# Genie: Uber’s Gen AI On-Call Copilot

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Genie Architecture**: Uber’s Gen AI on-call copilot (Genie) uses **Retrieval-Augmented Generation (RAG)** with OpenAI embeddings stored in a vector database (Sia) to answer ~45K monthly Slack questions, replacing manual on-call engineer responses with automated, context-aware replies.

- **ETL Pipeline**: A **Spark-based ETL** processes internal data sources (Engwiki, Stack Overflow) into chunked embeddings, stored in Terrablob and indexed via a bootstrap job, enabling real-time retrieval fo

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://www.uber.com/gb/en/blog/genie-ubers-gen-ai-on-call-copilot

## Local Vault File

Path: [genie-ubers-gen-ai-on-call-copilot.md](../../ai/rag/genie-ubers-gen-ai-on-call-copilot.md)
