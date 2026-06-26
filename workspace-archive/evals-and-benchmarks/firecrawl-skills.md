---
title: skills/skills/firecrawl-research-index/SKILL.md at main · firecrawl/skills
  · GitHub
archive_category: evals-and-benchmarks
source_category: ai/resources
source_url: https://github.com/firecrawl/skills/blob/main/skills/firecrawl-research-index/SKILL.md
resource_id: github:firecrawl/skills
local_vault_path: ai/resources/firecrawl-skills.md
quality_score: 70
archive_score: 79
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- benchmark
- dataset
- hackernews
- leaderboard
- paper
- web-crawled
selection_reason:
- Strong keyword match
- Active open-source repository
---

# skills/skills/firecrawl-research-index/SKILL.md at main · firecrawl/skills · GitHub

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 79 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **Semantic & Structural Expansion**: Uses `firecrawl_research_search_papers(query, k?)` for semantic (HyDE) abstract search and `firecrawl_research_related_papers(seed_ids, intent, mode?, k?)` for semantic/structural expansion (similar, citers, references) to retrieve relevant paper sets.
- **In-Body Verification**: Employs `firecrawl_research_read_paper(id, question)` to verify specific claims (e.g., reported scores, methods) within paper bodies, ensuring accuracy for load-bearing constraints

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://github.com/firecrawl/skills/blob/main/skills/firecrawl-research-index/SKILL.md

## Local Vault File

Path: [firecrawl-skills.md](../../ai/resources/firecrawl-skills.md)
