---
title: "kubedoll-heavy-industries/helm-mcp"
category: "Tooling"
tech_stack: ["Go", "Docker", "Model Context Protocol (MCP)", "Helm", "HTTP", "CI/CD (GitHub Actions)", "Codecov"]
quality_score: 9
rag_relevance: 9
tags: ["Helm", "Kubernetes", "MCP", "AI Assistant", "Configuration"]
source: "https://github.com/kubedoll-heavy-industries/helm-mcp"
discovered_at: "2026-07-03T17:22:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-helm is an MCP (Model Context Protocol) server that provides AI assistants with real-time access to Helm chart data, eliminating hallucinated configurations and ensuring accurate Kubernetes deployments.

## Key Features
- Provides real Helm chart schemas and values.yaml to AI assistants, preventing hallucinations
- Supports querying Helm repositories for chart versions, dependencies, and NOTES.txt
- Implements the Model Context Protocol (MCP) for standardized AI tool integration
- Offers multiple deployment options (Docker, binary, Go install, or HTTP endpoint)
- Includes self-hosting capabilities for shared or production environments

## Why It Matters for RAG Builders
It ensures AI assistants generate accurate and reliable Kubernetes configurations by providing real Helm chart data, reducing deployment errors and wasted resources.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Helm
Automated review identified **Helm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codecov
Automated review identified **Codecov** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
