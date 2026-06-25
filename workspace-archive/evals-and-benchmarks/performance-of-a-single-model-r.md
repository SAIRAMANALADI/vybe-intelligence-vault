---
title: Performance of a single model | R
archive_category: evals-and-benchmarks
source_category: ai/resources
source_url: https://campus.datacamp.com/courses/machine-learning-in-the-tidyverse/build-tune-evaluate-classification-models?ex=6
resource_id: blog:performance-of-a-single-model-r
local_vault_path: ai/resources/performance-of-a-single-model-r.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Performance of a single model | R

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Confusion Matrix**: Use `table(validate_actual, validate_predicted)` to generate a confusion matrix comparing actual (`validate_actual`) and predicted (`validate_predicted`) binary values.

- **Accuracy Calculation**: Compute accuracy using `accuracy(validate_actual, validate_predicted)` to measure the proportion of correct predictions (true positives + true negatives) out of all predictions.

- **Precision & Recall**: Calculate precision with `precision(validate_actual, validate_predicted)`

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://campus.datacamp.com/courses/machine-learning-in-the-tidyverse/build-tune-evaluate-classification-models?ex=6

## Local Vault File

Path: [performance-of-a-single-model-r.md](../../ai/resources/performance-of-a-single-model-r.md)
