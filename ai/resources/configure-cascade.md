---
title: Configure cascade
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/cascade/#target
published_at: '2026-08-03T09:32:22.893998+05:30'
collected_at: '2026-08-03T09:32:22.894011+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:configure-cascade
first_seen: '2026-08-03T09:32:22.894011+05:30'
last_seen: '2026-08-03T09:32:22.894011+05:30'
last_checked: '2026-08-03T09:32:22.894011+05:30'
health_score: 100
---

# Configure cascade

## Summary

- **Cascade Mechanism**: Cascading in Hugo applies front matter values from a branch page or project configuration to descendant pages unless overridden by closer ancestors or explicit definitions in descendants; uses page matchers to restrict scope.

- **Target Configuration**: The `target` key filters cascaded values via a page matcher (`path`, `kind`, `environment`, `sites`), enabling granular control over inheritance (e.g., `{/articles,/articles/**}` for section-specific cascading).

- **Array Support**: Multiple cascade maps can be defined in an array to apply distinct values to different targets (e.g., `color: red` for `/articles`, `color: blue` for `/tutorials`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T09:32:22.893998+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/cascade/#target
