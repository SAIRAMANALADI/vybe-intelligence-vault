---
title: "Guling-Pro/guling-trader"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Tesseract OCR", "Tkinter (UI)", "WebSocket", "Windows API", "PyInstaller"]
quality_score: 9
rag_relevance: 7
tags: ["AI trading", "MCP integration", "stock execution", "natural language commands", "Windows client"]
source: "https://github.com/Guling-Pro/guling-trader"
discovered_at: "2026-07-03T12:11:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
guling-trader is an open-source Windows-based trading execution client that bridges the 同花顺 (Xiadan) stock trading software with AI assistants like Claude, Cursor, or openclaw via the Model Context Protocol (MCP). It enables AI agents to execute trades, check positions, and manage orders through natural language commands while keeping user credentials secure within the official trading software.

## Key Features
- Secure trading via AI assistants without exposing credentials
- 8 MCP tools for real-time trading operations (buy, sell, cancel, query positions/funds)
- Three deployment paths (cloud-managed, MCP gateway, or local Tailscale)
- OCR-based screen interaction for compatibility with 同花顺's legacy interface
- Diagnostic mode for debugging and validation

## Why It Matters for RAG Builders
It enables AI agents to safely and securely execute real-world stock trades through natural language, bridging the gap between AI automation and regulated trading environments without compromising user credentials.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tesseract OCR
Automated review identified **Tesseract OCR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tkinter (UI)
Automated review identified **Tkinter (UI)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows API
Automated review identified **Windows API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyInstaller
Automated review identified **PyInstaller** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
