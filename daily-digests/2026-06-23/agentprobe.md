---
title: "he-yufeng/AgentProbe"
category: "Tooling"
tech_stack: ["Python", "pytest", "Pydantic", "sentence-transformers", "OpenAI API", "MockLLM"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent testing", "regression testing", "snapshot testing", "pytest plugin", "LLM mocking"]
source: "https://github.com/he-yufeng/AgentProbe"
discovered_at: "2026-06-23T13:47:00Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AgentProbe is a pytest plugin and CLI tool designed for regression testing of AI agents. It captures agent outputs as baselines, compares them across runs, and detects regressions in CI pipelines using exact or semantic similarity matching.

## Key Features
- Snapshot-based regression testing for AI agents with exact or semantic comparison modes
- Built-in MockLLM for deterministic testing without API calls
- Tool call assertions to verify agent behavior and tool usage patterns
- Schema validation using Pydantic for structured output testing
- Multi-step tracing and cost tracking for comprehensive agent workflow analysis

## Why It Matters for RAG Builders
It provides a critical safety net for AI agents by catching regressions early in CI, ensuring consistent behavior despite updates to prompts, models, or dependencies.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### sentence-transformers
Automated review identified **sentence-transformers** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MockLLM
Automated review identified **MockLLM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
