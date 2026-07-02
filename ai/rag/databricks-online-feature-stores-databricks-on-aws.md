---
title: Databricks Online Feature Stores | Databricks on AWS
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.databricks.com/aws/en/machine-learning/feature-store/online-feature-store
published_at: '2026-07-02T10:03:17.043574+05:30'
collected_at: '2026-07-02T10:03:17.043597+05:30'
tags:
- hackernews
- models
- rag
- web-crawled
- workflows
status: active
resource_id: blog:databricks-online-feature-stores-databricks-on-aws
first_seen: '2026-07-02T10:03:17.043597+05:30'
last_seen: '2026-07-02T10:03:17.043597+05:30'
last_checked: '2026-07-02T10:03:17.043597+05:30'
health_score: 100
---

# Databricks Online Feature Stores | Databricks on AWS

## Summary

- **High-performance serving**: Databricks Online Feature Stores provide low-latency, scalable access to feature data for real-time ML models and applications (e.g., recommendation systems, fraud detection) via Feature Serving Endpoints, powered by Databricks Lakebase with autoscaling infrastructure.

- **Key requirements and setup**: Requires Databricks Runtime 16.4 LTS ML+ or serverless compute; online stores are created as Lakebase Autoscaling projects with configurable capacity (e.g., `CU_2`), and encryption at rest is supported via customer-managed keys (CMK) when workspace and project conditions are met.

- **Data synchronization and modes**: Feature tables must enforce primary key constraints, non-nullable keys, and Change Data Feed (CDF) for publishing; `publish_table` supports `TRIGGERED` (default, incremental updates) and `CONTINUOUS` (streaming sync) modes to maintain online-offline consistency.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T10:03:17.043574+05:30

## Related Tags

- hackernews
- models
- rag
- web-crawled
- workflows

## Source

Original source: https://docs.databricks.com/aws/en/machine-learning/feature-store/online-feature-store
