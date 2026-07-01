---
title: Local project installs - pip documentation v26.1.2
archive_category: vector-databases
source_category: ai/rag
source_url: https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs
resource_id: blog:local-project-installs-pip-documentation-v26-1-2
local_vault_path: ai/rag/local-project-installs-pip-documentation-v26-1-2.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# Local project installs - pip documentation v26.1.2

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- Regular install (`pip install path/to/project`) copies project files to Python's site-packages, mirroring a distribution install; suitable for CI/deployment.
- Editable install (`pip install -e path/to/project`) adds project directory to Python's import path without copying files, enabling live code changes during development.
- Modern pip (v21.3+) builds projects in-place by default, improving speed but generating backend-specific artifacts (e.g., `.egg-info`) and potentially breaking paralle

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://pip.pypa.io/en/stable/topics/local-project-installs/#editable-installs

## Local Vault File

Path: [local-project-installs-pip-documentation-v26-1-2.md](../../ai/rag/local-project-installs-pip-documentation-v26-1-2.md)
