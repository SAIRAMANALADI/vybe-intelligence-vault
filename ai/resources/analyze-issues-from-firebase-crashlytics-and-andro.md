---
title: Analyze issues from Firebase Crashlytics and Android Vitals with App Quality
  Insights | Android Studio | Android Develop
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.android.com/studio/debug/app-quality-insights
published_at: '2026-07-04T16:38:14.519455+05:30'
collected_at: '2026-07-04T16:38:14.519470+05:30'
tags:
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:analyze-issues-from-firebase-crashlytics-and-andro
first_seen: '2026-07-04T16:38:14.519470+05:30'
last_seen: '2026-07-04T16:38:14.519470+05:30'
last_checked: '2026-07-04T16:38:14.519470+05:30'
health_score: 100
---

# Analyze issues from Firebase Crashlytics and Android Vitals with App Quality Insights | Android Studio | Android Develop

## Summary

- **Integration & Compatibility**:
  - App Quality Insights (AQI) in Android Studio aggregates Firebase Crashlytics and Android Vitals data, requiring **Android Studio Narwhal 4 Feature Drop** or newer (or within 10 months of release).
  - Supports crash analysis via stack traces, severity filtering, and direct IDE navigation, with optional **Gemini AI** integration for accelerated debugging.

- **Key Features & Workflow**:
  - **Crashlytics Integration**: Highlights crash-related code lines, displays stack traces, and provides device/version breakdowns. Supports issue notes, custom key-value logs, and offline mode with cached data.
  - **Android Vitals**: Directly accessible in AQI, enabling analysis of stability metrics (e.g., ANRs, non-fatal crashes) filtered by app version, device, or Android platform.

- **Setup & Limitations**:
  - Requires Firebase/Crashlytics SDK setup via **Tools > Firebase > Crashlytics** in Android Studio.
  - Discrepancies between Crashlytics and Android Vitals counts may occur due to differing crash capture timings or user opt-outs.
  - Permissions governed by [Android Studio service policies](https://developer.android.com/studio/services#service-permissions).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-04T16:38:14.519455+05:30

## Related Tags

- web-crawled
- workflows
- youtube

## Source

Original source: https://developer.android.com/studio/debug/app-quality-insights
