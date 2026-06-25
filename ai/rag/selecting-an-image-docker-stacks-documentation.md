---
title: Selecting an Image — Docker Stacks documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html
published_at: '2026-06-24T22:57:39.399381+05:30'
collected_at: '2026-06-24T22:57:39.399396+05:30'
tags:
- frontend_ui
- hackernews
- producthunt
- rag
- reddit
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:selecting-an-image-docker-stacks-documentation
first_seen: '2026-06-24T22:57:39.399396+05:30'
last_seen: '2026-06-24T22:57:39.399396+05:30'
last_checked: '2026-06-24T22:57:39.399396+05:30'
health_score: 100
---

# Selecting an Image — Docker Stacks documentation

## Summary

- **Image Hierarchy**: Core stacks are built hierarchically, starting from `jupyter/docker-stacks-foundation` (base OS + package managers) to `jupyter/base-notebook` (Jupyter apps) and extending to specialized stacks (e.g., `scipy-notebook`, `r-notebook`, `tensorflow-notebook`).

- **Pre-Built vs Custom**: Pre-built images from Quay.io are recommended for standard use cases; custom builds are required for system-level package additions, preinstalling large libraries, or organization-specific CI customization.

- **Stack Variants**: Key variants include `minimal-notebook` (CLI tools + TeX), `datascience-notebook` (Python/R/Julia), `pyspark-notebook` (Spark + Hadoop), and ML-focused stacks (`tensorflow-notebook`, `pytorch-notebook`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T22:57:39.399381+05:30

## Related Tags

- frontend_ui
- hackernews
- producthunt
- rag
- reddit
- scripts
- web-crawled
- workflows

## Source

Original source: https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html
