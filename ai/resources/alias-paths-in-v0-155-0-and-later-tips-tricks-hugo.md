---
title: Alias paths in v0.155.0 and later - tips & tricks - HUGO
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://discourse.gohugo.io/t/alias-paths-in-v0-155-0-and-later/56674
published_at: '2026-07-17T14:12:23.902662+05:30'
collected_at: '2026-07-17T14:12:23.902675+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:alias-paths-in-v0-155-0-and-later-tips-tricks-hugo
first_seen: '2026-07-17T14:12:23.902675+05:30'
last_seen: '2026-07-17T14:12:23.902675+05:30'
last_checked: '2026-07-17T14:12:23.902675+05:30'
health_score: 100
---

# Alias paths in v0.155.0 and later - tips & tricks - HUGO

## Summary

- **Breaking Change in v0.155.0**: Alias paths starting with `/` changed from *server-relative* to *site-relative* resolution, affecting multilingual single-host projects. Example: `/de/foo-in-german/` now resolves to `/en/de/foo-in-german/` instead of `/de/foo-in-german/`.

- **Alias Path Types**: Hugo now enforces three distinct path types—*page-relative* (`foo`, `./foo`), *site-relative* (`/foo`), and *server-relative* (`/guest/v1.2.3/de/foo`)—aligning with the multidimensional content model introduced in v0.153.0.

- **Handling Missing Translations**: Use the `sites.matrix` front matter (`languages: ['**']`) to propagate content across missing language translations, replacing previous alias-based workarounds.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-17T14:12:23.902662+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://discourse.gohugo.io/t/alias-paths-in-v0-155-0-and-later/56674
