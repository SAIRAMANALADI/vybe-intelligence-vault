---
title: "lego3072/forge-agent-gate"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Ed25519 cryptography", "MCP (Model Context Protocol) SDK", "REST API integration", "Kalshi trading venue adapter", "pmxt passthrough (optional)"]
quality_score: 8
rag_relevance: 9
tags: ["mandate enforcement", "risk firewall", "AI agent governance", "proof trail", "deterministic policy"]
source: "https://github.com/lego3072/forge-agent-gate"
discovered_at: "2026-07-09T21:19:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
forge-agent-gate is a local, deterministic mandate gate and risk firewall for AI agents that enables enforcement of signed policy mandates to control economically consequential actions like payments, refunds, procurement, and trading. It integrates with the Forge Orbital platform to produce replayable proof trails for accountability.

## Key Features
- Local, deterministic enforcement engine for AI agent actions with hard risk limits
- Signed policy mandates (JSON) defining allow/block/escalate rules for actions like payments, refunds, and trading
- Replayable proof trail via Forge Orbital for federal-grade accountability and compliance
- MCP server integration for seamless agent-client communication and tool invocation
- Kill switch and rate limiting for immediate risk mitigation and control

## Why It Matters for RAG Builders
It provides a critical risk control layer for AI agents performing consequential actions, ensuring compliance and accountability through local enforcement and immutable proof trails.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ed25519 cryptography
Automated review identified **Ed25519 cryptography** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol) SDK
Automated review identified **MCP (Model Context Protocol) SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API integration
Automated review identified **REST API integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kalshi trading venue adapter
Automated review identified **Kalshi trading venue adapter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pmxt passthrough (optional)
Automated review identified **pmxt passthrough (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
