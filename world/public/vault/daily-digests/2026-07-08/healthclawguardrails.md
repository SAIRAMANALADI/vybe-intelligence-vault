---
title: aks129/HealthClawGuardrails
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Python
- FastAPI/Flask
- FHIR (R4, R6)
- MCP (Model Context Protocol)
- Docker
- Redis
- HL7 SDC
- SMART Health Links
- PostgreSQL/SQLite
- Node.js (for testing)
- GitHub Actions (CI/CD)
quality_score: 9
rag_relevance: 10
tags:
- FHIR Guardrails
- PHI Redaction
- AI Healthcare Security
- MCP Server
- Clinical Data Compliance
source: https://github.com/aks129/HealthClawGuardrails
discovered_at: '2026-07-08T11:00:02Z'
evaluated_by: mistral-small-latest
---

## Summary
HealthClaw Guardrails is an open-source security and compliance layer designed to act as a proxy between AI agents and clinical data stored in FHIR servers. It enforces PHI redaction, immutable audit trails, step-up authorization, tenant isolation, and human-in-the-loop validation to ensure secure and compliant access to healthcare data.

## Key Features
- PHI redaction and anonymization for all clinical data requests
- Immutable audit trail for every read/write operation with tenant and agent tracking
- Step-up authorization via HMAC-SHA256 tokens for write operations
- Human-in-the-loop validation for clinical writes (HTTP 428 responses)
- Tenant isolation to prevent cross-tenant data access

## Why It Matters for RAG Builders
It provides a critical security and compliance layer for AI agents interacting with sensitive healthcare data, ensuring PHI protection and regulatory adherence in RAG and AI-driven healthcare applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI/Flask
Automated review identified **FastAPI/Flask** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FHIR (R4, R6)
Automated review identified **FHIR (R4, R6)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HL7 SDC
Automated review identified **HL7 SDC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SMART Health Links
Automated review identified **SMART Health Links** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL/SQLite
Automated review identified **PostgreSQL/SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (for testing)
Automated review identified **Node.js (for testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions (CI/CD)
Automated review identified **GitHub Actions (CI/CD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
