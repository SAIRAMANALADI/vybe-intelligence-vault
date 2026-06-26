---
title: "FoxRav/cipp-consultant-agent"
category: "Vector DB"
tech_stack: ["PostgreSQL", "pgvector", "Python 3.10+", "Docker", "Docker Compose", "LibreOffice", "Autodesk DWG TrueView", "pypdf", "psycopg[binary]", "pytest", "ruff"]
quality_score: 7
rag_relevance: 8
tags: ["CIPP", "contract analysis", "document processing", "price estimation", "sewer rehabilitation"]
source: "https://github.com/FoxRav/cipp-consultant-agent"
discovered_at: "2026-06-26T13:09:17Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A PostgreSQL + pgvector-based database system for analyzing, normalizing, validating, and querying CIPP (Cured-In-Place Pipe) rehabilitation contracts. It includes ETL pipelines for document processing, canonical JSON generation, and price estimation for JV/SV sewer segment projects.

## Key Features
- PostgreSQL/pgvector-based contract database for CIPP rehabilitation projects
- ETL pipeline for extracting and normalizing data from PDFs, Office files, and DWG drawings
- Canonical JSON generation and validation for structured contract data
- Price estimation engine for JV/SV sewer segment projects using reference data
- Quality and readiness reporting for knowledge graph integration

## Why It Matters for RAG Builders
This repository provides a specialized vector database and ETL pipeline for processing and analyzing CIPP rehabilitation contracts, enabling accurate RAG applications for construction and infrastructure projects.

## Tech Stack Deep Dive
### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python 3.10+
Automated review identified **Python 3.10+** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LibreOffice
Automated review identified **LibreOffice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Autodesk DWG TrueView
Automated review identified **Autodesk DWG TrueView** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pypdf
Automated review identified **pypdf** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### psycopg[binary]
Automated review identified **psycopg[binary]** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ruff
Automated review identified **ruff** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
