---
title: "chriswu727/argus"
category: "Tooling"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Playwright", "macOS Accessibility APIs", "CLI tools (cliclick)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "QA automation", "UI testing", "macOS automation", "agent tooling"]
source: "https://github.com/chriswu727/argus"
discovered_at: "2026-07-01T21:23:37Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Argus is an opinionated MCP server that transforms an LLM into a senior QA tester for web apps and macOS applications. It provides a role-binding instruction set and a mode-agnostic tool surface for agents to observe, interact, and verify bugs in real-time.

## Key Features
- Role-binding instructions to enforce QA tester behavior in LLMs
- Mode-agnostic tool surface for web and screen-based testing
- Deterministic benchmark suite (34/34 pass rate) for capability validation
- Screen mode for testing live macOS applications with Accessibility APIs
- Regression testing in CI without requiring an LLM

## Why It Matters for RAG Builders
Argus provides a structured, agent-driven approach to QA testing that bridges the gap between static testing tools and dynamic LLM capabilities, enabling more reliable and reproducible bug detection in real-world applications.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### macOS Accessibility APIs
Automated review identified **macOS Accessibility APIs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI tools (cliclick)
Automated review identified **CLI tools (cliclick)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
