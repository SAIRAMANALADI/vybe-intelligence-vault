---
title: Host your MyST Site - MyST Markdown
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://mystmd.org/guide/deployment#deploy-base-url
published_at: '2026-06-24T22:59:20.310280+05:30'
collected_at: '2026-06-24T22:59:20.310295+05:30'
tags:
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:host-your-myst-site-myst-markdown
first_seen: '2026-06-24T22:59:20.310295+05:30'
last_seen: '2026-06-24T22:59:20.310295+05:30'
last_checked: '2026-06-24T22:59:20.310295+05:30'
health_score: 100
---

# Host your MyST Site - MyST Markdown

## Summary

- MyST supports two deployment modes: **static websites** (pre-built HTML files served from hosts like GitHub Pages/Netlify) and **application mode** (dynamic generation via a MyST server on providers like Curvenote/Vercel), with the latter offering performance optimizations (e.g., pre-fetching, instant transitions) and seamless updates.

- Static deployments require `myst build --html` to generate `_build/html` (with `index.html` at root for root URLs), while application deployments use `myst build --site` to create structured site data (`_build/site`) for dynamic serving, with environment variables like `BASE_URL` resolving subfolder links.

- Static sites must exclude `_build` from Git via `.gitignore`, whereas application deployments (e.g., Curvenote) natively support MyST’s structured data format (MyST AST) and managed themes, enabling dynamic content rendering.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T22:59:20.310280+05:30

## Related Tags

- reddit
- scripts
- web-crawled

## Source

Original source: https://mystmd.org/guide/deployment#deploy-base-url
