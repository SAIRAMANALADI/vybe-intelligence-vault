---
title: SNagarjuna07/shortlyai
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- Java 25
- Spring Boot 4
- Spring AI
- Spring Cloud Gateway
- Spring Cloud Eureka
- Resilience4j
- PostgreSQL
- Redis
- Apache Kafka
- Prometheus
- Grafana
- Docker Compose
- MCP (Model Context Protocol)
- Swagger/OpenAPI
- ShedLock
- Logback
quality_score: 10
rag_relevance: 8
tags:
- microservices
- LLM integration
- MCP server
- observability
- resilience
source: https://github.com/SNagarjuna07/shortlyai
discovered_at: '2026-06-25T17:13:54Z'
evaluated_by: mistral-small-latest
---

## Summary
A production-grade URL shortener built as a Java 25 / Spring Boot 4 microservices platform with an LLM-powered ReAct agent for natural language interactions and an MCP server for direct integration with Claude Desktop. Features distributed architecture, resilience patterns, and full observability.

## Key Features
- Six independently deployable microservices with service discovery and circuit breakers
- LLM-powered ReAct agent for natural language URL shortening, analytics, and deletion
- Native MCP server for direct integration with Claude Desktop
- High-performance URL redirect path with 1,332 req/s at 24ms latency (cache-aside Redis)
- Comprehensive observability stack with Prometheus, Grafana, and distributed tracing

## Why It Matters for RAG Builders
It demonstrates a production-ready microservices architecture with LLM integration, resilience patterns, and observability, serving as a blueprint for scalable AI-driven backend systems.

## Tech Stack Deep Dive
### Java 25
Automated review identified **Java 25** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Spring Boot 4
Automated review identified **Spring Boot 4** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Spring AI
Automated review identified **Spring AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Spring Cloud Gateway
Automated review identified **Spring Cloud Gateway** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Spring Cloud Eureka
Automated review identified **Spring Cloud Eureka** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Resilience4j
Automated review identified **Resilience4j** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Redis
Automated review identified **Redis** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Apache Kafka
Automated review identified **Apache Kafka** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus
Automated review identified **Prometheus** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Grafana
Automated review identified **Grafana** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Swagger/OpenAPI
Automated review identified **Swagger/OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ShedLock
Automated review identified **ShedLock** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Logback
Automated review identified **Logback** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
