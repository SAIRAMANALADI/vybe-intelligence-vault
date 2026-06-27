---
title: "stippi/code-assistant"
category: "Agent Framework"
tech_stack: ["Rust", "GPUI (Zed's GUI framework)", "Agent Client Protocol (ACP)", "Model Context Protocol (MCP)", "JSON-RPC", "LLM APIs (Anthropic, OpenAI, etc.)"]
quality_score: 9
rag_relevance: 8
tags: ["autonomous coding", "MCP/ACP integration", "multi-modal tooling", "real-time streaming", "Rust-based"]
source: "https://github.com/stippi/code-assistant"
discovered_at: "2026-06-27T10:06:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An autonomous AI coding assistant built in Rust that provides both command-line and graphical interfaces for code analysis and modification. It supports multi-modal tool execution, real-time streaming, and integrates with MCP/ACP protocols for editor compatibility.

## Key Features
- Multi-modal tool execution with pluggable invocation modes (native, XML, triple-caret)
- Real-time streaming interface with smart filtering for unsafe tool combinations
- Session-based project management with persistent state and draft messages
- Support for GUI, terminal, and headless MCP/ACP modes
- Auto-loaded repository guidance via AGENTS.md or CLAUDE.md files

## Why It Matters for RAG Builders
It provides a robust, multi-modal agent framework for autonomous coding tasks with seamless MCP/ACP integration, enabling advanced RAG systems to offload code analysis and modification.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GPUI (Zed's GUI framework)
Automated review identified **GPUI (Zed's GUI framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent Client Protocol (ACP)
Automated review identified **Agent Client Protocol (ACP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC
Automated review identified **JSON-RPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (Anthropic, OpenAI, etc.)
Automated review identified **LLM APIs (Anthropic, OpenAI, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
