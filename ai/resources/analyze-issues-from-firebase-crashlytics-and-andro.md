---
title: Analyze issues from Firebase Crashlytics and Android Vitals with App Quality
  Insights | Android Studio | Android Develop
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.android.com/studio/debug/app-quality-insights
published_at: '2026-07-09T21:16:39.294633+05:30'
collected_at: '2026-07-09T21:16:39.294642+05:30'
tags:
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:analyze-issues-from-firebase-crashlytics-and-andro
first_seen: '2026-07-09T21:16:39.294642+05:30'
last_seen: '2026-07-09T21:16:39.294642+05:30'
last_checked: '2026-07-09T21:16:39.294642+05:30'
health_score: 100
---

# Analyze issues from Firebase Crashlytics and Android Vitals with App Quality Insights | Android Studio | Android Develop

## Summary

- **Integration & Compatibility**: App Quality Insights (AQI) in Android Studio aggregates crash data from Firebase Crashlytics and Android Vitals, requiring Android Studio **Narwhal 4 Feature Drop** or newer (or within 10 months of release) for full functionality, including offline mode support.

- **Key Features**: AQI provides in-IDE crash analysis with **code-level stack traces**, **variant grouping**, **device/version filtering**, and **notes integration**, while also supporting **version control diffs** (via `vcsInfo` in `build.gradle`) for debug builds.

- **Data Discrepancies & Offline Mode**: Crash counts between Crashlytics and Android Vitals may differ due to SDK initialization timing and user opt-outs; AQI supports **offline investigation** with cached data but restricts certain actions (e.g., closing issues) until reconnection.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-09T21:16:39.294633+05:30

## Related Tags

- web-crawled
- workflows
- youtube

## Source

Original source: https://developer.android.com/studio/debug/app-quality-insights
