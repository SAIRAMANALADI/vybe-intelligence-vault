---
title: "adeelahmad/agentrc"
category: "Tooling"
tech_stack: ["Go", "Docker/BuildKit", "OCI (Open Container Initiative)", "Cedar Policy", "Jekyll (for documentation)", "GitHub Pages"]
quality_score: 9
rag_relevance: 8
tags: ["agent specification", "portable AI agents", "OCI packaging", "policy enforcement", "governance"]
source: "https://github.com/adeelahmad/agentrc"
discovered_at: "2026-07-03T00:00:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
agentrc provides an open, Dockerfile-shaped specification for declaring, packaging, securing, and sharing portable AI agents. It introduces a neutral declaration layer (Agentfile) with keywords like IDENTITY, CAPABILITY, SOP, and POLICY, which are compiled into OCI labels for platform enforcement via Cedar policies.

## Key Features
- Dockerfile-shaped Agentfile syntax with 4 new keywords (IDENTITY, CAPABILITY, SOP, POLICY) for agent declaration
- Compiles agent intent into OCI labels for platform-agnostic enforcement via Cedar policies
- Supports typed resource requests (model, network, agent constraints) with deny-by-default enforcement
- Reference CLI and BuildKit frontend for building and validating Agentfiles
- Deferred secrets design, leaving credential resolution to the platform

## Why It Matters for RAG Builders
It standardizes how AI agents are declared, packaged, and governed, enabling portable, secure, and interoperable agent deployments across platforms.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker/BuildKit
Automated review identified **Docker/BuildKit** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCI (Open Container Initiative)
Automated review identified **OCI (Open Container Initiative)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cedar Policy
Automated review identified **Cedar Policy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jekyll (for documentation)
Automated review identified **Jekyll (for documentation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Pages
Automated review identified **GitHub Pages** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
