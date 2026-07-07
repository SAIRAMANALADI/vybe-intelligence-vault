---
title: "KernelLord/pickysteve"
category: "Orchestrator"
tech_stack: ["Python 3.11", "uv (dependency manager)", "Ollama (local LLM)", "OpenAI-compatible APIs", "rank_bm25", "sentence-transformers", "BAAI/bge-reranker-base", "stackone-defender[onnx]", "JSONL logging"]
quality_score: 9
rag_relevance: 10
tags: ["skill routing", "prompt injection defense", "context isolation", "agent orchestration", "RAG security"]
source: "https://github.com/KernelLord/pickysteve"
discovered_at: "2026-07-07T13:17:11Z"
evaluated_by: "mistral-small-latest"
---

## Summary
PickySteve is a lightweight orchestration layer that selects the most relevant skill for a coding agent's request while enforcing strict security boundaries. It uses a cheap model to route requests, retrieves only necessary context, and ensures untrusted data is isolated before handing off to a capable model for execution.

## Key Features
- Multi-stage security gating (request and retrieved content) to prevent prompt injection and malicious data
- Hybrid retrieval (BM25 + embeddings) with RRF fusion for accurate skill selection
- Cross-encoder reranking with calibrated floor to avoid hallucinations or data leakage
- Tiered escalation for ambiguous cases (cheap model → frontier judge) to balance cost and accuracy
- Untrusted-data-boundary assembly to isolate retrieved context from execution model

## Why It Matters for RAG Builders
PickySteve ensures RAG/AI stacks only load relevant, secure, and non-contaminated context into execution models, drastically reducing hallucinations, prompt injection risks, and irrelevant data overload.

## Tech Stack Deep Dive
### Python 3.11
Automated review identified **Python 3.11** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (dependency manager)
Automated review identified **uv (dependency manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama (local LLM)
Automated review identified **Ollama (local LLM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rank_bm25
Automated review identified **rank_bm25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BAAI/bge-reranker-base
Automated review identified **BAAI/bge-reranker-base** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### stackone-defender[onnx]
Automated review identified **stackone-defender[onnx]** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL logging
Automated review identified **JSONL logging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
