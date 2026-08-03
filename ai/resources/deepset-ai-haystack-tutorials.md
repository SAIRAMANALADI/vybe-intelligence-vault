---
title: haystack-tutorials/Contributing.md at main · deepset-ai/haystack-tutorials
  · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/deepset-ai/haystack-tutorials/blob/main/Contributing.md#contributing-to-haystack-tutorials
published_at: '2026-08-03T20:56:13.276289+05:30'
collected_at: '2026-08-03T20:56:13.276301+05:30'
tags:
- scripts
- web-crawled
- workflows
status: active
resource_id: github:deepset-ai/haystack-tutorials
first_seen: '2026-08-03T20:56:13.276301+05:30'
last_seen: '2026-08-03T20:56:13.276301+05:30'
last_checked: '2026-08-03T20:56:13.276301+05:30'
health_score: 100
---

# haystack-tutorials/Contributing.md at main · deepset-ai/haystack-tutorials · GitHub

## Summary

- **Contribution Workflow**: Submit issues for bug reports or new tutorial requests via GitHub; edit/create tutorials in the `tutorials` folder as `.ipynb` files, following the provided template and naming conventions (`index.toml` controls ordering via `weight` and Colab availability via `colab` flag).

- **Environment Setup**: Install dependencies (`pip install -r requirements.txt`) and pre-commit hooks (`pre-commit install`) for formatting/checking before commits; new tutorials require adding entries to `index.toml` (including optional custom `slug` overrides).

- **CI Pipeline**: GitHub Actions automatically validates PRs by running tutorials to ensure error-free execution; red CI checks indicate failures requiring fixes, while green checks confirm successful validation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T20:56:13.276289+05:30

## Related Tags

- scripts
- web-crawled
- workflows

## Source

Original source: https://github.com/deepset-ai/haystack-tutorials/blob/main/Contributing.md#contributing-to-haystack-tutorials
