---
title: "mwl313/HH-Memory"
category: "Tooling"
tech_stack: ["Python", "OpenClaw", "vsearch", "grep", "RRF (Reciprocal Rank Fusion)", "JSON", "Bash", "LLM Providers (DeepSeek, OpenAI, Anthropic, Ollama)"]
quality_score: 9
rag_relevance: 8
tags: ["memory system", "local-first", "auto-extraction", "RAG enhancement", "self-hosted"]
source: "https://github.com/mwl313/HH-Memory"
discovered_at: "2026-07-10T06:15:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Haven Harmonic Memory is a local-first, self-hosted 4-layer memory system designed to permanently store and retrieve AI conversation facts, eliminating the limitations of conversation buffers. It automatically extracts, organizes, and promotes atomic facts from conversations to improve long-term AI memory without cloud dependency.

## Key Features
- 4-layer memory architecture (L3 Persona, L2 Scenarios, L1 Atoms, L0 Sessions) for progressive disclosure and efficient retrieval
- Automated background crons for atom extraction (every 15 min), daily reflection, and weekly procedural updates
- Symbolic memory and context optimization to reduce token overhead by ~95% for long tool outputs
- Model-agnostic design supporting multiple LLM providers (DeepSeek, OpenAI, Anthropic, Ollama) with local-first operation
- Research-backed deduplication (γ=0.30 threshold) and intent-based routing for precise memory search

## Why It Matters for RAG Builders
It provides a permanent, self-hosted memory system that eliminates AI forgetfulness by automatically extracting and organizing facts from conversations, significantly enhancing RAG and AI agent reliability without cloud dependency.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw
Automated review identified **OpenClaw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### vsearch
Automated review identified **vsearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### grep
Automated review identified **grep** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### RRF (Reciprocal Rank Fusion)
Automated review identified **RRF (Reciprocal Rank Fusion)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Providers (DeepSeek, OpenAI, Anthropic, Ollama)
Automated review identified **LLM Providers (DeepSeek, OpenAI, Anthropic, Ollama)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
