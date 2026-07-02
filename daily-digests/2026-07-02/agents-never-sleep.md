---
title: "TokonoMix/agents-never-sleep"
category: "Orchestrator"
tech_stack: ["Python", "Git", "CLI", "MIT License", "Semantic Versioning"]
quality_score: 8
rag_relevance: 9
tags: ["autonomous agents", "governance", "reversibility", "unattended execution", "AI safety"]
source: "https://github.com/TokonoMix/agents-never-sleep"
discovered_at: "2026-07-02T02:45:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agents Never Sleep (ANS) is a governance layer for autonomous coding agents that enables unattended, long-running execution with safety and reversibility. It prevents agents from halting entire backlogs due to single uncertainties by enforcing structured autonomy contracts (ASK/PARK/HALT) and ensuring all changes are reversible via git-backed snapshots.

## Key Features
- Enforces ASK/PARK/HALT autonomy contracts for unattended AI agent runs
- Git-backed snapshots and reversibility for all changes
- Morning run reports summarizing completed, parked, and halted tasks
- Cross-platform compatibility with major coding agents (Claude Code, OpenAI Codex, Cursor, etc.)
- Structural enforcement of governance rules via deny-hooks at the tool layer

## Why It Matters for RAG Builders
ANS provides the critical operational discipline needed to safely deploy autonomous AI agents for long-running tasks by ensuring reversibility, audibility, and structured decision-making without human intervention.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MIT License
Automated review identified **MIT License** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Versioning
Automated review identified **Semantic Versioning** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
