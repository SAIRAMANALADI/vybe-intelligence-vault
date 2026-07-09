---
title: "wavyx/pdcli"
category: "Tooling"
tech_stack: ["Node.js", "JavaScript", "TypeScript", "Oclif (CLI framework)", "Pipedrive API", "OS Keychain (for credentials)"]
quality_score: 9
rag_relevance: 7
tags: ["CRM", "CLI", "Pipedrive", "Automation", "Data Sync"]
source: "https://github.com/wavyx/pdcli"
discovered_at: "2026-07-09T08:26:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A command-line interface (CLI) for Pipedrive CRM that enables fast, scriptable interactions with the CRM via terminal, CI pipelines, and AI agents. It supports CRUD operations, analytics, idempotent sync, and full account backups with JSON output and deterministic exit codes.

## Key Features
- Full Pipedrive v2 CRM core and v1 domain support (deals, persons, organizations, activities, products, pipelines, projects, leads, notes, files, webhooks, goals)
- Idempotent match-or-create operations for safe CI/scripting (exit codes 64-65 for errors)
- Time-intelligence analytics (sales velocity, funnel conversion, pipeline health, aging, slippage)
- Deterministic JSON/YAML/CSV output and exit codes for machine-readable scripting
- OS keychain-secured credentials with OAuth 2.0 support and raw API escape hatch

## Why It Matters for RAG Builders
It provides a robust, scriptable CLI for Pipedrive CRM that enables AI agents and CI pipelines to interact with CRM data without SDK glue, ensuring reliable automation and data integrity.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Oclif (CLI framework)
Automated review identified **Oclif (CLI framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pipedrive API
Automated review identified **Pipedrive API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OS Keychain (for credentials)
Automated review identified **OS Keychain (for credentials)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
