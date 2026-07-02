---
title: "sattyamjjain/agent-airlock"
category: "Tooling"
tech_stack: ["Python", "Pydantic", "FastAPI", "E2B Sandbox", "Modal", "Docker", "OpenTelemetry", "pytest", "GitHub Actions"]
quality_score: 9
rag_relevance: 10
tags: ["AI agent security", "tool-call validation", "MCP compliance", "type safety", "sandbox execution"]
source: "https://github.com/sattyamjjain/agent-airlock"
discovered_at: "2026-07-02T19:19:09Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent-Airlock is a deny-by-default, in-process type-checker and contract layer for AI agent tool calls. It validates tool-call payloads (strict Pydantic types, ghost-argument stripping, self-healing retries) beneath MCP gateways and firewalls, preventing hallucinated or malicious tool invocations.

## Key Features
- Deny-by-default tool-call validation with strict Pydantic type enforcement
- Ghost-argument stripping to prevent hallucinated parameters
- Self-healing error messages for LLM-friendly retries
- E2B and Modal sandbox execution for isolated tool calls
- EU AI Act Art. 12-compliant decision logging for compliance

## Why It Matters for RAG Builders
Agent-Airlock provides a critical safety layer for RAG/AI stacks by validating tool calls in real-time, preventing data exfiltration, command injection, and hallucinated arguments that could compromise system integrity.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### E2B Sandbox
Automated review identified **E2B Sandbox** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Modal
Automated review identified **Modal** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
