---
title: Narylr350/source-radar
category: daily-digests/2026-07-07
tech_stack:
- Python
- MCP (Model Context Protocol)
- SearXNG
- Unittest
- uv (Python package manager)
- CLI
quality_score: 8
rag_relevance: 9
tags:
- information retrieval
- evidence verification
- MCP server
- Chinese internet
- AI-friendly
source: https://github.com/Narylr350/source-radar
discovered_at: '2026-07-07T16:25:33Z'
evaluated_by: mistral-small-latest
---

## Summary
A local CLI/MCP acquisition engine designed for AI-friendly Chinese internet information analysis, evidence verification, and research. It consolidates data collection capabilities into a unified kernel with backend lifecycle management and centralized runtime state.

## Key Features
- Unified acquisition kernel (`AcquisitionKernel`) for consistent data collection
- Backend lifecycle management with `BackendLifecycleManager` for warm-up, readiness checks, and idle stop
- Centralized runtime state management under `.source-radar/` directory
- MCP server exposing tools like `web_search`, `fetch_url`, and `search_github`
- Modular backend registry (`BackendRegistry`) for tracking installations and diagnostics

## Why It Matters for RAG Builders
It provides a structured, auditable, and AI-friendly way to collect and verify information from the Chinese internet, critical for building reliable RAG systems with evidence-based responses.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SearXNG
Automated review identified **SearXNG** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unittest
Automated review identified **Unittest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv (Python package manager)
Automated review identified **uv (Python package manager)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
