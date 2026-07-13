---
title: "cmendezs/mcp-einvoicing-core"
category: "Tooling"
tech_stack: ["Python", "Pydantic", "FastMCP", "XML", "OAuth2", "Peppol", "EN 16931", "UBL", "CII", "XAdES", "Schematron", "asyncio"]
quality_score: 9
rag_relevance: 8
tags: ["e-invoicing", "MCP server", "compliance framework", "wire format serialization", "digital signatures"]
source: "https://github.com/cmendezs/mcp-einvoicing-core"
discovered_at: "2026-06-24T20:52:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A foundational Python library for building Model Context Protocol (MCP) servers focused on electronic invoicing (e-invoicing). It provides shared Pydantic models, EN 16931 compliance tools, wire format serializers, and country-specific extensions to standardize e-invoicing implementations across regions like France, Germany, Italy, and Brazil.

## Key Features
- Shared Pydantic models for EN 16931 invoice structures and country-specific tax identifiers
- Wire format serializers/parsers for UBL and CII (Cross Industry Invoice) with conversion utilities
- Peppol SMP lookup client for participant identification and routing
- OAuth2-capable async HTTP client with mTLS and API key support
- Compliance audit framework with country-specific validation and reporting tools

## Why It Matters for RAG Builders
It provides a standardized foundation for building country-specific e-invoicing MCP servers, reducing duplication and ensuring compliance with regional standards like EN 16931, Peppol, and FatturaPA.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XML
Automated review identified **XML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth2
Automated review identified **OAuth2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Peppol
Automated review identified **Peppol** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EN 16931
Automated review identified **EN 16931** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UBL
Automated review identified **UBL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CII
Automated review identified **CII** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XAdES
Automated review identified **XAdES** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Schematron
Automated review identified **Schematron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncio
Automated review identified **asyncio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
