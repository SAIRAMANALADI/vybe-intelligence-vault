---
title: "clouatre-labs/aptu-coder"
category: "Agent Framework"
tech_stack: ["Rust", "tree-sitter", "Model Context Protocol (MCP)", "SLSA (Supply-chain Levels for Software Artifacts)", "OpenSSF Best Practices"]
quality_score: 9
rag_relevance: 9
tags: ["MCP server", "code analysis", "call graphs", "symbol extraction", "multi-language support"]
source: "https://github.com/clouatre-labs/aptu-coder"
discovered_at: "2026-06-23T21:36:30Z"
evaluated_by: "mistral-small-latest"
---

## Summary
aptu-coder is an MCP server that provides AI agents with precise structural context about codebases, including directory trees, symbol definitions, and call graphs, without reading raw files. It supports 18 languages and integrates with any MCP-compatible orchestrator to reduce token usage and improve coding accuracy.

## Key Features
- Supports 18 programming languages with tree-sitter for AST analysis and symbol extraction
- Provides directory tree analysis, function/class counts, and call graphs without reading raw files
- Integrates with MCP-compatible orchestrators via streamable HTTP or stdio transport
- Includes built-in output management (pagination, truncation, and filtering) to prevent context overflow
- Offers tools for file editing, shell command execution, and structured codebase analysis

## Why It Matters for RAG Builders
aptu-coder significantly reduces token usage and costs for AI agents by offloading mechanical code analysis tasks, enabling more efficient and accurate RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tree-sitter
Automated review identified **tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SLSA (Supply-chain Levels for Software Artifacts)
Automated review identified **SLSA (Supply-chain Levels for Software Artifacts)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenSSF Best Practices
Automated review identified **OpenSSF Best Practices** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
