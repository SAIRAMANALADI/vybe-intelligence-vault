---
title: "Detachment5879/zhi-xin"
category: "Agent Framework"
tech_stack: ["Next.js 15", "TypeScript", "FastAPI", "Python 3.14", "Supabase (PostgreSQL)", "Tailwind CSS", "DeepSeek V3 / R1", "SSE (Server-Sent Events)"]
quality_score: 8
rag_relevance: 7
tags: ["personalized learning", "multi-agent AI", "educational platform", "cost-efficient RAG", "adaptive study plans"]
source: "https://github.com/Detachment5879/zhi-xin"
discovered_at: "2026-07-08T08:16:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
知薪 (ZhiXin) is a personalized learning resource generation platform that uses multi-agent AI collaboration to create customized study plans ('一人一课表') for students based on diagnostic assessments. It employs a five-stage KSTAR loop (K-test → S-search → T-analyze → A-generate → R-review) to deliver cost-effective, high-quality learning materials.

## Key Features
- KSTAR five-stage closed-loop system for personalized learning resource generation
- ReviewAgent with 6 deterministic rules for quality control without LLM calls
- Cost control via circuit breakers, pre-test skipping, and atomic knowledge granularity (< 0.1元 per session)
- 10 functional modules including knowledge base, AI tutor, Feynman lecture platform, and teacher portal
- Supports multi-provider LLM switching (e.g., DeepSeek V3/R1)

## Why It Matters for RAG Builders
It demonstrates a practical, multi-agent AI framework for generating personalized learning resources, offering insights into cost-efficient RAG implementations for educational applications.

## Tech Stack Deep Dive
### Next.js 15
Automated review identified **Next.js 15** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python 3.14
Automated review identified **Python 3.14** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Supabase (PostgreSQL)
Automated review identified **Supabase (PostgreSQL)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tailwind CSS
Automated review identified **Tailwind CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek V3 / R1
Automated review identified **DeepSeek V3 / R1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
