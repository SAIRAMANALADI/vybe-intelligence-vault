---
title: faulkj/fhirHydrant
category: daily-digests/2026-07-06
tech_stack:
- Node.js
- TypeScript
- FHIR (R4+)
- SMART on FHIR
- JWT
- MCP (Model Context Protocol)
- JWKS
- FHIRPath
quality_score: 9
rag_relevance: 8
tags:
- FHIR
- MCP Server
- SMART Authentication
- Clinical Data
- Healthcare AI
source: https://github.com/faulkj/fhirHydrant
discovered_at: '2026-07-06T23:04:34Z'
evaluated_by: mistral-small-latest
---

## Summary
fhirHydrant is an open-source Node.js MCP server that bridges FHIR APIs with MCP-compatible clients, enabling secure access to clinical data via SMART on FHIR v2 Backend Services. It transforms FHIR resources, operations, and terminology into configurable MCP tools for AI and healthcare applications.

## Key Features
- Configurable FHIR resource tools for search, read, history, and CRUD operations with metadata-aware gating
- SMART Backend Services authentication with JWKS key rotation and dynamic scopes
- Token economy features including compact responses, FHIRPath filtering, byte limits, and oversized Bundle retry
- Support for terminology lookup, code search, and named operations (e.g., validation, patient matching)
- CapabilityStatement-aware tools with runtime scope checks and PHI-light audit events

## Why It Matters for RAG Builders
It provides a secure, configurable bridge between FHIR APIs and MCP clients, enabling AI systems to interact with clinical data while adhering to healthcare compliance and token efficiency requirements.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FHIR (R4+)
Automated review identified **FHIR (R4+)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SMART on FHIR
Automated review identified **SMART on FHIR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWKS
Automated review identified **JWKS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FHIRPath
Automated review identified **FHIRPath** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
