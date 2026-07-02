---
title: "codingriver/upilot"
category: "Orchestrator"
tech_stack: ["C#", "Unity Editor", "MCP (Model Context Protocol)", "Python", "WebSocket", "YAML", "Roslyn", "MonoHook"]
quality_score: 8
rag_relevance: 9
tags: ["Unity automation", "MCP server", "AI agent integration", "UI automation", "Unity Editor bridge"]
source: "https://github.com/codingriver/upilot"
discovered_at: "2026-07-02T02:42:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
upilot is an open-source Unity Editor automation bridge and MCP server that enables AI agents (e.g., Codex, Claude) to inspect, control, and diagnose Unity Editor via a local MCP server. It includes optional UIFlow for YAML-driven UI automation and supports extensive Unity Editor operations through 115+ MCP tools.

## Key Features
- Exposes Unity Editor capabilities via MCP Streamable HTTP server for AI agents
- Supports 115+ MCP tools for Unity Editor operations (state, console, assets, scenes, GameObjects, components, builds, diagnostics, etc.)
- Optional UIFlow tool for YAML-driven UI automation in Unity EditorWindow
- Python-based MCP server with WebSocket connectivity to Unity Editor bridge
- Dynamic C# code execution via Roslyn and reflection_eval for limited expression evaluation

## Why It Matters for RAG Builders
upilot bridges Unity Editor with AI agents via MCP, enabling seamless automation and integration for RAG/AI stack builders working with Unity projects.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unity Editor
Automated review identified **Unity Editor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Roslyn
Automated review identified **Roslyn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MonoHook
Automated review identified **MonoHook** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
