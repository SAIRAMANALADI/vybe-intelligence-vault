---
title: "cognis-digital/c2detect"
category: "Tooling"
tech_stack: ["Python", "TLS Fingerprinting (JA3, JA4, JARM)", "Sigma/Suricata Rules", "JSON/JSONL Parsing", "CLI Tooling", "MCP (Model Context Protocol) Server"]
quality_score: 9
rag_relevance: 7
tags: ["C2 Detection", "Threat Intelligence", "TLS Fingerprinting", "Defensive Security", "Blue Team"]
source: "https://github.com/cognis-digital/c2detect"
discovered_at: "2026-06-30T03:54:41Z"
evaluated_by: "mistral-small-latest"
---

## Summary
C2DETECT is a defensive tool designed to fingerprint and detect Command and Control (C2) server infrastructure, including frameworks like Cobalt Strike, Sliver, Mythic, Havoc, and Brute Ratel. It passively analyzes telemetry data to identify malicious indicators without network calls by default, with optional opt-in active probing for authorized assessments.

## Key Features
- Passive detection of C2 frameworks using bundled signature database (JA3, JARM, URIs, ports, etc.)
- Optional active probing for authorized assessments (TLS handshake + benign HTTP HEAD requests)
- Campaign correlation to cluster shared C2 infrastructure across hosts
- Integration with live threat-intel feeds (abuse.ch Feodo-C2, SSLBL) with offline cache support
- Multi-format output (JSON, SARIF, HTML) and CI/CD integration with severity-based failure gates

## Why It Matters for RAG Builders
C2DETECT provides critical defensive capabilities to identify and triage C2 infrastructure in telemetry, reducing false positives and enabling rapid response to advanced threats in AI-driven security stacks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TLS Fingerprinting (JA3, JA4, JARM)
Automated review identified **TLS Fingerprinting (JA3, JA4, JARM)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sigma/Suricata Rules
Automated review identified **Sigma/Suricata Rules** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/JSONL Parsing
Automated review identified **JSON/JSONL Parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Tooling
Automated review identified **CLI Tooling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol) Server
Automated review identified **MCP (Model Context Protocol) Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
