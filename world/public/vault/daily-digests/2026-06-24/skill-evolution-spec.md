---
title: LeoYeAI/skill-evolution-spec
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- Markdown
- YAML
- JSON
- Agent Runtime
- OpenClaw
- MyClaw.ai
quality_score: 8
rag_relevance: 9
tags:
- agent memory
- skill persistence
- lifecycle governance
- token efficiency
- self-evolving agents
source: https://github.com/LeoYeAI/skill-evolution-spec
discovered_at: '2026-06-24T02:44:15Z'
evaluated_by: mistral-small-latest
---

## Summary
A specification for a skill evolution system that enables AI agents to maintain persistent, version-controlled skill memory across sessions with governance mechanisms for lifecycle management and token-efficient loading.

## Key Features
- Persistent skill memory via SKILL.md files with versioning and provenance tracking
- Token-efficient loading using one-line skill manifests and on-demand content retrieval
- Lifecycle governance through a Curator that archives stale skills and prevents skill rot
- Usage telemetry with three bump events (view/use/patch) for skill relevance tracking
- System prompt discipline enforcing mandatory skill scanning and proactive skill updates

## Why It Matters for RAG Builders
This specification provides a critical framework for building AI agents with persistent, self-evolving skills, addressing the core challenge of long-term memory and governance in agentic systems.

## Tech Stack Deep Dive
### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent Runtime
Automated review identified **Agent Runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenClaw
Automated review identified **OpenClaw** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MyClaw.ai
Automated review identified **MyClaw.ai** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
