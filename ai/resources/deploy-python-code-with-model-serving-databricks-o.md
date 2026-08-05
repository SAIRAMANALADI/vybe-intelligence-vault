---
title: Deploy Python code with Model Serving | Databricks on AWS
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.databricks.com/en/machine-learning/model-serving/deploy-custom-models.html
published_at: '2026-08-05T14:37:06.530714+05:30'
collected_at: '2026-08-05T14:37:06.530727+05:30'
tags:
- models
- web-crawled
status: active
resource_id: blog:deploy-python-code-with-model-serving-databricks-o
first_seen: '2026-08-05T14:37:06.530727+05:30'
last_seen: '2026-08-05T14:37:06.530727+05:30'
last_checked: '2026-08-05T14:37:06.530727+05:30'
health_score: 100
---

# Deploy Python code with Model Serving | Databricks on AWS

## Summary

- **Custom Python Models via `pyfunc`**: MLflow's `pyfunc` enables deployment of arbitrary Python code or unsupported frameworks by requiring two key functions: `load_context` (for one-time initialization) and `predict` (for per-request inference), optimizing performance by minimizing repeated artifact loading.

- **Logging & Dependency Handling**: Custom models must explicitly specify `mlflow` (not `mlflow-skinny`) in `pip_requirements` when logged on Databricks Runtime ML to ensure Model Serving compatibility, and can include shared organizational code via the `code_path` parameter for modularity.

- **Serving & Post-Processing**: After logging, models are registered and deployed to Model Serving endpoints, where raw outputs can be post-processed (e.g., via `format_outputs`) or preprocessed (e.g., via `format_inputs`) before serving, as demonstrated in the provided notebook example.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T14:37:06.530714+05:30

## Related Tags

- models
- web-crawled

## Source

Original source: https://docs.databricks.com/en/machine-learning/model-serving/deploy-custom-models.html
