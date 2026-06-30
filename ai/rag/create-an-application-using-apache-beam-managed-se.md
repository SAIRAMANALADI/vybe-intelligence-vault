---
title: Create an application using Apache Beam - Managed Service for Apache Flink
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.aws.amazon.com/kinesisanalytics/latest/java/examples-beam.html
published_at: '2026-06-30T22:55:07.619770+05:30'
collected_at: '2026-06-30T22:55:07.619786+05:30'
tags:
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:create-an-application-using-apache-beam-managed-se
first_seen: '2026-06-30T22:55:07.619786+05:30'
last_seen: '2026-06-30T22:55:07.619786+05:30'
last_checked: '2026-06-30T22:55:07.619786+05:30'
health_score: 100
---

# Create an application using Apache Beam - Managed Service for Apache Flink

## Summary

- **Resource Setup**: Requires creating two Kinesis data streams (`ExampleInputStream`, `ExampleOutputStream`) and an S3 bucket (`ka-app-code-<user>`) for application code storage.
- **Apache Beam Transformation Logic**: Implements a `PingPongFn` DoFn that converts input "ping" to "pong" while passing other records unchanged, using Apache Beam's `ParDo` for processing.
- **Application Deployment**: Compiles Java code with Maven (`mvn package -Dflink.version=1.15.2`), uploads JAR to S3, and configures Managed Service for Apache Flink with IAM permissions for Kinesis streams and S3 access.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T22:55:07.619770+05:30

## Related Tags

- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://docs.aws.amazon.com/kinesisanalytics/latest/java/examples-beam.html
