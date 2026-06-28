---
title: "ccedacero/nyc-property-intel"
category: "Tooling"
tech_stack: ["Python", "FastMCP", "PostgreSQL", "asyncpg", "Pydantic", "uv", "Socrata API", "NYC GeoClient API", "PostHog", "Docker"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "real estate due diligence", "NYC public records", "property intelligence", "AI tooling"]
source: "https://github.com/ccedacero/nyc-property-intel"
discovered_at: "2026-06-28T14:49:47Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server providing Claude AI (and other MCP-compatible clients) access to 20+ NYC public record datasets for real estate due diligence. Enables plain-English queries about violations, liens, sales history, ownership, permits, and more for any NYC property.

## Key Features
- 18 specialized tools for NYC property analysis (violations, liens, sales, permits, etc.)
- Integration with 9 city agencies' datasets (HPD, DOB, DOF, FDNY, NYPD, etc.)
- Plain-English query interface for non-technical users
- Self-hostable with PostgreSQL backend and nycdb data pipeline
- Rate-limited API with trial token support for testing

## Why It Matters for RAG Builders
It provides a unified, AI-accessible interface to critical NYC public records for real estate due diligence, enabling faster and more comprehensive property risk assessment.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastMCP
Automated review identified **FastMCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### asyncpg
Automated review identified **asyncpg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Socrata API
Automated review identified **Socrata API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NYC GeoClient API
Automated review identified **NYC GeoClient API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostHog
Automated review identified **PostHog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
