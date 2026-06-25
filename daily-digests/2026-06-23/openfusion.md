---
title: "0xZ0uk/openfusion"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Hono", "LiteLLM", "Brave Search API", "Docker", "Zod"]
quality_score: 8
rag_relevance: 9
tags: ["multi-model", "LLM orchestration", "self-hosted", "RAG optimization", "model fusion"]
source: "https://github.com/0xZ0uk/openfusion"
discovered_at: "2026-06-23T16:28:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Openfusion is a self-hosted proxy that enables multi-model deliberation by running a panel of LLMs in parallel, analyzing their responses with a judge model, and composing a final answer. It integrates with LiteLLM to support any OpenAI-compatible provider while keeping data, keys, and infrastructure under user control.

## Key Features
- Parallel LLM panel calls (3-8 models) with consensus analysis
- Judge model for structured response evaluation and synthesis
- OpenAI-compatible API with streaming support
- Web search integration for context retrieval
- LiteLLM passthrough for non-fusion requests

## Why It Matters for RAG Builders
It enables RAG builders to leverage multi-model consensus and analysis for higher-quality, more reliable responses while maintaining full control over data and infrastructure.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono
Automated review identified **Hono** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LiteLLM
Automated review identified **LiteLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Brave Search API
Automated review identified **Brave Search API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
