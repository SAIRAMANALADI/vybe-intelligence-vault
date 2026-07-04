---
title: "AhmedB03/Practical-Agents"
category: "Orchestrator"
tech_stack: ["Python", "FAISS", "Azure OpenAI", "Azure AI Search", "Sentence Transformers", "NumPy", "LLM-as-judge", "Mermaid.js"]
quality_score: 9
rag_relevance: 10
tags: ["agentic RAG", "eval-first", "retrieval metrics", "LLM-as-judge", "ablation studies"]
source: "https://github.com/AhmedB03/Practical-Agents"
discovered_at: "2026-07-04T03:39:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An eval-first agentic RAG system designed to measure and improve the performance of tool-using LLM agents over technical documentation. It includes a reproducible evaluation harness with retrieval metrics, LLM-as-judge scoring, and ablation studies to identify and address system weaknesses.

## Key Features
- Reproducible evaluation harness with retrieval, correctness, faithfulness, cost, and latency metrics
- Closed-world synthetic corpus enabling unambiguous ground truth for evaluation
- Swappable vector store backends (FAISS, Azure AI Search) with local fallback for reproducibility
- Agentic decision-making with tool calls (search_docs) and abstention evaluation
- Ablation studies to isolate and optimize retrieval and generation components

## Why It Matters for RAG Builders
It provides a rigorous, reproducible framework for evaluating and improving agentic RAG systems, addressing the critical gap in measuring performance beyond just demo capabilities.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FAISS
Automated review identified **FAISS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Azure OpenAI
Automated review identified **Azure OpenAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Azure AI Search
Automated review identified **Azure AI Search** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentence Transformers
Automated review identified **Sentence Transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM-as-judge
Automated review identified **LLM-as-judge** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js
Automated review identified **Mermaid.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
