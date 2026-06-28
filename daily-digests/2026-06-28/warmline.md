---
title: "cognis-digital/warmline"
category: "Tooling"
tech_stack: ["Python", "YAML", "JSON", "CSV", "MCP (Model Context Protocol)", "Docker", "Git", "SARIF"]
quality_score: 8
rag_relevance: 7
tags: ["lead scoring", "rule-based ranking", "CI/CD integration", "MCP-native", "self-hostable"]
source: "https://github.com/cognis-digital/warmline"
discovered_at: "2026-06-28T14:48:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
WARMLINE is a self-hostable lead-scoring engine that evaluates and ranks inbound/outbound leads using a YAML rulebook, emitting prioritized results as JSON/CSV for SDRs, CI pipelines, or AI agents. It integrates with MCP servers and supports polyglot implementations.

## Key Features
- Scores and ranks leads using a declarative YAML rulebook for consistent, reviewable logic
- Supports multiple output formats (JSON, CSV, SARIF) for seamless integration with pipelines and CRMs
- Provides CI-ready exit codes for gatekeeping and automation (e.g., fail if no lead meets a threshold)
- Offers MCP-native server support for AI agent workflows and polyglot implementations (Python, JS, Go, Rust)
- Self-hostable with zero external dependencies, ensuring data privacy and control

## Why It Matters for RAG Builders
WARMLINE streamlines lead prioritization for RAG pipelines by providing a deterministic, rule-based scoring system that integrates directly with CI/CD and AI agent workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSV
Automated review identified **CSV** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
