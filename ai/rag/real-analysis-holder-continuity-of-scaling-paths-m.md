---
title: real analysis - Hölder continuity of scaling paths - Mathematics Stack Exchange
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://math.stackexchange.com/questions/5141629/h%C3%B6lder-continuity-of-scaling-paths
published_at: '2026-06-24T23:19:13.191203+05:30'
collected_at: '2026-06-24T23:19:13.191217+05:30'
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:real-analysis-holder-continuity-of-scaling-paths-m
first_seen: '2026-06-24T23:19:13.191217+05:30'
last_seen: '2026-06-24T23:19:13.191217+05:30'
last_checked: '2026-06-24T23:19:13.191217+05:30'
health_score: 100
---

# real analysis - Hölder continuity of scaling paths - Mathematics Stack Exchange

## Summary

- **Continuity Proof**: For \( u \in L^p(\mathbb{R}^n) \), the scaling path \( t \mapsto u_t \) is continuous in \( L^p \)-norm. The proof leverages density of \( C^\infty_c(\mathbb{R}^n) \) in \( L^p \) and a linear approximation via Taylor’s theorem for smooth compactly supported functions, extended to general \( L^p \) functions via approximation.

- **Hölder-Type Estimate for Smooth Functions**: For \( u \in C^\infty_c(\mathbb{R}^n) \), the \( L^p \)-norm difference \( \|u_s - u_t\|_p \) satisfies:
  \[
  \|u_s - u_t\|_p^p \leq C |s - t|^p \|u'\|_\infty |B| + o(|s - t|^{2p}),
  \]
  where \( B \) is a bounding box for \( \operatorname{supp} u \), implying local Hölder continuity with exponent \( \alpha = 1/p \).

- **General \( L^p \) Case**: For arbitrary \( u \in L^p(\mathbb{R}^n) \), continuity follows from density arguments: approximate \( u \) by \( v \in C^\infty_c(\mathbb{R}^n) \), apply the smooth-case estimate to \( v \), and bound \( \|u_s - u_t\|_p \) via triangle inequality. Hölder continuity in the general case requires additional regularity assumptions (e.g., \( u \in C^1 \) with controlled growth of \( u' \)).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T23:19:13.191203+05:30

## Related Tags

- hackernews
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://math.stackexchange.com/questions/5141629/h%C3%B6lder-continuity-of-scaling-paths
