---
title: specs/specs/serving/knative-api-specification-1.0.md at main · knative/specs
  · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#configuration
published_at: '2026-08-08T21:29:09.190827+05:30'
collected_at: '2026-08-08T21:29:09.190841+05:30'
tags:
- models
- reddit
- web-crawled
status: active
resource_id: github:knative/specs
first_seen: '2026-08-08T21:29:09.190841+05:30'
last_seen: '2026-08-08T21:29:09.190841+05:30'
last_checked: '2026-08-08T21:29:09.190841+05:30'
health_score: 100
---

# specs/specs/serving/knative-api-specification-1.0.md at main · knative/specs · GitHub

## Summary

- **Knative Serving API** defines Kubernetes Custom Resources (CRs) for managing stateless, request-driven, autoscaled containers, with HTTP/gRPC as the transport protocol, operating under Kubernetes 1.13+ assumptions.

- **Resource Access Control**: Minimal profile enforces strict RBAC (e.g., `knative-developer` Role allows only `get/list/create/update/delete` on `services` and read-only access to `configurations/routes/revisions`), while advanced profiles may permit full CRUD operations.

- **Resource Lifecycle & Constraints**: `Service` owns `Configuration` and `Route`; `Configuration` generates immutable `Revision` snapshots; direct `Revision`/`Route`/`Configuration` manipulation is restricted (e.g., `Revision` updates forbidden, `Route`/`Configuration` updates reset if owned by `Service`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T21:29:09.190827+05:30

## Related Tags

- models
- reddit
- web-crawled

## Source

Original source: https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#configuration
