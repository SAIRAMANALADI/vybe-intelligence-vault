---
title: "davidmosiah/google-ads-intent-mcp"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "PyPI", "GitHub Actions", "OpenAI API (optional)", "CLI", "CSV parsing"]
quality_score: 9
rag_relevance: 7
tags: ["Google Ads", "intent classification", "negative keywords", "MCP server", "dry-run analysis"]
source: "https://github.com/davidmosiah/google-ads-intent-mcp"
discovered_at: "2026-07-03T12:16:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server and CLI tool for dry-run analysis of Google Ads search terms, enabling agents to classify intent, draft negative keyword plans, and audit privacy before live account changes. Designed to reduce wasted ad spend while protecting buyer-intent queries.

## Key Features
- Dry-run-first analysis of Google Ads search terms to avoid live account changes
- Deterministic heuristic classifier for intent (waste, buyer, research, competitor)
- Optional LLM-backed refinement for intent classification
- CSV export analysis and negative keyword plan generation
- Privacy audit and connection status tools for safe agent integration

## Why It Matters for RAG Builders
It enables AI agents to safely analyze and optimize Google Ads campaigns without risking live account changes, reducing wasted spend while preserving buyer-intent queries.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API (optional)
Automated review identified **OpenAI API (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSV parsing
Automated review identified **CSV parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
