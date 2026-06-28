---
title: "BA-CalderonMorales/agent-harness"
category: "Agent Framework"
tech_stack: ["Go", "Bubble Tea (TUI framework)", "YAML", "AES-256-GCM (encryption)", "llama.cpp (local LLM inference)", "OpenRouter", "OpenAI", "Anthropic"]
quality_score: 8
rag_relevance: 9
tags: ["agent framework", "coding agents", "local LLM", "TUI", "modular architecture"]
source: "https://github.com/BA-CalderonMorales/agent-harness"
discovered_at: "2026-06-28T16:08:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A clean-room, pattern-derived agent harness for building coding agents, designed to capture architectural patterns from production AI agent tools. It provides a modular framework for core agent loops, tool dispatch, secure credential storage, and session management.

## Key Features
- Core agent loop with streaming responses for real-time interaction
- Tool dispatch with granular permission controls (read/write/execute/delete)
- Two execution modes: interactive (prompt-based) and yolo (auto-approve with visibility)
- Secure credential storage with AES-256-GCM encryption and layered configuration (YAML + environment variables)
- Session management with auto-save and slash command system for dynamic control

## Why It Matters for RAG Builders
It provides a production-grade blueprint for building modular, secure, and extensible coding agents, reducing development time for RAG/AI stack builders.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bubble Tea (TUI framework)
Automated review identified **Bubble Tea (TUI framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-256-GCM (encryption)
Automated review identified **AES-256-GCM (encryption)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama.cpp (local LLM inference)
Automated review identified **llama.cpp (local LLM inference)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenRouter
Automated review identified **OpenRouter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI
Automated review identified **OpenAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic
Automated review identified **Anthropic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
