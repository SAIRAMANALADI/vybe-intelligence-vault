---
title: Difference between new @geometry and old $geometry in calculation of polygon
  areas in QGIS - Geographic Information Syst
archive_category: agent-frameworks
source_category: ai/agents
source_url: https://gis.stackexchange.com/questions/501021/difference-between-new-geometry-and-old-geometry-in-calculation-of-polygon-are
resource_id: blog:difference-between-new-geometry-and-old-geometry-i
local_vault_path: ai/agents/difference-between-new-geometry-and-old-geometry-i.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- reddit
- scripts
- threejs
- web-crawled
selection_reason:
- Valuable developer reference
---

# Difference between new @geometry and old $geometry in calculation of polygon areas in QGIS - Geographic Information Syst

## Why This Is In The Archive

- Matched archive category: `Agent Frameworks`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Deprecation Status**: `$geometry` is deprecated in favor of `@geometry` for consistency in QGIS expressions, though both currently yield identical results in calculations like `area()`.
- **Syntax Standardization**: QGIS is transitioning from legacy `$`-prefixed tokens (`$geometry`, `$id`, `$area`) to `@`-prefixed variables (`@geometry`, `@id`, `@area`) for future compatibility.
- **Future Compatibility**: Using `@geometry` ensures forward compatibility, as `$geometry` will be removed in fut

## Use Cases

- Multi-agent coordination
- Structured tool usage
- Memory integration

## Source

Original source URL: https://gis.stackexchange.com/questions/501021/difference-between-new-geometry-and-old-geometry-in-calculation-of-polygon-are

## Local Vault File

Path: [difference-between-new-geometry-and-old-geometry-i.md](../../ai/agents/difference-between-new-geometry-and-old-geometry-i.md)
