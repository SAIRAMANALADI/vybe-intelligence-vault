---
title: "johnmwhitman/agent-mesh"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "OpenCode", "MCP (Model Context Protocol)", "JSON", "NDJSON"]
quality_score: 9
rag_relevance: 8
tags: ["agent orchestration", "multi-agent systems", "peer-to-peer collaboration", "MCP tools", "OpenCode integration"]
source: "https://github.com/johnmwhitman/agent-mesh"
discovered_at: "2026-07-02T22:16:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Mesh enables fleet-native agent orchestration for OpenCode by spawning parallel agents as independent OS processes, facilitating peer-to-peer collaboration without timeouts or markups. It provides a CLI and 11 MCP tools for managing, messaging, and monitoring agent fleets.

## Key Features
- Spawns parallel agents as independent OS processes with no 30-minute timeout
- Supports 11 MCP tools for fleet and agent management (e.g., spawn_fleet, send_message, route_work)
- Enables peer-to-peer messaging with 5 message types (handoff, question, result, alert, request_help)
- Provides a CLI for inspecting fleets, metrics, and events in real-time
- Includes 100+ premade agent personalities and dynamic agent attachment

## Why It Matters for RAG Builders
Agent Mesh enables scalable, timeout-free multi-agent collaboration for RAG builders using OpenCode, eliminating orchestration bottlenecks and supporting complex workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode
Automated review identified **OpenCode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NDJSON
Automated review identified **NDJSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
