---
title: NachaFromMars/VietNovelOmni
category: daily-digests/2026-07-10
tech_stack:
- Go
- LLM APIs (OpenRouter, Anthropic, OpenAI, Ollama)
- Docker
- EPUB 3
- TUI (Terminal User Interface)
quality_score: 9
rag_relevance: 7
tags:
- AI novel generation
- multi-agent system
- Vietnamese NLP
- autonomous writing
- EPUB export
source: https://github.com/NachaFromMars/VietNovelOmni
discovered_at: '2026-07-10T06:30:05Z'
evaluated_by: mistral-small-latest
---

## Summary
VietNovelOmni is a Vietnamese-localized fork of ainovel-cli, an autonomous AI engine for generating long-form Vietnamese novels from a single prompt. It employs a multi-agent system (Coordinator, Architect, Writer, Editor) to produce publishable-quality prose with zero em dashes or English loanwords, and supports EPUB 3 exports.

## Key Features
- Multi-agent architecture (Coordinator/Architect/Writer/Editor) for autonomous novel generation
- Vietnamese-specific quality gates (no em dashes, no English loanwords, prose refinement)
- Beat-method planning with 3 drafts + merge-audit and self-review per chapter
- Support for 500+ chapters with 3-tier context management (chapter → arc → volume)
- Real-time intervention and checkpoint-based recovery for robustness

## Why It Matters for RAG Builders
It provides a specialized, autonomous AI pipeline for generating high-quality Vietnamese novels, reducing manual effort and enabling scalable content creation for RAG systems requiring narrative data.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (OpenRouter, Anthropic, OpenAI, Ollama)
Automated review identified **LLM APIs (OpenRouter, Anthropic, OpenAI, Ollama)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EPUB 3
Automated review identified **EPUB 3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (Terminal User Interface)
Automated review identified **TUI (Terminal User Interface)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
