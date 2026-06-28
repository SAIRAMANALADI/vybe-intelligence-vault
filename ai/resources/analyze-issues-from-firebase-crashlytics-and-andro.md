---
title: Analyze issues from Firebase Crashlytics and Android Vitals with App Quality
  Insights | Android Studio | Android Develop
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.android.com/studio/debug/app-quality-insights
published_at: '2026-06-28T19:53:16.390035+05:30'
collected_at: '2026-06-28T19:53:16.390046+05:30'
tags:
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:analyze-issues-from-firebase-crashlytics-and-andro
first_seen: '2026-06-28T19:53:16.390046+05:30'
last_seen: '2026-06-28T19:53:16.390046+05:30'
last_checked: '2026-06-28T19:53:16.390046+05:30'
health_score: 100
---

# Analyze issues from Firebase Crashlytics and Android Vitals with App Quality Insights | Android Studio | Android Develop

## Summary

- **Integration & Compatibility**: App Quality Insights (AQI) in Android Studio integrates Firebase Crashlytics and Android Vitals data directly into the IDE, requiring **Android Studio Narwhal 4 Feature Drop** or newer (or within 10 months of release) for full functionality, including crash stack traces, severity filtering, and device/version breakdowns.

- **Key Features**: AQI highlights crash-related code lines, provides stack trace navigation to source code, supports **version control diffs** (via `vcsInfo` in `build.gradle`), and includes **Android Vitals** metrics (e.g., stability issues) with filtering by fatal/non-fatal/ANRs, app version, and device attributes.

- **Offline Mode & Permissions**: AQI caches data for offline investigation (with limited functionality) and requires **developer account sign-in** and **Firebase/Crashlytics SDK setup** (e.g., `firebaseCrashlytics` in `build.gradle`). Discrepancies between Crashlytics and Android Vitals counts may occur due to differing crash capture timings or user opt-outs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-28T19:53:16.390035+05:30

## Related Tags

- web-crawled
- workflows
- youtube

## Source

Original source: https://developer.android.com/studio/debug/app-quality-insights
