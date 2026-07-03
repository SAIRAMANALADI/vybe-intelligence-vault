---
title: Standard JSON Schema
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://standardschema.dev/json-schema
published_at: '2026-07-03T22:24:34.143429+05:30'
collected_at: '2026-07-03T22:24:34.143441+05:30'
tags:
- agents
- rag
- reddit
- web-crawled
status: active
resource_id: blog:standard-json-schema
first_seen: '2026-07-03T22:24:34.143441+05:30'
last_seen: '2026-07-03T22:24:34.143441+05:30'
last_checked: '2026-07-03T22:24:34.143441+05:30'
health_score: 100
---

# Standard JSON Schema

## Summary

- **Standard JSON Schema Interface (`StandardJSONSchemaV1`)**:
  Defines a TypeScript interface (`StandardJSONSchemaV1`) with a `~standard` property containing `Props` (version, vendor, types, and `jsonSchema` converter methods for input/output JSON Schema generation). Supports multiple JSON Schema draft versions (`draft-2020-12`, `draft-07`, `openapi-3.0`) via the `Target` type.

- **Type Preservation & Conversion**:
  Preserves inferred input/output types (via `Types` interface) and provides methods (`jsonSchema.input`/`output`) to convert these types to JSON Schema, accommodating schema transformations (e.g., string input → number output). Libraries like Zod, ArkType, and Valibot implement this spec for standardized schema conversion.

- **Design & Compatibility**:
  Minimalist design (avoids API conflicts via `~standard` property) with no runtime dependencies. Supports static type inference and is orthogonal to `StandardSchemaV1` (validation-focused). Compatible libraries/tools (e.g., xsAI, GQLoom) leverage it for OpenAPI, AI tools, and form generation without custom adapters.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T22:24:34.143429+05:30

## Related Tags

- agents
- rag
- reddit
- web-crawled

## Source

Original source: https://standardschema.dev/json-schema
