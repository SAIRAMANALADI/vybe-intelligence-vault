---
title: design-proposals-archive/storage/persistent-storage.md at main · kubernetes/design-proposals-archive
  · GitHub
archive_category: vector-databases
source_category: ai/rag
source_url: https://git.k8s.io/design-proposals-archive/storage/persistent-storage.md
resource_id: blog:design-proposals-archive-storage-persistent-storag
local_vault_path: ai/rag/design-proposals-archive-storage-persistent-storag.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
selection_reason:
- Valuable developer reference
---

# design-proposals-archive/storage/persistent-storage.md at main · kubernetes/design-proposals-archive · GitHub

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **API Components**: Introduces `PersistentVolume` (PV) for cluster-scoped storage resources and `PersistentVolumeClaim` (PVC) for user requests, with `PersistentVolumeClaimBinder` managing PVC-to-PV binding based on access modes and capacity.
- **Binding Logic**: PVCs are matched to PVs via indexed access modes and sorted capacity, with dynamic provisioning fallback if no static PV matches; binding follows a strict 8-step algorithm prioritizing exact matches.
- **Volume Lifecycle**: PVCs persi

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://git.k8s.io/design-proposals-archive/storage/persistent-storage.md

## Local Vault File

Path: [design-proposals-archive-storage-persistent-storag.md](../../ai/rag/design-proposals-archive-storage-persistent-storag.md)
