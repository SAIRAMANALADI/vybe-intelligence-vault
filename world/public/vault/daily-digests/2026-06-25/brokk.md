---
title: cold-code-labs/brokk
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- TypeScript
- Next.js 15
- Hono
- Drizzle ORM
- PostgreSQL
- Docker
- Traefik
- Claude Agent SDK
- Semgrep
- Trivy
quality_score: 9
rag_relevance: 8
tags:
- AI coding agent
- automated PR generation
- isolated git worktrees
- multi-agent orchestration
- self-hosted
source: https://github.com/cold-code-labs/brokk
discovered_at: '2026-06-25T17:08:31Z'
evaluated_by: mistral-small-latest
---

## Summary
Brokk is an open-source AI coding-agent platform that automates the process of converting GitHub issues (cards) into code changes via isolated git worktrees, opening pull requests, and reviewing them. It serves as the 'code' pillar in a triad of tools (with Hauldr for data and Heimdall for deployment) and integrates with the Claude Agent SDK for code generation.

## Key Features
- Converts GitHub issues into code changes via isolated git worktrees
- Integrates with Claude Agent SDK for headless code generation
- Automated PR creation and review (security scans + LLM feedback)
- Multi-agent system with Mímir (planner), Brokk (forge), and Eitri (reviewer)
- Supports zero-downtime deployments and rolling updates

## Why It Matters for RAG Builders
Brokk streamlines the AI-driven code generation workflow by automating issue-to-PR pipelines with isolated execution and multi-agent collaboration, making it essential for scalable RAG and AI engineering stacks.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Next.js 15
Automated review identified **Next.js 15** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hono
Automated review identified **Hono** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Drizzle ORM
Automated review identified **Drizzle ORM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Traefik
Automated review identified **Traefik** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Agent SDK
Automated review identified **Claude Agent SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semgrep
Automated review identified **Semgrep** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Trivy
Automated review identified **Trivy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
