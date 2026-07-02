---
title: "SCGIS-Wales/dcert"
category: "Tooling"
tech_stack: ["Rust", "Python (PyPI package)", "OpenSSL", "Model Context Protocol (MCP)", "HashiCorp Vault", "Docker", "Homebrew", "Chocolatey"]
quality_score: 9
rag_relevance: 8
tags: ["TLS", "X.509", "Certificate Validation", "MCP Server", "Security"]
source: "https://github.com/SCGIS-Wales/dcert"
discovered_at: "2026-07-02T06:40:05Z"
evaluated_by: "mistral-small-latest"
---

## Summary
dcert is a Rust-based CLI and MCP server for X.509 certificate analysis, validation, and conversion. It supports reading certificates from PEM files or HTTPS endpoints, validating TLS connections, checking revocation status, converting between formats (e.g., PFX to PEM), and integrating with AI-powered IDEs via the Model Context Protocol (MCP).

## Key Features
- Decodes and validates X.509 certificates from PEM files or HTTPS endpoints
- Converts between certificate formats (e.g., PFX to PEM)
- Checks certificate expiry, revocation status, and compliance with CA/B Forum Baseline Requirements
- Integrates with AI-powered IDEs via MCP for real-time certificate analysis
- Supports HashiCorp Vault PKI for certificate issuance, renewal, and storage

## Why It Matters for RAG Builders
dcert is essential for RAG/AI stack builders to ensure secure TLS certificate validation and management, enabling reliable and compliant AI applications.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (PyPI package)
Automated review identified **Python (PyPI package)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenSSL
Automated review identified **OpenSSL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HashiCorp Vault
Automated review identified **HashiCorp Vault** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Homebrew
Automated review identified **Homebrew** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chocolatey
Automated review identified **Chocolatey** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
