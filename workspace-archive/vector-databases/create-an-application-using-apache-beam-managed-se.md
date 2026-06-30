---
title: Create an application using Apache Beam - Managed Service for Apache Flink
archive_category: vector-databases
source_category: ai/rag
source_url: https://docs.aws.amazon.com/kinesisanalytics/latest/java/examples-beam.html
resource_id: blog:create-an-application-using-apache-beam-managed-se
local_vault_path: ai/rag/create-an-application-using-apache-beam-managed-se.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- reddit
- scripts
- web-crawled
selection_reason:
- Valuable developer reference
---

# Create an application using Apache Beam - Managed Service for Apache Flink

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Resource Setup**: Requires creating two Kinesis data streams (`ExampleInputStream`, `ExampleOutputStream`) and an S3 bucket (`ka-app-code-<user>`) for application code storage.
- **Apache Beam Transformation Logic**: Implements a `PingPongFn` DoFn that converts input "ping" to "pong" while passing other records unchanged, using Apache Beam's `ParDo` for processing.
- **Application Deployment**: Compiles Java code with Maven (`mvn package -Dflink.version=1.15.2`), uploads JAR to S3, and confi

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.aws.amazon.com/kinesisanalytics/latest/java/examples-beam.html

## Local Vault File

Path: [create-an-application-using-apache-beam-managed-se.md](../../ai/rag/create-an-application-using-apache-beam-managed-se.md)
