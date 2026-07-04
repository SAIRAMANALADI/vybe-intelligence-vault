---
title: You can't unit test for taste · Karl Tryggvason - Developer Blog
archive_category: agent-frameworks
source_category: ai/agents
source_url: https://dev.karltryggvason.com/you-cant-unit-test-for-taste/
resource_id: blog:you-can-t-unit-test-for-taste-karl-tryggvason-deve
local_vault_path: ai/agents/you-can-t-unit-test-for-taste-karl-tryggvason-deve.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- agents
- anthropic
- benchmark
- dataset
- hackernews
- models
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# You can't unit test for taste · Karl Tryggvason - Developer Blog

## Why This Is In The Archive

- Matched archive category: `Agent Frameworks`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: dataset
- Selection reasons:
  - Valuable developer reference

## Summary

- **Pipeline Architecture**: Python-based pipeline using GeoNames dataset (filtered via DuckDB/Parquet) to extract ~725K POIs globally, with Shapely/Pyproj for geospatial filtering (50km buffer) and route-specific parquet outputs (e.g., 10K POIs for Cape Town-Magadan route).

- **LLM Integration & Hallucinations**: Anthropic Haiku LLM used for POI significance scoring (batched API calls, $10/route cost), but abandoned for text generation due to hallucinations (e.g., misattributing Central Park);

## Use Cases

- Multi-agent coordination
- Structured tool usage
- Memory integration

## Source

Original source URL: https://dev.karltryggvason.com/you-cant-unit-test-for-taste/

## Local Vault File

Path: [you-can-t-unit-test-for-taste-karl-tryggvason-deve.md](../../ai/agents/you-can-t-unit-test-for-taste-karl-tryggvason-deve.md)
