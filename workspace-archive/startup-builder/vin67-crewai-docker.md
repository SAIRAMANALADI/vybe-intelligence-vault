---
title: vin67/crewai_docker
archive_category: startup-builder
source_category: ai/agents
source_url: https://github.com/vin67/crewai_docker
resource_id: github:vin67/crewai_docker
local_vault_path: ai/agents/vin67-crewai-docker.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: workflow
importance: medium
tags:
- agents
- github-repo
- python
- workflows
selection_reason:
- Strong keyword match
- Active open-source repository
---

# vin67/crewai_docker

## Why This Is In The Archive

- Matched archive category: `Startup Builder`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: workflow
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **Base Image**: Uses `python:3.11-slim` as the base Docker image for minimal footprint and compatibility with CrewAI.
- **Dependencies**: Installs CrewAI (`crewai>=0.1.0`) and other Python packages (`pip install -r requirements.txt`) in a virtual environment for isolation.
- **Entrypoint**: Configures `CMD ["python", "main.py"]` to execute a CrewAI workflow script (`main.py`) upon container startup.

## Use Cases

- SaaS boilerplate launching
- Landing page design
- MVP feature validation

## Source

Original source URL: https://github.com/vin67/crewai_docker

## Local Vault File

Path: [vin67-crewai-docker.md](../../ai/agents/vin67-crewai-docker.md)
