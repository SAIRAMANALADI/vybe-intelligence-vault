---
title: "timoncool/satori"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "SQLite", "FTS5 (Full-Text Search)", "Claude Code", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 7
tags: ["self-learning", "Claude Code", "MCP server", "skill automation", "human-in-the-loop"]
source: "https://github.com/timoncool/satori"
discovered_at: "2026-07-07T13:17:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
satori is an MCP server and hooks system that enables Claude Code to build self-learning skills from user corrections and tool failures through a human-gated loop. It operates deterministically without background LLM calls, ensuring skills are only activated after explicit approval.

## Key Features
- Closed-loop skill learning from user corrections and tool failures with a human gate
- Deterministic mechanics with no background LLM calls, reducing costs
- 4-stage loop: capture, decide, distill, and curate with explicit approval
- Patch-not-append and permanent SKIP for noise reduction
- FTS5 search over past sessions for contextual recall

## Why It Matters for RAG Builders
It enables AI agents like Claude Code to autonomously improve their procedural skills while maintaining human oversight, reducing manual effort in skill refinement.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FTS5 (Full-Text Search)
Automated review identified **FTS5 (Full-Text Search)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
