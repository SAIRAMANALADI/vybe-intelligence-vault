---
title: "evilstar2016/skill-doctor"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "CLI", "TF-IDF", "Embedding Models", "HTML/CSS (for reports)", "JSON (for configuration)"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent diagnostics", "skill conflict detection", "security auditing", "local CLI", "agent configuration"]
source: "https://github.com/evilstar2016/skill-doctor"
discovered_at: "2026-06-23T13:42:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A CLI tool for diagnosing AI agent skills by detecting conflicts, duplicates, security risks, and drift in local skill/rule/instruction files. It helps maintain consistency across agent ecosystems like Claude Code, Cursor, and GitHub Copilot.

## Key Features
- Scans and reports on duplicate skills across global/project paths
- Detects overlapping skills or triggers using token-based or embedding strategies
- Performs security audits for shell execution, destructive commands, credential exposure, and network calls
- Generates unified HTML dashboards combining scan, conflicts, audit, and cleanup results
- Supports CI integration with fail-on-severity flags for automated pipelines

## Why It Matters for RAG Builders
It ensures AI agent skills remain conflict-free, secure, and consistent by providing automated diagnostics for local skill ecosystems, reducing manual auditing overhead.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TF-IDF
Automated review identified **TF-IDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Embedding Models
Automated review identified **Embedding Models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS (for reports)
Automated review identified **HTML/CSS (for reports)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON (for configuration)
Automated review identified **JSON (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
