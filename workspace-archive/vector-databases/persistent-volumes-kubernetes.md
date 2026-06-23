---
title: Persistent Volumes | Kubernetes
archive_category: vector-databases
source_category: ai/rag
source_url: https://kubernetes.io/docs/concepts/storage/persistent-volumes
resource_id: blog:persistent-volumes-kubernetes
local_vault_path: ai/rag/persistent-volumes-kubernetes.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Valuable developer reference
---

# Persistent Volumes | Kubernetes

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **PersistentVolume (PV) & PersistentVolumeClaim (PVC) Abstraction**: PVs abstract storage provisioning details (e.g., NFS, iSCSI, cloud storage) and act as cluster resources independent of Pods, while PVCs are user requests for storage with defined size/access modes (e.g., `ReadWriteOnce`, `ReadOnlyMany`). StorageClass enables dynamic provisioning with customizable volume properties.

- **Lifecycle Management**: PVs/PVCs follow a lifecycle—*Provisioning* (static/dynamic via StorageClass), *Bin

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://kubernetes.io/docs/concepts/storage/persistent-volumes

## Local Vault File

Path: [persistent-volumes-kubernetes.md](../../ai/rag/persistent-volumes-kubernetes.md)
