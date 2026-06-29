---
title: Using custom elements - Web APIs | MDN
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements
published_at: '2026-06-30T04:04:25.486277+05:30'
collected_at: '2026-06-30T04:04:25.486291+05:30'
tags:
- agents
- frontend_ui
- rag
- web-crawled
status: active
resource_id: blog:using-custom-elements-web-apis-mdn
first_seen: '2026-06-30T04:04:25.486291+05:30'
last_seen: '2026-06-30T04:04:25.486291+05:30'
last_checked: '2026-06-30T04:04:25.486291+05:30'
health_score: 100
---

# Using custom elements - Web APIs | MDN

## Summary

- **Custom Element Types**: Two types exist—autonomous (extends `HTMLElement`) and customized built-in (extends standard elements like `HTMLParagraphElement`). Safari does not support customized built-ins.
- **Lifecycle Callbacks**: Key methods include `connectedCallback()`, `disconnectedCallback()`, `adoptedCallback()`, and `attributeChangedCallback()` for reacting to DOM changes and attribute modifications.
- **Registration & Scoping**: Custom elements are registered via `customElements.define()` with a hyphenated name. Scoped registries (via `CustomElementRegistry`) allow localized definitions within `ShadowRoot` to avoid global collisions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T04:04:25.486277+05:30

## Related Tags

- agents
- frontend_ui
- rag
- web-crawled

## Source

Original source: https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements
