---
title: Preparing for evaluation | R
archive_category: evals-and-benchmarks
source_category: ai/resources
source_url: https://campus.datacamp.com/courses/machine-learning-in-the-tidyverse/build-tune-evaluate-regression-models?ex=6
resource_id: blog:preparing-for-evaluation-r
local_vault_path: ai/resources/preparing-for-evaluation-r.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Preparing for evaluation | R

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Extract actual `life_expectancy` from validate partitions and store in `validate_actual` column using `map(validate, ~.x$life_expectancy)`
- Predict `life_expectancy` for each validate partition using `map2()` with `predict()` function: `map2(.x = model, .y = validate, ~predict(.x, newdata = .y))`
- Store results in `validate_predicted` column within `cv_prep_lm` dataframe

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://campus.datacamp.com/courses/machine-learning-in-the-tidyverse/build-tune-evaluate-regression-models?ex=6

## Local Vault File

Path: [preparing-for-evaluation-r.md](../../ai/resources/preparing-for-evaluation-r.md)
