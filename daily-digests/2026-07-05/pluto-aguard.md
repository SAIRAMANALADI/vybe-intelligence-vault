---
title: "arshan846/pluto-aguard"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Static Analysis", "OWASP-inspired Controls", "GitHub Actions", "SARIF", "OTel (OpenTelemetry)"]
quality_score: 9
rag_relevance: 8
tags: ["AI Security", "Agent Scanning", "MCP Configuration", "Static Analysis", "Policy Compliance"]
source: "https://github.com/arshan846/pluto-aguard"
discovered_at: "2026-07-05T17:07:20Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Pluto AgentGuard is an open-source AI agent security scanner that statically analyzes AI project configurations (MCP, LangChain, etc.) to detect misconfigurations, hardcoded secrets, and unsafe AI code patterns. It provides policy coverage linting, risk impact simulation, and launch readiness evidence packets for secure AI agent deployment.

## Key Features
- Static analysis for secrets, misconfigurations, and unsafe AI code patterns (e.g., eval() execution)
- Policy coverage linting for 22 named attack scenarios across 6 packs (prompt-injection, data-exfiltration, etc.)
- Risk impact simulation (`whatif`) to quantify policy changes before deployment
- Launch readiness evidence packets with approval checklists for compliance sign-off
- Behavioral trace audit (`monitor`) to replay agent actions against declared policies

## Why It Matters for RAG Builders
It provides critical security validation for AI agent deployments, ensuring misconfigurations and policy gaps are detected before production, reducing exposure to attacks like prompt injection or data exfiltration.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Static Analysis
Automated review identified **Static Analysis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OWASP-inspired Controls
Automated review identified **OWASP-inspired Controls** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OTel (OpenTelemetry)
Automated review identified **OTel (OpenTelemetry)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
