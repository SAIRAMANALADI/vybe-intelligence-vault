---
title: Cloud Firestore Data model | Firebase
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://firebase.google.com/docs/firestore/data-model#documents
published_at: '2026-08-10T13:49:02.138142+05:30'
collected_at: '2026-08-10T13:49:02.138155+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:cloud-firestore-data-model-firebase
first_seen: '2026-08-10T13:49:02.138155+05:30'
last_seen: '2026-08-10T13:49:02.138155+05:30'
last_checked: '2026-08-10T13:49:02.138155+05:30'
health_score: 100
---

# Cloud Firestore Data model | Firebase

## Summary

- **Data Model**: Cloud Firestore is a schemaless, NoSQL document-oriented database where data is stored in **documents** (key-value pairs) within **collections**; documents can contain nested subcollections, maps, arrays, and support data types like boolean, number, string, geo point, binary blob, and timestamp.
- **Implicit Creation**: Collections and documents are created implicitly—assigning data to a non-existent document/collection automatically generates it; deleting all documents in a collection removes the collection.
- **Document References**: Each document has a unique reference (e.g., `db.collection('users').doc('alovelace')`) accessible across multiple languages (Web, Swift, Kotlin, Python, etc.) for direct CRUD operations.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T13:49:02.138142+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://firebase.google.com/docs/firestore/data-model#documents
