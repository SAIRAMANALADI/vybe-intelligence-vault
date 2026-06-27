---
title: "AgentsRoomDev/electron-mcp-for-agentsroom"
category: "Tooling"
tech_stack: ["TypeScript", "Electron", "Chrome DevTools Protocol (CDP)", "Model Context Protocol (MCP)", "Node.js"]
quality_score: 9
rag_relevance: 8
tags: ["Electron automation", "MCP server", "AI agent control", "UI interaction", "CDP integration"]
source: "https://github.com/AgentsRoomDev/electron-mcp-for-agentsroom"
discovered_at: "2026-06-27T15:19:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
This repository provides an MCP server that enables AI agents to interact with and control running Electron applications via the Chrome DevTools Protocol (CDP). It allows agents to perform actions like clicking, typing, and taking screenshots without modifying the target Electron app.

## Key Features
- Zero-code integration: No changes required to the target Electron app beyond launching with `--remote-debugging-port`.
- Real-time UI interaction: Agents can click, type, navigate, and assert UI states directly in the running Electron app.
- Visual verification: Supports screenshots, DOM queries, and console log inspection for debugging.
- Multi-window support: Agents can switch between multiple BrowserWindows in the same Electron app.
- Extensible: Custom tools can be defined and registered programmatically alongside built-in functionality.

## Why It Matters for RAG Builders
It bridges the gap between AI-generated code and real-world UI validation by enabling agents to directly interact with and verify changes in Electron applications, streamlining end-to-end workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chrome DevTools Protocol (CDP)
Automated review identified **Chrome DevTools Protocol (CDP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
