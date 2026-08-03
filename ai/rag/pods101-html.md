---
title: Pods101.html
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://collabnix.github.io/kubelabs/Pods101_slides/Pods101.html
published_at: '2026-08-04T03:59:55.125767+05:30'
collected_at: '2026-08-04T03:59:55.125780+05:30'
tags:
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:pods101-html
first_seen: '2026-08-04T03:59:55.125780+05:30'
last_seen: '2026-08-04T03:59:55.125780+05:30'
last_checked: '2026-08-04T03:59:55.125780+05:30'
health_score: 100
---

# Pods101.html

## Summary

- **Pods as Atomic Scheduling Units**: In Kubernetes, a Pod is the smallest deployable unit, encapsulating one or more containers (e.g., Docker) that share the same network namespace, storage, and lifecycle, unlike VMs or standalone containers.

- **Networking Model**: Pods communicate via a flat network model where each Pod gets a unique IP address; inter-Pod communication is direct, while intra-Pod communication occurs via `localhost` between containers in the same Pod.

- **Pod Lifecycle & Manifests**: Pods transition through states (`Pending` → `Running` → `Succeeded/Failed`), managed via API Server using declarative manifests (YAML/JSON) defining configurations like containers, volumes, and networking.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T03:59:55.125767+05:30

## Related Tags

- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://collabnix.github.io/kubelabs/Pods101_slides/Pods101.html
