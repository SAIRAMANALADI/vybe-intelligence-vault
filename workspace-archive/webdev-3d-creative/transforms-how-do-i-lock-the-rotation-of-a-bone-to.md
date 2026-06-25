---
title: transforms - How do I lock the rotation of a bone to the world's Z-axis while
  still allowing it to follow the motion of
archive_category: webdev-3d-creative
source_category: ai/agents
source_url: https://blender.stackexchange.com/questions/347319/how-do-i-lock-the-rotation-of-a-bone-to-the-worlds-z-axis-while-still-allowing
resource_id: blog:transforms-how-do-i-lock-the-rotation-of-a-bone-to
local_vault_path: ai/agents/transforms-how-do-i-lock-the-rotation-of-a-bone-to.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- reddit
- scripts
- threejs
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# transforms - How do I lock the rotation of a bone to the world's Z-axis while still allowing it to follow the motion of

## Why This Is In The Archive

- Matched archive category: `Webdev 3D Creative`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Bone Rotation Constraint**: Apply a *Limit Rotation* constraint to the turret bone, locking X and Y axes (Min/Max set to 0°) while allowing Z-axis rotation to follow the parent hull's yaw.

- **Space Settings**: Use *Local with Parent* space for the constraint if the armature is parented to an object (e.g., tank hull), or switch to *World Space* to enforce global Z-axis alignment regardless of parenting.

- **Orientation Dependency**: Ensure bone rest pose aligns with desired axes (e.g., glo

## Use Cases

- Three.js 3D animations
- WebGL particle simulations
- Blender interactive creative layouts

## Source

Original source URL: https://blender.stackexchange.com/questions/347319/how-do-i-lock-the-rotation-of-a-bone-to-the-worlds-z-axis-while-still-allowing

## Local Vault File

Path: [transforms-how-do-i-lock-the-rotation-of-a-bone-to.md](../../ai/agents/transforms-how-do-i-lock-the-rotation-of-a-bone-to.md)
