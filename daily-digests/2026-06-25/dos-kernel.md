---
title: anthony-chaudhary/dos-kernel
category: daily-digests/2026-06-25
tech_stack:
- Python
- PyYAML
- Git
- CLI
- MCP (Model Context Protocol)
- CI/CD Pipelines
quality_score: 9
rag_relevance: 8
tags:
- AI agent verification
- claim validation
- git-based auditing
- fleet orchestration
- truthfulness enforcement
source: https://github.com/anthony-chaudhary/dos-kernel
discovered_at: '2026-06-25T17:11:10Z'
evaluated_by: mistral-small-latest
---

## Summary
DOS (Dispatch Operating System) is a referee system that verifies AI agent claims against real-world artifacts like git history, ensuring truthfulness in agent-reported task completion. It prevents false claims by validating work against evidence rather than trusting agent narratives.

## Key Features
- Verifies AI agent claims against git history to detect false 'done' reports
- Integrates with existing agent workflows via hooks or CLI commands
- Supports multi-agent fleets with collision detection and stall prevention
- Provides exit codes for programmatic gatekeeping of agent outputs
- Offers extensible witness systems beyond git (e.g., CI status, test environments)

## Why It Matters for RAG Builders
It ensures AI agents cannot falsely claim task completion by validating work against immutable artifacts, reducing silent corruption and improving reliability in automated workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyYAML
Automated review identified **PyYAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD Pipelines
Automated review identified **CI/CD Pipelines** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
