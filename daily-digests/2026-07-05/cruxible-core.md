---
title: "cruxible-ai/cruxible-core"
category: "Orchestrator"
tech_stack: ["Python", "OCI (Open Container Initiative)", "YAML", "SQL (implicit via state management)", "CLI", "REST API", "Authentication (Bearer tokens)", "Deterministic workflows"]
quality_score: 9
rag_relevance: 8
tags: ["state management", "governed workflows", "agent orchestration", "deterministic state", "provenance tracking"]
source: "https://github.com/cruxible-ai/cruxible-core"
discovered_at: "2026-07-05T20:59:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Cruxible Core provides a deterministic, governed state layer for AI agents, enabling durable, typed entities and relationships that persist beyond individual sessions or context windows. It replaces context engineering with domain modeling, ensuring reliable, auditable state management for agent workflows and human oversight.

## Key Features
- Typed, durable state layer for AI agents that outlives sessions or context windows
- Governed writes with direct and proposal-based modes, enforced by guards and review processes
- Deterministic workflows with preview-first execution and replayable traces
- Receipt-based evidence graphs for all mutations and queries, ensuring auditability
- Domain and operating state separation with versioned, composable kits for ontology and procedures

## Why It Matters for RAG Builders
Cruxible Core provides a reliable, auditable foundation for AI agents to operate on shared, governed state instead of reconstructing context, reducing hallucinations and improving consistency in multi-agent systems.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCI (Open Container Initiative)
Automated review identified **OCI (Open Container Initiative)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL (implicit via state management)
Automated review identified **SQL (implicit via state management)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Authentication (Bearer tokens)
Automated review identified **Authentication (Bearer tokens)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Deterministic workflows
Automated review identified **Deterministic workflows** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
