---
title: Local project installs - pip documentation v26.1.2
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs
published_at: '2026-07-02T20:08:11.498625+05:30'
collected_at: '2026-07-02T20:08:11.498639+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:local-project-installs-pip-documentation-v26-1-2
first_seen: '2026-07-02T20:08:11.498639+05:30'
last_seen: '2026-07-02T20:08:11.498639+05:30'
last_checked: '2026-07-02T20:08:11.498639+05:30'
health_score: 100
---

# Local project installs - pip documentation v26.1.2

## Summary

- **Regular Install**: Installs a local project into the Python environment by copying files, mimicking a standard package installation (`pip install path/to/project`). Used in CI/CD and deployments for accurate environment replication.

- **Editable Install**: Installs a local project in "development mode" (`pip install -e path/to/project`), adding the project directory to Python’s import path without copying files, ideal for active development.

- **Build Artifacts & Backend Behavior**: Post-pip v21.3, local builds invoke the build system in-place, improving speed but potentially littering directories with artifacts (e.g., `.egg-info`) and disrupting parallel builds in backends like `setuptools`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T20:08:11.498625+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs
