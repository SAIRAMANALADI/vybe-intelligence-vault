---
title: PEP 646 – Variadic Generics | peps.python.org
archive_category: model-providers
source_category: ai/resources
source_url: https://peps.python.org/pep-0646/
resource_id: blog:pep-646-variadic-generics-peps-python-org
local_vault_path: ai/resources/pep-646-variadic-generics-peps-python-org.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- models
- openai
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# PEP 646 – Variadic Generics | peps.python.org

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Introduces `TypeVarTuple` for variadic generics, enabling parameterization with an arbitrary number of types (e.g., array shapes in numerical computing).
- Requires unpacking `TypeVarTuple` instances with `*` in type annotations (e.g., `Generic[*Shape]`, `Tuple[*Shape]`).
- Supports variadic generics in classes, functions, and aliases, but restricts multiple unpackings and advanced features like variance/constraints.

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://peps.python.org/pep-0646/

## Local Vault File

Path: [pep-646-variadic-generics-peps-python-org.md](../../ai/resources/pep-646-variadic-generics-peps-python-org.md)
