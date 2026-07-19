---
title: miikkij/crewaimeat
category: world/public/vault/daily-digests/2026-06-22
tech_stack:
- Python
- CrewAI
- AIMEAT
- uv
- OpenRouter API
- Tavily
- Textual (for TUI)
- Claude Code / GitHub Copilot (for AI-assisted setup)
quality_score: 9
rag_relevance: 8
tags:
- Agent Orchestration
- Multi-Agent Systems
- CrewAI Integration
- AIMEAT Platform
- AI Workflow Automation
source: https://github.com/miikkij/crewaimeat
discovered_at: '2026-06-22T23:15:43Z'
evaluated_by: mistral-small-latest
---

## Summary
crewaimeat enables rapid deployment of CrewAI crews as agents on the AIMEAT platform, automating setup, registration, and orchestration. It provides a scaffold, CLI tools, and example crews to streamline agent creation and integration with AIMEAT's network for task execution and monitoring.

## Key Features
- Automated setup and onboarding via AI assistant prompts (e.g., `startup.prompt.md`)
- Scaffold for CrewAI crews with built-in AIMEAT liaison agent for seamless platform integration
- Live progress tracking and streaming to AIMEAT dashboard without LLM overhead
- CLI tools for scaffolding new crews (`crewaimeat new-crew`) and managing fleets
- Support for model fallback chains (OpenRouter, Ollama, xAI, etc.) and provider resilience

## Why It Matters for RAG Builders
It simplifies the deployment and orchestration of CrewAI crews as agents on AIMEAT, reducing setup time and enabling scalable multi-agent workflows with real-time visibility and control.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CrewAI
Automated review identified **CrewAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AIMEAT
Automated review identified **AIMEAT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter API
Automated review identified **OpenRouter API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tavily
Automated review identified **Tavily** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Textual (for TUI)
Automated review identified **Textual (for TUI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code / GitHub Copilot (for AI-assisted setup)
Automated review identified **Claude Code / GitHub Copilot (for AI-assisted setup)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
