---
title: "haadrehman/Secure-Vault-Agent"
category: "Agent Framework"
tech_stack: ["Python 3.12+", "Google ADK 2.0", "Microsoft Presidio", "ChromaDB", "Model Context Protocol (MCP)", "OpenTelemetry", "Ollama", "LiteLLM", "Semgrep", "spaCy"]
quality_score: 9
rag_relevance: 10
tags: ["Privacy-first", "PII redaction", "Local LLM", "Multi-agent", "Zero-cloud-leakage"]
source: "https://github.com/haadrehman/Secure-Vault-Agent"
discovered_at: "2026-07-04T09:20:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A privacy-first AI concierge agent that enables secure querying of sensitive documents by ensuring raw PII never leaves the local machine. It uses deterministic PII redaction, a human-in-the-loop approval gate, and a multi-agent architecture to maintain absolute data privacy while leveraging cloud or local LLMs.

## Key Features
- Zero-leakage local boundary with MCP server acting as a security firewall
- Deterministic PII redaction using Microsoft Presidio for accuracy and reliability
- Human-in-the-loop approval gate before any redacted data is sent to the LLM
- Multi-agent architecture with A2A protocol for modular and secure workflows
- Progressive disclosure via agent skills to optimize LLM context and reasoning

## Why It Matters for RAG Builders
It enables secure RAG applications by ensuring sensitive data never leaves the local environment, addressing critical privacy and compliance concerns for AI stack builders.

## Tech Stack Deep Dive
### Python 3.12+
Automated review identified **Python 3.12+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google ADK 2.0
Automated review identified **Google ADK 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Microsoft Presidio
Automated review identified **Microsoft Presidio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChromaDB
Automated review identified **ChromaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LiteLLM
Automated review identified **LiteLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semgrep
Automated review identified **Semgrep** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### spaCy
Automated review identified **spaCy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
