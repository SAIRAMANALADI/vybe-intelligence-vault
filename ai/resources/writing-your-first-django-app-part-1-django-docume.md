---
title: Writing your first Django app, part 1 | Django documentation | Django
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.djangoproject.com/en/stable/intro/tutorial01/
published_at: '2026-06-30T10:17:05.452141+05:30'
collected_at: '2026-06-30T10:17:05.452156+05:30'
tags:
- web-crawled
status: active
resource_id: blog:writing-your-first-django-app-part-1-django-docume
first_seen: '2026-06-30T10:17:05.452156+05:30'
last_seen: '2026-06-30T10:17:05.452156+05:30'
last_checked: '2026-06-30T10:17:05.452156+05:30'
health_score: 100
---

# Writing your first Django app, part 1 | Django documentation | Django

## Summary

- **Django Project Setup**: A Django project is auto-generated via `django-admin startproject <project_name> <directory>`, creating core files (`manage.py`, `settings.py`, `urls.py`, `wsgi.py`, `asgi.py`) for configuration, URL routing, and deployment interfaces.

- **App Creation & Structure**: Apps are modular components created via `python manage.py startapp <app_name>`, generating a standardized directory (`models.py`, `views.py`, `urls.py`, `migrations/`, etc.) for encapsulating specific functionality (e.g., `polls` app).

- **URL Routing & View Binding**: URL patterns are defined in `urls.py` files, using `path()` for route-to-view mapping and `include()` to delegate sub-routes to app-level configurations, enabling modular URL dispatching (e.g., `/polls/` → `polls.urls`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T10:17:05.452141+05:30

## Related Tags

- web-crawled

## Source

Original source: https://docs.djangoproject.com/en/stable/intro/tutorial01/
