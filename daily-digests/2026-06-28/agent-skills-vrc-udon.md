---
title: "niaka3dayo/agent-skills-vrc-udon"
category: "Tooling"
tech_stack: ["C#", "UdonSharp", "VRChat SDK", "Bash", "PowerShell", "npm", "Claude Code", "Git"]
quality_score: 9
rag_relevance: 8
tags: ["VRChat", "UdonSharp", "AI agent skills", "code validation", "VRChat world development"]
source: "https://github.com/niaka3dayo/agent-skills-vrc-udon"
discovered_at: "2026-06-28T10:06:26Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A repository providing AI coding agents with skills, rules, and validation hooks to generate correct UdonSharp code for VRChat worlds. It addresses compile constraints, networking patterns, and SDK version differences to ensure AI-generated code adheres to VRChat's strict requirements.

## Key Features
- Predefined rules and constraints to block unsupported C# features in UdonSharp (e.g., List<T>, async/await, LINQ)
- Sync variable optimization with a decision tree to minimize data bloat (<50 bytes per behavior)
- Networking pattern library with ownership models, sync modes, and anti-patterns
- Post-tool-use validation hooks (Bash/PowerShell) to auto-detect and warn about incorrect code patterns
- Multi-language SDK version support (3.7.1–3.10.4) with feature mapping and compatibility checks

## Why It Matters for RAG Builders
This repository enables AI agents to generate correct and optimized UdonSharp code for VRChat worlds, reducing compile errors and improving world performance by enforcing VRChat's strict constraints.

## Tech Stack Deep Dive
### C#
Automated review identified **C#** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UdonSharp
Automated review identified **UdonSharp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VRChat SDK
Automated review identified **VRChat SDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### npm
Automated review identified **npm** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
