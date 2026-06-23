---
title: Use Kubernetes volume storage with Amazon EBS - Amazon EKS
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html
published_at: '2026-06-23T10:02:28.903133+05:30'
collected_at: '2026-06-23T10:02:28.903141+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:use-kubernetes-volume-storage-with-amazon-ebs-amaz
first_seen: '2026-06-23T10:02:28.903141+05:30'
last_seen: '2026-06-23T10:02:28.903141+05:30'
last_checked: '2026-06-23T10:02:28.903141+05:30'
health_score: 100
---

# Use Kubernetes volume storage with Amazon EBS - Amazon EKS

## Summary

- **Amazon EBS CSI Driver** manages Amazon EBS volume lifecycles for Kubernetes `PersistentVolumes` and `EphemeralVolumes` via the CSI interface, enabling dynamic provisioning and attachment of EBS volumes to EKS clusters.

- **IAM Permissions Requirement**: The EBS CSI driver requires an IAM role with `AmazonEBSCSIDriverPolicyV2` (or a custom scoped-down policy) attached via IRSA or Pod Identities to interact with AWS APIs for volume operations.

- **Compatibility Constraints**: EBS CSI driver does not support Fargate Pods or Hybrid Nodes; EKS Auto Mode requires `ebs.csi.eks.amazonaws.com` provisioner, and snapshot functionality mandates additional CSI snapshot controller installation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T10:02:28.903133+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html
