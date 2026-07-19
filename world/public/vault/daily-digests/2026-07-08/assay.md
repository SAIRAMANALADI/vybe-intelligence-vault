---
title: Rul1an/assay
category: world/public/vault/daily-digests/2026-07-08
tech_stack:
- Rust
- eBPF
- LSM (Linux Security Modules)
- YAML
- Python
- GitHub Actions
- SARIF
- in-toto
- DSSE
quality_score: 9
rag_relevance: 8
tags:
- policy-as-code
- MCP security
- eBPF enforcement
- evidence-based auditing
- deterministic gatekeeping
source: https://github.com/Rul1an/assay
discovered_at: '2026-07-08T22:15:05Z'
evaluated_by: mistral-small-latest
---

## Summary
Assay is a policy-as-code framework for enforcing, proving, and auditing MCP agent tool calls with deterministic, fail-closed gates and offline-verifiable evidence. It provides kernel-level enforcement (eBPF/LSM) on Linux and integrates with CI pipelines for security and compliance.

## Key Features
- Fail-closed deterministic policy enforcement for MCP tool calls with real-time allow/deny decisions
- Offline-verifiable, tamper-evident evidence bundles for audit and CI integration
- Kernel-level enforcement via eBPF/LSM on Linux for privileged tool calls
- Explicit trust basis classification (verified, self-reported, inferred, absent) to avoid overclaiming
- CI-native integration with GitHub Actions, SARIF, and Security-tab reporting

## Why It Matters for RAG Builders
Assay provides a critical security layer for RAG/AI stacks by enforcing strict policy controls on tool calls and generating verifiable evidence for compliance and auditability.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### eBPF
Automated review identified **eBPF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LSM (Linux Security Modules)
Automated review identified **LSM (Linux Security Modules)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SARIF
Automated review identified **SARIF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### in-toto
Automated review identified **in-toto** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DSSE
Automated review identified **DSSE** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
