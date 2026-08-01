---
title: Settings.Secure | API reference | Android Developers
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://developer.android.com/reference/android/provider/Settings.Secure#ANDROID_ID
published_at: '2026-08-01T21:53:35.084986+05:30'
collected_at: '2026-08-01T21:53:35.085004+05:30'
tags:
- models
- producthunt
- rag
- reddit
- web-crawled
status: active
resource_id: blog:settings-secure-api-reference-android-developers
first_seen: '2026-08-01T21:53:35.085004+05:30'
last_seen: '2026-08-01T21:53:35.085004+05:30'
last_checked: '2026-08-01T21:53:35.085004+05:30'
health_score: 100
---

# Settings.Secure | API reference | Android Developers

## Summary

- `Settings.Secure` provides read-only access to system-wide secure settings, enforced via `CONTENT_URI`; apps cannot modify these settings directly or via `put*` methods, requiring explicit user interaction via system UI.

- Deprecated constants (e.g., `ACCESSIBILITY_SPEAK_PASSWORD`, `ADB_ENABLED`) and methods (e.g., `isLocationProviderEnabled`, `setLocationProviderEnabled`) are redirected to newer APIs (e.g., `Settings.Global`, `LocationManager`) due to API level 17+ deprecations.

- Secure settings include critical identifiers like `ANDROID_ID` (64-bit hex string, unique per app-signing key/user/device on API 26+) and `ENABLED_ACCESSIBILITY_SERVICES`, with retrieval methods (`getFloat`, `getInt`, etc.) requiring `ContentResolver` access.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T21:53:35.084986+05:30

## Related Tags

- models
- producthunt
- rag
- reddit
- web-crawled

## Source

Original source: https://developer.android.com/reference/android/provider/Settings.Secure#ANDROID_ID
