---
title: "shimo4228/contemplative-agent"
category: "Agent Framework"
tech_stack: ["Python", "Ollama", "Qwen3.5 9B", "NumPy", "Requests", "Markdown", "JSONL", "CLI"]
quality_score: 9
rag_relevance: 8
tags: ["autonomous agents", "knowledge distillation", "self-reflection", "local LLM", "human-in-the-loop"]
source: "https://github.com/shimo4228/contemplative-agent"
discovered_at: "2026-06-23T21:28:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A CLI-based autonomous agent that implements a six-phase knowledge cycle (AKC) over its own logs, enabling self-reflection and knowledge distillation without cloud dependencies. It operates entirely locally using a 9B model on Apple Silicon and enforces human approval gates for every knowledge promotion.

## Key Features
- Six-phase knowledge cycle (AKC) over agent logs with human approval gates for every promotion
- Embedding-based memory classification using editable views for dynamic categorization
- Grounded distillation per episode with full context retention for replayability
- Provenance tracking and structural visibility of memory origins via MINJA-class injection
- Markdown-based configuration for prompts, views, identity, and constitution for full customization

## Why It Matters for RAG Builders
It provides a fully auditable, local-first framework for building autonomous agents that self-improve through reflection while maintaining human oversight and accountability.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen3.5 9B
Automated review identified **Qwen3.5 9B** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Requests
Automated review identified **Requests** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
