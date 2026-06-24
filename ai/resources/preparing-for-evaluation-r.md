---
title: Preparing for evaluation | R
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://campus.datacamp.com/courses/machine-learning-in-the-tidyverse/build-tune-evaluate-regression-models?ex=6
published_at: '2026-06-24T10:34:38.585111+05:30'
collected_at: '2026-06-24T10:34:38.585123+05:30'
tags:
- benchmark
- web-crawled
status: active
resource_id: blog:preparing-for-evaluation-r
first_seen: '2026-06-24T10:34:38.585123+05:30'
last_seen: '2026-06-24T10:34:38.585123+05:30'
last_checked: '2026-06-24T10:34:38.585123+05:30'
health_score: 100
---

# Preparing for evaluation | R

## Summary

- Extract actual `life_expectancy` from validate partitions and store in `validate_actual` column using `map(validate, ~.x$life_expectancy)`
- Predict `life_expectancy` for each validate partition using `map2()` with `predict()` function: `map2(.x = model, .y = validate, ~predict(.x, newdata = .y))`
- Store results in `validate_predicted` column within `cv_prep_lm` dataframe

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T10:34:38.585111+05:30

## Related Tags

- benchmark
- web-crawled

## Source

Original source: https://campus.datacamp.com/courses/machine-learning-in-the-tidyverse/build-tune-evaluate-regression-models?ex=6
