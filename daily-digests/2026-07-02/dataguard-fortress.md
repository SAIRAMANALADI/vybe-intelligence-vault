---
title: "RVRNM/dataguard-fortress"
category: "Tooling"
tech_stack: ["Python", "FastAPI", "Regex", "Docker", "YAML", "AES-GCM", "JSONL", "SSE (Server-Sent Events)", "Token Bucket Algorithm", "Sliding Window Rate Limiting"]
quality_score: 9
rag_relevance: 8
tags: ["PII Scrubbing", "Multi-tenant", "Audit Logging", "Rate Limiting", "GDPR Compliance"]
source: "https://github.com/RVRNM/dataguard-fortress"
discovered_at: "2026-07-02T22:11:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
DataGuard Fortress is a self-hosted privacy proxy designed to protect AI agents by scrubbing PII inline, classifying data sensitivity, enforcing rate limits per tenant, and maintaining a secure audit trail for every request.

## Key Features
- Real-time PII scrubbing with 52 built-in regex presets for sensitive data redaction
- Multi-tenant support with per-tenant YAML configurations and hot-reload capability
- Rate limiting using token bucket and sliding window algorithms to prevent abuse
- Audit logging with append-only JSONL files and hash chain integrity for compliance
- Sensitivity classification (PUBLIC/INTERNAL/CONFIDENTIAL/RESTRICTED) for data handling policies

## Why It Matters for RAG Builders
DataGuard Fortress ensures AI agents handle sensitive data securely and compliantly by scrubbing PII, enforcing policies, and maintaining auditable logs, making it essential for privacy-focused AI deployments.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regex
Automated review identified **Regex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AES-GCM
Automated review identified **AES-GCM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SSE (Server-Sent Events)
Automated review identified **SSE (Server-Sent Events)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Token Bucket Algorithm
Automated review identified **Token Bucket Algorithm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sliding Window Rate Limiting
Automated review identified **Sliding Window Rate Limiting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
