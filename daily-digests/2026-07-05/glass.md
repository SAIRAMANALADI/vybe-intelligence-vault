---
title: "fixed-width/glass"
category: "Agent Framework"
tech_stack: ["Rust", "MCP (Model Context Protocol)", "X11", "Wayland", "Windows.Graphics.Capture", "macOS ScreenCaptureKit", "Android ADB", "UI Automation", "CGEvent", "AXUIElement", "SIMD"]
quality_score: 9
rag_relevance: 10
tags: ["GUI automation", "AI agent tooling", "cross-platform", "MCP server", "UI testing"]
source: "https://github.com/fixed-width/glass"
discovered_at: "2026-07-05T21:00:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
glass is a Rust-based MCP server that enables AI coding agents to autonomously build, test, and debug native GUI applications by providing a closed loop for interaction, observation, and debugging. It drives external GUI apps as black boxes across multiple platforms (Linux, Windows, macOS, Android) using platform-specific backends.

## Key Features
- Platform-agnostic GUI interaction via multiple backends (X11, Wayland, Windows, macOS, Android)
- Closed-loop build → see → interact → debug cycle for AI agents
- Text-based visual diffing and stability checks to minimize vision token usage
- Sandboxed app execution with optional containment for security
- Network-transparent MCP server with stdio and HTTP transport options

## Why It Matters for RAG Builders
glass enables AI agents to autonomously develop and debug GUI applications without human intervention, drastically reducing manual testing overhead and accelerating AI-driven software engineering workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### X11
Automated review identified **X11** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wayland
Automated review identified **Wayland** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Windows.Graphics.Capture
Automated review identified **Windows.Graphics.Capture** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS ScreenCaptureKit
Automated review identified **macOS ScreenCaptureKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Android ADB
Automated review identified **Android ADB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UI Automation
Automated review identified **UI Automation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CGEvent
Automated review identified **CGEvent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AXUIElement
Automated review identified **AXUIElement** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SIMD
Automated review identified **SIMD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
