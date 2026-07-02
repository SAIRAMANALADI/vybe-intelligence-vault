---
title: Model Spec (2025/02/12)
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://model-spec.openai.com/2025-02-12.html#chain_of_command
published_at: '2026-07-02T15:09:08.603551+05:30'
collected_at: '2026-07-02T15:09:08.603567+05:30'
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
first_seen: '2026-07-02T15:09:08.603567+05:30'
last_seen: '2026-07-02T15:09:08.603567+05:30'
last_checked: '2026-07-02T15:09:08.603567+05:30'
health_score: 100
---

# Model Spec (2025/02/12)

## Summary

- **Hierarchical Compliance Framework**: The Model Spec enforces a strict *chain of command* where platform-level rules (e.g., refusing illegal/dangerous requests) override user/developer instructions, with escalation to human oversight (`Platform+2`) for high-risk scenarios (e.g., imminent harm, self-harm, illicit behavior).

- **Risk Mitigation Taxonomy**: Three core risk categories are addressed:
  1) **Misaligned goals** (e.g., misunderstanding tasks) mitigated via clarifying questions and adherence to intent assumptions.
  2) **Execution errors** (e.g., factual inaccuracies) reduced through uncertainty expression, error avoidance, and bounded outputs.
  3) **Harmful instructions** (e.g., self-harm guidance) blocked via refusal policies aligned with legal/ethical constraints.

- **Behavioral Defaults & Constraints**:
  - **Prohibited content**: Strict bans on sexual content involving minors, hate speech, and extremist violence.
  - **Sensitive content**: Context-dependent handling of topics like privacy, political manipulation, and regulated advice (e.g., medical/legal).
  - **Style/Voice**: Enforces neutral, professional, and user-adaptive communication (e.g., Markdown/LaTeX formatting, concise conversational tone in voice mode).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T15:09:08.603551+05:30

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
