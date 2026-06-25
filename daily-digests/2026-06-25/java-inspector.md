---
title: "mustafagoksever/java-inspector"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Vineflower (decompiler)", "yauzl (JAR reader)", "Maven", "JSON Lines", "Java Runtime"]
quality_score: 9
rag_relevance: 10
tags: ["decompiler", "Maven dependencies", "AI agent tooling", "Java source extraction", "MCP server"]
source: "https://github.com/mustafagoksever/java-inspector"
discovered_at: "2026-06-25T19:55:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that decompiles Maven dependencies into readable Java source code for AI agents, enabling accurate analysis of libraries like Spring, Hibernate, and Jackson without hallucinations from compiled `.class` files.

## Key Features
- Decompiles Maven dependencies into full Java source code using Vineflower, including method bodies and annotations.
- Provides structured responses in `text`, `json`, or `toon` formats for LLM compatibility and token efficiency.
- Automatically scans and indexes Maven classpath dependencies with cross-process locking for safety.
- Supports fuzzy class search, inheritance tree analysis, and method-level decompilation with pagination.
- Implements append-only JSON Lines cache for crash safety, fast startup, and low memory overhead.

## Why It Matters for RAG Builders
It eliminates hallucinations in AI agents by providing accurate, decompiled Java source code from Maven dependencies, enabling precise analysis of libraries like Spring or Hibernate.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vineflower (decompiler)
Automated review identified **Vineflower (decompiler)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yauzl (JAR reader)
Automated review identified **yauzl (JAR reader)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Maven
Automated review identified **Maven** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Lines
Automated review identified **JSON Lines** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Java Runtime
Automated review identified **Java Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
