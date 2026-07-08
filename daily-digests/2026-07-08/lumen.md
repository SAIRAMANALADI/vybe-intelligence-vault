---
title: "jaydip-meesho/lumen"
category: "Agent Framework"
tech_stack: ["Python", "OpenAI API Compatibility", "Ollama", "LM Studio", "llama.cpp", "OpenRouter", "Rich (UI)", "pipx", "uv"]
quality_score: 9
rag_relevance: 8
tags: ["coding agent", "privacy-first", "terminal-based", "local LLM", "OpenRouter integration"]
source: "https://github.com/jaydip-meesho/lumen"
discovered_at: "2026-07-08T19:16:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Lumen is a privacy-first terminal-based coding agent that allows users to run local LLMs offline or connect to OpenRouter's model catalogue for cloud-based assistance. It prioritizes user control, privacy, and flexibility with features like airgap mode, Secret Guard, and diff-based file editing.

## Key Features
- Runs local LLMs offline (Ollama, LM Studio, llama.cpp) with no network egress
- Supports OpenRouter's full model catalogue with user-controlled API keys
- Airgap mode hard-blocks all outbound network traffic for provable privacy
- Secret Guard scans and blocks sensitive data (API keys, .env) before cloud requests
- Diff-based file editing with approval gates and undo functionality

## Why It Matters for RAG Builders
Lumen empowers RAG/AI stack builders with a privacy-first, locally controllable coding agent that integrates seamlessly with both local and cloud-based LLMs, reducing vendor lock-in and ensuring code security.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API Compatibility
Automated review identified **OpenAI API Compatibility** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LM Studio
Automated review identified **LM Studio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp
Automated review identified **llama.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rich (UI)
Automated review identified **Rich (UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pipx
Automated review identified **pipx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
