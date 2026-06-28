---
title: "dangogit/argus"
category: "Orchestrator"
tech_stack: ["Python", "PostgreSQL", "pgvector", "Docker", "GitHub", "Slack", "Telegram", "WhatsApp", "Claude Code", "Codex", "Hermes", "OpenAPI", "Vercel", "Sentry", "PostHog", "Firebase", "Supabase", "Fly.io"]
quality_score: 9
rag_relevance: 8
tags: ["agent orchestration", "self-hosted", "production monitoring", "approval-gated", "multi-agent system"]
source: "https://github.com/dangogit/argus"
discovered_at: "2026-06-28T06:59:59Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Argus is a self-hosted, propose-only agent orchestration framework designed to monitor software projects and production signals, routing work through approval-gated agents that draft fixes and open safe pull requests. It acts as a private, always-on agent layer for software operations without exposing production keys or repo control to external services.

## Key Features
- Propose-only, approval-gated agent pipeline for safe changes
- 13+ production signal connectors (GitHub, Sentry, Vercel, PostHog, etc.)
- Durable runtime with Postgres queues, retries, and operator-visible state
- Engine-agnostic worker support (echo, Codex, Claude Code, Hermes)
- Daily retro/learning loop and draft PR generation with QA gating

## Why It Matters for RAG Builders
Argus provides a critical safety layer for RAG/AI stack builders by enabling private, propose-only agent operations over production systems, reducing risk while automating incident response and maintenance.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub
Automated review identified **GitHub** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Slack
Automated review identified **Slack** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram
Automated review identified **Telegram** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WhatsApp
Automated review identified **WhatsApp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex
Automated review identified **Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes
Automated review identified **Hermes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAPI
Automated review identified **OpenAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vercel
Automated review identified **Vercel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sentry
Automated review identified **Sentry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostHog
Automated review identified **PostHog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Firebase
Automated review identified **Firebase** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Supabase
Automated review identified **Supabase** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fly.io
Automated review identified **Fly.io** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
