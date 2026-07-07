---
title: "AlexBoghh/pagelens"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "Anthropic API", "jsdom", "Playwright (roadmap)", "Jest (testing)"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "AI legibility audit", "evidence-grounded findings", "web page optimization", "LLM tooling"]
source: "https://github.com/AlexBoghh/pagelens"
discovered_at: "2026-07-07T13:17:07Z"
evaluated_by: "mistral-small-latest"
---

## Summary
pagelens is an MCP server that audits web pages for legibility to AI agents by identifying content invisible to machine readers, unanswered buyer questions, and unsupported claims. It provides machine-readable findings with verbatim evidence and actionable fixes, enabling agents to improve page content for better AI comprehension.

## Key Features
- Two MCP tools: `pagelens_audit_page` for auditing URLs and `pagelens_list_checks` for check catalogs
- Deterministic and LLM-backed checks with severity-tagged findings (blocker/friction/nitpick)
- Grounding guarantee: every LLM finding includes verbatim evidence matching page text
- Caching by content hash to avoid redundant LLM calls and reduce costs
- Comprehensive evals with precision/recall metrics and synthetic test pages

## Why It Matters for RAG Builders
It provides a critical layer for RAG builders to ensure web content is machine-readable and actionable, reducing hallucinations and improving agent performance by validating evidence and fixing gaps in page legibility.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### jsdom
Automated review identified **jsdom** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright (roadmap)
Automated review identified **Playwright (roadmap)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest (testing)
Automated review identified **Jest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
