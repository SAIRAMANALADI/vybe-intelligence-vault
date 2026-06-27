---
title: "JamsusMaximus/trainingpeaks-mcp"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "TrainingPeaks API (via cookie auth)", "Keyring (for secure credential storage)", "FastAPI (implicit via MCP server structure)"]
quality_score: 9
rag_relevance: 7
tags: ["fitness tracking", "MCP server", "workout management", "AI assistant integration", "TrainingPeaks"]
source: "https://github.com/JamsusMaximus/trainingpeaks-mcp"
discovered_at: "2026-06-27T15:17:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that connects TrainingPeaks to AI assistants like Claude, enabling natural language interaction with workout data, fitness metrics, and training plans. It bypasses TrainingPeaks' approval-gated API by using secure cookie authentication for seamless integration.

## Key Features
- 64+ tools for full TrainingPeaks data access (workouts, fitness metrics, events, athlete settings)
- Structured workout creation with auto-computed IF/TSS from interval blocks
- Secure cookie-based authentication (no API approval required)
- Natural language interaction for scheduling, analysis, and updates
- Supports planned workouts with start times and calendar integration

## Why It Matters for RAG Builders
It enables AI assistants to directly interact with TrainingPeaks data, allowing for automated workout planning, fitness trend analysis, and natural language control of training schedules without manual API approvals.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TrainingPeaks API (via cookie auth)
Automated review identified **TrainingPeaks API (via cookie auth)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Keyring (for secure credential storage)
Automated review identified **Keyring (for secure credential storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI (implicit via MCP server structure)
Automated review identified **FastAPI (implicit via MCP server structure)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
