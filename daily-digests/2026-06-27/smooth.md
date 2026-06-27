---
title: "SmooAI/smooth"
category: "Orchestrator"
tech_stack: ["Rust", "gRPC", "Tonic", "Microsandbox", "SQLite", "OTLP (OpenTelemetry Protocol)", "Docker (nested, not runtime)", "CLI", "TUI"]
quality_score: 9
rag_relevance: 9
tags: ["AI agent orchestration", "security-first", "microVM sandboxing", "policy enforcement", "LLM routing"]
source: "https://github.com/SmooAI/smooth"
discovered_at: "2026-06-27T04:01:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Smooth is a security-first CLI and orchestration platform for coordinating teams of AI agents (operatives) within hardware-isolated microVMs. It provides adversarial surveillance, policy-gated access control, and a centralized CLI for managing AI agent workflows, model routing, and infrastructure.

## Key Features
- Hardware-isolated microVMs for AI agents using Microsandbox (libkrun/HVF) with no Docker runtime dependencies
- Adversarial surveillance and policy-gated access control via services like Narc, Wonk, and Goalie
- Semantic model routing with gateway slots (e.g., smooth-coding, smooth-reasoning) for dynamic LLM backend resolution
- Built-in pearl tracker (Dolt-backed) for durable state management and git-syncable project tracking
- Two operational modes: sandboxed (secure) and direct (CI/devbox-friendly) with identical agent behavior

## Why It Matters for RAG Builders
Smooth provides a secure, scalable foundation for deploying and managing teams of AI agents in isolated environments, critical for production-grade RAG and AI systems requiring strict access control and adversarial monitoring.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### gRPC
Automated review identified **gRPC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tonic
Automated review identified **Tonic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Microsandbox
Automated review identified **Microsandbox** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OTLP (OpenTelemetry Protocol)
Automated review identified **OTLP (OpenTelemetry Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker (nested, not runtime)
Automated review identified **Docker (nested, not runtime)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TUI
Automated review identified **TUI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
