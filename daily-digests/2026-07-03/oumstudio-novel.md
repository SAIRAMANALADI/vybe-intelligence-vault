---
title: "NachaFromMars/oumstudio-novel"
category: "Tooling"
tech_stack: ["Go", "Docker", "LLM APIs (OpenRouter, Anthropic, OpenAI, Ollama)", "CLI/TUI", "JSON/YAML configuration", "EPUB/TXT export"]
quality_score: 9
rag_relevance: 7
tags: ["AI novel generation", "multi-agent orchestration", "autonomous writing", "Vietnamese localization", "LLM-powered storytelling"]
source: "https://github.com/NachaFromMars/oumstudio-novel"
discovered_at: "2026-07-03T03:53:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Vietnamese-localized fork of ainovel-cli, an autonomous AI-powered novel-writing CLI tool that generates complete novels from a single prompt without manual intervention. It orchestrates multiple AI agents (architect, writer, editor) in a loop to create, refine, and evaluate chapters with real-time user feedback and checkpointing.

## Key Features
- Multi-agent autonomous writing loop (Architect → Writer → Editor) with real-time coordination
- Supports 500+ chapters with 3-tier context management (chapter → arc → collection) and automatic compression
- Real-time user intervention and editing without halting the writing process
- Checkpointing after each tool call for crash recovery and precise state restoration
- Customizable writing styles, rules, and 7-dimensional editorial evaluations (consistency, pacing, character depth, etc.)

## Why It Matters for RAG Builders
It provides a robust, autonomous framework for generating long-form AI-written content with structured agent collaboration, making it valuable for RAG builders who need to produce high-quality, context-aware narratives or documentation.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (OpenRouter, Anthropic, OpenAI, Ollama)
Automated review identified **LLM APIs (OpenRouter, Anthropic, OpenAI, Ollama)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI/TUI
Automated review identified **CLI/TUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/YAML configuration
Automated review identified **JSON/YAML configuration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EPUB/TXT export
Automated review identified **EPUB/TXT export** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
