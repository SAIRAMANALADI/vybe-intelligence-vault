---
title: "henrywen98/ekctl"
category: "Tooling"
tech_stack: ["Swift", "EventKit", "macOS", "CLI", "MCP (optional)"]
quality_score: 9
rag_relevance: 7
tags: ["macOS automation", "EventKit", "AI agent interface", "CLI tool", "Reminders management"]
source: "https://github.com/henrywen98/ekctl"
discovered_at: "2026-06-28T07:00:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ekctl is a lightweight Swift CLI tool that enables AI agents to interact with macOS Calendar and Reminders via EventKit without arbitrary code execution. It provides a parameterized interface for managing events and reminders, with an optional MCP adapter for GUI clients.

## Key Features
- Single auditable Swift binary (~350 lines) with no external dependencies
- Parameterized CLI for agent-driven interactions (no arbitrary code execution)
- Supports Calendar and Reminders CRUD operations with stable IDs and time zone handling
- Optional MCP adapter for GUI clients like Claude Desktop
- Built-in argument validation, authorization, and error handling with clear exit codes

## Why It Matters for RAG Builders
It provides a secure, auditable, and agent-friendly way to integrate macOS Calendar and Reminders into AI workflows without exposing arbitrary code execution.

## Tech Stack Deep Dive
### Swift
Automated review identified **Swift** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EventKit
Automated review identified **EventKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS
Automated review identified **macOS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (optional)
Automated review identified **MCP (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
