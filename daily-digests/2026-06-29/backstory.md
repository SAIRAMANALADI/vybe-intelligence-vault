---
title: "magna-nz/backstory"
category: "Tooling"
tech_stack: ["C#", ".NET 10", "SQLite", "ONNX Runtime", "Model Context Protocol (MCP)", "Full-text search (FTS5)", "Vector embeddings (ONNX MiniLM)"]
quality_score: 9
rag_relevance: 9
tags: ["local-first", "data aggregation", "hybrid search", "MCP integration", "privacy-focused"]
source: "https://github.com/magna-nz/backstory"
discovered_at: "2026-06-29T02:53:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Backstory is a local-first tool that aggregates and indexes personal data exports (e.g., Google, Telegram, Spotify) into a unified SQLite database, enabling hybrid keyword and semantic search entirely on your machine. It integrates with AI agents via the Model Context Protocol (MCP) for contextual querying.

## Key Features
- Aggregates exports from Google, Telegram, Spotify, and Instagram into a single SQLite database
- Supports hybrid search (keyword + semantic) with optional ONNX MiniLM embeddings for meaning-based queries
- Integrates with AI agents via MCP for contextual querying of personal data
- Runs entirely offline with no telemetry or data leaving the user's machine
- Provides CLI and MCP server interfaces for flexible interaction

## Why It Matters for RAG Builders
Backstory enables RAG builders to integrate personal data sources into AI systems while preserving privacy and leveraging hybrid search for richer contextual responses.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 10
Automated review identified **.NET 10** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ONNX Runtime
Automated review identified **ONNX Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Full-text search (FTS5)
Automated review identified **Full-text search (FTS5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vector embeddings (ONNX MiniLM)
Automated review identified **Vector embeddings (ONNX MiniLM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
