---
title: astro/CONTRIBUTING.md at main · withastro/astro · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/withastro/astro/blob/main/CONTRIBUTING.md
published_at: '2026-08-10T16:19:16.056252+05:30'
collected_at: '2026-08-10T16:19:16.056270+05:30'
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
first_seen: '2026-08-10T16:19:16.056270+05:30'
last_seen: '2026-08-10T16:19:16.056270+05:30'
last_checked: '2026-08-10T16:19:16.056270+05:30'
health_score: 100
---

# astro/CONTRIBUTING.md at main · withastro/astro · GitHub

## Summary

- **Environment Setup**: Requires Node.js `>=22.12.0` and PNPM `>=10.28.0`; use Corepack for dependency management. Configure Git blame to ignore formatting revisions via `.git-blame-ignore-revs` and set up PNPM merge driver for `pnpm-lock.yaml` conflict resolution.

- **Testing & Debugging**: Run `pnpm run dev` for live-reload development, `pnpm run test` for all tests, or `pnpm run test:e2e` for Playwright-based end-to-end tests. Debug Vite with `DEBUG=vite:* astro dev` and isolate failing tests using `node --test --test-only`.

- **Benchmarking & PR Workflow**: Execute benchmarks via `pnpm run benchmark [name]` or trigger CI benchmarks with `!bench [name]`. For PRs, use `pnpm exec changeset` to document changes (excluding non-package directories like `examples/*`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T16:19:16.056252+05:30

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
