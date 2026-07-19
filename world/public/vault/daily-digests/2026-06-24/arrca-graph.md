---
title: arrca-ai/arrca-graph
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Go
- Kubernetes API
- OpenTelemetry (OTLP)
- NATS
- Redis
- Protocol Buffers
- HTTP/REST
quality_score: 9
rag_relevance: 8
tags:
- Kubernetes observability
- Service graph
- OpenTelemetry integration
- Redis persistence
- Real-time topology
source: https://github.com/arrca-ai/arrca-graph
discovered_at: '2026-06-24T13:22:40Z'
evaluated_by: mistral-small-latest
---

## Summary
arrca-graph constructs a live, observable graph of Kubernetes clusters by merging structural data from the Kubernetes API with dynamic relationships derived from OpenTelemetry trace spans. It persists this graph in Redis and exposes it via a read-only HTTP API for querying and visualization.

## Key Features
- Merges Kubernetes structural data with OTel trace-derived relationships to build a comprehensive service graph
- Idempotent, heartbeat-driven writes to Redis ensure convergence without coordination between writers
- Supports LLM-generated CRD relationship rules for semantic edge extraction from custom resources
- Provides a read-only HTTP API for querying entities, subgraphs, and rendering events via SSE
- Includes a reaping mechanism to clean up stale entities and dangling edges

## Why It Matters for RAG Builders
It enables AI-driven observability by transforming raw Kubernetes and telemetry data into a structured, queryable graph that can power advanced RAG systems for infrastructure insights.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes API
Automated review identified **Kubernetes API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry (OTLP)
Automated review identified **OpenTelemetry (OTLP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NATS
Automated review identified **NATS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Protocol Buffers
Automated review identified **Protocol Buffers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/REST
Automated review identified **HTTP/REST** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
