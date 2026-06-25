---
title: "88plug/total-recall"
category: "Tooling"
tech_stack: ["Python", "SQLite", "FastEmbed", "Ollama", "MCP (Model Context Protocol)", "Bash", "JSONL", "SQL", "FastAPI", "Ruff", "MyPy", "Pytest"]
quality_score: 9
rag_relevance: 8
tags: ["memory", "cross-session", "operator profiling", "transcript mining", "local-first"]
source: "https://github.com/88plug/total-recall"
discovered_at: "2026-06-25T19:57:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Total Recall is a cross-session memory plugin for AI coding assistants like Claude Code that mines session transcripts to provide historical context, decisions, corrections, and goals to new sessions. It enables continuity across projects and CLI tools by extracting operator profiles, voice patterns, and project-specific knowledge from local transcripts.

## Key Features
- Extracts 17 types of signals from session transcripts (decisions, corrections, goals, bans, domain facts, etc.)
- Provides 26 MCP tools for real-time memory queries and operator context retrieval
- Supports 8+ CLI clients (Claude Code, OpenCode, Cursor, etc.) with cross-CLI deduplication
- Offers optional local LLM refinement for improved extraction accuracy (e.g., machine-name extraction)
- Includes 15 slash commands for manual inspection, rebuilding, and metrics analysis

## Why It Matters for RAG Builders
Total Recall eliminates the need for AI coding assistants to re-learn context across sessions by leveraging locally stored historical data, significantly improving productivity and continuity in long-running projects.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastEmbed
Automated review identified **FastEmbed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL
Automated review identified **SQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ruff
Automated review identified **Ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MyPy
Automated review identified **MyPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
