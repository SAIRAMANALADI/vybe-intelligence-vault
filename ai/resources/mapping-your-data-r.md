---
title: Mapping your data | R
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://campus.datacamp.com/courses/machine-learning-in-the-tidyverse/foundations-of-tidy-machine-learning?ex=6
published_at: '2026-07-02T15:15:14.937421+05:30'
collected_at: '2026-07-02T15:15:14.937433+05:30'
tags:
- dataset
- web-crawled
status: active
resource_id: blog:mapping-your-data-r
first_seen: '2026-07-02T15:15:14.937433+05:30'
last_seen: '2026-07-02T15:15:14.937433+05:30'
last_checked: '2026-07-02T15:15:14.937433+05:30'
health_score: 100
---

# Mapping your data | R

## Summary

- Use `map()` with `mutate()` to compute mean population per country (`mean_pop`) by applying `mean()` to the `population` column within each nested data frame.
- Apply `unnest()` to `pop_nested$mean_pop` to convert the list column into a numeric vector, storing the result in `pop_mean`.
- The `gapminder` dataset is processed via `gap_nested %>% mutate(mean_pop = map(population, ~mean(.x)))` before unnesting.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-02T15:15:14.937421+05:30

## Related Tags

- dataset
- web-crawled

## Source

Original source: https://campus.datacamp.com/courses/machine-learning-in-the-tidyverse/foundations-of-tidy-machine-learning?ex=6
