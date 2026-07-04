---
title: Styles and CSS | Docs
archive_category: frontend-ai-ui
source_category: web-development/tailwind
source_url: https://docs.astro.build/en/guides/styling/#tailwind
resource_id: blog:styles-and-css-docs
local_vault_path: web-development/tailwind/styles-and-css-docs.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- frontend_ui
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Styles and CSS | Docs

## Why This Is In The Archive

- Matched archive category: `Frontend AI UI`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Astro supports **scoped styles** via `<style>` tags, which compile to unique selectors (e.g., `h1[data-astro-cid-xxx]`) to prevent style leakage, while preserving specificity and allowing low-specificity selectors like `h1 {}` to work safely within components.

- **CSS import order** determines precedence: `<link>` tags (lowest), imported stylesheets, and scoped styles (highest). Conflicts with equal specificity resolve to the last imported/defined rule.

- **Tailwind CSS** integration in Astr

## Use Cases

- AI chat bubbled views
- Tailwind bento dashboards
- Aesthetic layout templates

## Source

Original source URL: https://docs.astro.build/en/guides/styling/#tailwind

## Local Vault File

Path: [styles-and-css-docs.md](../../web-development/tailwind/styles-and-css-docs.md)
