---
title: specs/specs/serving/knative-api-specification-1.0.md at main · knative/specs
  · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#revision
published_at: '2026-07-08T14:25:21.623119+05:30'
collected_at: '2026-07-08T14:25:21.623133+05:30'
tags:
- models
- reddit
- web-crawled
status: active
resource_id: github:knative/specs
first_seen: '2026-07-08T14:25:21.623133+05:30'
last_seen: '2026-07-08T14:25:21.623133+05:30'
last_checked: '2026-07-08T14:25:21.623133+05:30'
health_score: 100
---

# specs/specs/serving/knative-api-specification-1.0.md at main · knative/specs · GitHub

## Summary

- Knative Serving API v1.0.2 defines Kubernetes Custom Resources (CRDs) for managing stateless, request-driven, autoscaled containers with HTTP/gRPC transport, abstracting Kubernetes resource model for FaaS/PaaS-like operations.

- Core resources (`Service`, `Configuration`, `Revision`, `Route`) enforce strict access control: `Service` requires full CRUD; `Revision` is immutable (except via `Configuration`); `Route`/`Configuration` are optional for direct manipulation in minimal profiles.

- Extensions via annotations/labels are preferred; vendor-specific properties must use unique prefixes to avoid conflicts, with JSON Merge Patch (RFC 7386) recommended for CRD updates.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-08T14:25:21.623119+05:30

## Related Tags

- models
- reddit
- web-crawled

## Source

Original source: https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#revision
