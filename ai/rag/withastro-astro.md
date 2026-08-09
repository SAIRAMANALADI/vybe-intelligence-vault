---
title: astro/CONTRIBUTING.md at main · withastro/astro · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/withastro/astro/blob/main/CONTRIBUTING.md
published_at: '2026-08-10T00:46:02.690515+05:30'
collected_at: '2026-08-10T00:46:02.690528+05:30'
tags:
- benchmark
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: github:withastro/astro
first_seen: '2026-08-10T00:46:02.690528+05:30'
last_seen: '2026-08-10T00:46:02.690528+05:30'
last_checked: '2026-08-10T00:46:02.690528+05:30'
health_score: 100
---

# astro/CONTRIBUTING.md at main · withastro/astro · GitHub

## Summary

- **Environment Setup**: Requires Node.js `>=22.12.0` and PNPM `>=10.28.0` (preferably via Corepack); local setup involves `pnpm install` at root, `pnpm run build`, and Git config for `.git-blame-ignore-revs` to exclude formatting commits.

- **Testing Workflow**: Supports multiple testing methods—examples (`pnpm --filter @example/minimal run dev`), unit tests (`pnpm run test` or `node --test`), and E2E tests via Playwright (`pnpm run test:e2e`); single-test isolation requires `.only` modifiers and `--test-only` flag.

- **Debugging & Benchmarking**: Vite debugging via `DEBUG=vite:* astro dev`, test debugging in CI with `--parallel`, and benchmark execution via `pnpm run benchmark` (or specific benchmarks like `memory`); PRs can trigger CI benchmarks with `!bench` comments.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T00:46:02.690515+05:30

## Related Tags

- benchmark
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://github.com/withastro/astro/blob/main/CONTRIBUTING.md
