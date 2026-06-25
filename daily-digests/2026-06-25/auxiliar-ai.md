---
title: "Tlalvarez/Auxiliar-ai"
category: "Tooling"
tech_stack: ["TypeScript", "Python", "MCP (Model Context Protocol)", "Pydantic", "Zod", "Node.js", "npm"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "capability index", "AI tooling", "service recommendations", "agent optimization"]
source: "https://github.com/Tlalvarez/Auxiliar-ai"
discovered_at: "2026-06-25T11:42:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Auxiliar is an MCP server that provides a unified index of verified capabilities for AI agents, ensuring accurate tool recommendations by maintaining up-to-date pricing, risks, and compatibility data across 80+ services, skills, and tools.

## Key Features
- Unified search across 80+ capabilities (cloud services, MCPs, plugins, parsers) via `find_capability`
- Verified pricing and risks for services like SendGrid, Auth.js, and Neon with monthly re-validation
- 12 tools for agents, including unified capability tools and legacy single-purpose tools
- Reproducible evaluation scores on real-world corpora for tasks like Brazilian NFS-e extraction
- Privacy-preserving telemetry with opt-out and no network calls required for recommendations

## Why It Matters for RAG Builders
It ensures AI agents receive accurate, up-to-date tool recommendations by indexing verified capabilities and risks, preventing costly mistakes from stale training data.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
