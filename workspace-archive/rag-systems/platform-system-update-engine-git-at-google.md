---
title: platform/system/update_engine - Git at Google
archive_category: rag-systems
source_category: ai/rag
source_url: https://android.googlesource.com/platform/system/update_engine/
resource_id: blog:platform-system-update-engine-git-at-google
local_vault_path: ai/rag/platform-system-update-engine-git-at-google.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- scripts
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# platform/system/update_engine - Git at Google

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **A/B Update Mechanism**: Android/ChromeOS use A/B (seamless) updates where two partition copies (A/B) exist; updates are applied to the inactive partition, verified, and swapped on reboot, ensuring rollback capability and minimizing downtime.

- **Update Payload Structure**: OTA payloads contain metadata (operations list) and extra data (blobs), verified via cryptographic signatures (SHA256) and hashes; operations are streamed and checkpointed to avoid full re-downloads on failure.

- **Updat

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://android.googlesource.com/platform/system/update_engine/

## Local Vault File

Path: [platform-system-update-engine-git-at-google.md](../../ai/rag/platform-system-update-engine-git-at-google.md)
