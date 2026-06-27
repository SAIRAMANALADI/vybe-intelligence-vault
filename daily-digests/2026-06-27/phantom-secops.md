---
title: "markl-a/phantom-secops"
category: "Orchestrator"
tech_stack: ["Python", "Phantom-mesh (multi-agent runtime)", "Trivy", "Nmap", "Nuclei", "Sigma", "Docker", "LLM (as triager/explainer)", "PowerShell", "TOML (configuration)"]
quality_score: 9
rag_relevance: 8
tags: ["Security Operations", "Multi-Agent Systems", "Governed MCP", "Read-Only Security", "Red/Blue Team Simulation"]
source: "https://github.com/markl-a/phantom-secops"
discovered_at: "2026-06-27T07:24:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only, governed security-operations framework built on a multi-agent runtime (phantom-mesh) that orchestrates, correlates, and explains outputs from mature security scanners like Trivy, Nmap, Nuclei, and Sigma. It demonstrates red/blue team simulations and provides a local endpoint self-check tool for daily security posture monitoring.

## Key Features
- Read-only, governed security-operations framework with MCP orchestration for policy enforcement
- Red/blue team simulation with Mean Time To Detect (MTTD) metrics and parallel attack/defense pipelines
- Local endpoint self-check tool for daily security posture monitoring with deterministic fusion and LLM synthesis
- Integration with mature security scanners (Trivy, Nmap, Nuclei, Sigma) without executing exploits
- Deterministic spine for merging and ranking security findings, ensuring trustworthy outputs

## Why It Matters for RAG Builders
It provides a governed, read-only framework for orchestrating security tools and LLMs to improve detection and response in AI-driven security operations while ensuring ethical and safe usage.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Phantom-mesh (multi-agent runtime)
Automated review identified **Phantom-mesh (multi-agent runtime)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Trivy
Automated review identified **Trivy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nmap
Automated review identified **Nmap** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Nuclei
Automated review identified **Nuclei** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sigma
Automated review identified **Sigma** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM (as triager/explainer)
Automated review identified **LLM (as triager/explainer)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (configuration)
Automated review identified **TOML (configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
