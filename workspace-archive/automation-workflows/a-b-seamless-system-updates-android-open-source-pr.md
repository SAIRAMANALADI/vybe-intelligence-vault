---
title: A/B (seamless) system updates | Android Open Source Project
archive_category: automation-workflows
source_category: ai/rag
source_url: https://source.android.com/docs/core/ota/ab
resource_id: blog:a-b-seamless-system-updates-android-open-source-pr
local_vault_path: ai/rag/a-b-seamless-system-updates-android-open-source-pr.md
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
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# A/B (seamless) system updates | Android Open Source Project

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **A/B System Updates Mechanism**: A/B (seamless) updates use dual partition slots (A/B) to ensure fault tolerance; `update_engine` streams OTA payloads directly to the inactive slot, minimizing downtime and enabling rollback if the new slot fails to boot. Legacy A/B updates were deprecated in Android 10 in favor of Virtual A/B.

- **Key Components & Workflow**: `update_engine` (system daemon) handles block-level updates via `boot_control` HAL, while the bootloader manages slot selection (`acti

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://source.android.com/docs/core/ota/ab

## Local Vault File

Path: [a-b-seamless-system-updates-android-open-source-pr.md](../../ai/rag/a-b-seamless-system-updates-android-open-source-pr.md)
