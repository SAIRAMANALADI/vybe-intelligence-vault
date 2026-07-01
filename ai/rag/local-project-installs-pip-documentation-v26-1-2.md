---
title: Local project installs - pip documentation v26.1.2
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs
published_at: '2026-07-02T04:16:27.952160+05:30'
collected_at: '2026-07-02T04:16:27.952174+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:local-project-installs-pip-documentation-v26-1-2
first_seen: '2026-07-02T04:16:27.952174+05:30'
last_seen: '2026-07-02T04:16:27.952174+05:30'
last_checked: '2026-07-02T04:16:27.952174+05:30'
health_score: 100
---

# Local project installs - pip documentation v26.1.2

## Summary

- Regular install (`pip install path/to/project`) copies project files to Python's site-packages, mirroring a distribution install; suitable for CI/deployment.
- Editable install (`pip install -e path/to/project`) adds project directory to Python's import path without copying files, enabling live code changes during development.
- Modern pip (v21.3+) builds projects in-place by default, improving speed but generating backend-specific artifacts (e.g., `.egg-info`) and potentially breaking parallel builds.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T04:16:27.952160+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs
