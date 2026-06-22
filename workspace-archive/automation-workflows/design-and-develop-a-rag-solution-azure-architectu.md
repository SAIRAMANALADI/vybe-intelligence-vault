---
title: Design and Develop a RAG Solution - Azure Architecture Center | Microsoft Learn
archive_category: automation-workflows
source_category: ai/rag
source_url: https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide
resource_id: blog:design-and-develop-a-rag-solution-azure-architectu
local_vault_path: ai/rag/design-and-develop-a-rag-solution-azure-architectu.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- agents
- benchmark
- hackernews
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Design and Develop a RAG Solution - Azure Architecture Center | Microsoft Learn

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **RAG Architecture Flow**: User query processed via orchestrator (e.g., LangChain, Semantic Kernel) which queries Azure AI Search; top *N* results + query form context for LLM prompt, returning response to user.

- **Data Pipeline Workflow**: Documents/media undergo chunking (semantically relevant parts), enrichment (metadata fields like title/summary), embedding (vectorization), and persistence in search index.

- **Evaluation Considerations**: Multi-phase process including preparation (domai

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide

## Local Vault File

Path: [design-and-develop-a-rag-solution-azure-architectu.md](../../ai/rag/design-and-develop-a-rag-solution-azure-architectu.md)
