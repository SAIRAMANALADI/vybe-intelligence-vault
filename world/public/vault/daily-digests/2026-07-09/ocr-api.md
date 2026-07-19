---
title: IA-Generative/ocr-api
category: world/public/vault/daily-digests/2026-07-09
tech_stack:
- Python
- FastAPI
- PaddleOCR
- Redis
- S3/MinIO
- PostgreSQL
- Celery
- Docker
- Pydantic
quality_score: 8
rag_relevance: 7
tags:
- OCR
- text extraction
- asynchronous processing
- document processing
- Python SDK
source: https://github.com/IA-Generative/ocr-api
discovered_at: '2026-07-09T14:45:23Z'
evaluated_by: mistral-small-latest
---

## Summary
OCR API is a text extraction service for PDFs and images using an asynchronous pipeline with Redis (queue), S3 (storage), and PaddleOCR for text recognition. It includes a Python SDK for easy integration and supports both synchronous and asynchronous clients.

## Key Features
- Asynchronous text extraction pipeline for PDFs and images using PaddleOCR
- Python SDK with synchronous and asynchronous client support for easy integration
- Redis queue for task management and S3/MinIO for file storage
- Docker and Docker Compose for simplified deployment and scaling
- Monitoring via Celery Flower and PostgreSQL for task persistence

## Why It Matters for RAG Builders
This API provides a robust and scalable solution for extracting text from documents, which is essential for preprocessing data in RAG pipelines.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PaddleOCR
Automated review identified **PaddleOCR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### S3/MinIO
Automated review identified **S3/MinIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Celery
Automated review identified **Celery** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
