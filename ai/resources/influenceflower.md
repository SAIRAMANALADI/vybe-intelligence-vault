---
title: InfluenceFlower
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://influencemap.cmlab.dev/
published_at: '2026-08-01T16:25:31.954776+05:30'
collected_at: '2026-08-01T16:25:31.954786+05:30'
tags:
- dataset
- paper
- semantic-scholar
- web-crawled
status: active
resource_id: blog:influenceflower
first_seen: '2026-08-01T16:25:31.954786+05:30'
last_seen: '2026-08-01T16:25:31.954786+05:30'
last_checked: '2026-08-01T16:25:31.954786+05:30'
health_score: 100
---

# InfluenceFlower

## Summary

- **Visualization Methodology**: Influence Flower uses blue arcs for incoming influence (thickness proportional to references) and red arcs for outgoing influence (thickness proportional to citations), with node size/color reflecting influence volume and composition.

- **Influence Scoring Mechanism**: Scores are derived from citation flows, normalized by cited entities to prevent bias, with edge thickness indicating influence strength and node color indicating net influence direction (blue = outer entities influence center more, red = center influences outer entities more).

- **Data Pipeline**: Computes influence using OpenAlex (268M papers, 103M authors, 2.64B citations), replacing MAG; scoring is based on dataset snapshots, while entity names are fetched live from OpenAlex API, potentially causing minor discrepancies.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T16:25:31.954776+05:30

## Related Tags

- dataset
- paper
- semantic-scholar
- web-crawled

## Source

Original source: https://influencemap.cmlab.dev/
