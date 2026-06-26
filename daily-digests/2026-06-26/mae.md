---
title: "cuttlefisch/mae"
category: "UI Component"
tech_stack: ["Rust", "Scheme (R7RS-small)", "CRDT (yrs/YATA)", "CozoDB (Datalog)", "Tree-sitter", "LSP (Language Server Protocol)", "DAP (Debug Adapter Protocol)", "winit", "Skia", "ratatui", "alacritty_terminal", "Claude", "OpenAI", "Gemini", "DeepSeek", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
tags: ["AI-native IDE", "collaborative editing", "knowledge graph", "Scheme runtime", "multi-provider AI"]
source: "https://github.com/cuttlefisch/mae"
discovered_at: "2026-06-26T13:09:38Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MAE is an AI-native lisp machine IDE designed as a programmable development environment where humans and AI act as peer actors using the same Scheme primitives. It combines a Rust core with an embedded R7RS-small runtime, offering both GUI and terminal interfaces with advanced features like collaborative editing, LSP/DAP integration, and a graph knowledge base.

## Key Features
- AI as peer actor with 450+ editor commands exposed as tools, sharing the same primitives as keybindings
- Collaborative editing with CRDT sync, WAL persistence, and real-time knowledge base sharing across instances
- Embedded R7RS Scheme runtime with runtime redefinability and 45+ primitives for extensibility
- Full vi modal editing, LSP/DAP first-class integration, and multi-provider AI support (Claude, OpenAI, Gemini, DeepSeek)
- Graph knowledge base (CozoDB) with HNSW vector index, org-mode babel for 12 languages, and MCP server for external AI agent integration

## Why It Matters for RAG Builders
MAE provides a unique programmable environment where AI and humans share the same tooling and primitives, enabling seamless integration of AI agents into the development workflow with advanced collaboration and knowledge management capabilities.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Scheme (R7RS-small)
Automated review identified **Scheme (R7RS-small)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CRDT (yrs/YATA)
Automated review identified **CRDT (yrs/YATA)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CozoDB (Datalog)
Automated review identified **CozoDB (Datalog)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LSP (Language Server Protocol)
Automated review identified **LSP (Language Server Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DAP (Debug Adapter Protocol)
Automated review identified **DAP (Debug Adapter Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### winit
Automated review identified **winit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Skia
Automated review identified **Skia** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ratatui
Automated review identified **ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### alacritty_terminal
Automated review identified **alacritty_terminal** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude
Automated review identified **Claude** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI
Automated review identified **OpenAI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini
Automated review identified **Gemini** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek
Automated review identified **DeepSeek** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
