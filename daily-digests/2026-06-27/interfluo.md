---
title: "ptengelmann/interfluo"
category: "Tooling"
tech_stack: ["JavaScript", "Anthropic Claude (Sonnet/Opus)", "Azure Document Intelligence", "AWS (ECS Fargate, S3, RDS Postgres, SQS)", "pgvector", "OCR (Azure/AWS Textract)", "Mustache (template engine)", "Auth0/Clerk (authentication)", "SAML SSO"]
quality_score: 8
rag_relevance: 7
tags: ["legal tech", "RAG pipeline", "document automation", "UK conveyancing", "citation-grounded AI"]
source: "https://github.com/ptengelmann/interfluo"
discovered_at: "2026-06-27T20:58:22Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Interfluo is an AI co-pilot designed to automate high-cognitive tasks in UK residential conveyancing, reducing fee-earner time spent on drafting enquiries and Reports on Title from 4–8 hours to 30–60 seconds. It processes contract packs, property forms, and search results to generate structured, citation-grounded outputs for solicitors.

## Key Features
- End-to-end pipeline for residential conveyancing document processing (classification, extraction, analysis, generation)
- Citation-grounded outputs with page-level references for defensibility and audit trails
- Multi-document type extractors (TA6, TA7, TA10, CON29, leases, title registers, etc.)
- Integration with firm templates and case management systems (LEAP, Actionstep)
- Scalable cloud architecture with AWS hosting and Anthropic API for reasoning

## Why It Matters for RAG Builders
Interfluo streamlines critical legal workflows by automating time-intensive document analysis and drafting, enabling solicitors to focus on higher-value tasks while maintaining compliance and accuracy through citation-grounded AI outputs.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic Claude (Sonnet/Opus)
Automated review identified **Anthropic Claude (Sonnet/Opus)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Azure Document Intelligence
Automated review identified **Azure Document Intelligence** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS (ECS Fargate, S3, RDS Postgres, SQS)
Automated review identified **AWS (ECS Fargate, S3, RDS Postgres, SQS)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (Azure/AWS Textract)
Automated review identified **OCR (Azure/AWS Textract)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mustache (template engine)
Automated review identified **Mustache (template engine)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Auth0/Clerk (authentication)
Automated review identified **Auth0/Clerk (authentication)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SAML SSO
Automated review identified **SAML SSO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
