---
title: vin67/crewai_docker
archive_category: ai-browser-computer-use
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

- Matched archive category: `AI Browser and Computer Use`
- Quality score: 70 | Archive score: 85 (essential)
- Resource kind: tool
- Selection reasons:
  - Active open-source repository

## Summary

- **Base Image**: Uses `python:3.11-slim` as the base Docker image for minimal footprint and compatibility with CrewAI.
- **Dependencies**: Installs CrewAI (`crewai`) and other essential packages (`pip install -r requirements.txt`) via a requirements file.
- **Entrypoint**: Configures `python -m crewai` as the default command to run CrewAI agents directly in the container.

## Use Cases

- Browser web automation
- GUI action orchestration
- Agent computer control

## Source

Original source URL: https://github.com/vin67/crewai_docker

## Local Vault File

Path: [vin67-crewai-docker.md](../../ai/agents/vin67-crewai-docker.md)
