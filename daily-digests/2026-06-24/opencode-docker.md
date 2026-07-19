---
title: pkhamre/opencode-docker
category: daily-digests/2026-06-24
tech_stack:
- Docker
- Distroless
- Linux Capabilities
- Seccomp
- Python
- Shell
- Node.js
- Xvfb
quality_score: 9
rag_relevance: 7
tags:
- security
- docker
- isolation
- secrets-management
- opencode
source: https://github.com/pkhamre/opencode-docker
discovered_at: '2026-06-24T13:17:54Z'
evaluated_by: mistral-small-latest
---

## Summary
A security-hardened Docker environment for running the OpenCode CLI in complete isolation with defense-in-depth security measures, including read-only filesystems, dropped capabilities, and file-based secrets management.

## Key Features
- Read-only container filesystem with tmpfs for writable data
- Dropped Linux capabilities and privilege escalation prevention
- File-based secrets management for enhanced security
- Multi-stage Docker build with distroless runtime
- Wrapper script for simplified usage and data persistence

## Why It Matters for RAG Builders
It provides a secure, isolated environment for running AI tools like OpenCode, reducing attack surfaces and protecting sensitive data in RAG pipelines.

## Tech Stack Deep Dive
### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Distroless
Automated review identified **Distroless** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Linux Capabilities
Automated review identified **Linux Capabilities** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Seccomp
Automated review identified **Seccomp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Xvfb
Automated review identified **Xvfb** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
