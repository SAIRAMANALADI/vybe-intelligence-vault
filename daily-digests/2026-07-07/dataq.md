---
title: TheurgicDuke771/DataQ
category: daily-digests/2026-07-07
tech_stack:
- FastAPI
- Celery
- Great Expectations
- PostgreSQL
- Redis
- React
- Vite
- Ant Design
- OIDC (Azure AD)
- Azure Container Apps
- Azure Key Vault
- Application Insights
- Docker
- MkDocs Material
- SQLAlchemy
- Alembic
quality_score: 9
rag_relevance: 8
tags:
- data quality
- Great Expectations
- monitoring
- orchestration
- AI assistant integration
source: https://github.com/TheurgicDuke771/DataQ
discovered_at: '2026-07-07T20:51:49Z'
evaluated_by: mistral-small-latest
---

## Summary
DataQ is a data quality monitoring platform built on Great Expectations, designed to validate and monitor data across multiple sources including Snowflake, Unity Catalog (Databricks), ADLS Gen2, and S3. It supports real-time checks, scheduled runs, and pipeline-triggered validations with severity-based alerting and AI assistant integration via an MCP server.

## Key Features
- Multi-datasource validation (Snowflake, Unity Catalog, ADLS Gen2, S3) with Great Expectations and custom SQL checks
- Three run modes: ad-hoc, cron schedules, and pipeline-triggered (ADF/Airflow)
- Severity-tiered alerting to Teams, Slack, and email with first-failure dedup
- AI assistant integration via FastMCP with 8 curated tools for natural language queries
- Health score dashboards, PII-redacted failing-row samples, and suite-level sharing

## Why It Matters for RAG Builders
DataQ streamlines data quality validation and monitoring for AI pipelines, ensuring reliable data inputs for RAG systems while providing AI-native access via MCP for automated troubleshooting and validation.

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

### SQLAlchemy
Automated review identified **SQLAlchemy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Alembic
Automated review identified **Alembic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
