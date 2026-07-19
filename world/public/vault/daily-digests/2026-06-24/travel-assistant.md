---
title: JoanKarantourou/travel-assistant
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Python 3.12
- LangGraph
- Chainlit
- Postgres + pgvector
- SQLAlchemy
- Anthropic Claude
- sentence-transformers
- Prometheus
- OpenTelemetry
- Jaeger
- Grafana
- Docker
- uv
- Alembic
quality_score: 9
rag_relevance: 9
tags:
- conversational AI
- multi-agent orchestration
- RAG with pgvector
- travel assistant
- observability
source: https://github.com/JoanKarantourou/travel-assistant
discovered_at: '2026-06-24T13:17:35Z'
evaluated_by: mistral-small-latest
---

## Summary
A conversational travel assistant that orchestrates multi-tool agent workflows for flight/hotel searches, weather checks, currency conversion, and FAQ-based question answering. It integrates LangGraph for agent orchestration, Chainlit for chat UI, and Postgres with pgvector for persistent RAG and session management.

## Key Features
- LangGraph-based agent graph with tool orchestration and state persistence
- Postgres + pgvector for FAQ retrieval and conversation history
- Full observability stack (Prometheus, OpenTelemetry, Jaeger, Grafana)
- Human escalation workflow with session resumption
- Mock Amadeus provider for deterministic testing and easy real-provider integration

## Why It Matters for RAG Builders
It provides a production-ready template for building multi-tool conversational agents with RAG, observability, and session management, critical for scalable AI applications.

## Tech Stack Deep Dive
### Python 3.12
Automated review identified **Python 3.12** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chainlit
Automated review identified **Chainlit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Postgres + pgvector
Automated review identified **Postgres + pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic Claude
Automated review identified **Anthropic Claude** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jaeger
Automated review identified **Jaeger** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grafana
Automated review identified **Grafana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alembic
Automated review identified **Alembic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
