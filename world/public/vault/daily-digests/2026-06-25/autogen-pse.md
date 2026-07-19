---
title: erishen/autogen-pse
category: world/public/vault/daily-digests/2026-06-25
tech_stack:
- Microsoft AutoGen
- FastAPI
- Vite
- React
- Chart.js
- Python
- uv
- DeepSeek
- OpenAI-compatible APIs
quality_score: 8
rag_relevance: 9
tags:
- agent orchestration
- multi-agent collaboration
- closed-loop verification
- task automation
- portfolio analysis
source: https://github.com/erishen/autogen-pse
discovered_at: '2026-06-25T11:36:50Z'
evaluated_by: mistral-small-latest
---

## Summary
A Planner-Specialist-Evaluator (PSE) agent framework built on Microsoft AutoGen, enabling closed-loop task execution with independent verification. It orchestrates three specialized agents to collaboratively plan, execute, and evaluate tasks while preventing token explosion through cycle control mechanisms.

## Key Features
- Three-role agent division (Planner, Specialist, Evaluator) for clear responsibilities and independent verification
- Cycle control with step_buffer to prevent token explosion and manage retries
- CLI, Makefile, and web dashboard for task execution and monitoring
- Modular task registry supporting custom prompts and scripts
- Built-in token tracking, execution traces, and rule-based issue detection

## Why It Matters for RAG Builders
It provides a structured, verifiable multi-agent framework that ensures reliable task execution and independent validation, critical for building robust RAG pipelines with agentic workflows.

## Tech Stack Deep Dive
### Microsoft AutoGen
Automated review identified **Microsoft AutoGen** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Chart.js
Automated review identified **Chart.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DeepSeek
Automated review identified **DeepSeek** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible APIs
Automated review identified **OpenAI-compatible APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
