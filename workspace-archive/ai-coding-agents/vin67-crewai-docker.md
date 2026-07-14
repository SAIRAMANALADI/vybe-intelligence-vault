---
title: vin67/crewai_docker
archive_category: ai-coding-agents
source_category: ai/agents
source_url: https://github.com/vin67/crewai_docker
resource_id: github:vin67/crewai_docker
local_vault_path: ai/agents/vin67-crewai-docker.md
quality_score: 70
archive_score: 85
archive_tier: essential
resource_kind: tool
importance: high
tags:
- agents
- github-repo
- python
selection_reason:
- Active open-source repository
---

# vin67/crewai_docker

## Why This Is In The Archive

- Matched archive category: `AI Coding Agents`
- Quality score: 70 | Archive score: 85 (essential)
- Resource kind: tool
- Selection reasons:
  - Active open-source repository

## Summary

- **Base Image**: Uses `python:3.11-slim` as the base Docker image for minimal footprint and compatibility with CrewAI dependencies.
- **Dependencies**: Installs CrewAI (`crewai`) and other essential packages (`langchain`, `python-dotenv`) via `pip` in a virtual environment (`venv`).
- **Multi-Stage Build**: Optimized Dockerfile with a multi-stage build to reduce final image size by discarding build-time dependencies.

## Use Cases

- Assisted programming workflows
- Auto-debugging codebases
- Autonomous feature building

## Source

Original source URL: https://github.com/vin67/crewai_docker

## Local Vault File

Path: [vin67-crewai-docker.md](../../ai/agents/vin67-crewai-docker.md)
