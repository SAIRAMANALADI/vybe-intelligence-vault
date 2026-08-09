---
title: InfluenceFlower
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://influencemap.cmlab.dev/
published_at: '2026-08-10T03:29:51.462246+05:30'
collected_at: '2026-08-10T03:29:51.462254+05:30'
tags:
- dataset
- paper
- semantic-scholar
- web-crawled
status: active
resource_id: blog:influenceflower
first_seen: '2026-08-10T03:29:51.462254+05:30'
last_seen: '2026-08-10T03:29:51.462254+05:30'
last_checked: '2026-08-10T03:29:51.462254+05:30'
health_score: 100
---

# InfluenceFlower

## Summary

- **Visualization Methodology**: Influence Flower uses blue arcs for incoming influence (thickness = reference count) and red arcs for outgoing influence (thickness = citation count), with node size/color representing influence volume and composition.

- **Influence Scoring Mechanism**: Scores are derived from citation flows, normalized by entity count per paper to prevent bias; node color indicates net influence direction (blue = entity influenced center more, red = center influenced entity more).

- **Data Pipeline**: Computed using OpenAlex (2025-05-30 release) with 268M papers, 103M authors, and 2.64B citations; scoring uses snapshot data while entity names are fetched live, potentially causing minor discrepancies.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T03:29:51.462246+05:30

## Related Tags

- dataset
- paper
- semantic-scholar
- web-crawled

## Source

Original source: https://influencemap.cmlab.dev/
