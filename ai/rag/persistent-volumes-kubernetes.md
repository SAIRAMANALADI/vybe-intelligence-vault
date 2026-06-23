---
title: Persistent Volumes | Kubernetes
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://kubernetes.io/docs/concepts/storage/persistent-volumes
published_at: '2026-06-23T10:03:02.851091+05:30'
collected_at: '2026-06-23T10:03:02.851101+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:persistent-volumes-kubernetes
first_seen: '2026-06-23T10:03:02.851101+05:30'
last_seen: '2026-06-23T10:03:02.851101+05:30'
last_checked: '2026-06-23T10:03:02.851101+05:30'
health_score: 100
---

# Persistent Volumes | Kubernetes

## Summary

- **PersistentVolume (PV) & PersistentVolumeClaim (PVC) Abstraction**: PVs abstract storage provisioning details (e.g., NFS, iSCSI, cloud storage) and act as cluster resources independent of Pods, while PVCs are user requests for storage with defined size/access modes (e.g., `ReadWriteOnce`, `ReadOnlyMany`). StorageClass enables dynamic provisioning with customizable volume properties.

- **Lifecycle Management**: PVs/PVCs follow a lifecycle—*Provisioning* (static/dynamic via StorageClass), *Binding* (one-to-one PVC-PV binding enforced by control plane), *Usage* (Pods mount PVCs as volumes), and *Reclaiming* (Retain/Delete/Recycle policies; `Delete` removes both PV and backend storage unless finalizers block deletion).

- **Protection & Finalizers**: PVC/PV deletion triggers protection via `kubernetes.io/pvc-protection`/`pv-protection` finalizers to prevent data loss. CSI volumes use `external-provisioner.volume.kubernetes.io/finalizer` to ensure backend storage deletion before PV removal, while in-tree plugins use `kubernetes.io/pv-controller` (replaced by CSI finalizer with `CSIMigration{provider}` enabled).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T10:03:02.851091+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://kubernetes.io/docs/concepts/storage/persistent-volumes
