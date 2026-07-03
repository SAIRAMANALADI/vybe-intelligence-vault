---
title: "txn2/mcp-data-platform"
category: "Orchestrator"
tech_stack: ["Go", "DataHub", "Trino", "PostgreSQL", "S3", "OAuth 2.1", "OpenTelemetry", "Prometheus", "Mermaid"]
quality_score: 9
rag_relevance: 10
tags: ["semantic layer", "data enrichment", "AI orchestration", "cross-enrichment", "enterprise data access"]
source: "https://github.com/txn2/mcp-data-platform"
discovered_at: "2026-07-03T19:15:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-data-platform is an orchestration layer for AI assistants that connects them to data infrastructure, enriching queries with semantic context from a DataHub semantic layer. It enables AI tools to understand business meaning, ownership, data quality, and deprecation warnings alongside raw data results.

## Key Features
- Semantic-first data access with automatic enrichment from DataHub (owners, tags, quality scores, deprecation warnings)
- Bidirectional cross-enrichment between Trino, DataHub, and S3 for unified context in queries
- Workflow gating to enforce discovery-first operations and prevent blind SQL queries
- Enterprise-grade security with fail-closed models, TLS enforcement, and prompt injection protection
- Role-based personas, OAuth 2.1 authentication, and comprehensive audit logging for compliance

## Why It Matters for RAG Builders
It bridges the gap between raw data queries and business context, enabling AI assistants to operate with full semantic awareness and reducing the risk of misinterpretation or compliance violations in enterprise environments.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DataHub
Automated review identified **DataHub** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Trino
Automated review identified **Trino** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### S3
Automated review identified **S3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.1
Automated review identified **OAuth 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid
Automated review identified **Mermaid** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
