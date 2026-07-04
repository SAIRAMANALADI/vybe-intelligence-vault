---
title: "OmerEdry/Chatops-incident-agent"
category: "Agent Framework"
tech_stack: ["Python", "FastAPI", "Google Gemini 2.5 Flash", "Google Gemini 2.5 Pro", "PostgreSQL", "Docker", "GitHub Actions", "Discord Webhooks", "Pydantic", "SQLAlchemy", "asyncio"]
quality_score: 9
rag_relevance: 7
tags: ["Incident Management", "AI Triage", "Root Cause Analysis", "LLM Orchestration", "DevOps Automation"]
source: "https://github.com/OmerEdry/Chatops-incident-agent"
discovered_at: "2026-07-04T06:47:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An autonomous AI-powered incident triage engine that ingests alerts from platforms like PagerDuty and GitHub, classifies severity using a dual-tier LLM pipeline (Gemini 2.5 Flash for triage, Gemini 2.5 Pro for deep analysis), and automates root-cause analysis and remediation recommendations with Discord notifications.

## Key Features
- Dual-tier LLM reasoning pipeline for cost-efficient severity classification and deep analysis
- Asynchronous, event-driven architecture with non-blocking I/O for high throughput
- Structured severity classification (P1–P4) with automated escalation logic
- Production-grade engineering with CI/CD, Docker, and Kubernetes readiness
- Persistent incident state with full message trail in PostgreSQL

## Why It Matters for RAG Builders
It streamlines incident response by automating severity classification and root-cause analysis, reducing human triage effort and accelerating resolution for critical incidents.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Gemini 2.5 Flash
Automated review identified **Google Gemini 2.5 Flash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Gemini 2.5 Pro
Automated review identified **Google Gemini 2.5 Pro** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord Webhooks
Automated review identified **Discord Webhooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncio
Automated review identified **asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
