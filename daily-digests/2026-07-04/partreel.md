---
title: "mingyo186/partreel"
category: "Tooling"
tech_stack: ["Python", "KiCad", "FreeCAD", "GitHub Actions", "Cloudflare Workers", "JSON API", "MCP (Model Context Protocol)", "STEP/GLB 3D models"]
quality_score: 9
rag_relevance: 8
tags: ["KiCad", "PCB design", "verified footprints", "MCP server", "datasheet provenance"]
source: "https://github.com/mingyo186/partreel"
discovered_at: "2026-07-04T13:16:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
PartReel is an open, machine-verified KiCad parts registry providing verified footprints, symbols, and 3D models (STEP/GLB) for electronic components, sourced from manufacturer datasheets and validated via automated quality gates. It offers a static JSON API, an MCP server, and tools for AI agents to fetch and contribute parts.

## Key Features
- Machine-verified parts with automated quality gates blocking deployment on failures
- Static JSON API with no auth or rate limits for easy integration
- Remote MCP server for AI agents to search, fetch, and report parts
- Provenance tracking for every part via machine-readable datasheet citations
- Community-driven contributions with CI-based auto-review and rapid part generation (~5 minutes)

## Why It Matters for RAG Builders
PartReel eliminates the need for AI agents to regenerate footprints from scratch by providing verified, machine-verified KiCad parts with provenance, ensuring reliability and efficiency in PCB design workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### KiCad
Automated review identified **KiCad** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FreeCAD
Automated review identified **FreeCAD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Workers
Automated review identified **Cloudflare Workers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON API
Automated review identified **JSON API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STEP/GLB 3D models
Automated review identified **STEP/GLB 3D models** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
