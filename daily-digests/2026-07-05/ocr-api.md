---
title: "IA-Generative/ocr-api"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "PaddleOCR", "Redis", "S3/MinIO", "PostgreSQL", "Celery", "Docker", "Docker Compose", "Pydantic"]
quality_score: 8
rag_relevance: 7
tags: ["OCR", "text extraction", "asynchronous processing", "document processing", "Python SDK"]
source: "https://github.com/IA-Generative/ocr-api"
discovered_at: "2026-07-05T20:58:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OCR API is a text extraction service for PDFs and images using an asynchronous pipeline with Redis (queue), S3 (storage), and PaddleOCR for text recognition. It includes a Python SDK for easy integration and supports both synchronous and asynchronous clients.

## Key Features
- Asynchronous text extraction pipeline with Redis queue and Celery workers
- Supports PDF and image formats for OCR processing
- Python SDK with synchronous and asynchronous client support
- Integration with S3-compatible storage (MinIO) for file handling
- Monitoring via Flower (Celery dashboard) and resource tracking

## Why It Matters for RAG Builders
This tool is essential for RAG builders who need to extract text from documents or images before indexing, enabling seamless integration of OCR capabilities into AI pipelines.

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

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
