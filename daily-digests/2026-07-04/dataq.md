---
title: "TheurgicDuke771/DataQ"
category: "Tooling"
tech_stack: ["FastAPI", "Celery", "Great Expectations", "PostgreSQL", "Redis", "React", "Vite", "Ant Design", "OIDC (Azure AD)", "Azure Container Apps", "Azure Key Vault", "Application Insights", "Docker", "MkDocs Material"]
quality_score: 9
rag_relevance: 8
tags: ["data quality", "Great Expectations", "monitoring", "orchestration", "AI assistants"]
source: "https://github.com/TheurgicDuke771/DataQ"
discovered_at: "2026-07-04T06:49:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DataQ is a data quality monitoring platform built on Great Expectations, designed to validate and monitor data across multiple sources like Snowflake, ADLS Gen2, S3, and Unity Catalog. It supports orchestration integrations with ADF and Airflow, severity-tiered alerting, and provides an MCP server for AI assistant access.

## Key Features
- Multi-datasource support (Snowflake, ADLS Gen2, S3, Unity Catalog) with Great Expectations and custom SQL checks
- Three run modes: ad-hoc, cron schedules, and pipeline-triggered checks with ADF/Airflow integrations
- Severity-tiered alerting (Teams, Slack, email) with first-failure dedup and snooze functionality
- Interactive dashboard with health scores, trends, and PII-redacted failing-row samples
- MCP server for AI assistant integration (8 curated tools for natural-language queries)

## Why It Matters for RAG Builders
DataQ streamlines data quality validation and monitoring for AI/ML pipelines, ensuring reliable data inputs for RAG systems by integrating with orchestration tools and providing AI-native access via MCP.

## Tech Stack Deep Dive
### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Celery
Automated review identified **Celery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Great Expectations
Automated review identified **Great Expectations** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ant Design
Automated review identified **Ant Design** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OIDC (Azure AD)
Automated review identified **OIDC (Azure AD)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Azure Container Apps
Automated review identified **Azure Container Apps** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Azure Key Vault
Automated review identified **Azure Key Vault** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Application Insights
Automated review identified **Application Insights** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MkDocs Material
Automated review identified **MkDocs Material** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
