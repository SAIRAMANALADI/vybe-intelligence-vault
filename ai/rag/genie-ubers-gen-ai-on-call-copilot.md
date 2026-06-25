---
title: 'Genie: Uber’s Gen AI On-Call Copilot'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.uber.com/en-GB/blog/genie-ubers-gen-ai-on-call-copilot
published_at: '2026-06-24T20:49:32.520302+05:30'
collected_at: '2026-06-24T20:49:32.520315+05:30'
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
- youtube
status: active
resource_id: blog:genie-ubers-gen-ai-on-call-copilot
first_seen: '2026-06-24T20:49:32.520315+05:30'
last_seen: '2026-06-24T20:49:32.520315+05:30'
last_checked: '2026-06-24T20:49:32.520315+05:30'
health_score: 100
---

# Genie: Uber’s Gen AI On-Call Copilot

## Summary

- **Genie Architecture**: Uber’s on-call copilot uses **Retrieval-Augmented Generation (RAG)** with OpenAI embeddings stored in a vector database (Sia) to answer ~45K monthly Slack questions, replacing slow manual responses with automated, context-aware replies.

- **ETL Pipeline**: A **PySpark-based ETL** ingests data from Uber’s internal wiki (Engwiki) and Stack Overflow, chunks content via LangChain, generates embeddings with OpenAI models, and pushes vectors to Terrablob for retrieval during queries.

- **Performance & Feedback**: Users rate responses via Slack (Resolved/Helpful/Not Helpful), feeding metrics to a **Kafka-Hive pipeline** for dashboard visualization, while custom evaluations (e.g., hallucination checks) tune RAG components via Michelangelo’s LLM-as-a-Judge framework.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T20:49:32.520302+05:30

## Related Tags

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
- youtube

## Source

Original source: https://www.uber.com/en-GB/blog/genie-ubers-gen-ai-on-call-copilot
