---
title: dignite-projects/vault-extract
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- C#
- .NET 10
- ABP Framework
- Angular
- SQL Server
- PaddleOCR
- OpenAI API
- Docker
- OpenTelemetry
- ASP.NET Core
- Entity Framework Core
quality_score: 9
rag_relevance: 10
tags:
- IDP
- OCR
- Markdown extraction
- RAG pipeline
- document processing
source: https://github.com/dignite-projects/vault-extract
discovered_at: '2026-06-25T05:05:49Z'
evaluated_by: mistral-small-latest
---

## Summary
Dignite Vault Extract is a channel layer for Intelligent Document Processing (IDP) that converts scans, photos, PDFs, Office files, and digital-born documents into structured Markdown and metadata. It acts as a middleware service, exposing extracted data via REST, EventBus, MCP server, or Webhook to downstream RAG platforms, business systems, and AI clients without owning business logic.

## Key Features
- Multi-format document ingestion (scans, PDFs, Office files, images) with BlobStore-backed storage
- Three interchangeable OCR providers (Vision LLM, PaddleOCR, Azure Document Intelligence) for flexible deployment
- Markdown-first text extraction with structured metadata output for downstream consumption
- REST API, EventBus, MCP server, and Webhook (planned) for seamless integration with RAG and AI systems
- Modular architecture built on ABP Framework with Angular-based operator UI and comprehensive documentation

## Why It Matters for RAG Builders
It provides a critical middleware layer for RAG builders by reliably converting unstructured documents into structured Markdown and metadata, enabling seamless integration with downstream AI systems without reinventing IDP workflows.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### .NET 10
Automated review identified **.NET 10** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ABP Framework
Automated review identified **ABP Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Angular
Automated review identified **Angular** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL Server
Automated review identified **SQL Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PaddleOCR
Automated review identified **PaddleOCR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTelemetry
Automated review identified **OpenTelemetry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ASP.NET Core
Automated review identified **ASP.NET Core** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Entity Framework Core
Automated review identified **Entity Framework Core** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
