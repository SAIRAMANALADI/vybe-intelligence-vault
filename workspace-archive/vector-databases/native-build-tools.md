---
title: Native Build Tools
archive_category: vector-databases
source_category: ai/rag
source_url: https://graalvm.github.io/native-build-tools/latest/index.html
resource_id: blog:native-build-tools
local_vault_path: ai/rag/native-build-tools.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- rag
- scripts
- web-crawled
selection_reason:
- Useful for project building
---

# Native Build Tools

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: framework
- Selection reasons:
  - Useful for project building

## Summary

- **Plugin Support**: Provides Gradle and Maven plugins for building/testing native Java (or JVM bytecode) applications via GraalVM Native Image, leveraging metadata from the [GraalVM reachability metadata repository](https://github.com/oracle/graalvm-reachability-metadata) for improved compatibility.

- **Metadata Validation**: Includes commands (`./gradlew listLibrariesMissingMetadata` or `./mvnw native:list-libraries-missing-metadata`) to check library support before manual troubleshooting, i

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://graalvm.github.io/native-build-tools/latest/index.html

## Local Vault File

Path: [native-build-tools.md](../../ai/rag/native-build-tools.md)
