---
title: COSINE DISTANCE, COSINE SIMILARITY, ANGULAR COSINE DISTANCE, ANGULAR COSINE
  SIMILARITY
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/cosdist.htm
published_at: '2026-08-04T22:44:22.205239+05:30'
collected_at: '2026-08-04T22:44:22.205247+05:30'
tags:
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:cosine-distance-cosine-similarity-angular-cosine-d
first_seen: '2026-08-04T22:44:22.205247+05:30'
last_seen: '2026-08-04T22:44:22.205247+05:30'
last_checked: '2026-08-04T22:44:22.205247+05:30'
health_score: 100
---

# COSINE DISTANCE, COSINE SIMILARITY, ANGULAR COSINE DISTANCE, ANGULAR COSINE SIMILARITY

## Summary

- **Cosine Metrics Definitions**:
  - **Cosine Similarity**: \( \frac{\sum_{i=1}^{n}{x_{i} y_{i}}}{\sqrt{\sum_{i=1}^{n}{x_{i}^{2}}} \sqrt{\sum_{i=1}^{n}{y_{i}^{2}}}} \)
  - **Cosine Distance**: \( 1 - \text{Cosine Similarity} \) (valid for positive values only, not a proper distance metric).
  - **Angular Cosine Distance**: \( \frac{c \arccos(\text{Cosine Similarity})}{\pi} \) (where \( c = 2 \) for non-negative inputs, \( c = 1 \) otherwise; proper distance metric).

- **Syntax & Implementation**:
  - Four LET subcommands: `COSINE DISTANCE`, `COSINE SIMILARITY`, `ANGULAR COSINE DISTANCE`, `ANGULAR COSINE SIMILARITY`.
  - Computes metrics between two response variables (`Y1`, `Y2`), storing results in a parameter (`A`).
  - Negative values prevent cosine distance computation but allow similarity calculation.

- **Updates & Usage**:
  - **2018/08 Update**: Revised angular cosine distance formula for negative-value handling.
  - Example usage: `LET A = COSINE DISTANCE Y1 Y2 SUBSET Y1 > 0 SUBSET Y2 > 0`.
  - Visualization commands (`COSINE DISTANCE PLOT`, etc.) generate comparative plots for metrics.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T22:44:22.205239+05:30

## Related Tags

- hackernews
- reddit
- web-crawled

## Source

Original source: https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/cosdist.htm
