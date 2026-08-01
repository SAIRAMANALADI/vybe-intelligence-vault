---
title: How to use the CrUX BigQuery dataset | Chrome UX Report | Chrome for Developers
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.chrome.com/docs/crux/guides/bigquery
published_at: '2026-08-01T09:33:15.224278+05:30'
collected_at: '2026-08-01T09:33:15.224288+05:30'
tags:
- dataset
- hackernews
- web-crawled
status: active
resource_id: blog:how-to-use-the-crux-bigquery-dataset-chrome-ux-rep
first_seen: '2026-08-01T09:33:15.224288+05:30'
last_seen: '2026-08-01T09:33:15.224288+05:30'
last_checked: '2026-08-01T09:33:15.224288+05:30'
health_score: 100
---

# How to use the CrUX BigQuery dataset | Chrome UX Report | Chrome for Developers

## Summary

- **CrUX BigQuery Dataset Structure**: Data is organized in BigQuery under `chrome-ux-report` project, with datasets for all countries (`all`) and country-specific tables (e.g., `country_ca`), containing monthly tables (YYYYMM format) with schema including `origin`, `effective_connection_type.name`, `form_factor.name`, and UX metrics (FCP, LCP, CLS, INP, etc.) stored as histogram bins with `start`, `end`, and `density` fields.

- **Querying Performance Metrics**: Performance data is extracted using SQL queries with `UNNEST` to flatten histogram arrays (e.g., `first_contentful_paint.histogram.bin`), filtering by `origin`, `form_factor.name`, and bin ranges (e.g., `fcp.start < 1000` for FCP < 1000ms), and aggregating densities (e.g., `SUM(fcp.density)`) to compute percentages of fast experiences.

- **Historical Analysis & Limitations**: Time-series analysis is enabled via wildcard queries (e.g., `` `chrome-ux-report.all.*` ``) to group and order data by `_TABLE_SUFFIX` (YYYYMM), while BigQuery imposes a 1TB/month query limit (standard pricing applies beyond this).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T09:33:15.224278+05:30

## Related Tags

- dataset
- hackernews
- web-crawled

## Source

Original source: https://developer.chrome.com/docs/crux/guides/bigquery
