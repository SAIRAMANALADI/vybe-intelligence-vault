---
title: dan-nackasha-keyworth/ai-inbound-triage-agent
category: world/public/vault/daily-digests/2026-07-09
tech_stack:
- Python
- Claude API (Haiku 4.5, Sonnet 5)
- HTML
- CSS
- JavaScript
- GitHub Actions
quality_score: 9
rag_relevance: 7
tags:
- AI triage
- customer support automation
- agentic workflow
- confidence scoring
- message routing
source: https://github.com/dan-nackasha-keyworth/ai-inbound-triage-agent
discovered_at: '2026-07-09T11:52:42Z'
evaluated_by: mistral-small-latest
---

## Summary
A prototype AI agent that classifies, routes, and drafts responses to inbound customer messages for a fictional B2B SaaS company. It uses structured extraction, confidence scoring, and agentic investigation to ensure accurate triage and human review before any action is taken.

## Key Features
- Multi-stage pipeline: classification, structured extraction, confidence scoring, and routing with guardrails
- Rule-based confidence rubric (not LLM-generated percentages) for auditable decision-making
- Agentic investigation step for low-confidence messages, using tool-use and read-only lookups
- Human-in-the-loop review for all drafts, ensuring no auto-sending of responses
- Synthetic data and dashboards for performance tracking and commercial impact analysis

## Why It Matters for RAG Builders
It demonstrates a practical, auditable agentic workflow for AI-driven customer support triage, balancing automation with human oversight and confidence-based escalation.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude API (Haiku 4.5, Sonnet 5)
Automated review identified **Claude API (Haiku 4.5, Sonnet 5)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML
Automated review identified **HTML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CSS
Automated review identified **CSS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
