---
title: "SkeinRank/agent-lexicon"
category: "Tooling"
tech_stack: ["Python", "Aho-Corasick algorithm", "Git", "CLI tools", "MCP (Model Context Protocol)", "YAML"]
quality_score: 9
rag_relevance: 8
tags: ["terminology management", "deterministic resolution", "drift detection", "agent governance", "vocabulary standardization"]
source: "https://github.com/SkeinRank/agent-lexicon"
discovered_at: "2026-07-09T11:54:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Agent Lexicon provides a deterministic terminology layer for AI agents, ensuring a single canonical vocabulary across agents, branches, and tool calls to prevent terminology drift. It offers auditable drift detection, resolution, and guarding mechanisms for consistent language use in multi-agent workflows.

## Key Features
- Deterministic terminology resolution and matching using Aho-Corasick trie for fast, dependency-free text processing
- Drift detection at merge time to identify and flag inconsistent terminology before integration
- Tool call guarding to block or allow actions based on resolved canonical terms
- Repository-native workflow with GitHub Actions integration and configurable scan policies
- MCP server integration for exposing lexicon capabilities to MCP-compatible agents

## Why It Matters for RAG Builders
It ensures consistent terminology across AI agents and prevents costly drift in multi-agent workflows, enabling reliable and auditable communication without relying on non-deterministic LLM guesses.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Aho-Corasick algorithm
Automated review identified **Aho-Corasick algorithm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools
Automated review identified **CLI tools** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
