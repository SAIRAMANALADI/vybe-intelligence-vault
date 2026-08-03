---
title: Deployment101.html
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://collabnix.github.io/kubelabs/Deployment101_slides/Deployment101.html
published_at: '2026-08-04T03:59:50.201379+05:30'
collected_at: '2026-08-04T03:59:50.201394+05:30'
tags:
- web-crawled
- workflows
status: active
resource_id: blog:deployment101-html
first_seen: '2026-08-04T03:59:50.201394+05:30'
last_seen: '2026-08-04T03:59:50.201394+05:30'
last_checked: '2026-08-04T03:59:50.201394+05:30'
health_score: 100
---

# Deployment101.html

## Summary

- **Kubernetes Deployment Controller**: Provides declarative updates for Pods and ReplicaSets, managing state transitions from actual to desired configurations at a controlled rate, supporting rollbacks, scaling, and pause/resume operations.

- **Deployment Strategies**:
  - **RollingUpdate**: Default incremental update method, replacing instances sequentially to ensure zero downtime.
  - **Recreate**: Shuts down all instances of version A before deploying version B, causing downtime but simplifying rollbacks.
  - **Canary**: Gradually shifts traffic from version A to version B for testing, minimizing risk.
  - **Blue-Green**: Deploys version B alongside version A, switching traffic at the load balancer level after validation.

- **Single Manifest Management**: A Deployment manifest file abstracts Pods, ReplicaSets, and Deployment configurations, enabling unified management of all three objects without separate files.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-04T03:59:50.201379+05:30

## Related Tags

- web-crawled
- workflows

## Source

Original source: https://collabnix.github.io/kubelabs/Deployment101_slides/Deployment101.html
