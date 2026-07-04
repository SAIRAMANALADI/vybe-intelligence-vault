---
title: You can't unit test for taste · Karl Tryggvason - Developer Blog
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://dev.karltryggvason.com/you-cant-unit-test-for-taste/
published_at: '2026-07-05T01:16:27.253413+05:30'
collected_at: '2026-07-05T01:16:27.253419+05:30'
tags:
- agents
- anthropic
- benchmark
- dataset
- hackernews
- models
- reddit
- web-crawled
status: active
resource_id: blog:you-can-t-unit-test-for-taste-karl-tryggvason-deve
first_seen: '2026-07-05T01:16:27.253419+05:30'
last_seen: '2026-07-05T01:16:27.253419+05:30'
last_checked: '2026-07-05T01:16:27.253419+05:30'
health_score: 100
---

# You can't unit test for taste · Karl Tryggvason - Developer Blog

## Summary

- **Pipeline Architecture**: Python-based pipeline using GeoNames dataset (filtered via DuckDB/Parquet) to extract ~725K POIs globally, with Shapely/Pyproj for geospatial filtering (50km buffer) and route-specific parquet outputs (e.g., 10K POIs for Cape Town-Magadan route).

- **LLM Integration & Hallucinations**: Anthropic Haiku LLM used for POI significance scoring (batched API calls, $10/route cost), but abandoned for text generation due to hallucinations (e.g., misattributing Central Park); retained for subjective ranking alongside Wikidata language counts and feature codes.

- **Taste & Bias Challenges**: Per-route manual adjustments required due to geographic/cultural variance (e.g., population bias in dense regions); no ground truth for POI selection, necessitating manual overrides and iterative refinement (e.g., geographic radius filtering to balance rural/urban POIs).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-05T01:16:27.253413+05:30

## Related Tags

- agents
- anthropic
- benchmark
- dataset
- hackernews
- models
- reddit
- web-crawled

## Source

Original source: https://dev.karltryggvason.com/you-cant-unit-test-for-taste/
