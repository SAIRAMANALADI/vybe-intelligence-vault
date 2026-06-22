---
title: Character Class Intersection in Regular Expressions
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://www.regular-expressions.info/charclassintersect.html
published_at: '2026-06-22T11:37:32.803522+05:30'
collected_at: '2026-06-22T11:37:32.803535+05:30'
tags:
- web-crawled
status: active
resource_id: blog:character-class-intersection-in-regular-expression
first_seen: '2026-06-22T11:37:32.803535+05:30'
last_seen: '2026-06-22T11:37:32.803535+05:30'
last_checked: '2026-06-22T11:37:32.803535+05:30'
health_score: 100
---

# Character Class Intersection in Regular Expressions

## Summary

- **Syntax & Flavors**: Character class intersection (`[class&&[intersect]]`) is supported in Java, ICU, JGsoft V2, and Ruby 1.9+, enabling matching of characters present in two sets (e.g., `[a-z&&[^aeiuo]]` matches consonants).

- **Precedence & Negation**: Intersection precedence over negation varies by flavor (e.g., Java 9+ treats `[^1234&&3456]` as `[^34]`, while Java 8 and prior treat it as `[56]`).

- **Notational Rules**: Nested brackets are optional in Java/ICU/Ruby unless negation is involved; JGsoft requires strict bracketing, and leading/trailing `&&` is invalid in most flavors.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T11:37:32.803522+05:30

## Related Tags

- web-crawled

## Source

Original source: https://www.regular-expressions.info/charclassintersect.html
