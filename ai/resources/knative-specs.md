---
title: specs/specs/serving/knative-api-specification-1.0.md at main · knative/specs
  · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#revision
published_at: '2026-06-30T20:21:57.610705+05:30'
collected_at: '2026-06-30T20:21:57.610721+05:30'
tags:
- models
- reddit
- web-crawled
status: active
resource_id: github:knative/specs
first_seen: '2026-06-30T20:21:57.610721+05:30'
last_seen: '2026-06-30T20:21:57.610721+05:30'
last_checked: '2026-06-30T20:21:57.610721+05:30'
health_score: 100
---

# specs/specs/serving/knative-api-specification-1.0.md at main · knative/specs · GitHub

## Summary

- **Knative Serving API** defines Kubernetes Custom Resources (CRDs) for managing stateless, autoscaled HTTP-triggered containers, with a minimal profile enforcing restricted developer access (`get`, `list`, `create`, `update`, `delete` for `services`; read-only for `configurations`, `routes`, `revisions`).

- **Resource Hierarchy & Mutability**: `Service` owns `Configuration` and `Route`, which in turn manage `Revision` snapshots; `Revisions` are immutable except for references to mutable Kubernetes resources (e.g., `ConfigMaps`, `Secrets`), with direct `spec` updates forbidden.

- **RBAC & Extensibility**: Minimal RBAC profile restricts developers to core operations, while annotations/labels (with vendor prefixes) are the preferred extension mechanism; advanced profiles may enable full lifecycle control (`POST`/`PUT`/`DELETE`) for `Route`/`Configuration`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T20:21:57.610705+05:30

## Related Tags

- models
- reddit
- web-crawled

## Source

Original source: https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#revision
