---
title: MaddogWarner/unifi-dashboard
category: world/public/vault/daily-digests/2026-07-09
tech_stack:
- Docker
- Docker Compose
- FastAPI
- React
- PostgreSQL
- Python
- TypeScript
- Nginx
- nmap
- MCP (Model Context Protocol)
- SQLAlchemy
- Vite
quality_score: 9
rag_relevance: 7
tags:
- network security
- firewall monitoring
- UniFi integration
- MCP server
- self-hosted
source: https://github.com/MaddogWarner/unifi-dashboard
discovered_at: '2026-07-09T11:53:35Z'
evaluated_by: mistral-small-latest
---

## Summary
A self-hosted Docker Compose stack that connects to Ubiquiti UniFi consoles to provide firewall policy visualization, security assessment, threat intelligence integration, and an MCP server for AI tooling like Claude Code. It surfaces policy health, IDS/IPS gaps, and CVE alerts through a React-based web dashboard.

## Key Features
- Firewall policy visualization with zone-based policy matrices and hit counts from syslog
- Automated security assessment with 10+ checks and remediation guidance
- Threat intelligence integration (MISP, blocklists) with UniFi firewall rule push
- CVE monitoring for UniFi devices with firmware upgrade alerts
- MCP server for AI tooling (Claude Code) to query live dashboard data

## Why It Matters for RAG Builders
It provides critical network security insights and automation for UniFi deployments, enabling proactive threat detection and policy validation for RAG and AI stack builders managing networked environments.

## Tech Stack Deep Dive
### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nginx
Automated review identified **Nginx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### nmap
Automated review identified **nmap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
