---
title: "imohitseth/AST-Healer"
category: "Tooling"
tech_stack: ["Python 3.11", "FastAPI", "Uvicorn", "Gemini LLM (google-antigravity)", "Pydantic v2", "Docker", "GitHub Actions", "Pytest", "Python AST module"]
quality_score: 9
rag_relevance: 7
tags: ["self-healing", "code repair", "AST parsing", "LLM integration", "automated debugging"]
source: "https://github.com/imohitseth/AST-Healer"
discovered_at: "2026-06-25T08:30:10Z"
evaluated_by: "mistral-small-latest"
---

## Summary
AST-Healer is a self-healing Python tool that detects runtime exceptions, extracts the failing function using Python's Abstract Syntax Tree (AST), repairs it via a Gemini LLM agent, and re-verifies the fix in a closed loop without modifying surrounding code. It supports both CLI and FastAPI-based workflows for automated code repair.

## Key Features
- Surgical AST-based function extraction for targeted repairs
- Closed-loop healing with automatic verification
- CLI and FastAPI service modes for flexibility
- Async background task execution for non-blocking API responses
- Indentation-preserving code replacement to avoid syntax errors

## Why It Matters for RAG Builders
AST-Healer reduces token waste and model distraction in LLM-based code repair by surgically targeting only the failing function, making it essential for efficient and precise automated debugging in AI engineering workflows.

## Tech Stack Deep Dive
### Python 3.11
Automated review identified **Python 3.11** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Uvicorn
Automated review identified **Uvicorn** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini LLM (google-antigravity)
Automated review identified **Gemini LLM (google-antigravity)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic v2
Automated review identified **Pydantic v2** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pytest
Automated review identified **Pytest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python AST module
Automated review identified **Python AST module** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
