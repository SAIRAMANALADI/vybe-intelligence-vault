---
title: Standard JSON Schema
archive_category: vector-databases
source_category: ai/rag
source_url: https://standardschema.dev/json-schema
resource_id: blog:standard-json-schema
local_vault_path: ai/rag/standard-json-schema.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# Standard JSON Schema

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Standard JSON Schema Interface (`StandardJSONSchemaV1`)**:
  Defines a TypeScript interface (`StandardJSONSchemaV1`) with a `~standard` property containing `Props` (version, vendor, types, and `jsonSchema` converter methods for input/output JSON Schema generation). Supports multiple JSON Schema draft versions (`draft-2020-12`, `draft-07`, `openapi-3.0`) via the `Target` type.

- **Type Preservation & Conversion**:
  Preserves inferred input/output types (via `Types` interface) and provides m

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://standardschema.dev/json-schema

## Local Vault File

Path: [standard-json-schema.md](../../ai/rag/standard-json-schema.md)
