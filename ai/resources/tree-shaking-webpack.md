---
title: Tree Shaking | webpack
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://webpack.js.org/guides/tree-shaking/
published_at: '2026-06-29T01:26:18.187616+05:30'
collected_at: '2026-06-29T01:26:18.187630+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:tree-shaking-webpack
first_seen: '2026-06-29T01:26:18.187630+05:30'
last_seen: '2026-06-29T01:26:18.187630+05:30'
last_checked: '2026-06-29T01:26:18.187630+05:30'
health_score: 100
---

# Tree Shaking | webpack

## Summary

- **Tree shaking** in JavaScript relies on ES2015 static `import`/`export` syntax for dead-code elimination, popularized by tools like Rollup and Webpack.
- **`sideEffects` flag** in `package.json` enables module-level pruning: `false` marks pure modules (safe to drop if unused), while arrays specify files with side effects (e.g., CSS).
- **`usedExports` optimization** (tree shaking) works with Terser to remove unused exports but is less effective than `sideEffects`; dynamic `import()` can use `webpackExports` magic comments for granular control.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-29T01:26:18.187616+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://webpack.js.org/guides/tree-shaking/
