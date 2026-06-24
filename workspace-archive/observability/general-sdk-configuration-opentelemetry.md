---
title: General SDK Configuration | OpenTelemetry
archive_category: observability
source_category: ai/resources
source_url: https://opentelemetry.io/docs/languages/sdk-configuration/general
resource_id: blog:general-sdk-configuration-opentelemetry
local_vault_path: ai/resources/general-sdk-configuration-opentelemetry.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# General SDK Configuration | OpenTelemetry

## Why This Is In The Archive

- Matched archive category: `Observability`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Resource Attributes Configuration**: `OTEL_RESOURCE_ATTRIBUTES` sets key-value pairs for resource attributes (e.g., `key1=value1,key2=value2`), defaulting to empty. `OTEL_SERVICE_NAME` overrides `service.name` (default: `unknown_service`) and takes precedence over `OTEL_RESOURCE_ATTRIBUTES`.

- **Sampler Configuration**: `OTEL_TRACES_SAMPLER` defines the sampling strategy (e.g., `always_on`, `traceidratio`, `parentbased_always_on`), defaulting to `parentbased_always_on`. `OTEL_TRACES_SAMPLER

## Use Cases

- Production trace tracking
- LLM request cost audits
- Latency profiling

## Source

Original source URL: https://opentelemetry.io/docs/languages/sdk-configuration/general

## Local Vault File

Path: [general-sdk-configuration-opentelemetry.md](../../ai/resources/general-sdk-configuration-opentelemetry.md)
