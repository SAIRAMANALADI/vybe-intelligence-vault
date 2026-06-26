---
title: skills/skills/firecrawl-research-index/SKILL.md at main · firecrawl/skills
  · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/firecrawl/skills/blob/main/skills/firecrawl-research-index/SKILL.md
published_at: '2026-06-27T04:12:14.254797+05:30'
collected_at: '2026-06-27T04:12:14.254809+05:30'
tags:
- benchmark
- dataset
- hackernews
- leaderboard
- paper
- web-crawled
status: active
resource_id: github:firecrawl/skills
first_seen: '2026-06-27T04:12:14.254809+05:30'
last_seen: '2026-06-27T04:12:14.254809+05:30'
last_checked: '2026-06-27T04:12:14.254809+05:30'
health_score: 100
---

# skills/skills/firecrawl-research-index/SKILL.md at main · firecrawl/skills · GitHub

## Summary

- **Semantic & Structural Expansion**: Uses `firecrawl_research_search_papers(query, k?)` for semantic (HyDE) abstract search and `firecrawl_research_related_papers(seed_ids, intent, mode?, k?)` for semantic/structural expansion (similar, citers, references) to retrieve relevant paper sets.
- **In-Body Verification**: Employs `firecrawl_research_read_paper(id, question)` to verify specific claims (e.g., reported scores, methods) within paper bodies, ensuring accuracy for load-bearing constraints.
- **Multi-Strategy Retrieval**: Combines web search (`firecrawl_search`/`firecrawl_scrape`) for leaderboards/rankings and `inspect_paper(id)` for canonical metadata, mapping external data back to papers via `search_papers` for comprehensive literature retrieval.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-27T04:12:14.254797+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- leaderboard
- paper
- web-crawled

## Source

Original source: https://github.com/firecrawl/skills/blob/main/skills/firecrawl-research-index/SKILL.md
