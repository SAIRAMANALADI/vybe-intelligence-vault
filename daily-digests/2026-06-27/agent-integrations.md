---
title: "intentframe/agent-integrations"
category: "Tooling"
tech_stack: ["Python", "YAML", "CLI", "Docker", "Hermes Agent", "IntentFrame"]
quality_score: 9
rag_relevance: 8
tags: ["security", "governance", "policy enforcement", "agent safety", "external validation"]
source: "https://github.com/intentframe/agent-integrations"
discovered_at: "2026-06-27T20:55:58Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A security and governance plugin for Hermes Agent that acts as an external policy checkpoint to validate risky tool calls (terminal, code execution, file writes, cron) before execution. It integrates with IntentFrame's policy runtime to enforce deny-by-default rules and audit trails.

## Key Features
- External policy checkpoint for Hermes Agent tool calls
- Deny-by-default rule enforcement with audit logging
- Governance for terminal, code execution, file writes, and cron jobs
- Policy configuration via YAML for flexible rule definition
- CLI for governance and policy management

## Why It Matters for RAG Builders
It provides critical external validation for agent tool calls, reducing the risk of malicious or unintended actions by enforcing policy before execution.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes Agent
Automated review identified **Hermes Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### IntentFrame
Automated review identified **IntentFrame** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
