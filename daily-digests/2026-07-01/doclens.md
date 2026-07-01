---
title: "Rodrigo-Palma/doclens"
category: "Tooling"
tech_stack: ["Python", "PyTorch", "Transformers", "TRL", "bitsandbytes", "Ollama", "FastAPI", "Ruff", "Docker", "LoRA/QLoRA", "MPS (Apple Silicon)"]
quality_score: 8
rag_relevance: 9
tags: ["fine-tuning", "LoRA", "grounded answers", "RAG", "local-first"]
source: "https://github.com/Rodrigo-Palma/doclens"
discovered_at: "2026-07-01T17:53:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DocLens provides a framework to fine-tune small language models (e.g., Qwen2.5-0.5B) using LoRA/QLoRA for grounded, cited answers, combining retrieval-augmented generation (RAG) with fine-tuning to enforce consistent output formats and citation behavior.

## Key Features
- Fine-tunes small models (e.g., Qwen2.5-0.5B) with LoRA/QLoRA for grounded, cited answers
- Uses completion-only loss to focus gradients on answer generation, not prompts or context
- Combines RAG for dynamic context with fine-tuning for consistent output behavior (citation, format)
- Supports local-first RAG pipelines with Ollama or offline embedding hashing
- Provides a CLI, FastAPI endpoint, and Docker deployment for easy integration

## Why It Matters for RAG Builders
It bridges the gap between RAG and fine-tuning by enabling small models to consistently produce grounded, cited answers while leveraging retrieval for fresh context, making it ideal for domain-specific AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch
Automated review identified **PyTorch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Transformers
Automated review identified **Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TRL
Automated review identified **TRL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### bitsandbytes
Automated review identified **bitsandbytes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LoRA/QLoRA
Automated review identified **LoRA/QLoRA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MPS (Apple Silicon)
Automated review identified **MPS (Apple Silicon)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
