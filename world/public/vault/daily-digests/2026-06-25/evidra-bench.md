---
title: vitas/evidra-bench
category: daily-digests/2026-06-25
tech_stack:
- Go
- Kubernetes
- Helm
- Argo CD
- Terraform
- AWS
- LocalStack
- MCP (Model Context Protocol)
- React
- Vite
quality_score: 9
rag_relevance: 8
tags:
- AI SRE
- benchmarking
- infrastructure agents
- MCP servers
- Kubernetes
source: https://github.com/vitas/evidra-bench
discovered_at: '2026-06-25T17:13:05Z'
evaluated_by: mistral-small-latest
---

## Summary
Evidra Bench is an open-source benchmarking framework designed to evaluate AI SRE agents, MCP servers, and infrastructure copilots by running live Kubernetes, Helm, Argo CD, Terraform, and AWS/LocalStack incidents. It verifies both the final infrastructure state and the agent's diagnostic and remediation path.

## Key Features
- Runs live infrastructure scenarios (Kubernetes, Helm, Argo CD, Terraform, AWS) to test AI agents in real-world conditions
- Path-aware scoring that evaluates not just outcomes but the agent's diagnostic and remediation process
- Artifact-backed evidence collection including transcripts, tool calls, timelines, and failure autopsies
- Adapter-neutral evaluation supporting MCP servers, A2A agents, CLI agents, and provider loops
- Public and private report workflows for open benchmarking, procurement evaluations, and regression testing

## Why It Matters for RAG Builders
It provides critical, reproducible evidence for evaluating AI agents' safety, reliability, and operational competence in real infrastructure scenarios before deployment.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Helm
Automated review identified **Helm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Argo CD
Automated review identified **Argo CD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Terraform
Automated review identified **Terraform** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS
Automated review identified **AWS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LocalStack
Automated review identified **LocalStack** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
