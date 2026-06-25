---
title: supabase/apps/docs/CONTRIBUTING.md at master · supabase/supabase · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md
published_at: '2026-06-25T20:49:20.122256+05:30'
collected_at: '2026-06-25T20:49:20.122271+05:30'
tags:
- frontend_ui
- openai
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: github:supabase/supabase
first_seen: '2026-06-25T20:49:20.122271+05:30'
last_seen: '2026-06-25T20:49:20.122271+05:30'
last_checked: '2026-06-25T20:49:20.122271+05:30'
health_score: 100
---

# supabase/apps/docs/CONTRIBUTING.md at master · supabase/supabase · GitHub

## Summary

- Supabase docs support four structured content types: **Explainers** (conceptual, prose-based), **Tutorials** (goal-oriented, multi-step), **Guides** (concise, procedural), and **Reference** (factual, parameter/return-type-focused), each with distinct use cases and formatting constraints.

- Docs are written in MDX with YAML frontmatter (e.g., `title`, `hideToc`) and stored in `apps/docs/content`, while reference docs are auto-generated from spec files (common/client-specific) via `spec/Makefile` transformations, requiring library maintainers to merge changes to `master` for updates.

- Reusable content is managed via **partials** in `apps/docs/content/_partials`, and custom components (e.g., admonitions, Mermaid diagrams, tabs) enforce strict styling/grammar rules (e.g., sentence-case headings, Oxford comma, American English) with automated linting (`supa-mdx-lint`) and CI-driven validation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T20:49:20.122256+05:30

## Related Tags

- frontend_ui
- openai
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://github.com/supabase/supabase/blob/master/apps/docs/CONTRIBUTING.md
