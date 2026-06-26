---
title: Installation — JupyterLab 4.6.0 documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://jupyterlab.rtfd.io/en/latest/getting_started/installation.html
published_at: '2026-06-26T15:30:12.298810+05:30'
collected_at: '2026-06-26T15:30:12.298826+05:30'
tags:
- producthunt
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:installation-jupyterlab-4-6-0-documentation
first_seen: '2026-06-26T15:30:12.298826+05:30'
last_seen: '2026-06-26T15:30:12.298826+05:30'
last_checked: '2026-06-26T15:30:12.298826+05:30'
health_score: 100
---

# Installation — JupyterLab 4.6.0 documentation

## Summary

- **Installation Methods**: JupyterLab can be installed via `conda` (`conda install -c conda-forge jupyterlab`), `mamba` (`mamba install -c conda-forge jupyterlab`), `pip` (`pip install jupyterlab`), `pipenv` (`pipenv install jupyterlab`), or Docker (using `-e JUPYTER_ENABLE_LAB=yes` flag in a Jupyter Docker image).

- **Proxy/Firewall Workarounds**: For corporate networks, set `HTTP_PROXY`/`HTTPS_PROXY` environment variables or configure `conda`/`pip`/`npm` to bypass SSL (`conda config --set ssl_verify False`, `npm set strict-ssl False`) or trust hosts (`pip install --trusted-host`).

- **Browser & Compatibility**: JupyterLab supports modern browsers (Firefox, Chrome, Safari, Edge), while older versions may work but lack guarantees. Extensions may require `npm`/`jlpm` with proper registry/proxy configuration.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-26T15:30:12.298810+05:30

## Related Tags

- producthunt
- reddit
- web-crawled
- workflows

## Source

Original source: https://jupyterlab.rtfd.io/en/latest/getting_started/installation.html
