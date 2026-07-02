---
title: "streamshub/streamshub-mcp"
category: "Tooling"
tech_stack: ["Java", "Quarkus", "Fabric8 Kubernetes Client", "Model Context Protocol (MCP)", "Kubernetes"]
quality_score: 8
rag_relevance: 9
tags: ["MCP", "Kubernetes", "Kafka", "Strimzi", "AI infrastructure"]
source: "https://github.com/streamshub/streamshub-mcp"
discovered_at: "2026-07-02T19:19:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
StreamsHub MCP provides Model Context Protocol (MCP) servers that enable AI assistants to interact with Kubernetes-based streaming infrastructure, such as Strimzi-managed Kafka clusters. It exposes live cluster state and diagnostic tools via MCP-compatible clients for real-time troubleshooting and automation.

## Key Features
- Exposes live Kubernetes cluster state as structured MCP resources for real-time context in AI workflows
- Provides dynamic tooling for Kafka cluster management (e.g., configuration, user handling, and diagnostics)
- Supports resource subscriptions and real-time notifications for cluster state changes
- Integrates with MCP-compatible clients (e.g., Claude, VS Code) for seamless AI-driven infrastructure interaction
- Offers prompt templates and completions for guided troubleshooting and parameter autocompletion

## Why It Matters for RAG Builders
It bridges AI assistants with live streaming infrastructure, enabling real-time diagnostics and automation for RAG systems managing Kubernetes-based platforms.

## Tech Stack Deep Dive
### Java
Automated review identified **Java** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Quarkus
Automated review identified **Quarkus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fabric8 Kubernetes Client
Automated review identified **Fabric8 Kubernetes Client** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
