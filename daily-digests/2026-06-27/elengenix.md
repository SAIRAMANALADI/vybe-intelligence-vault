---
title: "Ashveil1/Elengenix"
category: "Agent Framework"
tech_stack: ["Python", "Go", "ChromaDB", "SQLite", "Textual (TUI)", "AI Providers (OpenAI, Anthropic, Google Gemini, etc.)", "pytest", "Docker (implied for Termux support)"]
quality_score: 9
rag_relevance: 7
tags: ["autonomous security agent", "penetration testing", "AI-driven vulnerability discovery", "multi-agent collaboration", "governance and safety"]
source: "https://github.com/Ashveil1/Elengenix"
discovered_at: "2026-06-27T15:13:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Elengenix is an autonomous AI agent framework designed for security research, enabling dynamic attack planning, multi-model collaboration, and real-time adaptation for penetration testing and vulnerability discovery. It integrates governance for safe tool execution and semantic memory for cross-session recall.

## Key Features
- Dynamic attack tree construction and real-time strategy adaptation for security research
- Multi-model collaboration (up to 3 AI models) for cross-validated findings and shared context
- Governance engine classifying actions as SAFE, PRIVILEGED, or DESTRUCTIVE with user confirmation for sensitive operations
- Semantic vector memory (ChromaDB/SQLite) for persistent cross-session recall of findings and context
- Pre-flight phase with pure-Python modules for baseline findings even without AI providers or third-party tools

## Why It Matters for RAG Builders
Elengenix enables AI-driven security research automation with built-in safety and governance, bridging the gap between brittle security tools and human-like reasoning for vulnerability discovery.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Textual (TUI)
Automated review identified **Textual (TUI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AI Providers (OpenAI, Anthropic, Google Gemini, etc.)
Automated review identified **AI Providers (OpenAI, Anthropic, Google Gemini, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (implied for Termux support)
Automated review identified **Docker (implied for Termux support)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
