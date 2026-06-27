---
title: "sausheong/sidecar"
category: "Agent Framework"
tech_stack: ["Go", "PostgreSQL", "pgvector", "Claude API (Anthropic)", "OpenAI API (optional)", "Harness (internal framework)", "Docker", "Git", "GitHub/GitLab/CircleCI APIs", "Prometheus/Datadog APIs", "robfig/cron"]
quality_score: 9
rag_relevance: 8
tags: ["autonomous agents", "code maintenance", "CI/CD integration", "self-healing systems", "AI-driven development"]
source: "https://github.com/sausheong/sidecar"
discovered_at: "2026-06-27T07:26:13Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Sidecar is an autonomous engineering agent that attaches to any software project as a persistent sidecar process, continuously maintaining it by triaging signals (git commits, CI failures, logs, metrics, uptime checks) and applying fixes, opening PRs, or notifying humans based on configured autonomy levels.

## Key Features
- Multi-source signal triage (git, CI, logs, metrics, uptime) with Haiku-based decision making
- Isolated git worktrees for concurrent task execution with adversarial evaluator gate
- Memory retrieval via pgvector for contextual codebase knowledge
- Per-change-type autonomy policies (auto-commit, PR, suggest-only, notify)
- PostgreSQL-backed audit trail for full task history and status tracking

## Why It Matters for RAG Builders
Sidecar enables continuous, autonomous maintenance of software projects by automating triage and fixes, reducing manual intervention while ensuring high-quality, evaluated changes through adversarial testing.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PostgreSQL
Automated review identified **PostgreSQL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pgvector
Automated review identified **pgvector** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude API (Anthropic)
Automated review identified **Claude API (Anthropic)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API (optional)
Automated review identified **OpenAI API (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Harness (internal framework)
Automated review identified **Harness (internal framework)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub/GitLab/CircleCI APIs
Automated review identified **GitHub/GitLab/CircleCI APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prometheus/Datadog APIs
Automated review identified **Prometheus/Datadog APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### robfig/cron
Automated review identified **robfig/cron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
