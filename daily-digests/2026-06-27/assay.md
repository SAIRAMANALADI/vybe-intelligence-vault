---
title: "Rul1an/assay"
category: "Tooling"
tech_stack: ["Rust", "eBPF", "LSM (Linux Security Modules)", "YAML", "Python (SDK)", "GitHub Actions", "SARIF", "JSON Schema", "Landlock"]
quality_score: 9
rag_relevance: 8
tags: ["policy-as-code", "MCP security", "deterministic enforcement", "offline-verifiable evidence", "kernel-level security"]
source: "https://github.com/Rul1an/assay"
discovered_at: "2026-06-27T10:05:27Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Assay is a policy-as-code framework for enforcing, proving, and auditing MCP agent tool calls with deterministic, fail-closed gates and offline-verifiable evidence. It integrates kernel-level enforcement (eBPF/LSM) on Linux and provides CI-native security artifacts for AI agent systems.

## Key Features
- Fail-closed policy enforcement for MCP tool calls with detailed allow/deny reasons
- Kernel-level enforcement via eBPF/LSM on Linux for network and filesystem restrictions
- Offline-verifiable, tamper-evident evidence bundles for audit and CI integration
- Explicit trust basis classification (verified, self-reported, inferred, absent) to avoid overclaiming
- CI-native workflows with GitHub Actions, SARIF, and policy gates for PRs

## Why It Matters for RAG Builders
Assay provides a critical security layer for RAG/AI agent systems by enforcing strict tool-call policies and generating verifiable evidence, ensuring safe and auditable agent behavior without relying on centralized dashboards or probabilistic scoring.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### eBPF
Automated review identified **eBPF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LSM (Linux Security Modules)
Automated review identified **LSM (Linux Security Modules)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python (SDK)
Automated review identified **Python (SDK)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Landlock
Automated review identified **Landlock** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
