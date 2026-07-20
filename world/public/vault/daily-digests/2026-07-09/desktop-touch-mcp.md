---
title: Harusame64/desktop-touch-mcp
category: daily-digests/2026-07-09
tech_stack:
- Rust
- TypeScript
- Node.js
- Windows UI Automation (UIA)
- Chrome DevTools Protocol (CDP)
- PowerShell
- OCR (Windows OCR API)
- SSE2 SIMD
- COM
- MCP (Model Context Protocol)
quality_score: 9
rag_relevance: 9
tags:
- Windows automation
- UI interaction
- MCP server
- semantic targeting
- Rust native engine
source: https://github.com/Harusame64/desktop-touch-mcp
discovered_at: '2026-07-09T14:45:15Z'
evaluated_by: mistral-small-latest
---

## Summary
A high-performance MCP server for Windows that enables AI agents like Claude or Cursor to interact with the desktop via semantic discover-then-act targeting, avoiding pixel-coordinate guessing. It combines a native Rust UIA engine with fallback mechanisms for accessibility-blind apps, offering tools for screenshots, UI automation, keyboard/mouse control, and credential autofill.

## Key Features
- Semantic discover-then-act targeting with lease-based entity validation to avoid pixel-coordinate errors.
- High-performance Rust native engine (UIA queries in 2ms) with transparent PowerShell fallback.
- Set-of-Marks (SoM) visual fallback for accessibility-blind apps (Electron, games, RDP) using OCR and clustering.
- Key Locker for secure credential autofill in terminals (SSH, sudo) with Windows DPAPI encryption.
- 32 optimized tools including `desktop_discover`, `desktop_act`, `screenshot`, `keyboard`, and `mouse` operations with token-efficient modes.

## Why It Matters for RAG Builders
It enables AI agents to reliably and securely interact with Windows desktops and applications using semantic targeting, reducing errors and improving automation precision for RAG and agentic workflows.

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

### OCR (Windows OCR API)
Automated review identified **OCR (Windows OCR API)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE2 SIMD
Automated review identified **SSE2 SIMD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### COM
Automated review identified **COM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
