---
title: "xianyu-sheng/Agent-hub"
category: "Orchestrator"
tech_stack: ["Python", "YAML", "DAG (Directed Acyclic Graph)", "LLM (Large Language Model)", "CLI", "MCP (Model Context Protocol)", "Cron Scheduling", "Session Memory"]
quality_score: 8
rag_relevance: 9
tags: ["multi-agent orchestration", "LLM intent routing", "DAG scheduling", "agent collaboration", "zero-intrusion integration"]
source: "https://github.com/xianyu-sheng/Agent-hub"
discovered_at: "2026-06-28T12:14:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Hub is a decoupled multi-agent orchestration system that routes natural language requests to specialized agents via lightweight YAML manifests, schedules them using DAGs, and executes workflows with 7 collaboration strategies. It enables zero-intrusion integration of existing agentic tools into a unified workflow.

## Key Features
- Lightweight agent discovery via agent.yaml manifests with zero code changes required
- 7 collaboration strategies (fan_out, debate, reflection, vote, plan_execute, hitl, pipeline) for flexible workflows
- Smart routing with confidence gating, fuzzy matching, and rule-based fallbacks for robust intent resolution
- Session memory for cross-turn context and conversation history management
- Built-in watchdog for process monitoring and auto-restart, plus cron scheduler for scheduled tasks

## Why It Matters for RAG Builders
Agent Hub provides a standardized, low-friction way to integrate disparate agentic tools into cohesive workflows, reducing integration overhead and enabling scalable multi-agent systems for RAG and AI applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DAG (Directed Acyclic Graph)
Automated review identified **DAG (Directed Acyclic Graph)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (Large Language Model)
Automated review identified **LLM (Large Language Model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cron Scheduling
Automated review identified **Cron Scheduling** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Session Memory
Automated review identified **Session Memory** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
