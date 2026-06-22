---
title: Host your MyST Site - MyST Markdown
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://mystmd.org/guide/deployment#deploy-base-url
published_at: '2026-06-23T01:15:22.535619+05:30'
collected_at: '2026-06-23T01:15:22.535632+05:30'
tags:
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:host-your-myst-site-myst-markdown
first_seen: '2026-06-23T01:15:22.535632+05:30'
last_seen: '2026-06-23T01:15:22.535632+05:30'
last_checked: '2026-06-23T01:15:22.535632+05:30'
health_score: 100
---

# Host your MyST Site - MyST Markdown

## Summary

- MyST supports two deployment modes: **static** (pre-built HTML files served via hosts like GitHub Pages/Netlify) and **application** (dynamic server-side rendering via Curvenote/Vercel), with the latter offering performance optimizations (pre-fetching, smaller payloads) and seamless updates.
- Static deployments require `myst build --html` (output in `_build/html`), enforce `/folder/index.html` routing, and optionally use `BASE_URL` for subfolder deployments (e.g., `mysite.org/docs/`).
- Application deployments use `myst build --site` to generate structured site data (`_build/site`) for MyST-aware servers (e.g., Curvenote), enabling dynamic content rendering.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-23T01:15:22.535619+05:30

## Related Tags

- reddit
- scripts
- web-crawled

## Source

Original source: https://mystmd.org/guide/deployment#deploy-base-url
