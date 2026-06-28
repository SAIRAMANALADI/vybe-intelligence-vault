---
title: "cognis-digital/opsecscan"
category: "Tooling"
tech_stack: ["Python", "Docker", "MCP (Model Context Protocol)", "SARIF", "JSON", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 7
tags: ["OPSEC", "metadata scanning", "file analysis", "security tooling", "CI integration"]
source: "https://github.com/cognis-digital/opsecscan"
discovered_at: "2026-06-28T16:15:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OPSECSCAN is a lightweight, self-hostable tool designed to scan documents and file metadata for OPSEC (Operational Security) leaks such as geotags, author information, GPS EXIF data, and unit identifiers. It integrates seamlessly with AI stacks, CI pipelines, and MCP servers for automated security checks.

## Key Features
- Scans documents and file metadata for OPSEC leaks (geotags, author, GPS EXIF, unit identifiers)
- Self-hostable and scriptable with CLI, JSON, and SARIF output formats
- MCP-native for AI agent integration (Claude, Cursor, etc.)
- Supports multiple platforms (Linux, macOS, Windows) and polyglot ports (Python, JavaScript, Go, Rust)
- CI-ready with configurable severity thresholds and exit codes for automation

## Why It Matters for RAG Builders
It ensures AI and RAG systems do not inadvertently expose sensitive metadata in documents, enhancing operational security and compliance.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
