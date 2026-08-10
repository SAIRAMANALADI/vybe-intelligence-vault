---
title: Standard JSON Schema
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://standardschema.dev/json-schema
published_at: '2026-08-10T21:55:03.109862+05:30'
collected_at: '2026-08-10T21:55:03.109870+05:30'
tags:
- agents
- rag
- reddit
- web-crawled
status: active
resource_id: blog:standard-json-schema
first_seen: '2026-08-10T21:55:03.109870+05:30'
last_seen: '2026-08-10T21:55:03.109870+05:30'
last_checked: '2026-08-10T21:55:03.109870+05:30'
health_score: 100
---

# Standard JSON Schema

## Summary

- **Standard JSON Schema Interface**: Defines `StandardJSONSchemaV1` interface with `~standard` property containing `Props` (version, vendor, types, jsonSchema converter) and `Converter` methods (`input`/`output`) for JSON Schema generation across targets (`draft-2020-12`, `draft-07`, `openapi-3.0`).

- **Type Preservation**: Preserves input/output type inference via `Types` interface (`input`, `output`) in `~standard.types`, enabling static type extraction for external tools (e.g., OpenAPI, AI tools) without schema conversion loss.

- **Library Compatibility**: Implemented by Zod, ArkType, Valibot, etc., via direct integration or conversion functions (e.g., `@valibot/to-json-schema`), ensuring unified schema representation across ecosystems with minimal DX impact (tilde-prefixed `~standard` property).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T21:55:03.109862+05:30

## Related Tags

- agents
- rag
- reddit
- web-crawled

## Source

Original source: https://standardschema.dev/json-schema
