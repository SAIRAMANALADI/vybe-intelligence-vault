---
title: Models | Django documentation | Django
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.djangoproject.com/en/stable/topics/db/models/
published_at: '2026-06-30T10:17:10.934196+05:30'
collected_at: '2026-06-30T10:17:10.934207+05:30'
tags:
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:models-django-documentation-django
first_seen: '2026-06-30T10:17:10.934207+05:30'
last_seen: '2026-06-30T10:17:10.934207+05:30'
last_checked: '2026-06-30T10:17:10.934207+05:30'
health_score: 100
---

# Models | Django documentation | Django

## Summary

- **Model Definition**: Django models subclass `django.db.models.Model`, where each attribute maps to a database field (e.g., `CharField`, `ForeignKey`), generating an ORM-accessible API and corresponding SQL table (e.g., `CREATE TABLE myapp_person (...)`).

- **Field Options**: Common field parameters include `null` (database-level `NULL` storage), `blank` (form validation allowance), `choices` (enumerated selections), `default`/`db_default` (value or callable defaults), and `primary_key` (explicit or auto-generated `id` field).

- **Primary Key Behavior**: Django auto-adds a `BigAutoField` primary key unless overridden; custom keys require `primary_key=True` on a field, with exactly one such field required per model.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T10:17:10.934196+05:30

## Related Tags

- hackernews
- rag
- web-crawled

## Source

Original source: https://docs.djangoproject.com/en/stable/topics/db/models/
