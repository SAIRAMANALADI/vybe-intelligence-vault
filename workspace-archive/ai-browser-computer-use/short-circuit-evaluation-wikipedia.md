---
title: Short-circuit evaluation - Wikipedia
archive_category: ai-browser-computer-use
source_category: ai/resources
source_url: https://en.wikipedia.org/wiki/Short-circuit_evaluation
resource_id: blog:short-circuit-evaluation-wikipedia
local_vault_path: ai/resources/short-circuit-evaluation-wikipedia.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- hackernews
- paper
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Short-circuit evaluation - Wikipedia

## Why This Is In The Archive

- Matched archive category: `AI Browser and Computer Use`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Mechanism**: Short-circuit evaluation skips evaluating the second operand in logical `AND`/`OR` operations if the first operand determines the result (`false` for `AND`, `true` for `OR`), optimizing performance and enabling safe constructs (e.g., `if (ptr && ptr->method())`).

- **Language Support**: Common in languages like C/C++, Java, Python, and JavaScript (with `&&`/`||`), while others (e.g., Ada, Delphi) offer both short-circuit and standard Boolean operators; XOR cannot short-circuit

## Use Cases

- Browser web automation
- GUI action orchestration
- Agent computer control

## Source

Original source URL: https://en.wikipedia.org/wiki/Short-circuit_evaluation

## Local Vault File

Path: [short-circuit-evaluation-wikipedia.md](../../ai/resources/short-circuit-evaluation-wikipedia.md)
