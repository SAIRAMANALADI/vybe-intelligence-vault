---
title: "cognis-digital/modpot"
category: "Tooling"
tech_stack: ["Python", "Modbus", "DNP3", "JSON", "CLI", "Docker", "TypeScript", "Go", "Rust"]
quality_score: 9
rag_relevance: 6
tags: ["ICS security", "honeypot", "Modbus", "threat detection", "industrial control systems"]
source: "https://github.com/cognis-digital/modpot"
discovered_at: "2026-06-30T03:56:25Z"
evaluated_by: "mistral-small-latest"
---

## Summary
MODPOT is a high-interaction Modbus/DNP3 ICS honeypot that logs attacker register reads/writes as structured JSON, enabling security analysis and threat detection for industrial control systems.

## Key Features
- Passive and active (authorization-gated) ICS honeypot modes for secure threat analysis
- Structured JSON logging of attacker register reads/writes for integration with SIEMs
- Threat-intel enrichment using abuse.ch feeds (Feodo Tracker, ThreatFox) with offline cache support
- CI-ready exit codes for automated security gate integration
- Multi-language support (Python, TypeScript, Go, Rust) for cross-platform deployment

## Why It Matters for RAG Builders
MODPOT provides critical ICS threat detection and logging capabilities, enabling RAG builders to integrate real-world industrial control system attack patterns into their AI models.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Modbus
Automated review identified **Modbus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DNP3
Automated review identified **DNP3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
