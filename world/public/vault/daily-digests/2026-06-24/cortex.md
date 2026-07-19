---
title: jessekemp1/cortex
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Python
- Model Context Protocol (MCP)
- BM25
- Embeddings
- Redis
- FastAPI
- xarray
- Claude Code
- GPT-4
- Gemini
quality_score: 9
rag_relevance: 9
tags:
- memory persistence
- LLM agent infrastructure
- anti-pattern detection
- task orchestration
- developer workflow
source: https://github.com/jessekemp1/cortex
discovered_at: '2026-06-24T16:22:03Z'
evaluated_by: mistral-small-latest
---

## Summary
Cortex is an infrastructure layer designed to solve session amnesia in LLM agents by providing persistent, compounding memory across sessions. It captures and retrieves contextual knowledge, anti-patterns, and task pipelines to improve agent effectiveness and prevent repeated mistakes.

## Key Features
- Three-tier memory system (working, episodic, semantic) with hybrid retrieval
- Anti-pattern database that surfaces past mistakes to prevent recurrence
- Intelligent model routing based on task complexity and learned outcomes
- Goal-to-task pipeline for parsing and prioritizing work items
- Interaction capture and implicit feedback analysis for continuous learning

## Why It Matters for RAG Builders
Cortex provides the critical infrastructure for LLM agents to retain and build upon past context, eliminating repetitive explanations and enabling compounding intelligence across sessions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embeddings
Automated review identified **Embeddings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### xarray
Automated review identified **xarray** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GPT-4
Automated review identified **GPT-4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini
Automated review identified **Gemini** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
