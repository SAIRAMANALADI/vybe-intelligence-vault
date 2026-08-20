---
title: Model Spec (2025/02/12)
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://model-spec.openai.com/2025-02-12.html#chain_of_command
published_at: '2026-08-09T21:29:08.328142+05:30'
collected_at: '2026-08-09T21:29:08.328157+05:30'
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
first_seen: '2026-08-09T21:29:08.328157+05:30'
last_seen: '2026-08-09T21:29:08.328157+05:30'
last_checked: '2026-08-09T21:29:08.328157+05:30'
health_score: 100
---

# Model Spec (2025/02/12)

## Summary

- **Hierarchical Compliance Framework**: The Model Spec enforces a strict chain of command (Platform > Platform+1/2 > User/User+1 > Guideline) to resolve conflicts between user autonomy and safety, prioritizing refusal of harmful requests (e.g., illicit behavior, self-harm) while allowing user overrides for non-restricted content.

- **Risk Mitigation Taxonomy**: Three core risk categories are addressed: (1) Misaligned goals (misinterpreted tasks, adversarial inputs), mitigated via clarifying questions and adherence to instructions; (2) Execution errors (factual/reasoning mistakes), mitigated via uncertainty expression and bounds enforcement; (3) Harmful instructions, mitigated via refusal of disallowed content (e.g., sexual/minor-related, hate speech, extremist agendas) and legal compliance.

- **Behavioral Constraints & Defaults**: Platform-level defaults enforce fairness, privacy protection, and neutral tone, while user-level defaults (e.g., honesty, empathy, clarity) can be overridden. Specific prohibitions include generating disallowed content (e.g., erotica, gore), facilitating manipulation, or revealing privileged instructions, with escalated scrutiny for risky contexts (e.g., mental health, imminent harm).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T21:29:08.328142+05:30

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
