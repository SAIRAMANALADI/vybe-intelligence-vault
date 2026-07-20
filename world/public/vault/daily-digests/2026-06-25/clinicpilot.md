---
title: Hayatelin/clinicpilot
category: daily-digests/2026-06-25
tech_stack:
- Python
- FastAPI
- SQLite
- Pydantic
- OpenAI API (optional)
- HTML/CSS/JS (dashboard)
- pytest (testing)
quality_score: 8
rag_relevance: 7
tags:
- AI agent
- patient recall
- appointment reminders
- human-in-the-loop
- healthcare automation
source: https://github.com/Hayatelin/clinicpilot
discovered_at: '2026-06-25T07:22:24Z'
evaluated_by: mistral-small-latest
---

## Summary
ClinicPilot is a vertical AI agent designed for service clinics (dental, aesthetic, physiotherapy) that automates patient recall and appointment reminders with human-in-the-loop approval. It runs fully offline by default, uses a mock AI provider, and ensures safety by never auto-sending messages, only drafting them for human review.

## Key Features
- Automates patient recall and appointment reminders for clinics
- Human-in-the-loop approval for all drafted messages
- No-show risk scoring (0-100) based on patient history and engagement
- Fully offline by default with deterministic mock AI provider
- Outcome-based ROI tracking and pricing model

## Why It Matters for RAG Builders
ClinicPilot demonstrates a critical AI agent workflow for healthcare automation with strict safety and compliance controls, making it a valuable reference for RAG builders focused on regulated domains.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pydantic
Automated review identified **Pydantic** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API (optional)
Automated review identified **OpenAI API (optional)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS/JS (dashboard)
Automated review identified **HTML/CSS/JS (dashboard)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pytest (testing)
Automated review identified **pytest (testing)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
