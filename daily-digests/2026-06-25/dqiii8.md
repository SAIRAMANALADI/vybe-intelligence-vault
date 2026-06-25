---
title: "senda-labs/DQIII8"
category: "Orchestrator"
tech_stack: ["Python", "SQLite", "LLM (Ollama, Groq, GitHub Models, Anthropic)", "Claude Code", "Telegram Bot API", "Vector Embeddings (bge-m3)", "FTS5 (Full-Text Search)", "Hybrid Search (Vector + FTS5)"]
quality_score: 9
rag_relevance: 8
tags: ["multi-agent orchestration", "tiered LLM routing", "autonomous AI", "knowledge injection", "permission enforcement"]
source: "https://github.com/senda-labs/DQIII8"
discovered_at: "2026-06-25T23:13:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DQIII8 is a production-grade autonomous AI orchestration engine designed for SSH-only VPS environments. It routes queries through a multi-tier LLM pipeline with cost-first routing, hybrid knowledge injection, and deterministic permissions, while providing a Telegram-first UI for interaction.

## Key Features
- Cost-first LLM routing with 4 tiers (local free → paid premium models)
- Hybrid knowledge enrichment (vector + FTS5 + graph) before model inference
- 13 lifecycle hooks for deterministic permissions and auditing
- Telegram-first UI with 23 commands for real-time control
- Dynamic SQLite state engine with 79 tables for session tracking and performance metrics

## Why It Matters for RAG Builders
DQIII8 provides a robust framework for autonomous multi-agent orchestration with cost-efficient LLM routing and strict permission controls, essential for building scalable and auditable RAG systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Ollama, Groq, GitHub Models, Anthropic)
Automated review identified **LLM (Ollama, Groq, GitHub Models, Anthropic)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector Embeddings (bge-m3)
Automated review identified **Vector Embeddings (bge-m3)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hybrid Search (Vector + FTS5)
Automated review identified **Hybrid Search (Vector + FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
