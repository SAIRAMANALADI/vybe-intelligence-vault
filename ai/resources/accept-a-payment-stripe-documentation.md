---
title: Accept a payment | Stripe Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://stripe.com/docs/payments/accept-a-payment?platform=android&ui=payment-sheet
published_at: '2026-08-10T13:48:48.090419+05:30'
collected_at: '2026-08-10T13:48:48.090433+05:30'
tags:
- producthunt
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:accept-a-payment-stripe-documentation
first_seen: '2026-08-10T13:48:48.090433+05:30'
last_seen: '2026-08-10T13:48:48.090433+05:30'
last_checked: '2026-08-10T13:48:48.090433+05:30'
health_score: 100
---

# Accept a payment | Stripe Documentation

## Summary

- **Integration Requirements**: Requires Stripe Android SDK (`com.stripe:stripe-android:23.14.0`) for client-side implementation and server-side endpoints to interact with Stripe API (e.g., creating `PaymentIntent`, `Customer`, or `CustomerSession`).

- **Payment Flow**: Uses `PaymentIntent` to track payment state, with optional `Customer`/`Account` objects for saved payment methods; `CustomerSession` provides scoped access to sensitive customer data.

- **PaymentSheet UI**: Android `PaymentSheet` class enables prebuilt checkout UI; `presentWithPaymentIntent()` displays the sheet, and `PaymentSheetResult` handles post-payment callbacks (e.g., success/failure).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T13:48:48.090419+05:30

## Related Tags

- producthunt
- reddit
- web-crawled
- workflows

## Source

Original source: https://stripe.com/docs/payments/accept-a-payment?platform=android&ui=payment-sheet
