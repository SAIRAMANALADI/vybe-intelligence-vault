---
title: "IT-Help-San-Diego/archetype-mesh-benchmark"
category: "Tooling"
tech_stack: ["Rust", "Axum", "Tokio", "SQLx", "PostgreSQL", "reqwest", "SHA-3", "LM Studio REST API", "OpenAI-compatible endpoints", "HTML/CSS (zero frameworks)", "Server-Sent Events (SSE)"]
quality_score: 9
rag_relevance: 8
tags: ["AI benchmarking", "local-first evaluation", "auditable evidence", "model performance testing", "RAG optimization"]
source: "https://github.com/IT-Help-San-Diego/archetype-mesh-benchmark"
discovered_at: "2026-07-09T19:30:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A local-first benchmarking dashboard for evaluating AI models (LM Studio and cloud LLMs) with rigorous, auditable tests. It measures vision, tool use, reasoning, and security using ground-truth tests, N=3 trials, and SHA3-sealed evidence to ensure unbiased, reproducible results.

## Key Features
- Ground-truth testing with N=3 trials for statistical reliability
- SHA3-sealed evidence storage for auditability and provenance
- Live SSE dashboard for real-time benchmarking and telemetry
- Anti-leakage validation to prevent answer contamination
- Hardware-aware benchmarking with RAM and GPU capacity measurements

## Why It Matters for RAG Builders
It provides a rigorous, local-first method to evaluate AI models for RAG pipelines, ensuring unbiased, reproducible results without relying on public benchmarks that models may have trained on.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLx
Automated review identified **SQLx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### reqwest
Automated review identified **reqwest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-3
Automated review identified **SHA-3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LM Studio REST API
Automated review identified **LM Studio REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible endpoints
Automated review identified **OpenAI-compatible endpoints** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS (zero frameworks)
Automated review identified **HTML/CSS (zero frameworks)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Server-Sent Events (SSE)
Automated review identified **Server-Sent Events (SSE)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
