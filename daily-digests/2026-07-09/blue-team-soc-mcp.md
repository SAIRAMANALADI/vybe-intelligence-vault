---
title: "INFOKOM-KI/blue-team-soc-mcp"
category: "Tooling"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Wazuh SIEM", "OpenSearch", "HTTP/Streamable Transport", "SSH", "Pydantic", "httpx (Async HTTP Client)", "CrowdSec", "GreyNoise", "VirusTotal", "AbuseIPDB"]
quality_score: 9
rag_relevance: 7
tags: ["SOC Automation", "Blue Team Tools", "Wazuh Integration", "Threat Intelligence", "Host Forensics"]
source: "https://github.com/INFOKOM-KI/blue-team-soc-mcp"
discovered_at: "2026-07-09T08:26:42Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A defensive security MCP server designed for blue team operations and SOC analysts, providing 43 tools for host forensics, Wazuh SIEM integration, and multi-source threat intelligence. It serves as a counterpart to offensive security tools like Kali Linux, enabling investigation, monitoring, and system hardening.

## Key Features
- 43 integrated tools for host forensics, Wazuh SIEM, and threat intelligence
- Dual transport support (stdio for local/SSH and streamable HTTP for remote access)
- Cursor-based pagination and relative time expressions for efficient bulk data processing
- In-memory caching for CrowdSec CTI with configurable TTL
- Auto-cap limit guards and error handling for robust API interactions

## Why It Matters for RAG Builders
It provides essential defensive security tools for SOC analysts to investigate, monitor, and harden systems, bridging the gap between offensive and defensive cybersecurity operations in AI-driven environments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Wazuh SIEM
Automated review identified **Wazuh SIEM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenSearch
Automated review identified **OpenSearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/Streamable Transport
Automated review identified **HTTP/Streamable Transport** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### httpx (Async HTTP Client)
Automated review identified **httpx (Async HTTP Client)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CrowdSec
Automated review identified **CrowdSec** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GreyNoise
Automated review identified **GreyNoise** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VirusTotal
Automated review identified **VirusTotal** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AbuseIPDB
Automated review identified **AbuseIPDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
