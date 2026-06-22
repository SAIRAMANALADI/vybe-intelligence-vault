---
title: Routing | Docusaurus
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docusaurus.io/docs/advanced/routing#routes-become-html-files
published_at: '2026-06-22T11:32:52.372848+05:30'
collected_at: '2026-06-22T11:32:52.372860+05:30'
tags:
- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:routing-docusaurus
first_seen: '2026-06-22T11:32:52.372860+05:30'
last_seen: '2026-06-22T11:32:52.372860+05:30'
last_checked: '2026-06-22T11:32:52.372860+05:30'
health_score: 100
---

# Routing | Docusaurus

## Summary

- **Content Plugin Routing**: Docusaurus plugins (`docs`, `blog`, `pages`) use `routeBasePath` to define route prefixes (e.g., `/docs`, `/blog`). File paths map to URLs (e.g., `./docs/intro.md` → `/docs/intro`), with `slug` front matter enabling URL decoupling from file structure.

- **Nested & Versioned Routes**: The `docs` plugin supports nested routes and versioning (e.g., `/`, `/next`, `/2.0.0-beta.13`), preserving sidebar state across docs. Version paths act as route context, with individual docs rendered via `@theme/DocItem` within `@theme/DocPage`.

- **Static HTML Generation & Routing API**: Routes are SSR-rendered to static HTML (e.g., `/docs/intro` → `/docs/intro/index.html`), with `baseUrl` resolving asset paths. Client-side routing leverages `@docusaurus/router` (React Router re-export) for SSR-safe access to `useLocation` and `useHistory`, while `pathname://` protocol escapes SPA redirects for static files.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:32:52.372848+05:30

## Related Tags

- frontend_ui
- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://docusaurus.io/docs/advanced/routing#routes-become-html-files
