---
title: "juice094/clarity"
category: "Agent Framework"
tech_stack: ["Rust", "Candle (GGUF inference)", "SQLite", "BM25", "eframe/egui", "ratatui", "Axum", "MCP (Model Context Protocol)", "ReAct/Plan agent loops", "SPMC event bus", "UniFFI (mobile FFI)"]
quality_score: 9
rag_relevance: 8
tags: ["Rust-native", "local-first", "MCP tools", "multi-frontend", "offline LLM"]
source: "https://github.com/juice094/clarity"
discovered_at: "2026-06-26T13:07:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Clarity is a Rust-native, local-first AI runtime that unifies LLM orchestration, MCP tooling, and hybrid memory (BM25 + vector search) across multiple frontends (TUI, desktop GUI, web IDE, headless CLI, system tray, and mobile FFI). It enables zero-dependency, offline-capable agent workflows with cost controls and approval layers.

## Key Features
- Unified Rust-native runtime with zero external dependencies (no Python/Node.js/Ollama required)
- Hybrid memory system combining SQLite, BM25, and vector search for persistent, cross-session recall
- Multi-frontend support (TUI, desktop GUI, web IDE, headless CLI, system tray, mobile FFI) via single-binary distribution
- ReAct/Plan agent loops with MCP tooling ecosystem and four-tier approval system (Interactive/Smart/Plan/Yolo)
- Built-in local LLM inference via Candle (GGUF models like Qwen2/DeepSeek-R1-Distill) with offline fallback

## Why It Matters for RAG Builders
Clarity provides a cohesive, Rust-native framework for building production-grade AI agents with local-first capabilities, reducing dependency overhead while enabling advanced memory and tooling integration essential for RAG systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Candle (GGUF inference)
Automated review identified **Candle (GGUF inference)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### BM25
Automated review identified **BM25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### eframe/egui
Automated review identified **eframe/egui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ratatui
Automated review identified **ratatui** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Axum
Automated review identified **Axum** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ReAct/Plan agent loops
Automated review identified **ReAct/Plan agent loops** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SPMC event bus
Automated review identified **SPMC event bus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UniFFI (mobile FFI)
Automated review identified **UniFFI (mobile FFI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
