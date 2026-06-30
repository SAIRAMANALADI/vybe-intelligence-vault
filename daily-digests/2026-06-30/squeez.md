---
title: "claudioemmanuel/squeez"
category: "Tooling"
tech_stack: ["Rust", "Bash", "MCP (Model Context Protocol)", "JSON-RPC", "TOON (schema-aware JSON compression)", "MinHash (deduplication)", "FNV-1a (hashing)"]
quality_score: 9
rag_relevance: 7
tags: ["token compression", "AI CLI optimization", "MCP server", "reversible compression", "cross-call deduplication"]
source: "https://github.com/claudioemmanuel/squeez"
discovered_at: "2026-06-30T16:25:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
squeez is a hook-based token compressor designed to optimize AI CLI interactions (Claude Code, Copilot CLI, OpenCode, etc.) by reducing bash output up to 95%, collapsing redundant calls, and injecting terse prompt personas. It operates with zero runtime dependencies and includes reversible compression via an MCP server.

## Key Features
- Up to 95% reduction in bash output via smart filtering, deduplication, and relevance-aware truncation
- Reversible compression with `squeez_retrieve` for lossless recovery of compressed content
- Zero runtime dependencies (pure Rust with minimal libc on Unix)
- MCP server exposing 17 tools for session memory queries and retrieval
- Adaptive intensity modes (Full/Ultra) based on token budget pressure

## Why It Matters for RAG Builders
It significantly reduces token usage in AI CLI workflows while preserving critical context, enabling more efficient and cost-effective RAG and agentic systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOON (schema-aware JSON compression)
Automated review identified **TOON (schema-aware JSON compression)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MinHash (deduplication)
Automated review identified **MinHash (deduplication)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FNV-1a (hashing)
Automated review identified **FNV-1a (hashing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
