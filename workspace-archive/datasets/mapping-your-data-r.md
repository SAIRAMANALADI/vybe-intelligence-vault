---
title: Mapping your data | R
archive_category: datasets
source_category: ai/resources
source_url: https://campus.datacamp.com/courses/machine-learning-in-the-tidyverse/foundations-of-tidy-machine-learning?ex=6
resource_id: blog:mapping-your-data-r
local_vault_path: ai/resources/mapping-your-data-r.md
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

# Mapping your data | R

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Use `map()` with `mutate()` to compute mean population per country (`mean_pop`) by applying `mean()` to the `population` column within each nested data frame.
- Apply `unnest()` to `pop_nested$mean_pop` to convert the list column into a numeric vector, storing the result in `pop_mean`.
- The `gapminder` dataset is processed via `gap_nested %>% mutate(mean_pop = map(population, ~mean(.x)))` before unnesting.

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://campus.datacamp.com/courses/machine-learning-in-the-tidyverse/foundations-of-tidy-machine-learning?ex=6

## Local Vault File

Path: [mapping-your-data-r.md](../../ai/resources/mapping-your-data-r.md)
