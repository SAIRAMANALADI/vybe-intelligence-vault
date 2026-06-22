---
title: HTML Standard
archive_category: rag-systems
source_category: ai/rag
source_url: https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-location-interface
resource_id: blog:html-standard
local_vault_path: ai/rag/html-standard.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- animation
- frontend_ui
- hackernews
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# HTML Standard

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Cross-origin security model for `Window`, `WindowProxy`, and `Location` objects**: Defines security checks via `[[CrossOriginPropertyDescriptorMap]]` internal slot, restricting property access across origins unless explicitly allowed (e.g., `href`, `location`, `postMessage`). Throws `SecurityError` if cross-origin access violates policies.

- **Abstract operations for cross-origin property handling**: `CrossOriginProperties(O)` returns a predefined list of accessible properties for `Window`/

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-location-interface

## Local Vault File

Path: [html-standard.md](../../ai/rag/html-standard.md)
