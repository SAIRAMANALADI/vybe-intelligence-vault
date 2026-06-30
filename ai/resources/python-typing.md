---
title: typing/conformance at main · python/typing · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/python/typing/tree/main/conformance
published_at: '2026-06-30T15:40:09.363342+05:30'
collected_at: '2026-06-30T15:40:09.363358+05:30'
tags:
- scripts
- web-crawled
- workflows
status: active
resource_id: github:python/typing
first_seen: '2026-06-30T15:40:09.363358+05:30'
last_seen: '2026-06-30T15:40:09.363358+05:30'
last_checked: '2026-06-30T15:40:09.363358+05:30'
health_score: 100
---

# typing/conformance at main · python/typing · GitHub

## Summary

- **Test Suite Structure**: Organized into 22 chapters mirroring the [Python typing spec](https://typing.python.org/en/latest/spec/), with test files named after spec sections (e.g., `generics_paramspec_basic_usage.py`) and grouped by functionality like generics, protocols, and literals.
- **Test Case Conventions**: Uses `# E` (must error), `# E?` (may error), and `# E[tag]` (exactly one error among tagged lines) comments to validate static type checker behavior against the spec, with human-readable explanations and spec references.
- **Conformance Workflow**: Requires manual scoring for type checker output validation due to differences in error reporting; automated checks via `errors_diff` and `conformance_automated` fields in `.toml` files, with `ignore_errors` for irrelevant errors and tagging for line-number flexibility.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T15:40:09.363342+05:30

## Related Tags

- scripts
- web-crawled
- workflows

## Source

Original source: https://github.com/python/typing/tree/main/conformance
