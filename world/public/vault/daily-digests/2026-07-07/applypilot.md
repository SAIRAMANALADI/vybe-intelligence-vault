---
title: cebersaban44-rgb/ApplyPilot
category: daily-digests/2026-07-07
tech_stack:
- Python 3.11+
- LLM (Gemini API)
- Playwright
- SQLite
- Chrome/Chromium
- Telegram Bot API
- Claude Code CLI
- FastAPI (implied by service mode)
- Pydantic
- pytest
quality_score: 9
rag_relevance: 6
tags:
- job application automation
- honesty enforcement
- human-in-the-loop
- Polish job market
- multi-tenant
source: https://github.com/cebersaban44-rgb/ApplyPilot
discovered_at: '2026-07-07T13:15:11Z'
evaluated_by: mistral-small-latest
---

## Summary
ApplyPilot is an honesty-gated, human-supervised job application agent tailored for the Polish market. It automates job discovery, resume tailoring, and application submission while enforcing strict honesty checks and human oversight to prevent fabrication and ensure ethical job applications.

## Key Features
- Zero-tolerance fabrication judge for resume tailoring to ensure claims are defensible
- Attended submission in user's own Chrome browser with rate limiting and kill switch
- Multi-tenant architecture with isolated profiles and shared learnings
- Cost accounting and budget caps for LLM usage and API calls
- Self-learning memory for Q&A and job board behaviors to reduce token usage

## Why It Matters for RAG Builders
It provides a robust framework for ethical and efficient job application automation with strict honesty controls, making it valuable for AI engineers building trustworthy agent systems.

## Tech Stack Deep Dive
### Python 3.11+
Automated review identified **Python 3.11+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Gemini API)
Automated review identified **LLM (Gemini API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome/Chromium
Automated review identified **Chrome/Chromium** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code CLI
Automated review identified **Claude Code CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implied by service mode)
Automated review identified **FastAPI (implied by service mode)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
