---
title: Alias paths in v0.155.0 and later - tips & tricks - HUGO
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://discourse.gohugo.io/t/alias-paths-in-v0-155-0-and-later/56674
published_at: '2026-06-26T10:20:13.649890+05:30'
collected_at: '2026-06-26T10:20:13.649903+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:alias-paths-in-v0-155-0-and-later-tips-tricks-hugo
first_seen: '2026-06-26T10:20:13.649903+05:30'
last_seen: '2026-06-26T10:20:13.649903+05:30'
last_checked: '2026-06-26T10:20:13.649903+05:30'
health_score: 100
---

# Alias paths in v0.155.0 and later - tips & tricks - HUGO

## Summary

- **Alias Path Behavior Change (v0.155.0+):**
  Alias paths starting with `/` are now *site-relative* (resolving to `/<role>/<version>/<language>/path`) instead of *server-relative*, affecting multilingual single-host projects crossing language boundaries.

- **Alias Path Types in Hugo:**
  Three path types are now strictly defined:
  - *Page-relative* (`foo`, `./foo`, `../foo`) → Relative to current page.
  - *Site-relative* (`/foo`) → Relative to site root (role/version/language).
  - *Server-relative* (`/guest/v1.2.3/de/foo`) → Relative to web server host root.

- **Translation Fallback & Link Resolution:**
  Missing translations can be handled via `sites.matrix.languages: ['**']` in front matter; `./foo` and `foo` aliases are treated identically (OS-standard resolution), and link render hooks already follow the same path resolution rules.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-26T10:20:13.649890+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://discourse.gohugo.io/t/alias-paths-in-v0-155-0-and-later/56674
