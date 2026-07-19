---
title: cyberspacesec/snir-skills
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Go
- Chrome DevTools Protocol (CDP)
- HTTP API
- CLI
- Docker
- SQLite
- JSONL
- CSV
quality_score: 9
rag_relevance: 8
tags:
- web intelligence
- screenshot automation
- Chrome DevTools
- AI agent integration
- evidence collection
source: https://github.com/cyberspacesec/snir-skills
discovered_at: '2026-06-24T13:15:25Z'
evaluated_by: mistral-small-latest
---

## Summary
snir is an AI-native web screenshot and intelligence collector that enables AI agents and automation systems to capture screenshots, page evidence, and web intelligence via Chrome DevTools Protocol. It supports multiple integration methods including CLI, HTTP API, Go SDK, and CDP Provider for flexible deployment in RAG and AI workflows.

## Key Features
- AI-first design with structured entrypoints (SKILL.md, references/) for agent discovery and integration
- Multi-modal capture capabilities including full-page screenshots, HTML, headers, cookies, console logs, and network requests
- Flexible deployment options via CLI, HTTP API, Go SDK, or shared CDP Provider for cross-process reuse
- Advanced browser control features like device emulation, JavaScript execution, form interaction, and proxy rotation
- Scalable batch processing with CIDR expansion, port scanning, concurrency control, and structured output formats (JSONL, CSV, SQLite)

## Why It Matters for RAG Builders
snir provides a critical browser-backed layer for AI agents to collect real-time web evidence and screenshots, enabling accurate and context-rich RAG applications without requiring manual browser interaction.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP API
Automated review identified **HTTP API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSV
Automated review identified **CSV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
