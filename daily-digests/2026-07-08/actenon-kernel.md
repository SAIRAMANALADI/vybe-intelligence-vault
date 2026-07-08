---
title: "Actenon/actenon-kernel"
category: "Tooling"
tech_stack: ["Python", "Cryptography", "FastAPI", "MCP (Model Context Protocol)", "LangChain/LangGraph", "JWT", "pytest"]
quality_score: 9
rag_relevance: 8
tags: ["execution gating", "agent safety", "cryptographic proof", "side-effect prevention", "consequential actions"]
source: "https://github.com/Actenon/actenon-kernel"
discovered_at: "2026-07-08T22:14:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Actenon Kernel is a local, open-source execution gate for AI agents that enforces cryptographic proof-bound verification before consequential actions execute. It prevents unauthorized or tampered actions by validating proof tied to exact action parameters, ensuring no side effects occur without explicit authorization.

## Key Features
- Enforces cryptographic proof binding for exact actions before execution
- Prevents replay attacks and tampered actions via single-use proof verification
- Integrates with agent frameworks (MCP, LangChain, FastAPI) and resource boundaries
- Provides structured refusal and receipt artifacts for auditability
- Runs locally with no cloud dependency, ensuring privacy and control

## Why It Matters for RAG Builders
It provides a critical security layer for RAG/AI stacks by ensuring no consequential action executes without verifiable authorization, preventing unauthorized or harmful agent behaviors at the execution boundary.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cryptography
Automated review identified **Cryptography** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LangChain/LangGraph
Automated review identified **LangChain/LangGraph** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JWT
Automated review identified **JWT** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest
Automated review identified **pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
