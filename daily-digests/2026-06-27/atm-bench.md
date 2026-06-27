---
title: "JingbiaoMei/ATM-Bench"
category: "Tooling"
tech_stack: ["Python", "PyTorch", "Hugging Face Transformers", "LangChain", "FastAPI", "Docker", "Jupyter Notebooks", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
tags: ["memory benchmark", "multimodal QA", "long-term memory", "referential reasoning", "evidence-grounded"]
source: "https://github.com/JingbiaoMei/ATM-Bench"
discovered_at: "2026-06-27T11:42:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ATM-Bench is a benchmark suite designed for evaluating long-term personalized referential memory QA systems over multimodal data (images, videos, emails) spanning ~4 years. It introduces evidence-grounded retrieval and answering challenges, including referential queries, multi-source reasoning, and conflicting evidence scenarios.

## Key Features
- First benchmark for long-term (4-year) personalized referential memory QA with multimodal data
- Includes evidence-grounded retrieval and answering with human-annotated QA pairs
- Supports multi-source reasoning (images, videos, emails) and conflicting evidence handling
- Provides NIAH (Needle In A Haystack) and Oracle evaluation setups for isolated retrieval/generation testing
- Offers baseline implementations for memory systems (A-Mem, HippoRAG2, mem0, MemoryOS) and general-purpose agents (Claude, Codex, Pi, OpenCode)

## Why It Matters for RAG Builders
ATM-Bench provides a standardized framework to evaluate and improve long-term memory systems for AI agents, critical for building reliable and context-aware RAG applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyTorch
Automated review identified **PyTorch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hugging Face Transformers
Automated review identified **Hugging Face Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain
Automated review identified **LangChain** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jupyter Notebooks
Automated review identified **Jupyter Notebooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
