---
title: "dagucloud/dagu"
category: "Orchestrator"
tech_stack: ["Go", "YAML", "Docker", "Kubernetes", "gRPC", "HTTP", "MCP (Model Context Protocol)", "Shell Scripting", "SSH"]
quality_score: 9
rag_relevance: 8
tags: ["workflow automation", "DAG orchestrator", "AI agent integration", "self-contained", "declarative YAML"]
source: "https://github.com/dagucloud/dagu"
discovered_at: "2026-07-01T12:32:46Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Dagu is a lightweight, self-contained workflow orchestrator alternative to Airflow or Cron, featuring a declarative YAML-based DAG definition and a web UI for managing, monitoring, and executing workflows across Linux, Mac, and Windows without requiring a database.

## Key Features
- Single binary installation with no database dependency, simplifying deployment and reducing operational overhead.
- Declarative YAML-based DAG definitions supporting shell commands, Docker containers, Kubernetes Jobs, and remote SSH execution.
- Built-in web UI for visual workflow management, monitoring, retries, and approvals with dark mode support.
- Native MCP server for AI agent integration, enabling workflow authoring, execution, and state management via tools like Claude Code or Gemini CLI.
- Distributed execution with coordinator/worker architecture, scalable from single-machine setups to hybrid cloud deployments.

## Why It Matters for RAG Builders
Dagu simplifies workflow orchestration for AI stacks by providing a lightweight, self-contained alternative to heavyweight tools like Airflow, with native AI agent integration for automated workflow management.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kubernetes
Automated review identified **Kubernetes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP
Automated review identified **HTTP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell Scripting
Automated review identified **Shell Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSH
Automated review identified **SSH** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
