---
title: Databricks Online Feature Stores | Databricks on AWS
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.databricks.com/aws/en/machine-learning/feature-store/online-feature-store
published_at: '2026-07-08T14:26:17.303285+05:30'
collected_at: '2026-07-08T14:26:17.303299+05:30'
tags:
- hackernews
- models
- rag
- web-crawled
- workflows
status: active
resource_id: blog:databricks-online-feature-stores-databricks-on-aws
first_seen: '2026-07-08T14:26:17.303299+05:30'
last_seen: '2026-07-08T14:26:17.303299+05:30'
last_checked: '2026-07-08T14:26:17.303299+05:30'
health_score: 100
---

# Databricks Online Feature Stores | Databricks on AWS

## Summary

- **High-Performance Feature Serving**: Databricks Online Feature Stores, powered by Lakebase Autoscaling, provide low-latency, high-scale access to feature data for real-time ML models and applications (e.g., fraud detection, recommendation systems) via Feature Serving Endpoints and automatic feature lookup in model serving endpoints.

- **Infrastructure & Encryption**: Requires Databricks Runtime 16.4 LTS ML+ or serverless compute; supports customer-managed key (CMK) encryption at rest for Lakebase Autoscaling-backed stores. Online stores are provisioned as highly available managed infrastructure with configurable capacity (CU_1 to CU_8).

- **Data Synchronization & Modes**: Feature tables must have primary key constraints, non-nullable keys, and Change Data Feed enabled. Publishing modes include `TRIGGERED` (default, incremental updates) and `CONTINUOUS` (streaming updates), with synchronization managed via `publish_table` API.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T14:26:17.303285+05:30

## Related Tags

- hackernews
- models
- rag
- web-crawled
- workflows

## Source

Original source: https://docs.databricks.com/aws/en/machine-learning/feature-store/online-feature-store
