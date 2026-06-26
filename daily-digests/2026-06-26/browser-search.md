---
title: "Johell1NS/browser-search"
category: "Orchestrator"
tech_stack: ["Docker", "JavaScript", "Node.js", "SearXNG", "Camofox", "CloakBrowser", "Playwright", "REST APIs", "Metasearch Engines"]
quality_score: 9
rag_relevance: 10
tags: ["web automation", "anti-hallucination", "self-hosted", "AI agent tools", "anti-bot bypass"]
source: "https://github.com/Johell1NS/browser-search"
discovered_at: "2026-06-26T06:51:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
browser-search is a skill for AI agents that orchestrates SearXNG, Camofox, and CloakBrowser to enable web search and automated browsing. It provides a self-hosted, anti-hallucination solution for agents to interact with the web, including bypassing anti-bot protections.

## Key Features
- Orchestrates three open-source tools (SearXNG, Camofox, CloakBrowser) for comprehensive web search and browsing
- Automatic escalation between tools based on site protection levels (e.g., switches to CloakBrowser if Camofox is blocked)
- Anti-hallucination workflow enforces 'search first, answer second' to verify claims against live sources
- Supports 12+ languages and is fully customizable via plain-text SKILL.md instructions
- Lightweight and runs on low-power hardware like Raspberry Pi with minimal resource consumption

## Why It Matters for RAG Builders
It provides a critical orchestration layer for RAG builders to enable reliable, anti-hallucination web search and browsing capabilities in AI agents without relying on proprietary APIs or external services.

## Tech Stack Deep Dive
### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Camofox
Automated review identified **Camofox** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CloakBrowser
Automated review identified **CloakBrowser** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Metasearch Engines
Automated review identified **Metasearch Engines** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
