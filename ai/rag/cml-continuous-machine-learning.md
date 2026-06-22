---
title: CML · Continuous Machine Learning
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://cml.dev
published_at: '2026-06-22T11:20:26.139903+05:30'
collected_at: '2026-06-22T11:20:26.139917+05:30'
tags:
- benchmark
- producthunt
- rag
- web-crawled
- workflows
status: active
resource_id: blog:cml-continuous-machine-learning
first_seen: '2026-06-22T11:20:26.139917+05:30'
last_seen: '2026-06-22T11:20:26.139917+05:30'
last_checked: '2026-06-22T11:20:26.139917+05:30'
health_score: 100
---

# CML · Continuous Machine Learning

## Summary

- **CI/CD Integration**: CML workflows automate ML model training, evaluation, and reporting across GitLab, GitHub, and Bitbucket using Docker containers (`iterativeai/cml:0-dvc2-base1`), with steps for dependency installation (`pip install -r requirements.txt`), model training (`python train.py`), and report generation (metrics, plots, and comments via `cml comment create`).

- **DVC Integration**: Advanced workflows leverage DVC (`dvc pull`, `dvc repro`, `dvc metrics diff`, `dvc plots diff`) to manage data/ML pipelines, compare metrics between branches, and generate visual reports (e.g., confusion matrices, training loss plots) embedded in markdown comments.

- **Cloud/GPU Scaling**: Supports dynamic cloud runner deployment (AWS/Azure/GCP/K8s) via `cml runner launch` with GPU support (e.g., `--cloud-type=p2.xlarge`), enabling resource-intensive tasks (e.g., style transfer) and persistent self-hosted runners for long-running jobs (up to 35 days).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:20:26.139903+05:30

## Related Tags

- benchmark
- producthunt
- rag
- web-crawled
- workflows

## Source

Original source: https://cml.dev
