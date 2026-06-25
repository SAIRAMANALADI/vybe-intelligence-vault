---
title: "rajudandigam/agent-inspect"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "CLI", "JSONL", "LangChain (optional)", "TUI (optional)"]
quality_score: 9
rag_relevance: 8
tags: ["debugging", "execution tracing", "agent observability", "local development", "TypeScript"]
source: "https://github.com/rajudandigam/agent-inspect"
discovered_at: "2026-06-25T19:51:56Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agent-inspect provides local execution trees for TypeScript AI agents, converting manual steps, tool calls, LLM interactions, and structured logs into readable, inspectable execution trees directly from the terminal. It enables local debugging, evaluation iteration, and CI trace artifacts without requiring cloud uploads or dashboards.

## Key Features
- Local execution tree visualization for AI agent runs with nested steps, tool calls, and LLM interactions
- CLI-first workflow for inspecting, exporting, and diffing traces without vendor lock-in
- Support for manual tracing, structured log parsing, and optional framework adapters (e.g., LangChain)
- Redaction profiles for safe trace sharing and local-only export formats (Markdown, HTML, OpenInference, OTLP JSON)
- Toggleable tracing for eval harnesses and CI with environment-gated control (e.g., AGENT_INSPECT=1)

## Why It Matters for RAG Builders
It provides a lightweight, local-first way to debug and understand AI agent behavior during development, reducing reliance on heavyweight production observability tools for the inner loop.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSONL
Automated review identified **JSONL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain (optional)
Automated review identified **LangChain (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI (optional)
Automated review identified **TUI (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
