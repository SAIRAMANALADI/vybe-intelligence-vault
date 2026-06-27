---
title: "avi-ai-git/dormio"
category: "Agent Framework"
tech_stack: ["Python", "Streamlit", "LangGraph", "ChromaDB", "deck.gl", "Mistral", "Langfuse", "Pytest"]
quality_score: 9
rag_relevance: 9
tags: ["RAG", "Agentic", "Travel Planning", "Deterministic Routing", "Open Data"]
source: "https://github.com/avi-ai-git/dormio"
discovered_at: "2026-06-27T13:22:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Dormio is a conversational AI assistant that plans night train routes across Europe using plain language queries. It combines a deterministic night-train graph, a ChromaDB knowledge base, and optional web searches to provide accurate, hallucination-free travel planning with real-time booking links and CO2 emissions data.

## Key Features
- Deterministic night-train routing via a graph database to prevent hallucinations
- Conversational AI with multi-model support (Claude Haiku, Mistral Large, GPT-OSS)
- In-memory ChromaDB vector store for cited knowledge retrieval
- Real-time CO2 emissions tracking for sustainable travel planning
- Offline-capable with deterministic fallback for resilience

## Why It Matters for RAG Builders
Dormio demonstrates a robust agentic-RAG architecture where a language model is constrained by deterministic tools, ensuring factual accuracy in travel planning while maintaining flexibility for user queries.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamlit
Automated review identified **Streamlit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangGraph
Automated review identified **LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### deck.gl
Automated review identified **deck.gl** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mistral
Automated review identified **Mistral** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Langfuse
Automated review identified **Langfuse** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
