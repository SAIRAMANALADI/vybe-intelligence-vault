---
title: "yf0522/ai-companion-runtime"
category: "Orchestrator"
tech_stack: ["Python 3.11", "FastAPI", "WebSocket", "PostgreSQL 16", "pgvector", "Redis 7", "MinIO", "Celery", "Next.js 14", "TypeScript", "TailwindCSS", "Zustand", "OpenTelemetry", "Jaeger", "Prometheus", "Grafana", "Docker Compose"]
quality_score: 9
rag_relevance: 8
tags: ["eldercare", "real-time AI companion", "risk detection", "memory management", "observability"]
source: "https://github.com/yf0522/ai-companion-runtime"
discovered_at: "2026-07-09T08:24:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An AI companion runtime designed for eldercare scenarios, featuring real-time WebSocket-based streaming conversations, risk detection (health emergencies, scams, emotional distress), tool calling, long-term memory, model hot-swapping, and end-to-end traceability for observability.

## Key Features
- WebSocket-based streaming conversations with structured message protocols (trace, risk alerts, deltas, tool results)
- Multi-layered risk detection (health emergencies, scams, emotional distress) with sub-2ms response times
- Dynamic personality and memory systems (5-layer memory architecture with Redis, PostgreSQL, and pgvector)
- Model hot-swapping with OpenAI-compatible adapters supporting Qwen, DeepSeek, OpenAI, and local models
- End-to-end traceability with Jaeger integration for latency analysis and cost tracking

## Why It Matters for RAG Builders
This runtime provides a production-ready foundation for building eldercare-focused AI companions with built-in safety, observability, and tool integration, critical for RAG systems requiring real-time risk mitigation and memory management.

## Tech Stack Deep Dive
### Python 3.11
Automated review identified **Python 3.11** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL 16
Automated review identified **PostgreSQL 16** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis 7
Automated review identified **Redis 7** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MinIO
Automated review identified **MinIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Celery
Automated review identified **Celery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js 14
Automated review identified **Next.js 14** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TailwindCSS
Automated review identified **TailwindCSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zustand
Automated review identified **Zustand** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jaeger
Automated review identified **Jaeger** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grafana
Automated review identified **Grafana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
