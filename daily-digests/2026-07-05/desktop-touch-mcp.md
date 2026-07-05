---
title: "Harusame64/desktop-touch-mcp"
category: "Tooling"
tech_stack: ["Rust", "TypeScript", "Node.js", "UI Automation (UIA)", "Chrome DevTools Protocol (CDP)", "Windows API", "PowerShell", "NAPI-RS", "SSE2 SIMD"]
quality_score: 9
rag_relevance: 8
tags: ["Windows automation", "MCP server", "UI automation", "RAG tooling", "AI agent integration"]
source: "https://github.com/Harusame64/desktop-touch-mcp"
discovered_at: "2026-07-05T23:05:52Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A high-performance MCP server for Windows that enables AI agents like Claude or Cursor to interact with the desktop via semantic discover-then-act targeting. It provides tools for UI automation, browser control, and visual element discovery with Rust-native performance and per-action perception guards to prevent errors.

## Key Features
- Semantic discover-then-act targeting with entity leases to avoid pixel-coordinate guessing
- Per-action perception guards to prevent wrong-window typing or stale-coordinate clicks
- High-performance Rust native engine (UIA queries in 2ms, 82x speedup over PowerShell)
- Visual fallback (Set-of-Marks) for non-accessible apps like games or Electron
- 32 optimized tools including browser CDP, terminal control, and screenshot management

## Why It Matters for RAG Builders
It enables AI agents to reliably and safely interact with Windows desktops and applications, reducing errors and improving automation precision for RAG and agent-based systems.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UI Automation (UIA)
Automated review identified **UI Automation (UIA)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows API
Automated review identified **Windows API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NAPI-RS
Automated review identified **NAPI-RS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE2 SIMD
Automated review identified **SSE2 SIMD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
