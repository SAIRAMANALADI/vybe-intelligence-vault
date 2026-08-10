---
title: Create an application using Apache Beam - Managed Service for Apache Flink
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.aws.amazon.com/kinesisanalytics/latest/java/examples-beam.html
published_at: '2026-08-10T19:27:37.370218+05:30'
collected_at: '2026-08-10T19:27:37.370233+05:30'
tags:
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:create-an-application-using-apache-beam-managed-se
first_seen: '2026-08-10T19:27:37.370233+05:30'
last_seen: '2026-08-10T19:27:37.370233+05:30'
last_checked: '2026-08-10T19:27:37.370233+05:30'
health_score: 100
---

# Create an application using Apache Beam - Managed Service for Apache Flink

## Summary

- **Apache Beam Application Setup**: Create a Managed Service for Apache Flink application using Apache Beam to process streaming data, requiring dependent resources like Kinesis data streams (`ExampleInputStream`, `ExampleOutputStream`) and an S3 bucket (`ka-app-code-`) for code storage.

- **Application Logic & Compilation**: The Java application (`BasicBeamStreamingJob.java`) uses a `PingPongFn` transform to convert "ping" inputs to "pong" outputs via `ParDo`. Compile with `mvn package -Dflink.version=1.15.2 -Dflink.version.minor=1.8` to generate `basic-beam-app-1.0.jar`.

- **Deployment & Execution**: Upload the JAR to S3, configure IAM permissions for Kinesis/S3 access, set application properties (input/output streams, AWS region), and run the application via the AWS Flink console, enabling CloudWatch logging for monitoring.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T19:27:37.370218+05:30

## Related Tags

- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://docs.aws.amazon.com/kinesisanalytics/latest/java/examples-beam.html
