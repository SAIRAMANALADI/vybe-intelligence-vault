---
title: "gautamvarmadatla/mcpsafetywarden"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "SQLite", "LLM APIs (Anthropic, OpenAI, Gemini, Ollama)", "Cisco AI Defense", "Snyk", "Kali Linux", "Burp Suite", "GitHub API", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["MCP security", "proxy server", "risk gating", "behavioral profiling", "LLM safety"]
source: "https://github.com/gautamvarmadatla/mcpsafetywarden"
discovered_at: "2026-06-30T16:26:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MCP Safety Warden is a proxy server that wraps any MCP server to add behavioral profiling, security scanning, risk gating, and safe execution to its tools. It operates in two modes: proxy (real-time protection) and audit (full security analysis without tool calls).

## Key Features
- Behavioral profiling with LLM-assisted classification (effect class, destructiveness, retry safety)
- Multi-stage security scanning pipeline (Recon, Planner, Hacker, Auditor, Supervisor) with integrations like Cisco AI Defense, Snyk, Kali, and Burp Suite
- Safe execution with argument scanning (20+ attack categories), output injection scanning, and risk gating with alternatives
- Drift detection and rug-pull prevention via SHA-256 hashing and per-call validation
- CLI with 24 subcommands, interactive risk menu, and JSON output support for CI/CD integration

## Why It Matters for RAG Builders
It provides critical security hardening for MCP servers, enabling safe integration of untrusted tools into RAG and AI workflows by detecting and mitigating risks in real-time.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (Anthropic, OpenAI, Gemini, Ollama)
Automated review identified **LLM APIs (Anthropic, OpenAI, Gemini, Ollama)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cisco AI Defense
Automated review identified **Cisco AI Defense** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Snyk
Automated review identified **Snyk** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kali Linux
Automated review identified **Kali Linux** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Burp Suite
Automated review identified **Burp Suite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub API
Automated review identified **GitHub API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
