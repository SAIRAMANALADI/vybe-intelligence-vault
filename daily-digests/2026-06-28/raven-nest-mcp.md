---
title: "tidynest/raven-nest-mcp"
category: "Tooling"
tech_stack: ["Rust", "Model Context Protocol (MCP)", "Docker", "TOML", "Metasploit Framework", "nmap", "nuclei", "sqlmap", "Python (for testing)"]
quality_score: 9
rag_relevance: 7
tags: ["penetration testing", "MCP server", "security automation", "safety-hardened", "vulnerability scanning"]
source: "https://github.com/tidynest/raven-nest-mcp"
discovered_at: "2026-06-28T22:06:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Raven Nest MCP is a safety-hardened Model Context Protocol (MCP) server that exposes 43 structured endpoints for 22 industry-standard security tools, enabling AI assistants to perform offensive security operations like reconnaissance, vulnerability scanning, and exploitation in a controlled and audited manner.

## Key Features
- Wraps 22 security tools (nmap, nuclei, sqlmap, Metasploit, etc.) behind 43 MCP endpoints with structured input/output
- Six-layer safety architecture including allowlisting, input validation, execution containment, and output sanitization
- Session-aware context budgeting to prevent model context overflow during tool execution
- Multi-format report generation (Markdown, JSON, SARIF, HTML) with structured findings and remediation guidance
- Configurable safety limits, audit logging, and engagement scope enforcement for authorized use

## Why It Matters for RAG Builders
It provides a secure, audited interface for AI assistants to safely interact with offensive security tools, bridging the gap between AI-driven automation and real-world penetration testing workflows.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML
Automated review identified **TOML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Metasploit Framework
Automated review identified **Metasploit Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nmap
Automated review identified **nmap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nuclei
Automated review identified **nuclei** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sqlmap
Automated review identified **sqlmap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (for testing)
Automated review identified **Python (for testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
