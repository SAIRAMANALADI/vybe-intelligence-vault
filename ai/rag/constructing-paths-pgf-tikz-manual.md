---
title: Constructing Paths - PGF/TikZ Manual
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://tikz.dev/base-paths#pgf.back/pgfpathcurvebetweentime
published_at: '2026-06-24T20:54:16.624738+05:30'
collected_at: '2026-06-24T20:54:16.624753+05:30'
tags:
- rag
- threejs
- web-crawled
status: active
resource_id: blog:constructing-paths-pgf-tikz-manual
first_seen: '2026-06-24T20:54:16.624753+05:30'
last_seen: '2026-06-24T20:54:16.624753+05:30'
last_checked: '2026-06-24T20:54:16.624753+05:30'
health_score: 100
---

# Constructing Paths - PGF/TikZ Manual

## Summary

- **Path Construction Primitives**: PGF's core path operations include `\pgfpathmoveto` (starts/segments path), `\pgfpathlineto` (adds straight segment), `\pgfpathcurveto` (adds cubic Bézier curve), and `\pgfpathclose` (closes current path segment with straight line to start point). Paths are global entities persisting across TeX groups until flushed via `\pgfusepath`.

- **Elliptical/Circular Paths**: `\pgfpatharc` appends an arc/circular segment to the path, parameterized by start/end angles and radii (x/y optional). `\pgfpatharcto` implements SVG-compatible elliptical arcs via flags for large/small arc selection and direction, while `\pgfpatharcaxes` uses explicit axis vectors for ellipse definition.

- **Bounding Box Management**: Path operations dynamically update two bounding boxes (current path and picture). Arc/curve operations approximate bounds using control/support points, often yielding conservative (oversized) boxes unless transformations are affine.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T20:54:16.624738+05:30

## Related Tags

- rag
- threejs
- web-crawled

## Source

Original source: https://tikz.dev/base-paths#pgf.back/pgfpathcurvebetweentime
