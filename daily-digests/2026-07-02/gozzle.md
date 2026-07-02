---
title: "lureilly1/gozzle"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "ClickHouse", "MCP (Model Context Protocol)", "YAML", "chDB"]
quality_score: 9
rag_relevance: 9
tags: ["SQL verification", "ClickHouse", "AI safety", "data correctness", "migration validation"]
source: "https://github.com/lureilly1/gozzle"
discovered_at: "2026-07-02T12:12:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
gozzle is a verification layer for AI-generated SQL and ClickHouse migrations, ensuring execution-verified correctness by running bounded, read-only checks against real cluster data without executing writes. It detects subtle issues like query equivalence, data uniqueness violations, and migration blast radius before deployment.

## Key Features
- Execution-verified query equivalence checks using `EXCEPT ALL` and bounded sampling
- Read-path proof for detecting uniqueness violations in `ReplacingMergeTree` tables
- Migration blast radius analysis to assess impact before execution
- Read-only guarantee enforced at the ClickHouse session level to prevent accidental writes
- Integration with AI agents via MCP for automated verification of generated SQL

## Why It Matters for RAG Builders
It provides critical pre-execution validation for AI-generated SQL and ClickHouse migrations, preventing data loss and correctness issues that static analysis or linters cannot detect.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ClickHouse
Automated review identified **ClickHouse** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### chDB
Automated review identified **chDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
