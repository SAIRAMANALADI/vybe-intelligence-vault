---
title: Configure cascade
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/cascade/#target
published_at: '2026-09-02T10:23:54.522102+05:30'
collected_at: '2026-09-02T10:23:54.522118+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:configure-cascade
first_seen: '2026-09-02T10:23:54.522118+05:30'
last_seen: '2026-09-02T10:23:54.522118+05:30'
last_checked: '2026-09-02T10:23:54.522118+05:30'
health_score: 100
---

# Configure cascade

## Summary

- **Cascading Mechanism**: Hugo applies front matter values from a branch page or project config to descendant pages unless overridden; uses page matchers (`target`) to filter subsets, with precedence given to closer ancestors or earlier cascade array elements.

- **Target Configuration**: `target` key supports filtering via `environment`, `kind`, `path`, or `sites` (glob patterns for content dimensions like language), with `sites.matrix.languages` enabling multi-language targeting.

- **Array Support**: Multiple cascade maps can be defined in an array to apply distinct values to different targets, e.g., `color: red` for `/articles/**` and `color: blue` for `/tutorials/**`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-09-02T10:23:54.522102+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/cascade/#target
