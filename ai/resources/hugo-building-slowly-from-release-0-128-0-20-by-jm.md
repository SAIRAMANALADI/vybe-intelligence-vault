---
title: 'Hugo building slowly from release 0.128.0 - #20 by jmooring - support - HUGO'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://discourse.gohugo.io/t/hugo-building-slowly-from-release-0-128-0/57314/20
published_at: '2026-08-08T15:35:02.695674+05:30'
collected_at: '2026-08-08T15:35:02.695688+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:hugo-building-slowly-from-release-0-128-0-20-by-jm
first_seen: '2026-08-08T15:35:02.695688+05:30'
last_seen: '2026-08-08T15:35:02.695688+05:30'
last_checked: '2026-08-08T15:35:02.695688+05:30'
health_score: 100
---

# Hugo building slowly from release 0.128.0 - #20 by jmooring - support - HUGO

## Summary

- **Performance regression**: Hugo builds slowed significantly from v0.128.0 due to changes in rendering logic, addressed in v0.164.0 via [#15085](https://github.com/gohugoio/hugo/pull/15085).

- **Root cause**: The issue stemmed from inefficient handling of page rendering dependencies, leading to redundant computations during rebuilds.

- **Resolution**: Optimized dependency tracking in v0.164.0 to eliminate redundant work, restoring build performance to expected levels.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T15:35:02.695674+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://discourse.gohugo.io/t/hugo-building-slowly-from-release-0-128-0/57314/20
