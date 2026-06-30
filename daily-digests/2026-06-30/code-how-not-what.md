---
title: "miniyu157/code-how-not-what"
category: "Tooling"
tech_stack: ["Markdown", "Software Engineering Principles", "Prompt Engineering"]
quality_score: 7
rag_relevance: 8
tags: ["AI code generation", "engineering constraints", "software architecture", "prompt engineering", "code quality"]
source: "https://github.com/miniyu157/code-how-not-what"
discovered_at: "2026-06-30T16:24:04Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A set of engineering guidelines and constraints designed to standardize AI-generated code quality by enforcing software engineering best practices, such as modular responsibility separation, KISS principles, and explicit error handling. It acts as a 'leash' to prevent AI from producing inconsistent, hardcoded, or overly abstracted code.

## Key Features
- Enforces modular responsibility separation to ensure each file/module does one thing
- Implements KISS (Keep It Simple, Stupid) principles to avoid unnecessary complexity
- Prohibits hardcoding and enforces explicit business constraints and error handling
- Promotes Single Source of Truth (SSoT) for data to avoid duplication and inconsistencies
- Provides a reusable prompt template for AI agents to follow consistent engineering standards

## Why It Matters for RAG Builders
It ensures AI-generated code adheres to consistent engineering standards, reducing technical debt and improving maintainability in production environments.

## Tech Stack Deep Dive
### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Software Engineering Principles
Automated review identified **Software Engineering Principles** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Prompt Engineering
Automated review identified **Prompt Engineering** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
