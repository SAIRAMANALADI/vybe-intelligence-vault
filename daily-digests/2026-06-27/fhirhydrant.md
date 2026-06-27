---
title: "faulkj/fhirHydrant"
category: "Tooling"
tech_stack: ["Node.js", "TypeScript", "SMART on FHIR", "JWT", "JWKS", "FHIR R4+", "MCP (Model Context Protocol)"]
quality_score: 9
rag_relevance: 8
tags: ["FHIR", "MCP Server", "SMART Authentication", "Clinical Data", "Healthcare Interoperability"]
source: "https://github.com/faulkj/fhirHydrant"
discovered_at: "2026-06-27T23:07:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
fhirHydrant is an open-source Node.js MCP server that bridges clinical FHIR APIs to MCP-compatible clients using SMART on FHIR v2 Backend Services authentication. It exposes FHIR resources, operations, and terminology lookups as configurable MCP tools with advanced features like compact responses, FHIRPath filtering, and safe pagination.

## Key Features
- SMART Backend Services authentication with JWKS key rotation and dynamic scopes
- Configurable MCP tools for FHIR resources, operations, and terminology lookups
- Compact response shaping with FHIRPath filtering and byte limits for token efficiency
- CapabilityStatement-aware tool registration and scope gating
- PHI-free audit events and safe pagination with oversized Bundle retry

## Why It Matters for RAG Builders
It enables secure, token-efficient access to clinical FHIR data for AI applications while maintaining compliance with healthcare interoperability standards.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SMART on FHIR
Automated review identified **SMART on FHIR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWKS
Automated review identified **JWKS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FHIR R4+
Automated review identified **FHIR R4+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
