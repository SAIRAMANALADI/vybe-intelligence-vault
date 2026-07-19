---
title: he-yufeng/AgentProbe
category: daily-digests/2026-06-23
tech_stack:
- Python
- Pytest
- Pydantic
- sentence-transformers
- OpenAI API
- JSON
- CLI
quality_score: 9
rag_relevance: 8
tags:
- AI agent testing
- regression testing
- snapshot baselines
- LLM mocking
- CI/CD
source: https://github.com/he-yufeng/AgentProbe
discovered_at: '2026-06-23T16:27:45Z'
evaluated_by: mistral-small-latest
---

## Summary
AgentProbe is a regression-testing framework for AI agents that enables snapshot baselines, semantic comparison, and deterministic testing. It provides tools for mocking LLMs, validating tool calls, schema validation, and cost tracking to catch regressions in CI pipelines.

## Key Features
- Snapshot baselines for agent outputs with exact or semantic comparison
- Built-in MockLLM for deterministic testing without API calls
- Tool call assertions to verify agent behavior and tool usage
- Schema validation using Pydantic for structured output checks
- Multi-step tracing and cost tracking for budget-aware testing

## Why It Matters for RAG Builders
AgentProbe ensures AI agents remain reliable and consistent by catching regressions early in CI pipelines, reducing production failures and improving maintainability.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
