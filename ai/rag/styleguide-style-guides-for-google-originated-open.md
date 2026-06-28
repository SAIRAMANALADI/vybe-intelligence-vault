---
title: styleguide | Style guides for Google-originated open-source projects
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings
published_at: '2026-06-29T01:24:17.119666+05:30'
collected_at: '2026-06-29T01:24:17.119678+05:30'
tags:
- benchmark
- frontend_ui
- hackernews
- paper
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:styleguide-style-guides-for-google-originated-open
first_seen: '2026-06-29T01:24:17.119678+05:30'
last_seen: '2026-06-29T01:24:17.119678+05:30'
last_checked: '2026-06-29T01:24:17.119678+05:30'
health_score: 100
---

# styleguide | Style guides for Google-originated open-source projects

## Summary

- **Linting & Static Analysis**: Enforce `pylint` with Google's [pylintrc](https://google.github.io/styleguide/pylintrc) for bug detection; suppress warnings with `pylint: disable=<symbol>` and document rationale. Unused args must be explicitly deleted with a comment (e.g., `# Unused.`).

- **Imports & Packages**: Use absolute imports (`import x`, `from x import y`) for packages/modules; avoid relative imports. For type hints, exempt `typing`, `collections.abc`, and `typing_extensions` from this rule.

- **Exceptions & Error Handling**: Prefer built-in exceptions (e.g., `ValueError`) for programming errors; avoid `assert` for precondition validation. Exceptions must not obscure control flow or critical logic.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T01:24:17.119666+05:30

## Related Tags

- benchmark
- frontend_ui
- hackernews
- paper
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://google.github.io/styleguide/pyguide.html#38-comments-and-docstrings
