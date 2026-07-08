---
title: "olgasafonova/ridge"
category: "Orchestrator"
tech_stack: ["Go", "Model Context Protocol (MCP)", "tree-sitter", "go/ast", "Mermaid", "PlantUML", "Structurizr", "D3.js", "Git"]
quality_score: 9
rag_relevance: 8
tags: ["architecture analysis", "MCP server", "drift detection", "diagram generation", "static analysis"]
source: "https://github.com/olgasafonova/ridge"
discovered_at: "2026-07-08T08:17:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Ridge is an MCP server that reverse-engineers software architecture from codebases (Go, TypeScript, Python) and markdown directories, generating structured graphs of components, relationships, and infrastructure. It enables AI assistants to analyze, validate, and visualize architecture, detect drift between versions, and provide actionable insights without manual diagramming.

## Key Features
- Automated architecture graph generation from code and markdown with confidence-scored edges
- Cross-substrate support (Go, TypeScript, Python, Markdown) with infrastructure detection (databases, queues, caches)
- Drift detection and narrative explanations between git refs for PR-ready summaries
- 19 MCP tools for validation, dataflow tracing, blast radius analysis, and architecture recommendations
- Multi-format diagram generation (Mermaid, PlantUML, C4, Excalidraw, etc.)

## Why It Matters for RAG Builders
Ridge automates architecture documentation and validation, ensuring AI and teams always work with up-to-date system insights, reducing cognitive debt and improving maintainability.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### go/ast
Automated review identified **go/ast** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid
Automated review identified **Mermaid** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PlantUML
Automated review identified **PlantUML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Structurizr
Automated review identified **Structurizr** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### D3.js
Automated review identified **D3.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
