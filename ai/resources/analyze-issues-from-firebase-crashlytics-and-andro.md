---
title: Analyze issues from Firebase Crashlytics and Android Vitals with App Quality
  Insights | Android Studio | Android Develop
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.android.com/studio/debug/app-quality-insights
published_at: '2026-06-28T15:11:08.975925+05:30'
collected_at: '2026-06-28T15:11:08.975937+05:30'
tags:
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:analyze-issues-from-firebase-crashlytics-and-andro
first_seen: '2026-06-28T15:11:08.975937+05:30'
last_seen: '2026-06-28T15:11:08.975937+05:30'
last_checked: '2026-06-28T15:11:08.975937+05:30'
health_score: 100
---

# Analyze issues from Firebase Crashlytics and Android Vitals with App Quality Insights | Android Studio | Android Develop

## Summary

- **App Quality Insights (AQI) Integration**: Android Studio's AQI tool window consolidates Firebase Crashlytics and Google Play's Android Vitals data, enabling in-IDE crash analysis with features like stack trace navigation, severity filtering, and issue grouping by device/version, reducing context-switching between browser and IDE.

- **Version Control & Debugging Workflow**: AQI supports git-based version control integration for debug builds via `vcsInfo { include = true }` in `build.gradle`, allowing diff comparisons between current code and crash-inducing versions, while also annotating crash-related code lines with gutter icons for direct IDE navigation.

- **Offline Mode & Data Discrepancies**: AQI provides offline mode for cached Crashlytics data with limited functionality, and highlights potential discrepancies between Crashlytics and Android Vitals metrics due to differing crash capture timings (e.g., post-boot vs. SDK initialization) or user opt-out preferences.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-28T15:11:08.975925+05:30

## Related Tags

- web-crawled
- workflows
- youtube

## Source

Original source: https://developer.android.com/studio/debug/app-quality-insights
