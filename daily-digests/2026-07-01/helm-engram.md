---
title: "devops-ia/helm-engram"
category: "Tooling"
tech_stack: ["Helm", "Kubernetes", "PostgreSQL", "Go", "CI/CD (GitHub Actions)", "UpdateCLI", "helm-unittest", "JSON Schema"]
quality_score: 9
rag_relevance: 8
tags: ["Helm chart", "Kubernetes deployment", "AI memory server", "LLM context sharing", "PostgreSQL"]
source: "https://github.com/devops-ia/helm-engram"
discovered_at: "2026-07-01T19:48:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
This repository maintains a Helm chart for deploying Engram Cloud, an AI-powered persistent memory server that enables LLM agents to share context and observations across sessions and team members. The chart simplifies Kubernetes deployment with built-in PostgreSQL, autoscaling, and flexible secret management.

## Key Features
- Pre-configured Helm chart for Engram Cloud with PostgreSQL StatefulSet
- Supports horizontal pod autoscaling, pod disruption budgets, and network policies
- Flexible secret management (chart-managed, existingSecret, ESO, Sealed Secrets)
- Comprehensive test suite with 99 helm-unittest tests and automated CI pipelines
- Automated version tracking via UpdateCLI for upstream Engram releases

## Why It Matters for RAG Builders
This Helm chart simplifies the deployment of Engram Cloud, a critical component for enabling persistent memory and context sharing in AI agents, reducing setup complexity for RAG builders.

## Tech Stack Deep Dive
### Helm
Automated review identified **Helm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UpdateCLI
Automated review identified **UpdateCLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### helm-unittest
Automated review identified **helm-unittest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
