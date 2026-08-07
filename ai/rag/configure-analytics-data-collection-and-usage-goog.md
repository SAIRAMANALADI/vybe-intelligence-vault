---
title: Configure Analytics data collection and usage | Google Analytics for Firebase
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://firebase.google.com/docs/analytics/configure-data-collection?platform=ios#disable_personalized_advertising_features
published_at: '2026-08-02T09:36:25.047293+05:30'
collected_at: '2026-08-02T09:36:25.047307+05:30'
tags:
- rag
- reddit
- web-crawled
status: active
resource_id: blog:configure-analytics-data-collection-and-usage-goog
first_seen: '2026-08-02T09:36:25.047307+05:30'
last_seen: '2026-08-02T09:36:25.047307+05:30'
last_checked: '2026-08-02T09:36:25.047307+05:30'
health_score: 100
---

# Configure Analytics data collection and usage | Google Analytics for Firebase

## Summary

- **Temporary Analytics Collection Control**: Disable/enable Analytics data collection programmatically via `setAnalyticsCollectionEnabled` (Swift/Obj-C/Unity) or `FIREBASE_ANALYTICS_COLLECTION_ENABLED` in `Info.plist`, with persistence across app restarts.

- **Permanent Analytics Deactivation**: Permanently disable Analytics collection by setting `FIREBASE_ANALYTICS_COLLECTION_DEACTIVATED=YES` in `Info.plist`, overriding all other collection settings.

- **Ad Personalization Control**: Disable personalized advertising via `GOOGLE_ANALYTICS_DEFAULT_ALLOW_AD_PERSONALIZATION_SIGNALS=NO` in `Info.plist` or `setUserProperty` with `AnalyticsUserPropertyAllowAdPersonalizationSignals`, with changes reflected in event bundles via `non_personalized_ads=1`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T09:36:25.047293+05:30

## Related Tags

- rag
- reddit
- web-crawled

## Source

Original source: https://firebase.google.com/docs/analytics/configure-data-collection?platform=ios#disable_personalized_advertising_features
