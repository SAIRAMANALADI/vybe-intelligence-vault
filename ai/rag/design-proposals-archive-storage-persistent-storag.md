---
title: design-proposals-archive/storage/persistent-storage.md at main · kubernetes/design-proposals-archive
  · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://git.k8s.io/design-proposals-archive/storage/persistent-storage.md
published_at: '2026-06-23T10:03:48.520837+05:30'
collected_at: '2026-06-23T10:03:48.520852+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:design-proposals-archive-storage-persistent-storag
first_seen: '2026-06-23T10:03:48.520852+05:30'
last_seen: '2026-06-23T10:03:48.520852+05:30'
last_checked: '2026-06-23T10:03:48.520852+05:30'
health_score: 100
---

# design-proposals-archive/storage/persistent-storage.md at main · kubernetes/design-proposals-archive · GitHub

## Summary

- **API Components**: Introduces `PersistentVolume` (PV) for cluster-scoped storage resources and `PersistentVolumeClaim` (PVC) for user requests, with `PersistentVolumeClaimBinder` managing PVC-to-PV binding based on access modes and capacity.
- **Binding Logic**: PVCs are matched to PVs via indexed access modes and sorted capacity, with dynamic provisioning fallback if no static PV matches; binding follows a strict 8-step algorithm prioritizing exact matches.
- **Volume Lifecycle**: PVCs persist independently of pods, enabling data reuse; deletion of a PVC releases the PV (status: `Released`), requiring manual/administrative recycling or dynamic provisioner intervention.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T10:03:48.520837+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://git.k8s.io/design-proposals-archive/storage/persistent-storage.md
