---
title: Selecting an Image — Docker Stacks documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html
published_at: '2026-06-22T11:24:14.670545+05:30'
collected_at: '2026-06-22T11:24:14.670560+05:30'
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
first_seen: '2026-06-22T11:24:14.670560+05:30'
last_seen: '2026-06-22T11:24:14.670560+05:30'
last_checked: '2026-06-22T11:24:14.670560+05:30'
health_score: 100
---

# Selecting an Image — Docker Stacks documentation

## Summary

- **Image Hierarchy**: Core stacks follow a layered inheritance model starting from `jupyter/docker-stacks-foundation` (base with conda/mamba, unprivileged user `jovyan`, and system tools) to specialized stacks like `jupyter/scipy-notebook`, `jupyter/r-notebook`, and `jupyter/tensorflow-notebook`, each adding domain-specific packages while inheriting dependencies.

- **Pre-built vs Custom**: Pre-built images from Quay.io are optimized for common use cases (e.g., data science, R, Julia), while custom builds are required for system-level modifications (e.g., preinstalling large libraries, adding OS packages) or organization-specific CI/CD workflows.

- **Key Stack Features**:
  - `jupyter/base-notebook`: Minimal Jupyter server (JupyterLab/Notebook) with HTTPS options.
  - `jupyter/minimal-notebook`: Adds CLI tools (git, curl, TeX Live) for document conversion.
  - `jupyter/datascience-notebook`: Integrates Python (scipy), R, and Julia ecosystems with `rpy2` for cross-language interoperability.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:24:14.670545+05:30

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
