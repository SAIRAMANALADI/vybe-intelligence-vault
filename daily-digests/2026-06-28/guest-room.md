---
title: "bounded-systems/guest-room"
category: "Tooling"
tech_stack: ["TypeScript", "Bun runtime", "Unix sockets", "VSock", "TCP", "Gherkin (for behavior specs)", "JSR (JavaScript Registry)"]
quality_score: 9
rag_relevance: 9
tags: ["capability-based security", "least privilege", "agent authorization", "policy enforcement", "zero trust"]
source: "https://github.com/bounded-systems/guest-room"
discovered_at: "2026-06-28T02:52:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
guest-room is a capability-based runtime that enforces strict least-privilege access control for AI agents by defining 'rooms' with explicit granted/denied capabilities via door-like sockets. It ensures agents only perform actions explicitly permitted by a rulebook, eliminating ambient authority and preventing unauthorized actions.

## Key Features
- Enforces deny-by-default access control via explicit rulebooks (granted/denied capabilities)
- Supports multiple transport layers (Unix, VSock, TCP) with transport-agnostic capability modeling
- Implements append-only attenuation (narrowing capabilities) and lease-bound confinement to prevent privilege escalation
- Provides fail-closed enforcement with per-request authorization (e.g., HMAC, bearer tokens) for untrusted transports
- Validated by executable behavior specs (Gherkin) and formal algebra proofs

## Why It Matters for RAG Builders
guest-room directly addresses the critical security challenge of excessive agency in AI agents by enforcing strict, testable least-privilege access control, ensuring agents cannot perform unauthorized actions even if prompted to do so.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun runtime
Automated review identified **Bun runtime** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Unix sockets
Automated review identified **Unix sockets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### VSock
Automated review identified **VSock** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TCP
Automated review identified **TCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gherkin (for behavior specs)
Automated review identified **Gherkin (for behavior specs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSR (JavaScript Registry)
Automated review identified **JSR (JavaScript Registry)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
