---
title: Run Payments with Stripe | Firebase Extensions Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://extensions.dev/extensions/stripe/firestore-stripe-payments
published_at: '2026-08-04T03:57:45.550851+05:30'
collected_at: '2026-08-04T03:57:45.550864+05:30'
tags:
- frontend_ui
- rag
- reddit
- web-crawled
status: active
resource_id: blog:run-payments-with-stripe-firebase-extensions-hub
first_seen: '2026-08-04T03:57:45.550864+05:30'
last_seen: '2026-08-04T03:57:45.550864+05:30'
last_checked: '2026-08-04T03:57:45.550864+05:30'
health_score: 100
---

# Run Payments with Stripe | Firebase Extensions Hub

## Summary

- **Ownership Transfer**: The Stripe Firestore extension has been officially transferred to Invertase for maintenance, with migration recommended from `stripe/firestore-stripe-payments` to `invertase/firestore-stripe-payments` ([issue #524](https://github.com/invertase/stripe-firebase-extensions/issues/524)).

- **Core Functionality**: The extension synchronizes Stripe payments (one-time & subscriptions) with Firebase Authentication for access control, using Cloud Functions to sync subscription status to Firestore and apply custom claims.

- **Dependencies & Billing**: Requires Firestore, Firebase Auth, and a restricted Stripe API key; incurs costs for Firestore, Cloud Functions, Stripe Payments/Billing, and optional Eventarc events. Firebase project must be on the Blaze plan.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T03:57:45.550851+05:30

## Related Tags

- frontend_ui
- rag
- reddit
- web-crawled

## Source

Original source: https://extensions.dev/extensions/stripe/firestore-stripe-payments
