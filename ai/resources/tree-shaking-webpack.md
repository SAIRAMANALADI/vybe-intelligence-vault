---
title: Tree Shaking | webpack
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free
published_at: '2026-06-25T16:46:08.321983+05:30'
collected_at: '2026-06-25T16:46:08.321995+05:30'
tags:
- frontend_ui
- web-crawled
status: active
resource_id: blog:tree-shaking-webpack
first_seen: '2026-06-25T16:46:08.321995+05:30'
last_seen: '2026-06-25T16:46:08.321995+05:30'
last_checked: '2026-06-25T16:46:08.321995+05:30'
health_score: 100
---

# Tree Shaking | webpack

## Summary

- **Tree Shaking Mechanism**: Relies on static ES2015 module syntax (`import`/`export`) for dead-code elimination, popularized by Rollup and supported in Webpack 2+ via `usedExports` optimization.
- **Side Effects Flag**: Uses `package.json`'s `"sideEffects"` property (`false` or array of glob patterns) to mark modules/files with side effects (e.g., CSS imports), enabling Webpack to safely prune unused exports.
- **Optimization Hierarchy**: `"sideEffects"` is more effective than `usedExports` (tree shaking) as it skips entire module subtrees, while `usedExports` relies on Terser to detect side effects in statements, often requiring `/*#__PURE__*/` annotations for precision.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-25T16:46:08.321983+05:30

## Related Tags

- frontend_ui
- web-crawled

## Source

Original source: https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free
