---
title: "PWDevens/job-search-ai-agent"
category: "Agent Framework"
tech_stack: ["Python", "ChromaDB", "Ollama", "Flask", "Docker", "Sentence Transformers", "APScheduler", "Pandas", "SMTP (for email summaries)"]
quality_score: 9
rag_relevance: 7
tags: ["local LLM", "job search automation", "resume optimization", "vector search", "offline AI"]
source: "https://github.com/PWDevens/job-search-ai-agent"
discovered_at: "2026-06-24T20:47:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A fully local, open-source job-search assistant that automates resume optimization and job matching using ChromaDB for vector search and local LLMs (via Ollama) for agent-based recommendations. It runs entirely offline with no cloud dependencies.

## Key Features
- Fully local deployment with no cloud APIs or data exposure
- Auto-hardware detection to select the optimal local LLM (Phi-4-mini, Llama 3.1 8B, etc.)
- 3-agent pipeline for job matching, resume coaching, and career strategy recommendations
- Embedded ChromaDB for vector-based job/resume retrieval and reranking
- Weekly automated email summaries and Excel pipeline updates

## Why It Matters for RAG Builders
It provides a privacy-preserving, fully local alternative for job-search automation that leverages RAG and agent-based workflows without relying on cloud services.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Flask
Automated review identified **Flask** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence Transformers
Automated review identified **Sentence Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### APScheduler
Automated review identified **APScheduler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pandas
Automated review identified **Pandas** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SMTP (for email summaries)
Automated review identified **SMTP (for email summaries)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
