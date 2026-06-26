---
title: "PhilipAD/health-export-mcp"
category: "Tooling"
tech_stack: ["JavaScript", "Node.js", "Model Context Protocol (MCP)", "Apple HealthKit", "JSON-RPC 2.0"]
quality_score: 9
rag_relevance: 8
tags: ["Apple Health", "HealthKit", "MCP Server", "AI Agents", "Local-First"]
source: "https://github.com/PhilipAD/health-export-mcp"
discovered_at: "2026-06-26T16:17:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
health-export-mcp is a zero-dependency Model Context Protocol (MCP) server that enables AI agents to query Apple Health/HealthKit data in natural language. It reads exported Apple Health metrics (190+ data points) from local storage or cloud sync and exposes them as MCP tools for integration with agents like Claude, Cursor, or ChatGPT.

## Key Features
- Zero-dependency MCP server for Apple Health data access
- 190+ metrics supported (HRV, sleep, heart rate, workouts, etc.)
- Local-first, read-only, and privacy-preserving architecture
- Native integration with MCP-compatible AI agents (Claude, Cursor, etc.)
- Supports multiple export destinations (iCloud, LAN, webhook)

## Why It Matters for RAG Builders
It bridges Apple Health data with AI agents, enabling personalized health insights without exposing sensitive data to third-party servers.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apple HealthKit
Automated review identified **Apple HealthKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON-RPC 2.0
Automated review identified **JSON-RPC 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
