---
title: Cloud Firestore Data model | Firebase
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://firebase.google.com/docs/firestore/data-model#documents
published_at: '2026-07-08T01:57:06.968950+05:30'
collected_at: '2026-07-08T01:57:06.968964+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:cloud-firestore-data-model-firebase
first_seen: '2026-07-08T01:57:06.968964+05:30'
last_seen: '2026-07-08T01:57:06.968964+05:30'
last_checked: '2026-07-08T01:57:06.968964+05:30'
health_score: 100
---

# Cloud Firestore Data model | Firebase

## Summary

- **Data Model**: Cloud Firestore is a schemaless, NoSQL document-oriented database where data is stored in **documents** (key-value pairs) organized into **collections**; documents can contain subcollections, nested objects, and support multiple data types (e.g., boolean, string, timestamp, geo point, binary blob, arrays, maps).
- **Document & Collection Structure**: Documents are lightweight records identified by unique names, stored in collections; collections are implicitly created when a document is added and cease to exist when all documents within them are deleted; documents can be referenced programmatically via language-specific APIs (e.g., `doc(db, 'users', 'alovelace')`).
- **Hierarchical Data & References**: While collections cannot directly contain other collections, hierarchical data is achieved via **subcollections**; each document has a unique location-based reference (e.g., `users/alovelace`), enabling cross-collection queries and data modeling.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T01:57:06.968950+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://firebase.google.com/docs/firestore/data-model#documents
