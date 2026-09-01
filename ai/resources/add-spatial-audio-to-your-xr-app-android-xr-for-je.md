---
title: Add spatial audio to your XR app | Android XR for Jetpack XR SDK | Android
  Developers
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://developer.android.com/develop/xr/jetpack-xr-sdk/add-spatial-audio
published_at: '2026-09-01T11:05:42.715909+05:30'
collected_at: '2026-09-01T11:05:42.715922+05:30'
tags:
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:add-spatial-audio-to-your-xr-app-android-xr-for-je
first_seen: '2026-09-01T11:05:42.715922+05:30'
last_seen: '2026-09-01T11:05:42.715922+05:30'
last_checked: '2026-09-01T11:05:42.715922+05:30'
health_score: 100
---

# Add spatial audio to your XR app | Android XR for Jetpack XR SDK | Android Developers

## Summary

- **Spatial Audio Integration**: Android XR SDK's Jetpack SceneCore now supports spatial audio via `SoundPool`, `ExoPlayer`, `MediaPlayer`, and `AudioTrack`, enabling positional, stereo, surround sound (including Dolby formats), and ambisonic audio (AmbiX, Opus, PCM/Wave) for immersive XR experiences.

- **Automatic Spatialization**: Non-XR-optimized apps have their audio automatically spatialized in Android XR, with sound emitted from the app's UI panel position and adjusted dynamically based on user movement for positional realism; users can disable this at app/system level.

- **Advanced Spatial Audio APIs**: Developers can use `PointSourceParams` with `Entity` for precise 3D sound positioning, `ExoPlayer` for stereo/surround content, and `MediaPlayer` for ambisonic audio, with capabilities checked via `Session.spatialCapabilities` and media format support queried via `AudioCapabilities`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-09-01T11:05:42.715909+05:30

## Related Tags

- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://developer.android.com/develop/xr/jetpack-xr-sdk/add-spatial-audio
