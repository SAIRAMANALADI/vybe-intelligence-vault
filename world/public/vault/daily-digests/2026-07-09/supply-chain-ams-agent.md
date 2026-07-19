---
title: vladyrap/supply-chain-ams-agent
category: world/public/vault/daily-digests/2026-07-09
tech_stack:
- TypeScript
- Node.js
- Fastify
- PostgreSQL
- pgvector
- Redis
- Gemini 2.5 Flash
- Twilio Voice
- Whisper (STT)
- Docker Compose
- Prometheus
- Grafana
- ELK Stack
- Next.js (frontend)
quality_score: 9
rag_relevance: 8
tags:
- SAP Supply Chain
- LLM Agent
- RAG
- Multi-modal AI
- Observability
source: https://github.com/vladyrap/supply-chain-ams-agent
discovered_at: '2026-07-09T21:18:44Z'
evaluated_by: mistral-small-latest
---

## Summary
A Docker-based AI agent system for SAP Supply Chain incident diagnosis and resolution, integrating LLM-powered chat, RAG with pgvector, and multi-modal support (voice, webhooks, Slack, email). Designed for AMS consultants to classify, diagnose, and document supply chain issues (MM, SD, PP, WM/EWM, QM, PM, Ariba, IBP) with structured responses.

## Key Features
- Structured incident diagnosis with 12-block response format (classification, root causes, step-by-step, risks, customer response, confidence, learning)
- Multi-modal support: chat, voice (Twilio + Whisper), webhooks, Slack, email integrations
- RAG with pgvector for document-based knowledge retrieval (Phase 2)
- Observability stack (Prometheus, Grafana, ELK) for monitoring and logging
- SAP read-only integration (Phase 4) with structured data retrieval

## Why It Matters for RAG Builders
Provides a production-ready AI agent framework for SAP Supply Chain incident resolution, combining structured diagnostics, multi-modal interactions, and observability to accelerate AMS consulting workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fastify
Automated review identified **Fastify** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini 2.5 Flash
Automated review identified **Gemini 2.5 Flash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Twilio Voice
Automated review identified **Twilio Voice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper (STT)
Automated review identified **Whisper (STT)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grafana
Automated review identified **Grafana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ELK Stack
Automated review identified **ELK Stack** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js (frontend)
Automated review identified **Next.js (frontend)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
