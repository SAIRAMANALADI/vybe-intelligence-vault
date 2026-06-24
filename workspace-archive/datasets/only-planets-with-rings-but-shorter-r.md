---
title: Only planets with rings but shorter | R
archive_category: datasets
source_category: ai/resources
source_url: https://campus.datacamp.com/courses/free-introduction-to-r/chapter-5-data-frames?ex=10
resource_id: blog:only-planets-with-rings-but-shorter-r
local_vault_path: ai/resources/only-planets-with-rings-but-shorter-r.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- dataset
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Only planets with rings but shorter | R

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- `subset()` function filters data frames based on specified conditions, reducing the need for intermediate variables (e.g., `rings_vector`).
- The `subset()` syntax is `subset(data_frame, subset = condition)`, where `condition` is a logical expression (e.g., `rings` or `diameter < 1`).
- To filter planets with diameter smaller than Earth (`diameter < 1`), use `subset(planets_df, subset = diameter < 1)`.

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://campus.datacamp.com/courses/free-introduction-to-r/chapter-5-data-frames?ex=10

## Local Vault File

Path: [only-planets-with-rings-but-shorter-r.md](../../ai/resources/only-planets-with-rings-but-shorter-r.md)
