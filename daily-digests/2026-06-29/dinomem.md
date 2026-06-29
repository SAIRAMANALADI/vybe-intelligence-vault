---
title: "02-dino/dinomem"
category: "Tooling"
tech_stack: ["Python", "Docker", "LLM (for extraction/review)", "Sentence Transformers (for embeddings)", "OpenClaw (agent framework)", "TEI Embedding Server", "Cron (for scheduling)"]
quality_score: 9
rag_relevance: 8
tags: ["memory management", "long-term memory", "agent tooling", "self-improving systems", "deduplication"]
source: "https://github.com/02-dino/dinomem"
discovered_at: "2026-06-29T07:29:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
dinomem is a self-curating long-term memory system for AI agents that improves memory quality over time by distilling, deduplicating, and reviewing sessions using an LLM. It replaces noisy memory accumulation with a structured, actively managed memory layer that adapts as underlying models improve.

## Key Features
- Automated session archiving and memory extraction via LLM distillation
- Active recall with a machine-readable navigation index (MEMORY.md)
- Daily deduplication and LLM-based review to maintain memory quality
- Permanent and transient memory pinning (_pin_*.md and _note_*.md files)
- Zero-config installation with Docker, cron, and OpenClaw integration

## Why It Matters for RAG Builders
dinomem ensures AI agents maintain high-quality, noise-free memory over time by dynamically curating and improving recall, reducing context bloat and enhancing decision-making without manual intervention.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (for extraction/review)
Automated review identified **LLM (for extraction/review)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence Transformers (for embeddings)
Automated review identified **Sentence Transformers (for embeddings)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw (agent framework)
Automated review identified **OpenClaw (agent framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TEI Embedding Server
Automated review identified **TEI Embedding Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cron (for scheduling)
Automated review identified **Cron (for scheduling)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
