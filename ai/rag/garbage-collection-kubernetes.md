---
title: Garbage Collection | Kubernetes
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/#controlling-how-the-garbage-collector-deletes-dependents
published_at: '2026-08-08T21:31:56.077660+05:30'
collected_at: '2026-08-08T21:31:56.077674+05:30'
tags:
- agents
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:garbage-collection-kubernetes
first_seen: '2026-08-08T21:31:56.077674+05:30'
last_seen: '2026-08-08T21:31:56.077674+05:30'
last_checked: '2026-08-08T21:31:56.077674+05:30'
health_score: 100
---

# Garbage Collection | Kubernetes

## Summary

- **Resource Cleanup Mechanisms**: Kubernetes uses garbage collection to automatically clean up terminated pods, completed Jobs, objects without owner references, unused containers/images, PersistentVolumes with `Delete` reclaim policy, expired CSRs, nodes (via cloud controller managers), and Node Lease objects.

- **Cascading Deletion & Owner References**: Kubernetes supports foreground/background cascading deletion for dependents via owner references, with cross-namespace owner references disallowed; invalid references trigger `OwnerRefInvalidNamespace` events. Finalizers can block deletion until cleanup tasks complete.

- **Kubelet-Managed Garbage Collection**: The kubelet performs periodic garbage collection on unused images (every 5 mins) and containers (every minute), configurable via `KubeletConfiguration` with thresholds (`HighThresholdPercent`, `LowThresholdPercent`) and policies (`imageMaximumGCAge`, `MinAge`, `MaxPerPodContainer`, `MaxContainers`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T21:31:56.077660+05:30

## Related Tags

- agents
- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/#controlling-how-the-garbage-collector-deletes-dependents
