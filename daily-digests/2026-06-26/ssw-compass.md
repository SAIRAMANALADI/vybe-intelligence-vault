---
title: "sugukurukabe/ssw-compass"
category: "Agent Framework"
tech_stack: ["TypeScript", "Node.js", "Express", "MCP (Model Context Protocol)", "Vertex AI", "Cloud Run", "Cloudflare", "Google Cloud Storage", "Zod", "Vite", "React (indirectly via UI components)", "Cloudflare Tunnel", "CI/CD (GitHub Actions)"]
quality_score: 9
rag_relevance: 8
tags: ["MCP Server", "Japanese Visa Guidance", "Privacy-First", "Freemium", "Official Document Grounding"]
source: "https://github.com/sugukurukabe/ssw-compass"
discovered_at: "2026-06-26T10:24:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
SSW Compass is a public MCP application that provides grounded, anonymous guidance for Japanese Specified Skilled Worker (SSW) visa procedures by retrieving information from official immigration documents. It ensures privacy by blocking personal identifiers and includes a disclaimer directing users to certified professionals for legal advice.

## Key Features
- Grounds responses in official Japanese immigration documents (出入国在留管理庁)
- Blocks personal identifiers (PII) before retrieval to ensure privacy
- Supports 10 languages with disclaimers in 7 additional languages
- Freemium tiers: Free (anonymous), Pro (JWT), Business (future)
- Includes 12 human-in-the-loop (HITL) controls for compliance and security

## Why It Matters for RAG Builders
SSW Compass provides a privacy-compliant, official-source-grounded MCP server for Japanese visa procedures, enabling RAG builders to integrate accurate and secure immigration guidance into AI applications.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Express
Automated review identified **Express** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vertex AI
Automated review identified **Vertex AI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloud Run
Automated review identified **Cloud Run** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare
Automated review identified **Cloudflare** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Cloud Storage
Automated review identified **Google Cloud Storage** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Zod
Automated review identified **Zod** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React (indirectly via UI components)
Automated review identified **React (indirectly via UI components)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cloudflare Tunnel
Automated review identified **Cloudflare Tunnel** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
