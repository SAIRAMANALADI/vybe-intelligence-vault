---
title: 'Atlassian''s DESIGN.md is here: what we learned testing portable design context
  in practice - Inside Atlassian'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.atlassian.com/blog/ai-at-work/atlassians-design-md-is-here-what-we-learned-testing-portable-design-context-in-practice
published_at: '2026-07-04T09:45:15.767584+05:30'
collected_at: '2026-07-04T09:45:15.767599+05:30'
tags:
- agents
- frontend_ui
- hackernews
- paper
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:atlassian-s-design-md-is-here-what-we-learned-test
first_seen: '2026-07-04T09:45:15.767599+05:30'
last_seen: '2026-07-04T09:45:15.767599+05:30'
last_checked: '2026-07-04T09:45:15.767599+05:30'
health_score: 100
---

# Atlassian's DESIGN.md is here: what we learned testing portable design context in practice - Inside Atlassian

## Summary

- **DESIGN.md Overview**: A portable Markdown format capturing design intent via machine-readable tokens (YAML frontmatter) and human-readable rationale (Markdown prose), enabling AI-generated UIs to align with brand guidelines without full system context.

- **Performance Trade-offs**: In production environments, DESIGN.md underperforms compared to Atlassian’s MCP server/skills, requiring ~92% more tokens, longer response times (~1m 45s avg.), and higher variance (~2.7x token consumption) due to static, all-at-once context delivery and truncated guidance (~80KB vs. 2.5MB for MCP).

- **Use Cases & Limitations**: Best suited for high-level prototyping, customer theming, or unfamiliar environments where existing component constraints are absent; risks re-implementing components instead of using shared libraries, lacks on-demand context granularity, and exposes internal system details.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T09:45:15.767584+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- paper
- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://www.atlassian.com/blog/ai-at-work/atlassians-design-md-is-here-what-we-learned-testing-portable-design-context-in-practice
