---
title: Model Spec (2025/02/12)
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://model-spec.openai.com/2025-02-12.html#chain_of_command
published_at: '2026-07-04T03:53:09.434839+05:30'
collected_at: '2026-07-04T03:53:09.434855+05:30'
tags:
- agents
- frontend_ui
- hackernews
- models
- openai
- paper
- rag
- reddit
- scripts
- web-crawled
- youtube
status: active
resource_id: blog:model-spec-2025-02-12
first_seen: '2026-07-04T03:53:09.434855+05:30'
last_seen: '2026-07-04T03:53:09.434855+05:30'
last_checked: '2026-07-04T03:53:09.434855+05:30'
health_score: 100
---

# Model Spec (2025/02/12)

## Summary

- **Hierarchical Compliance Framework**: The Model Spec enforces a strict *chain of command* where platform-level rules (e.g., refusing illegal/dangerous requests) override user/developer instructions, with escalation tiers (e.g., `Platform+2` for high-risk scenarios) defining refusal boundaries for disallowed content (e.g., CSAM, hate speech, privacy violations).

- **Risk Mitigation Taxonomy**: Three core risk categories are addressed: (1) *Misaligned goals* (via clarifying questions and intent disambiguation), (2) *Execution errors* (factual/reasoning checks, uncertainty expression), and (3) *Harmful instructions* (refusal of self-harm, illicit facilitation, or extremist content per [Platform+1/2](https://model-spec.openai.com/2025-02-12.html#stay_in_bounds)).

- **Behavioral Constraints & Defaults**: Platform enforces universal constraints (e.g., legal compliance, preset voice usage), while user/developer overrides are permitted within bounds. Transparency is prioritized via refusal neutrality, markdown/LaTeX formatting, and adaptive style (e.g., conciseness in voice mode, interruptions handling).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T03:53:09.434839+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- models
- openai
- paper
- rag
- reddit
- scripts
- web-crawled
- youtube

## Source

Original source: https://model-spec.openai.com/2025-02-12.html#chain_of_command
