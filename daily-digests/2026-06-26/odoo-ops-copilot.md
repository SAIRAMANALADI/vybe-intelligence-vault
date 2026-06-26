---
title: "dali012/odoo-ops-copilot"
category: "Agent Framework"
tech_stack: ["FastAPI", "Anthropic Messages API", "Next.js 16", "Python 3.13", "PostgreSQL 16", "Odoo Community 18", "SQLAlchemy", "pandas", "statsmodels", "React 19", "TypeScript", "Docker Compose", "Nginx"]
quality_score: 9
rag_relevance: 8
tags: ["AI copilot", "ERP integration", "demand forecasting", "human-in-the-loop", "business analytics"]
source: "https://github.com/dali012/odoo-ops-copilot"
discovered_at: "2026-06-26T18:28:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Odoo Ops Copilot is an AI-driven operations assistant for Odoo ERP that enables natural-language business queries, data-grounded analytics, demand forecasting, and human-approved write-backs like purchase orders or price adjustments. It integrates with Odoo's PostgreSQL backend and Anthropic's tool-calling API to provide real-time insights and operational recommendations.

## Key Features
- Natural-language querying with Odoo data grounding via SQL and XML-RPC tools
- 11 read-only analytics tools including demand forecasting, stockout risk, RFM segmentation, and margin analysis
- Human-approved write-back loop for operational actions (purchase orders, discounts, inventory adjustments) with audit logging
- SQL guardrails ensuring read-only, single-statement SELECT queries with table allowlists and row caps
- Durable chat memory and eval harness with 100% pass rate on golden-question suite

## Why It Matters for RAG Builders
It bridges AI-driven analytics with human oversight in ERP environments, enabling safe, data-grounded operational decision-making for businesses using Odoo.

## Tech Stack Deep Dive
### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic Messages API
Automated review identified **Anthropic Messages API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js 16
Automated review identified **Next.js 16** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python 3.13
Automated review identified **Python 3.13** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL 16
Automated review identified **PostgreSQL 16** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Odoo Community 18
Automated review identified **Odoo Community 18** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pandas
Automated review identified **pandas** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### statsmodels
Automated review identified **statsmodels** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React 19
Automated review identified **React 19** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nginx
Automated review identified **Nginx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
