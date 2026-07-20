---
title: lsdefine/GenericAgent
category: daily-digests/2026-06-22
tech_stack:
- Python
- LLM APIs (Claude, Gemini, Kimi, MiniMax)
- TMWebdriver (browser automation)
- ADB (Android Debug Bridge)
- OCR (RapidOCR)
- Streamlit
- PyWebView
- Simple WebSocket Server
- AIOHTTP
- BeautifulSoup4
quality_score: 9
rag_relevance: 10
tags:
- autonomous agents
- self-evolving
- minimal architecture
- system control
- skill crystallization
source: https://github.com/lsdefine/GenericAgent
discovered_at: '2026-06-22T18:14:15Z'
evaluated_by: mistral-small-latest
---

## Summary
GenericAgent is a minimal, self-evolving autonomous agent framework (~3K lines of code) that grants LLMs system-level control over local computers via 9 atomic tools and a ~100-line agent loop. It autonomously crystallizes task execution paths into reusable skills, forming a personal skill tree over time.

## Key Features
- Self-evolving agent that automatically crystallizes task execution paths into reusable skills, forming a personal skill tree over time.
- Minimal architecture (~3K lines of core code) with a ~100-line agent loop, enabling strong execution with low token consumption (<30K context window).
- Provides 9 atomic tools for full system control, including browser automation, terminal access, filesystem operations, screen vision, and mobile device control via ADB.

## Why It Matters for RAG Builders
GenericAgent enables AI engineers to build self-improving agent systems with minimal overhead, reducing deployment complexity and token costs while maximizing adaptability and skill accumulation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (Claude, Gemini, Kimi, MiniMax)
Automated review identified **LLM APIs (Claude, Gemini, Kimi, MiniMax)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TMWebdriver (browser automation)
Automated review identified **TMWebdriver (browser automation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ADB (Android Debug Bridge)
Automated review identified **ADB (Android Debug Bridge)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (RapidOCR)
Automated review identified **OCR (RapidOCR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Streamlit
Automated review identified **Streamlit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyWebView
Automated review identified **PyWebView** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Simple WebSocket Server
Automated review identified **Simple WebSocket Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AIOHTTP
Automated review identified **AIOHTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BeautifulSoup4
Automated review identified **BeautifulSoup4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
