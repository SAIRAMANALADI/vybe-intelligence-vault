---
title: Host your MyST Site - MyST Markdown
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://mystmd.org/guide/deployment#deploy-base-url
published_at: '2026-06-22T11:32:13.044110+05:30'
collected_at: '2026-06-22T11:32:13.044122+05:30'
tags:
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:host-your-myst-site-myst-markdown
first_seen: '2026-06-22T11:32:13.044122+05:30'
last_seen: '2026-06-22T11:32:13.044122+05:30'
last_checked: '2026-06-22T11:32:13.044122+05:30'
health_score: 100
---

# Host your MyST Site - MyST Markdown

## Summary

- MyST supports **static website deployment** (via `myst build --html` → `_build/html`) and **application-based deployment** (via `myst build --site` → `_build/site`), with the latter enabling dynamic rendering, performance optimizations (e.g., pre-fetching), and seamless updates.

- Static deployments require a root `index.html` (auto-generated unless nested URLs are used) and folder-based paths (e.g., `/folder/mydoc/index.html`), while dynamic deployments rely on structured site data (e.g., metadata, cross-references) in `_build/site` for server-side processing.

- Static hosting platforms (GitHub Pages, Netlify) require manual `BASE_URL` configuration for subfolder deployments (e.g., `mysite.org/docs/`), whereas application hosting (e.g., Curvenote) natively supports MyST’s dynamic themes and runtime features.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T11:32:13.044110+05:30

## Related Tags

- reddit
- scripts
- web-crawled

## Source

Original source: https://mystmd.org/guide/deployment#deploy-base-url
