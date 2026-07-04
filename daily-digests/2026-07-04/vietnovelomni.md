---
title: "NachaFromMars/VietNovelOmni"
category: "Tooling"
tech_stack: ["Go", "LLM APIs (OpenRouter, Anthropic, OpenAI, Ollama)", "Docker", "EPUB 3", "TUI (Terminal UI)", "JSON/YAML (config)", "Git"]
quality_score: 9
rag_relevance: 7
tags: ["autonomous writing", "multi-agent LLM", "Vietnamese prose", "novel generation", "EPUB export"]
source: "https://github.com/NachaFromMars/VietNovelOmni"
discovered_at: "2026-07-04T21:55:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
VietNovelOmni is a Vietnamese-localized fork of ainovel-cli, an autonomous AI-powered novel-writing engine that transforms a single prompt into a complete, publishable novel without manual intervention. It employs a multi-agent system (Coordinator, Architect, Writer, Editor) with quality gates, beat-method planning, and EPUB 3 export capabilities.

## Key Features
- Multi-agent autonomous writing pipeline (Coordinator, Architect, Writer, Editor) with quality gates
- Vietnamese-specific prose validation (0 em dash, 0 English) and style enforcement
- Beat-method planning with 3-pass merge-audit and per-chapter self-review
- Supports 500+ chapters with 3-tier context management (chapter → arc → volume)
- EPUB 3 premium export with customizable styles and real-time intervention support

## Why It Matters for RAG Builders
It provides a specialized, autonomous AI engine for generating high-quality Vietnamese novels, reducing manual effort in long-form content creation while ensuring linguistic and stylistic consistency.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (OpenRouter, Anthropic, OpenAI, Ollama)
Automated review identified **LLM APIs (OpenRouter, Anthropic, OpenAI, Ollama)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EPUB 3
Automated review identified **EPUB 3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Terminal UI)
Automated review identified **TUI (Terminal UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/YAML (config)
Automated review identified **JSON/YAML (config)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
