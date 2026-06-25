---
title: Difference between new @geometry and old $geometry in calculation of polygon
  areas in QGIS - Geographic Information Syst
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://gis.stackexchange.com/questions/501021/difference-between-new-geometry-and-old-geometry-in-calculation-of-polygon-are
published_at: '2026-06-24T23:05:32.663220+05:30'
collected_at: '2026-06-24T23:05:32.663232+05:30'
tags:
- agents
- hackernews
- reddit
- scripts
- threejs
- web-crawled
status: active
resource_id: blog:difference-between-new-geometry-and-old-geometry-i
first_seen: '2026-06-24T23:05:32.663232+05:30'
last_seen: '2026-06-24T23:05:32.663232+05:30'
last_checked: '2026-06-24T23:05:32.663232+05:30'
health_score: 100
---

# Difference between new @geometry and old $geometry in calculation of polygon areas in QGIS - Geographic Information Syst

## Summary

- **Deprecation Status**: `$geometry` is deprecated in favor of `@geometry` for consistency in QGIS expressions, though both currently yield identical results in calculations like `area()`.
- **Syntax Standardization**: QGIS is transitioning from legacy `$`-prefixed tokens (`$geometry`, `$id`, `$area`) to `@`-prefixed variables (`@geometry`, `@id`, `@area`) for future compatibility.
- **Future Compatibility**: Using `@geometry` ensures forward compatibility, as `$geometry` will be removed in future QGIS versions, despite no functional difference in current implementations.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-24T23:05:32.663220+05:30

## Related Tags

- agents
- hackernews
- reddit
- scripts
- threejs
- web-crawled

## Source

Original source: https://gis.stackexchange.com/questions/501021/difference-between-new-geometry-and-old-geometry-in-calculation-of-polygon-are
