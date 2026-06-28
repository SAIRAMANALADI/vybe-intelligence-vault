---
title: "johnlam1968/openviking-extra"
category: "Tooling"
tech_stack: ["Python", "Hermes Agent", "OpenViking API", "HTTP Client", "Plugin System"]
quality_score: 8
rag_relevance: 7
tags: ["Hermes Agent", "OpenViking", "Memory Plugin", "Knowledge Graph", "AI Workflows"]
source: "https://github.com/johnlam1968/openviking-extra"
discovered_at: "2026-06-28T14:45:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Hermes Agent plugin that exposes 6 additional OpenViking HTTP API endpoints not covered by the bundled memory provider, addressing community-requested gaps for enhanced memory and knowledge graph operations in AI workflows.

## Key Features
- Extends Hermes Agent with 6 new OpenViking API tools (e.g., `viking_write`, `viking_link`, `viking_grep`)
- Follows strict handler contract for reliability and error handling
- Supports per-profile plugin deployment for multi-tenant Hermes setups
- Includes automated verification scripts for handler compliance and smoke testing
- Read-only by default, ensuring safe operations for AI workflows

## Why It Matters for RAG Builders
It fills critical gaps in Hermes Agent's memory provider by exposing additional OpenViking endpoints, enabling more precise and flexible AI memory and knowledge graph operations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes Agent
Automated review identified **Hermes Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenViking API
Automated review identified **OpenViking API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP Client
Automated review identified **HTTP Client** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Plugin System
Automated review identified **Plugin System** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
