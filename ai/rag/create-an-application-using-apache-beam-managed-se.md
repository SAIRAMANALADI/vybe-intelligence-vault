---
title: Create an application using Apache Beam - Managed Service for Apache Flink
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.aws.amazon.com/kinesisanalytics/latest/java/examples-beam.html
published_at: '2026-07-03T20:10:27.075220+05:30'
collected_at: '2026-07-03T20:10:27.075236+05:30'
tags:
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:create-an-application-using-apache-beam-managed-se
first_seen: '2026-07-03T20:10:27.075236+05:30'
last_seen: '2026-07-03T20:10:27.075236+05:30'
last_checked: '2026-07-03T20:10:27.075236+05:30'
health_score: 100
---

# Create an application using Apache Beam - Managed Service for Apache Flink

## Summary

- **Resource Setup**: Requires creation of two Kinesis data streams (`ExampleInputStream`, `ExampleOutputStream`) and an S3 bucket (`ka-app-code-<user>`) for storing the application JAR file.

- **Apache Beam Job Logic**: Implements a `PingPongFn` transform in Java that converts input "ping" records to "pong" in the output stream while passing through other records unchanged.

- **Deployment & Execution**: Compiles with Maven (`mvn package -Dflink.version=1.15.2`), uploads the JAR to S3, configures IAM permissions for Kinesis/S3 access, and deploys the Managed Service for Apache Flink application with input/output stream bindings.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T20:10:27.075220+05:30

## Related Tags

- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://docs.aws.amazon.com/kinesisanalytics/latest/java/examples-beam.html
