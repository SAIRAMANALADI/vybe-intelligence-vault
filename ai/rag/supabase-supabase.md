---
title: supabase/apps/docs/CONTRIBUTING.md at master · supabase/supabase · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md
published_at: '2026-06-27T09:57:21.846431+05:30'
collected_at: '2026-06-27T09:57:21.846444+05:30'
tags:
- frontend_ui
- openai
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: github:supabase/supabase
first_seen: '2026-06-27T09:57:21.846444+05:30'
last_seen: '2026-06-27T09:57:21.846444+05:30'
last_checked: '2026-06-27T09:57:21.846444+05:30'
health_score: 100
---

# supabase/apps/docs/CONTRIBUTING.md at master · supabase/supabase · GitHub

## Summary

- Supabase docs support four structured content types: **Explainers** (conceptual, prose-based), **Tutorials** (goal-oriented, multi-step), **Guides** (concise, procedural), and **Reference** (factual, parameter/return-type-focused), each with distinct use cases and formatting constraints.

- Docs are authored in **MDX** with YAML frontmatter (e.g., `title`, `hideToc`), stored in `apps/docs/content`, and use **partials** (`_partials/`) for reusable snippets; navigation is defined in `NavigationMenu.constants.ts`.

- Reference docs are auto-generated from **spec files** (common/client-specific YAML/JSON) via `$ref` properties, with updates requiring library maintainers to merge changes to `master` and regenerate specs using `make` in `/spec`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T09:57:21.846431+05:30

## Related Tags

- frontend_ui
- openai
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md
