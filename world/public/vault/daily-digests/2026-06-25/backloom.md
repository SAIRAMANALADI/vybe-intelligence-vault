---
title: Dwiki13/Backloom
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- Bash
- Docker
- Docker Compose
- PostgreSQL
- pgvector
- MySQL/MariaDB
- MongoDB
- rclone
- Google Drive
- Backblaze B2
- AWS S3
quality_score: 9
rag_relevance: 8
tags:
- backup
- restore
- self-hosted AI
- agent infrastructure
- disaster recovery
source: https://github.com/Dwiki13/Backloom
discovered_at: '2026-06-25T17:09:19Z'
evaluated_by: mistral-small-latest
---

## Summary
Backloom is a one-command installer and toolset for backing up and restoring self-hosted AI agent setups, including knowledge bases, databases, vector DBs, and services. It automates detection, archiving, cloud upload, and restoration across fresh machines.

## Key Features
- Automated detection of agent folders, databases, and services with no manual configuration required
- Multi-database support including PostgreSQL, pgvector, MySQL, and MongoDB
- Multi-cloud backup and restore via rclone (Google Drive, Backblaze B2, AWS S3)
- Smart exclusions for build artifacts and caches to optimize backup size
- One-command restore to bring entire agent setup back online on a fresh machine

## Why It Matters for RAG Builders
Backloom ensures AI agent builders can reliably recover their entire self-hosted infrastructure, minimizing downtime and data loss for critical RAG and agent systems.

## Tech Stack Deep Dive
### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker Compose
Automated review identified **Docker Compose** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MySQL/MariaDB
Automated review identified **MySQL/MariaDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MongoDB
Automated review identified **MongoDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### rclone
Automated review identified **rclone** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Drive
Automated review identified **Google Drive** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Backblaze B2
Automated review identified **Backblaze B2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS S3
Automated review identified **AWS S3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
