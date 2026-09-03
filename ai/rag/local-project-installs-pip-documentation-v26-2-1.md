---
title: Local project installs - pip documentation v26.2.1
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs
published_at: '2026-09-04T00:57:51.577399+05:30'
collected_at: '2026-09-04T00:57:51.577413+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:local-project-installs-pip-documentation-v26-2-1
first_seen: '2026-09-04T00:57:51.577413+05:30'
last_seen: '2026-09-04T00:57:51.577413+05:30'
last_checked: '2026-09-04T00:57:51.577413+05:30'
health_score: 100
---

# Local project installs - pip documentation v26.2.1

## Summary

- **Regular Install**: Installs a local project into the Python environment by copying files to the site-packages directory, simulating a standard package installation (`pip install path/to/project`). Suitable for CI/CD and deployments as it mirrors production installation behavior.

- **Editable Install**: Installs a local project in "development mode" (`pip install -e path/to/project`), adding the project directory to Python's import path without copying files. Changes to non-Python code (e.g., C extensions) require rebuilds; metadata changes (e.g., version) require reinstallation.

- **Build Artifacts**: Pip 21.3+ builds projects in-place, improving speed but causing backend-specific side effects (e.g., `setuptools` generating `.egg-info` in the project directory). Parallel builds may be unsupported due to in-place execution.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-09-04T00:57:51.577399+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs
