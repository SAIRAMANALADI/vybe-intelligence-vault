---
title: "cammac-creator/ibanforge"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Python", "Docker", "REST API", "MCP (Model Context Protocol)", "x402 Micropayments", "PostgreSQL", "GLEIF", "SIX BankMaster", "OpenAPI 3.1", "Next.js"]
quality_score: 9
rag_relevance: 10
tags: ["IBAN validation", "BIC/SWIFT lookup", "Compliance API", "AI agent integration", "x402 micropayments"]
source: "https://github.com/cammac-creator/ibanforge"
discovered_at: "2026-06-25T21:29:03Z"
evaluated_by: "mistral-small-latest"
---

## Summary
IBANforge provides a compliance API for AI agents, offering IBAN validation, BIC/SWIFT lookup, Swiss clearing data, EMI/vIBAN classification, SEPA Instant reachability, and risk scoring. It is accessible via MCP, x402 micropayments, and REST APIs with no API key signup required.

## Key Features
- Native MCP server integration for AI agents with 5 specialized tools (e.g., `validate_iban`, `check_compliance`).
- x402 micropayments integration for pay-per-call access without API key signup or human intervention.
- Comprehensive data coverage including 121,399 BIC entries, 1,190 Swiss BC-Nummern, and EMI/vIBAN classification.
- Dual SDK support (TypeScript/JavaScript and Python) with free-tier fallback and structured output schemas.
- Swiss-specific compliance features (BC-Nummer, QR-IID) and real-time risk scoring for SEPA payments.

## Why It Matters for RAG Builders
IBANforge is essential for RAG/AI stack builders as it provides critical compliance and validation services for financial transactions, enabling secure and accurate agent interactions with banking data without requiring complex local implementations.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### REST API
Automated review identified **REST API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### x402 Micropayments
Automated review identified **x402 Micropayments** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GLEIF
Automated review identified **GLEIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SIX BankMaster
Automated review identified **SIX BankMaster** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI 3.1
Automated review identified **OpenAPI 3.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js
Automated review identified **Next.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
