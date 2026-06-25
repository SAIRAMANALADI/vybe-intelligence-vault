---
title: transforms - How do I lock the rotation of a bone to the world's Z-axis while
  still allowing it to follow the motion of
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://blender.stackexchange.com/questions/347319/how-do-i-lock-the-rotation-of-a-bone-to-the-worlds-z-axis-while-still-allowing
published_at: '2026-06-24T23:23:58.606456+05:30'
collected_at: '2026-06-24T23:23:58.606468+05:30'
tags:
- agents
- hackernews
- reddit
- scripts
- threejs
- web-crawled
status: active
resource_id: blog:transforms-how-do-i-lock-the-rotation-of-a-bone-to
first_seen: '2026-06-24T23:23:58.606468+05:30'
last_seen: '2026-06-24T23:23:58.606468+05:30'
last_checked: '2026-06-24T23:23:58.606468+05:30'
health_score: 100
---

# transforms - How do I lock the rotation of a bone to the world's Z-axis while still allowing it to follow the motion of

## Summary

- **Bone Rotation Constraint**: Apply a *Limit Rotation* constraint to the turret bone, locking X and Y axes (Min/Max set to 0°) while allowing Z-axis rotation to follow the parent hull's yaw.

- **Space Settings**: Use *Local with Parent* space for the constraint if the armature is parented to an object (e.g., tank hull), or switch to *World Space* to enforce global Z-axis alignment regardless of parenting.

- **Orientation Dependency**: Ensure bone rest pose aligns with desired axes (e.g., global +Z = bone +Y) to avoid unintended rotations; adjust X-axis Min/Max to 90° in *World Space* mode if the turret should point upward.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-24T23:23:58.606456+05:30

## Related Tags

- agents
- hackernews
- reddit
- scripts
- threejs
- web-crawled

## Source

Original source: https://blender.stackexchange.com/questions/347319/how-do-i-lock-the-rotation-of-a-bone-to-the-worlds-z-axis-while-still-allowing
