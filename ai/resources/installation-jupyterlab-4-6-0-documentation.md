---
title: Installation — JupyterLab 4.6.0 documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://jupyterlab.rtfd.io/en/latest/getting_started/installation.html
published_at: '2026-06-22T11:24:10.355658+05:30'
collected_at: '2026-06-22T11:24:10.355671+05:30'
tags:
- producthunt
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:installation-jupyterlab-4-6-0-documentation
first_seen: '2026-06-22T11:24:10.355671+05:30'
last_seen: '2026-06-22T11:24:10.355671+05:30'
last_checked: '2026-06-22T11:24:10.355671+05:30'
health_score: 100
---

# Installation — JupyterLab 4.6.0 documentation

## Summary

- JupyterLab can be installed via `conda` (`conda install -c conda-forge jupyterlab`), `mamba` (`mamba install -c conda-forge jupyterlab`), `uv` (`uv tool install jupyterlab --with pip`), `pip` (`pip install jupyterlab`), or Docker (using `-e JUPYTER_ENABLE_LAB=yes` flag in the container).

- Proxy/firewall issues during installation can be mitigated by configuring `HTTP_PROXY`/`HTTPS_PROXY` environment variables or disabling SSL verification (not recommended) with `conda config --set ssl_verify False` or `npm set strict-ssl False`.

- JupyterLab supports Firefox, Chrome, Safari, and Edge; Jupyverse (FastAPI-based alternative) can be installed via `pip install "jupyverse[auth,jupyterlab]"` or `conda install -c conda-forge jupyverse fps-auth fps-jupyterlab`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T11:24:10.355658+05:30

## Related Tags

- producthunt
- reddit
- web-crawled
- workflows

## Source

Original source: https://jupyterlab.rtfd.io/en/latest/getting_started/installation.html
