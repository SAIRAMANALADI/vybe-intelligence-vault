---
title: "barbacane-dev/barbacane"
category: "Orchestrator"
tech_stack: ["Rust", "Tokio", "Hyper", "WASM", "OpenAPI 3.x", "AsyncAPI 3.x", "Rustls", "aws-lc-rs", "Prometheus", "OTLP", "W3C Trace Context"]
quality_score: 9
rag_relevance: 9
tags: ["API Gateway", "AI Gateway", "OpenAPI", "Rust", "WASM Plugins"]
source: "https://github.com/barbacane-dev/barbacane"
discovered_at: "2026-06-29T22:54:53Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Barbacane is a high-performance, spec-driven API gateway written in Rust that transforms OpenAPI or AsyncAPI specifications into a secure, AI-ready gateway. It handles routing, validation, authentication, and AI traffic management while ensuring infrastructure consistency with the source spec.

## Key Features
- Spec-driven configuration with OpenAPI/AsyncAPI as the single source of truth
- Built-in AI gateway supporting OpenAI, Anthropic, Ollama, and custom routing
- High-performance routing and validation (~83 ns route lookup, ~1.2 µs validation)
- Secure by default with sandboxed WASM plugins, FIPS-ready TLS, and runtime secrets
- Extensible via 33+ official plugins and custom WASM plugin development

## Why It Matters for RAG Builders
Barbacane simplifies AI stack integration by unifying API routing, AI traffic management, and security into a single spec-driven gateway, reducing infrastructure drift and operational overhead for RAG builders.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tokio
Automated review identified **Tokio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hyper
Automated review identified **Hyper** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WASM
Automated review identified **WASM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI 3.x
Automated review identified **OpenAPI 3.x** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AsyncAPI 3.x
Automated review identified **AsyncAPI 3.x** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Rustls
Automated review identified **Rustls** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### aws-lc-rs
Automated review identified **aws-lc-rs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OTLP
Automated review identified **OTLP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### W3C Trace Context
Automated review identified **W3C Trace Context** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
