---
title: Use Kubernetes volume storage with Amazon EBS - Amazon EKS
archive_category: rag-systems
source_category: ai/rag
source_url: https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html
resource_id: blog:use-kubernetes-volume-storage-with-amazon-ebs-amaz
local_vault_path: ai/rag/use-kubernetes-volume-storage-with-amazon-ebs-amaz.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Use Kubernetes volume storage with Amazon EBS - Amazon EKS

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Amazon EBS CSI Driver** manages Amazon EBS volume lifecycles for Kubernetes `PersistentVolumes` and `EphemeralVolumes` via the CSI interface, enabling dynamic provisioning and attachment of EBS volumes to EKS clusters.

- **IAM Permissions Requirement**: The EBS CSI driver requires an IAM role with `AmazonEBSCSIDriverPolicyV2` (or a custom scoped-down policy) attached via IRSA or Pod Identities to interact with AWS APIs for volume operations.

- **Compatibility Constraints**: EBS CSI driver

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html

## Local Vault File

Path: [use-kubernetes-volume-storage-with-amazon-ebs-amaz.md](../../ai/rag/use-kubernetes-volume-storage-with-amazon-ebs-amaz.md)
