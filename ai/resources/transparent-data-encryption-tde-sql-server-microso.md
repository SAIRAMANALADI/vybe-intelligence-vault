---
title: Transparent Data Encryption (TDE) - SQL Server | Microsoft Learn
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/en-us/sql/relational-databases/security/encryption/transparent-data-encryption?view=sql-server-2017
published_at: '2026-06-27T01:52:06.518603+05:30'
collected_at: '2026-06-27T01:52:06.518617+05:30'
tags:
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:transparent-data-encryption-tde-sql-server-microso
first_seen: '2026-06-27T01:52:06.518617+05:30'
last_seen: '2026-06-27T01:52:06.518617+05:30'
last_checked: '2026-06-27T01:52:06.518617+05:30'
health_score: 100
---

# Transparent Data Encryption (TDE) - SQL Server | Microsoft Learn

## Summary

- **Mechanism**: TDE performs real-time I/O encryption/decryption of data and log files at the page level using a symmetric database encryption key (DEK), secured by a certificate stored in the `master` database or an asymmetric key via EKM, without altering database size.

- **Scope & Limitations**: Protects only data at rest (not in transit), excludes system databases (`master`, `model`, `msdb`), and requires certificate backups for recovery; disallows concurrent maintenance operations during encryption state changes.

- **Implementation**: Enabled via `CREATE DATABASE ENCRYPTION KEY` (AES/3DES) protected by a certificate, with encryption status monitored via `sys.dm_database_encryption_keys`; full-text indexes are also encrypted in SQL Server 2008+.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-27T01:52:06.518603+05:30

## Related Tags

- reddit
- web-crawled
- youtube

## Source

Original source: https://learn.microsoft.com/en-us/sql/relational-databases/security/encryption/transparent-data-encryption?view=sql-server-2017
