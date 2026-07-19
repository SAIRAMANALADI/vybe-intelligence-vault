---
title: zzzmada/permear
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Python
- Home Assistant
- SQLite
- HACS
- Telegram Bot API
- LLM Integration (conversation & ai_task providers)
quality_score: 8
rag_relevance: 6
tags:
- Home Automation
- Event Filtering
- Memory Management
- Attention Mechanism
- Privacy-First
source: https://github.com/zzzmada/permear
discovered_at: '2026-07-07T13:16:04Z'
evaluated_by: mistral-small-latest
---

## Summary
PERMEAR is a cognitive memory and salience layer for Home Assistant that filters household events by inhibition, suppressing noise and surfacing only what warrants attention. It runs locally on devices like Raspberry Pi 4 and uses an attentional mechanism inspired by the brain's ARAS filter to dynamically manage event salience.

## Key Features
- Inhibition-based event filtering (ARAS filter) to suppress noise and surface only meaningful events
- Tiered organic memory system (ephemeral, active, stable, faded) for dynamic memory consolidation
- Dynamic sensitivity thresholds that adapt to household behavior over time
- Privacy-focused architecture with optional local LLM providers for fully on-device operation
- Seamless integration with Home Assistant via HACS and UI-based configuration

## Why It Matters for RAG Builders
PERMEAR provides a privacy-preserving, inhibition-based approach to event salience that reduces noise in smart home systems, making it valuable for AI engineers building attentional layers in home automation stacks.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Home Assistant
Automated review identified **Home Assistant** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HACS
Automated review identified **HACS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Integration (conversation & ai_task providers)
Automated review identified **LLM Integration (conversation & ai_task providers)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
