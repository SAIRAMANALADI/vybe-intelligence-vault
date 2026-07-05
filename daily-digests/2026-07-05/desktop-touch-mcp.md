---
title: "Harusame64/desktop-touch-mcp"
category: "Tooling"
tech_stack: ["Rust", "TypeScript", "Node.js", "Windows UI Automation (UIA)", "Chrome DevTools Protocol (CDP)", "PowerShell", "napi-rs", "SSE2 SIMD", "OCR (Windows OCR)"]
quality_score: 9
rag_relevance: 8
tags: ["Windows automation", "MCP server", "UI Automation", "RAG tooling", "AI agent control"]
source: "https://github.com/Harusame64/desktop-touch-mcp"
discovered_at: "2026-07-05T11:31:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A high-performance MCP server for Windows that enables AI agents like Claude or Cursor to interact with the desktop via semantic discover-then-act targeting. It provides tools for screenshots, UI Automation, Chrome CDP, keyboard/mouse control, and terminal operations with Rust-native performance and per-action perception guards.

## Key Features
- Semantic discover-then-act targeting with entity leases to avoid pixel-coordinate guessing
- Per-action perception guards to prevent wrong-window typing or stale-coordinate clicks
- High-performance Rust native engine (UIA queries in 2ms, 82x speedup over PowerShell)
- Set-of-Marks (SoM) visual fallback for UIA-blind targets (Electron, games, RDP)
- 31 optimized tools including browser CDP, terminal control, and screenshot management

## Why It Matters for RAG Builders
It enables AI agents to reliably and efficiently interact with Windows desktops and applications, reducing errors and improving automation precision for RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows UI Automation (UIA)
Automated review identified **Windows UI Automation (UIA)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### napi-rs
Automated review identified **napi-rs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE2 SIMD
Automated review identified **SSE2 SIMD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (Windows OCR)
Automated review identified **OCR (Windows OCR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
