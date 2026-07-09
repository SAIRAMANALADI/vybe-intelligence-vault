---
title: A/B (seamless) system updates | Android Open Source Project
archive_category: vector-databases
source_category: ai/rag
source_url: https://source.android.com/docs/core/ota/ab
resource_id: blog:a-b-seamless-system-updates-android-open-source-pr
local_vault_path: ai/rag/a-b-seamless-system-updates-android-open-source-pr.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- scripts
- web-crawled
- workflows
selection_reason:
- Valuable developer reference
---

# A/B (seamless) system updates | Android Open Source Project

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **A/B System Updates Mechanism**: A/B (seamless) updates use dual partition slots (A/B) to ensure fault tolerance; `update_engine` streams OTA packages directly to the inactive slot, while `boot_control` HAL manages slot selection and rollback. Legacy A/B updates were deprecated in Android 10 in favor of **Virtual A/B** updates.

- **Key Components & Workflow**: `update_engine` (system daemon) handles partition updates and post-install dexopt (`OtaDexoptService`), while the bootloader enforces

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://source.android.com/docs/core/ota/ab

## Local Vault File

Path: [a-b-seamless-system-updates-android-open-source-pr.md](../../ai/rag/a-b-seamless-system-updates-android-open-source-pr.md)
