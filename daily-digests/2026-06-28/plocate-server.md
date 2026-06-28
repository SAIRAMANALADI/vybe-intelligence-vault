---
title: "fanyang89/plocate-server"
category: "Tooling"
tech_stack: ["Rust", "Axum", "plocate", "React", "OpenAPI / Swagger UI", "MCP (Model Context Protocol)", "cgroup v2", "systemd", "Docker (implied via static binary)"]
quality_score: 9
rag_relevance: 7
tags: ["file search", "high-performance", "static binary", "MCP integration", "low-resource"]
source: "https://github.com/fanyang89/plocate-server"
discovered_at: "2026-06-28T16:12:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A high-performance RESTful API server for sub-millisecond filename and path searches in very large file trees (millions of files), leveraging an on-disk trigram index via plocate. Designed for minimal RAM usage (~20 MiB RSS) and cgroup-bounded resource consumption.

## Key Features
- Sub-millisecond search latency even at 10M+ paths
- Minimal RAM footprint (~20 MiB RSS) with on-disk index
- Cgroup v2 resource bounding for co-located services
- Single-file static musl binary deployment (no runtime dependencies)
- Multi-modal access: REST API, OpenAPI/Swagger UI, and MCP for AI agents

## Why It Matters for RAG Builders
Enables ultra-fast, low-overhead file search capabilities critical for AI agents and RAG systems operating on large-scale file repositories.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### plocate
Automated review identified **plocate** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI / Swagger UI
Automated review identified **OpenAPI / Swagger UI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### cgroup v2
Automated review identified **cgroup v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### systemd
Automated review identified **systemd** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (implied via static binary)
Automated review identified **Docker (implied via static binary)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
