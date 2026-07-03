---
title: "cyanheads/protein-mcp-server"
category: "Agent Framework"
tech_stack: ["TypeScript", "Bun", "Model Context Protocol (MCP)", "Node.js", "Docker", "GraphQL", "REST APIs", "Foldseek", "mmseqs2", "TM-align", "jFATCAT"]
quality_score: 9
rag_relevance: 7
tags: ["protein structure", "AlphaFold", "PDB", "MCP server", "bioinformatics"]
source: "https://github.com/cyanheads/protein-mcp-server"
discovered_at: "2026-07-03T12:13:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that federates protein structure and annotation data across experimental (PDB) and predicted (AlphaFold) models. It provides 7 tools and 2 resources for searching, fetching, comparing, and annotating protein structures with support for STDIO or Streamable HTTP transport.

## Key Features
- Federated search across experimental (PDB) and predicted (AlphaFold) protein structures with unified tooling
- Supports 7 specialized tools for discovery, fetching, comparison, annotation, and ligand tracking
- Provides 2 MCP resources (pdb:// and af://) for direct structure access
- Async job resumption for long-running operations (e.g., Foldseek searches, structural alignments)
- Built-in provenance and attribution tracking for all upstream data sources

## Why It Matters for RAG Builders
It enables AI agents to programmatically access and analyze protein structure data from multiple sources, enhancing RAG systems with specialized biological knowledge.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GraphQL
Automated review identified **GraphQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST APIs
Automated review identified **REST APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Foldseek
Automated review identified **Foldseek** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mmseqs2
Automated review identified **mmseqs2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TM-align
Automated review identified **TM-align** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### jFATCAT
Automated review identified **jFATCAT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
