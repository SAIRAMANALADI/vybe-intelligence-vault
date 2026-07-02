---
title: Accept a payment | Stripe Documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://stripe.com/docs/payments/accept-a-payment?platform=react-native&ui=payment-sheet
published_at: '2026-07-02T10:02:24.386581+05:30'
collected_at: '2026-07-02T10:02:24.386593+05:30'
tags:
- frontend_ui
- rag
- web-crawled
- workflows
status: active
resource_id: blog:accept-a-payment-stripe-documentation
first_seen: '2026-07-02T10:02:24.386593+05:30'
last_seen: '2026-07-02T10:02:24.386593+05:30'
last_checked: '2026-07-02T10:02:24.386593+05:30'
health_score: 100
---

# Accept a payment | Stripe Documentation

## Summary

- **Integration Components**: Uses `PaymentIntent` to track payment state, optionally attaches payment methods to `Customer` or `Account` objects, and leverages `CustomerSession` for secure, scoped access to sensitive customer data.

- **Server-Side Setup**: Requires endpoints to create `Customer`/`Account`, generate `CustomerSession`, and create `PaymentIntent` with `amount`, `currency`, and client secrets returned to the client.

- **Client-Side Flow**: Initializes Stripe via `StripeProvider`/`initStripe`, calls `initPaymentSheet` with merchant details and secrets, and presents `PaymentSheet` for payment collection, handling return URLs for iOS redirection.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T10:02:24.386581+05:30

## Related Tags

- frontend_ui
- rag
- web-crawled
- workflows

## Source

Original source: https://stripe.com/docs/payments/accept-a-payment?platform=react-native&ui=payment-sheet
