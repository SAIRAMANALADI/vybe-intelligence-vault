---
title: "coo1white/cool-workflow"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "CLI", "MCP (Model Context Protocol)", "ed25519 (for signing)", "JSON (for data storage)", "Git (for repo interactions)"]
quality_score: 9
rag_relevance: 8
tags: ["AI workflow automation", "reproducibility", "evidence-based reporting", "multi-agent orchestration", "offline verification"]
source: "https://github.com/coo1white/cool-workflow"
discovered_at: "2026-06-28T14:46:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cool Workflow is a TypeScript-based tool that transforms AI agent interactions into durable, inspectable workflows by recording, verifying, and citing every step and result. It acts as a black-box recorder for AI-driven tasks, ensuring transparency, reproducibility, and offline verification without running model APIs or handling credentials.

## Key Features
- Converts AI agent tasks into replayable, signed workflows with every step recorded as JSON on disk
- Provides evidence-gated decision-making where every claim is cited to a specific file and line number
- Supports multi-agent topologies (map-reduce, debate, judge-panel) for parallel or collaborative tasks
- Offers deterministic, local replay and verification of workflows without vendor lock-in
- Integrates with popular AI agents (Claude, Codex, Gemini, DeepSeek) via CLI or MCP for seamless editor integration

## Why It Matters for RAG Builders
It enables RAG builders to create auditable, reproducible AI workflows with verifiable citations and offline integrity checks, ensuring trust and transparency in automated processes.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ed25519 (for signing)
Automated review identified **ed25519 (for signing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON (for data storage)
Automated review identified **JSON (for data storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git (for repo interactions)
Automated review identified **Git (for repo interactions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
