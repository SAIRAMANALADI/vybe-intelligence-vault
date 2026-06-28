---
title: Configure cascade
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/cascade/#target
published_at: '2026-06-28T15:09:19.956180+05:30'
collected_at: '2026-06-28T15:09:19.956193+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:configure-cascade
first_seen: '2026-06-28T15:09:19.956193+05:30'
last_seen: '2026-06-28T15:09:19.956193+05:30'
last_checked: '2026-06-28T15:09:19.956193+05:30'
health_score: 100
---

# Configure cascade

## Summary

- **Cascade Mechanism**: Hugo's `cascade` feature propagates front matter values (e.g., `params`) to descendant pages unless overridden by a closer ancestor or the page itself, with optional targeting via `target` key using page matchers (e.g., `path`, `kind`, `sites`).

- **Target Specification**: The `target` key supports filtering via `environment`, `kind`, `path` (glob patterns), or `sites` (language/version/role matrix), enabling granular control over cascaded values (e.g., `{en,de}` languages for `/articles/**`).

- **Array Support**: Multiple `cascade` maps can be defined in an array to apply distinct values to different targets (e.g., `color: red` for `/articles/**` and `color: blue` for `/tutorials/**`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-28T15:09:19.956180+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/cascade/#target
