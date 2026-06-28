---
title: "cognis-digital/geoaoi"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "CLI", "Docker", "JavaScript", "Go", "Rust"]
quality_score: 9
rag_relevance: 8
tags: ["geospatial", "bounding box", "geofence", "change detection", "MCP-native"]
source: "https://github.com/cognis-digital/geoaoi"
discovered_at: "2026-06-28T12:20:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
GEOAOI is a geospatial helper tool that computes bounding boxes, performs geofence checks, and generates change-event diffs from coordinate logs. It is designed for self-hosted, scriptable, and MCP-native use cases, enabling AI agents and CI pipelines to process geospatial data efficiently.

## Key Features
- Computes bounding boxes from coordinate logs (CSV or stdin)
- Performs geofence checks (polygon or circle-based) with exit codes for CI integration
- Generates diffs between coordinate logs to detect enter/exit/move events
- Supports JSON and SARIF output formats for machine readability and CI pipelines
- MCP-native server for AI agent integration and polyglot ports (Python, JS, Go, Rust)

## Why It Matters for RAG Builders
It provides essential geospatial processing capabilities for RAG builders, enabling efficient coordinate log analysis and change detection in AI pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
