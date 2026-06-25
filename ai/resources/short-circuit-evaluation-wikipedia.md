---
title: Short-circuit evaluation - Wikipedia
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://en.wikipedia.org/wiki/Short-circuit_evaluation
published_at: '2026-06-24T20:52:51.507124+05:30'
collected_at: '2026-06-24T20:52:51.507135+05:30'
tags:
- benchmark
- hackernews
- paper
- web-crawled
status: active
resource_id: blog:short-circuit-evaluation-wikipedia
first_seen: '2026-06-24T20:52:51.507135+05:30'
last_seen: '2026-06-24T20:52:51.507135+05:30'
last_checked: '2026-06-24T20:52:51.507135+05:30'
health_score: 100
---

# Short-circuit evaluation - Wikipedia

## Summary

- **Mechanism**: Short-circuit evaluation skips evaluating the second operand in logical `AND`/`OR` operations if the first operand determines the result (`false` for `AND`, `true` for `OR`), optimizing performance and enabling safe constructs (e.g., `if (ptr && ptr->method())`).

- **Language Support**: Common in languages like C/C++, Java, Python, and JavaScript (with `&&`/`||`), while others (e.g., Ada, Delphi) offer both short-circuit and standard Boolean operators; XOR cannot short-circuit as both operands are required.

- **Formalization & Impact**: Formalized via Hoare logic; introduces sequence points in imperative languages (e.g., C/C++), ensuring side effects in the first operand complete before evaluating the second, but complicates formal reasoning (e.g., Dijkstra’s critique on non-distributivity).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T20:52:51.507124+05:30

## Related Tags

- benchmark
- hackernews
- paper
- web-crawled

## Source

Original source: https://en.wikipedia.org/wiki/Short-circuit_evaluation
