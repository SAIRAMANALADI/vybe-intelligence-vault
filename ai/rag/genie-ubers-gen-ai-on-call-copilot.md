---
title: 'Genie: Uber’s Gen AI On-Call Copilot'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.uber.com/gb/en/blog/genie-ubers-gen-ai-on-call-copilot
published_at: '2026-06-24T10:19:25.896206+05:30'
collected_at: '2026-06-24T10:19:25.896219+05:30'
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
first_seen: '2026-06-24T10:19:25.896219+05:30'
last_seen: '2026-06-24T10:19:25.896219+05:30'
last_checked: '2026-06-24T10:19:25.896219+05:30'
health_score: 100
---

# Genie: Uber’s Gen AI On-Call Copilot

## Summary

- **Genie Architecture**: Uber’s Gen AI on-call copilot (Genie) uses **Retrieval-Augmented Generation (RAG)** with OpenAI embeddings stored in a vector database (Sia) to answer ~45K monthly Slack questions, replacing manual on-call engineer responses with automated, context-aware replies.

- **ETL Pipeline**: A **Spark-based ETL** processes internal data sources (Engwiki, Stack Overflow) into chunked embeddings, stored in Terrablob and indexed via a bootstrap job, enabling real-time retrieval for Slack-integrated queries.

- **Performance & Feedback**: User feedback (Resolved/Helpful/Not Helpful) is streamed via Kafka to Hive for metrics visualization, while custom evaluations (e.g., hallucination checks) leverage Michelangelo’s LLM-as-a-Judge to refine retrieval/generation components.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T10:19:25.896206+05:30

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

Original source: https://www.uber.com/gb/en/blog/genie-ubers-gen-ai-on-call-copilot
