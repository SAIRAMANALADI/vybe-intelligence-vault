---
title: "fixed-width/glass"
category: "Agent Framework"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "X11", "Wayland", "Windows API", "macOS Accessibility (AX)", "Android ADB", "Sandboxing (bubblewrap, Sandboxie, Seatbelt)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "GUI automation", "AI agent tools", "cross-platform", "sandboxed execution"]
source: "https://github.com/fixed-width/glass"
discovered_at: "2026-07-08T17:27:39Z"
evaluated_by: "mistral-small-latest"
---

## Summary
glass is a Rust-based MCP server that enables AI coding agents to interact with native GUI applications through a closed loop of building, observing, interacting, and debugging. It supports multiple platforms (Linux, Windows, macOS, Android) and provides tools for capturing screenshots, injecting input, reading logs, and detecting visual changes without requiring app-specific integration.

## Key Features
- Platform-agnostic GUI interaction via MCP tools (screenshot, input injection, log reading, visual diffing)
- Multi-platform support (Linux X11/Wayland, Windows, macOS, Android AVD emulator)
- Sandboxed execution for security and isolation
- Text-based visual diffing to minimize vision token usage in RAG pipelines
- Accessibility integration for semantic element targeting

## Why It Matters for RAG Builders
glass enables AI agents to autonomously build, test, and debug native GUI applications without human intervention, reducing reliance on manual feedback loops in RAG pipelines.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### X11
Automated review identified **X11** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wayland
Automated review identified **Wayland** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows API
Automated review identified **Windows API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS Accessibility (AX)
Automated review identified **macOS Accessibility (AX)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Android ADB
Automated review identified **Android ADB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sandboxing (bubblewrap, Sandboxie, Seatbelt)
Automated review identified **Sandboxing (bubblewrap, Sandboxie, Seatbelt)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
