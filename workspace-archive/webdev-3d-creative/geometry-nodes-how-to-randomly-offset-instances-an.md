---
title: geometry nodes - How to randomly offset instances animation - Blender Stack
  Exchange
archive_category: webdev-3d-creative
source_category: ai/agents
source_url: https://blender.stackexchange.com/questions/347308/how-to-randomly-offset-instances-animation
resource_id: blog:geometry-nodes-how-to-randomly-offset-instances-an
local_vault_path: ai/agents/geometry-nodes-how-to-randomly-offset-instances-an.md
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

# geometry nodes - How to randomly offset instances animation - Blender Stack Exchange

## Why This Is In The Archive

- Matched archive category: `Webdev 3D Creative`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Instance Rotation Control**: Use instance-specific rotations rather than object-level rotations to independently control each butterfly's wing animation via Geometry Nodes.

- **Frame Offset via Index**: Offset the animation frame for each instance using its index multiplied by a random value (`Random Value` node) to create staggered wing flapping.

- **Performance Optimization**: Avoid nested loops ("Repeat" + "For Each Element") by directly rotating instances in a single node setup for sca

## Use Cases

- Three.js 3D animations
- WebGL particle simulations
- Blender interactive creative layouts

## Source

Original source URL: https://blender.stackexchange.com/questions/347308/how-to-randomly-offset-instances-animation

## Local Vault File

Path: [geometry-nodes-how-to-randomly-offset-instances-an.md](../../ai/agents/geometry-nodes-how-to-randomly-offset-instances-an.md)
