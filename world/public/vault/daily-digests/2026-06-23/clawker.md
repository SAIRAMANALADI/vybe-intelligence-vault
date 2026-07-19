---
title: schmitthub/clawker
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Go
- Docker
- Envoy
- CoreDNS
- eBPF
- gRPC
- mTLS
- SQLite
- OTel
- OpenSearch
- Prometheus
quality_score: 9
rag_relevance: 8
tags:
- AI agent sandbox
- container security
- Claude Code
- egress firewall
- self-hosted
source: https://github.com/schmitthub/clawker
discovered_at: '2026-06-23T06:47:02Z'
evaluated_by: mistral-small-latest
---

## Summary
Clawker is a self-hosted, open-source sandbox for running AI coding agents like Claude Code in isolated Docker containers with strong security defaults. It provides a deny-by-default egress firewall, credential forwarding, and project-based namespace isolation to mitigate risks like prompt injection and data exfiltration.

## Key Features
- Isolated Docker-based execution for AI coding agents with deny-by-default egress firewall using Envoy, CoreDNS, and eBPF for security
- Project-based namespace isolation and resource management to prevent conflicts across projects
- Git credential forwarding (SSH/GPG) and host proxy services for seamless authentication and browser-based workflows
- Embedded parameterized Dockerfile templates with preinstalled tools and configurable build-time instructions
- Monitoring stack (OTel, OpenSearch, Prometheus) for telemetry and observability of agent operations

## Why It Matters for RAG Builders
Clawker provides a secure, self-hosted alternative for running AI coding agents locally, addressing critical security gaps in agentic AI workflows while offering robust isolation and observability features essential for production RAG deployments.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Envoy
Automated review identified **Envoy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CoreDNS
Automated review identified **CoreDNS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### eBPF
Automated review identified **eBPF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### mTLS
Automated review identified **mTLS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OTel
Automated review identified **OTel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenSearch
Automated review identified **OpenSearch** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
