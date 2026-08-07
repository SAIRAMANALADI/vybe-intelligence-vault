---
title: Kubernetes Skill Pack — SuperML.org
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://superml.org/tutorials/kubernetes-skill-pack
published_at: '2026-08-03T01:11:28.710860+05:30'
collected_at: '2026-08-03T01:11:28.710870+05:30'
tags:
- agents
- web-crawled
status: active
resource_id: blog:kubernetes-skill-pack-superml-org
first_seen: '2026-08-03T01:11:28.710870+05:30'
last_seen: '2026-08-03T01:11:28.710870+05:30'
last_checked: '2026-08-03T01:11:28.710870+05:30'
health_score: 100
---

# Kubernetes Skill Pack — SuperML.org

## Summary

- **`k8s-pod-diagnose`**: Decision skill branching on pod failure signatures (CrashLoopBackOff, ImagePullBackOff, Pending, OOMKilled) using read-only `kubectl` commands (`get`, `describe`, `logs --previous`) to diagnose root causes without modifying cluster state.

- **`k8s-manifest-review`**: Validator skill checking Kubernetes manifests for missing resource limits, probes, security context (`privileged: true`, `runAsNonRoot`), and `latest` image tags, categorizing findings as blocking or advisory before `kubectl apply`.

- **Read-only governance boundary**: Both skills explicitly exclude destructive commands (`kubectl delete`, `apply`, `scale`) to enforce a separation between diagnosis/review and state-modifying actions, ensuring explicit human review before changes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-03T01:11:28.710860+05:30

## Related Tags

- agents
- web-crawled

## Source

Original source: https://superml.org/tutorials/kubernetes-skill-pack
