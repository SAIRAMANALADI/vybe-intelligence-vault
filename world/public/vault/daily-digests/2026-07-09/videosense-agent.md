---
title: "kenny0312/videosense-agent"
category: "Agent Framework"
tech_stack: ["Python", "FastAPI", "Gemini 2.5", "PostgreSQL + pgvector", "Google Cloud Run", "BigQuery", "Redis", "Google Cloud Storage"]
quality_score: 9
rag_relevance: 8
tags: ["video analysis", "multi-modal agent", "tool-use loop", "verifiable answers", "Gemini integration"]
source: "https://github.com/kenny0312/videosense-agent"
discovered_at: "2026-07-09T19:29:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
VideoSense-Agent is an AI agent that processes video libraries by watching, reasoning, and answering user queries with verifiable clips and charts. It dynamically selects tools in a loop to prove answers, ensuring transparency and accountability in responses.

## Key Features
- Dynamic tool-use loop for real-time reasoning and proof generation
- Streaming live responses with embedded steps, costs, and verifiable outputs
- Built-in evaluation suite with deterministic verifiers for performance tracking
- Supports semantic search, video processing, and chart generation
- Designed for transparency with receipts (steps, tools, time, cost) in every answer

## Why It Matters for RAG Builders
It provides a robust framework for building AI agents that can dynamically reason over video data and deliver verifiable, transparent answers, critical for RAG systems requiring multi-modal and tool-augmented capabilities.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini 2.5
Automated review identified **Gemini 2.5** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL + pgvector
Automated review identified **PostgreSQL + pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Cloud Run
Automated review identified **Google Cloud Run** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BigQuery
Automated review identified **BigQuery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Cloud Storage
Automated review identified **Google Cloud Storage** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
