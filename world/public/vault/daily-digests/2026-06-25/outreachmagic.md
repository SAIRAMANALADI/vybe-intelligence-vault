---
title: "outreachmagic/outreachmagic"
category: "Tooling"
tech_stack: ["Python", "SQLite", "Webhooks", "API Integration", "Claude Code", "Cursor", "Hermes Agent"]
quality_score: 9
rag_relevance: 8
tags: ["pipeline synchronization", "GTM automation", "AI agent integration", "lead enrichment", "email verification"]
source: "https://github.com/outreachmagic/outreachmagic"
discovered_at: "2026-06-25T07:26:08Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Outreach Magic Skill Suite synchronizes webhook events from multiple GTM platforms (Smartlead, Instantly, HeyReach, etc.) into a local SQLite database, enabling AI agents to query pipeline activity, lead enrichment, and email waterfall data directly. It eliminates manual CSV stitching by providing real-time visibility into replies, bounces, bookings, and campaign performance.

## Key Features
- Syncs platform webhooks (Smartlead, Instantly, HeyReach, etc.) into a local SQLite database for real-time agent queries
- Includes lead enrichment (LinkedIn, job title, domain) and email waterfall finder (trykitt, Icypeas, MillionVerifier)
- Supports multiple AI agents (Claude Code, Cursor, Hermes) with shared database access
- Provides campaign performance insights, bounce analysis, and reply tracking without manual exports
- Modular setup with optional companion API keys for advanced features

## Why It Matters for RAG Builders
It bridges the gap between GTM platforms and AI agents by providing real-time pipeline visibility, enabling agents to act on up-to-date data without manual intervention.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Webhooks
Automated review identified **Webhooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### API Integration
Automated review identified **API Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Cursor
Automated review identified **Cursor** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hermes Agent
Automated review identified **Hermes Agent** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
