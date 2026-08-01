---
title: Build | API reference | Android Developers
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.android.com/reference/android/os/Build#fingerprint
published_at: '2026-08-01T21:53:30.180027+05:30'
collected_at: '2026-08-01T21:53:30.180041+05:30'
tags:
- web-crawled
status: active
resource_id: blog:build-api-reference-android-developers
first_seen: '2026-08-01T21:53:30.180041+05:30'
last_seen: '2026-08-01T21:53:30.180041+05:30'
last_checked: '2026-08-01T21:53:30.180041+05:30'
health_score: 100
---

# Build | API reference | Android Developers

## Summary

- **`Build` class** provides device/build metadata via static fields/methods (e.g., `BOARD`, `MODEL`, `FINGERPRINT`, `TIME`) and nested classes (`Build.VERSION`, `Build.VERSION_CODES`), accessible since API level 1.

- **Deprecated fields/methods** like `CPU_ABI`, `RADIO`, and `SERIAL` are replaced by modern alternatives (`SUPPORTED_ABIS`, `getRadioVersion()`, `getSerial()`), with newer APIs (e.g., `ODM_SKU`, `SOC_MANUFACTURER`) added in API levels 21+.

- **Runtime-accessible properties** include `getBackportedFixStatus()`, `getFingerprintedPartitions()`, and `getMajorSdkVersion()` for querying device-specific fixes, partition fingerprints, and SDK version details.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T21:53:30.180027+05:30

## Related Tags

- web-crawled

## Source

Original source: https://developer.android.com/reference/android/os/Build#fingerprint
