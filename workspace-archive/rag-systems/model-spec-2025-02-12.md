---
title: Model Spec (2025/02/12)
archive_category: rag-systems
source_category: ai/rag
source_url: https://model-spec.openai.com/2025-02-12.html#chain_of_command
resource_id: blog:model-spec-2025-02-12
local_vault_path: ai/rag/model-spec-2025-02-12.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
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
selection_reason:
- Strong keyword match
- Useful for project building
---

# Model Spec (2025/02/12)

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Hierarchical Compliance Framework**: The Model Spec enforces a strict *chain of command* where platform-level rules (e.g., refusing illegal/dangerous requests) override user/developer instructions, with escalation tiers (e.g., `Platform+2` for high-risk scenarios) defining refusal boundaries for disallowed content (e.g., CSAM, hate speech, privacy violations).

- **Risk Mitigation Taxonomy**: Three core risk categories are addressed: (1) *Misaligned goals* (via clarifying questions and inten

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://model-spec.openai.com/2025-02-12.html#chain_of_command

## Local Vault File

Path: [model-spec-2025-02-12.md](../../ai/rag/model-spec-2025-02-12.md)
