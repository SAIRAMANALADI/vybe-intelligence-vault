---
title: supabase/apps/docs/CONTRIBUTING.md at master · supabase/supabase · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md
published_at: '2026-06-28T19:54:21.637109+05:30'
collected_at: '2026-06-28T19:54:21.637126+05:30'
tags:
- frontend_ui
- openai
- rag
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: github:supabase/supabase
first_seen: '2026-06-28T19:54:21.637126+05:30'
last_seen: '2026-06-28T19:54:21.637126+05:30'
last_checked: '2026-06-28T19:54:21.637126+05:30'
health_score: 100
---

# supabase/apps/docs/CONTRIBUTING.md at master · supabase/supabase · GitHub

## Summary

- Supabase docs support four document types: **Explainers** (conceptual, prose-based), **Tutorials** (goal-oriented, multi-step), **Guides** (short, procedure-focused), and **Reference** (factual, parameter/return-type-focused, auto-generated from spec files).

- Docs are structured in MDX with YAML frontmatter; navigation entries are defined in `NavigationMenu.constants.ts`, and reference docs are auto-generated from spec files (e.g., `supabase_js_v2.yml`) via `$ref` and transformed via Makefile workflows.

- Content reuse is enforced via **partials** in `apps/docs/content/_partials`; admonitions (`danger`, `tip`, etc.) must be used sparingly, and code blocks require Prettier formatting (JS/TS) and lowercase SQL syntax.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T19:54:21.637109+05:30

## Related Tags

- frontend_ui
- openai
- rag
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md
