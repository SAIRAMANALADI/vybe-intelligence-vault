---
title: Cloud Firestore Data model | Firebase
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://firebase.google.com/docs/firestore/data-model#documents
published_at: '2026-06-27T14:30:48.518815+05:30'
collected_at: '2026-06-27T14:30:48.518829+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:cloud-firestore-data-model-firebase
first_seen: '2026-06-27T14:30:48.518829+05:30'
last_seen: '2026-06-27T14:30:48.518829+05:30'
last_checked: '2026-06-27T14:30:48.518829+05:30'
health_score: 100
---

# Cloud Firestore Data model | Firebase

## Summary

- **Data Model**: Cloud Firestore is a schemaless, NoSQL document-oriented database where data is stored in documents (key-value pairs) organized into collections; documents can contain subcollections and nested objects (maps), supporting primitive types (string, number, boolean, etc.) and complex structures (arrays, geo points, timestamps, binary blobs).

- **Document & Collection Structure**: Documents are lightweight records identified by unique names within collections, which act as containers; collections are implicitly created when the first document is added and deleted when all documents are removed; document references are location-based (e.g., `db.collection('users').doc('alovelace')`).

- **Cross-Language Support**: Firestore provides language-specific APIs (e.g., Web, Swift, Kotlin, Java, Python, Node.js, Go, PHP) to create document references, with modular and namespaced variants for Web; references enable direct access to documents via hierarchical paths.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T14:30:48.518815+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://firebase.google.com/docs/firestore/data-model#documents
