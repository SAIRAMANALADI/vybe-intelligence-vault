---
title: the-priest/Basilisk
category: world/public/vault/daily-digests/2026-07-06
tech_stack:
- Python
- GTK4
- Linux (X11/Wayland)
- LLM API (SiliconFlow, Groq)
- Shell scripting
- Security tools (sqlmap, nmap, etc.)
- Tamper-evident ledger (hashing, signatures)
quality_score: 9
rag_relevance: 7
tags:
- pentesting
- autonomous agent
- LLM security
- evidence ledger
- offensive security
source: https://github.com/the-priest/Basilisk
discovered_at: '2026-07-06T23:02:30Z'
evaluated_by: mistral-small-latest
---

## Summary
Basilisk is an open-source, autonomous pentesting agent that runs as a native Linux desktop app, providing an LLM with a full offensive toolchain, desktop and shell control, and a tamper-evident evidence ledger. It autonomously solves 51 of 113 OWASP Juice Shop challenges, outperforming other agents even without source access.

## Key Features
- Autonomous penetration testing with LLM integration (SiliconFlow, Groq)
- Tamper-evident evidence ledger for audit trails and proof of actions
- Hard structural safety floor to prevent unintended system damage
- Benchmark performance: 51/113 OWASP Juice Shop challenges solved autonomously
- Native Linux desktop app with shell and desktop control capabilities

## Why It Matters for RAG Builders
It provides a critical tool for AI-driven security testing, enabling autonomous offensive security operations with verifiable evidence and safety controls.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GTK4
Automated review identified **GTK4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux (X11/Wayland)
Automated review identified **Linux (X11/Wayland)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM API (SiliconFlow, Groq)
Automated review identified **LLM API (SiliconFlow, Groq)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell scripting
Automated review identified **Shell scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Security tools (sqlmap, nmap, etc.)
Automated review identified **Security tools (sqlmap, nmap, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tamper-evident ledger (hashing, signatures)
Automated review identified **Tamper-evident ledger (hashing, signatures)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
