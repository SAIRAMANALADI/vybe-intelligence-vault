---
title: "vibhorxpandey/Echomind"
category: "Agent Framework"
tech_stack: ["Python", "FastAPI", "Next.js 14", "Google ADK", "Gemini 2.5 Flash", "Qdrant", "FastEmbed", "BM25", "Jina Reranker", "Tailwind CSS", "Vercel"]
quality_score: 9
rag_relevance: 10
tags: ["institutional memory", "hybrid retrieval", "long-term memory", "college clubs", "AI agent"]
source: "https://github.com/vibhorxpandey/Echomind"
discovered_at: "2026-07-02T06:38:02Z"
evaluated_by: "mistral-small-latest"
---

## Summary
EchoMind is an institutional memory AI agent designed for college clubs, enabling members to query a club's 5-year archive for insights, citations, and cross-documented synthesis. It leverages hybrid retrieval, long-term memory, and proactive contradiction detection to preserve and retrieve critical institutional knowledge.

## Key Features
- Hybrid retrieval pipeline combining dense (bge-small) and sparse (BM25) embeddings with RRF fusion and cross-encoder reranking for high-precision document search
- Long-term memory via Qdrant's `agent_memory` collection, enabling persistent conversation recall across sessions and restarts
- Proactive contradiction detection and failure warnings by synthesizing insights across multiple documents
- Google ADK integration with tool-based retrieval (search_knowledge, get_member_info, get_event_history, recall_conversation) for structured agent workflows
- Zero-infra fallback mode with embedded Qdrant for local, dependency-free operation

## Why It Matters for RAG Builders
EchoMind demonstrates a production-grade institutional memory system with hybrid retrieval, long-term memory, and proactive reasoning, offering a blueprint for building robust RAG applications that require cross-document synthesis and persistent context.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js 14
Automated review identified **Next.js 14** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google ADK
Automated review identified **Google ADK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini 2.5 Flash
Automated review identified **Gemini 2.5 Flash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qdrant
Automated review identified **Qdrant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jina Reranker
Automated review identified **Jina Reranker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel
Automated review identified **Vercel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
