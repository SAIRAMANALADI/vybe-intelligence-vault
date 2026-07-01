---
title: "bisdom-cell/openclaw-model-bridge"
category: "Orchestrator"
tech_stack: ["Python", "OpenClaw", "FastAPI", "PyYAML", "sentence-transformers", "GitHub Actions", "Docker", "WhatsApp API", "Discord API"]
quality_score: 9
rag_relevance: 8
tags: ["LLM Orchestration", "Agent Framework", "Multimodal", "Governance Engine", "Production-Ready"]
source: "https://github.com/bisdom-cell/openclaw-model-bridge"
discovered_at: "2026-07-01T15:39:36Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight control-plane framework that bridges any LLM to OpenClaw with zero third-party dependencies, supporting 10 providers (including DeepSeek-V4-Pro and Doubao Seed 2.0), multimodal capabilities, and governance-driven tool routing. Designed for production use with SLO compliance, circuit breakers, and fail-fast mechanisms.

## Key Features
- Zero-dependency provider abstraction layer supporting 10 LLM providers (including DeepSeek-V4-Pro and Doubao Seed 2.0)
- Multimodal routing (text and image) with built-in fallback and circuit breakers
- Governance engine with 91 invariants, 839 checks, and three-gate shadow mode for policy enforcement
- SLO compliance monitoring with real-time metrics and incident snapshots
- Declarative capability-based dynamic router for optimal provider selection

## Why It Matters for RAG Builders
It provides a production-tested, governance-driven middleware layer to seamlessly integrate any LLM into RAG pipelines with robust tool routing and fail-fast mechanisms.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw
Automated review identified **OpenClaw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyYAML
Automated review identified **PyYAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WhatsApp API
Automated review identified **WhatsApp API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord API
Automated review identified **Discord API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
