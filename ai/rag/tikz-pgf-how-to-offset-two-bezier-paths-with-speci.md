---
title: tikz pgf - How to offset two bezier paths with specific ratio elegantly? -
  TeX - LaTeX Stack Exchange
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://tex.stackexchange.com/questions/764072/how-to-offset-two-bezier-paths-with-specific-ratio-elegantly
published_at: '2026-06-24T20:49:00.142931+05:30'
collected_at: '2026-06-24T20:49:00.142944+05:30'
tags:
- agents
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- threejs
- web-crawled
status: active
resource_id: blog:tikz-pgf-how-to-offset-two-bezier-paths-with-speci
first_seen: '2026-06-24T20:49:00.142944+05:30'
last_seen: '2026-06-24T20:49:00.142944+05:30'
last_checked: '2026-06-24T20:49:00.142944+05:30'
health_score: 100
---

# tikz pgf - How to offset two bezier paths with specific ratio elegantly? - TeX - LaTeX Stack Exchange

## Summary

- **Path Splitting & Intersection Handling**: The solution leverages the `spath3` library to split the green and teal Bézier paths at specified positions (`0.65` and `0.5`, respectively) using `split at keep start/end`, then constructs a new path connecting these split segments while maintaining geometric continuity.

- **Orthogonal Offset via `nfold`**: The magenta offset path is generated using the `nfold` library's `offset` key, which applies a perpendicular displacement to the newly constructed path segment, ensuring uniform thickness while preserving the original curve's shape.

- **Intersection-Based Construction**: The blue connecting segment is derived by calculating the intersection points between the split paths and the orthogonal markers, enabling precise alignment of the offset path components without manual coordinate adjustments.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T20:49:00.142931+05:30

## Related Tags

- agents
- frontend_ui
- hackernews
- rag
- reddit
- scripts
- threejs
- web-crawled

## Source

Original source: https://tex.stackexchange.com/questions/764072/how-to-offset-two-bezier-paths-with-specific-ratio-elegantly
