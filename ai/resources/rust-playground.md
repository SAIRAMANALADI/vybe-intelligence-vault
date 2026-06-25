---
title: Rust Playground
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://play.rust-lang.org/?code=%23!%5Ballow(unused)%5D%0Afn+main()+%7B%0A++++use+std::ops::%7BAdd,+Sub%7D;%0A++++%0A++++%23%5Bderive(Debug,+Copy,+Clone,+PartialEq)%5D%0A++++struct+Point+%7B%0A++++++++x:+i32,%0A++++++++y:+i32,%0A++++%7D%0A++++%0A++++impl+Add+for+Point+%7B%0A++++++++type+Output+=+Self;%0A++++++++%0A++++++++fn+add(self,+other:+Self)+-%3E+Self+%7B%0A++++++++++++Self+%7Bx:+self.x+%2B+other.x,+y:+self.y+%2B+other.y%7D%0A++++++++%7D%0A++++%7D%0A++++%0A++++impl+Sub+for+Point+%7B%0A++++++++type+Output+=+Self;%0A++++++++%0A++++++++fn+sub(self,+other:+Self)+-%3E+Self+%7B%0A++++++++++++Self+%7Bx:+self.x+-+other.x,+y:+self.y+-+other.y%7D%0A++++++++%7D%0A++++%7D%0A++++%0A++++assert_eq!(Point+%7Bx:+3,+y:+3%7D,+Point+%7Bx:+1,+y:+0%7D+%2B+Point+%7Bx:+2,+y:+3%7D);%0A++++assert_eq!(Point+%7Bx:+-1,+y:+-3%7D,+Point+%7Bx:+1,+y:+0%7D+-+Point+%7Bx:+2,+y:+3%7D);%0A%7D&
published_at: '2026-06-24T21:01:09.083035+05:30'
collected_at: '2026-06-24T21:01:09.083044+05:30'
tags:
- web-crawled
status: active
resource_id: blog:rust-playground
first_seen: '2026-06-24T21:01:09.083044+05:30'
last_seen: '2026-06-24T21:01:09.083044+05:30'
last_checked: '2026-06-24T21:01:09.083044+05:30'
health_score: 100
---

# Rust Playground

## Summary

No summary provided. Reference resource: Rust Playground

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T21:01:09.083035+05:30

## Related Tags

- web-crawled

## Source

Original source: https://play.rust-lang.org/?code=%23!%5Ballow(unused)%5D%0Afn+main()+%7B%0A++++use+std::ops::%7BAdd,+Sub%7D;%0A++++%0A++++%23%5Bderive(Debug,+Copy,+Clone,+PartialEq)%5D%0A++++struct+Point+%7B%0A++++++++x:+i32,%0A++++++++y:+i32,%0A++++%7D%0A++++%0A++++impl+Add+for+Point+%7B%0A++++++++type+Output+=+Self;%0A++++++++%0A++++++++fn+add(self,+other:+Self)+-%3E+Self+%7B%0A++++++++++++Self+%7Bx:+self.x+%2B+other.x,+y:+self.y+%2B+other.y%7D%0A++++++++%7D%0A++++%7D%0A++++%0A++++impl+Sub+for+Point+%7B%0A++++++++type+Output+=+Self;%0A++++++++%0A++++++++fn+sub(self,+other:+Self)+-%3E+Self+%7B%0A++++++++++++Self+%7Bx:+self.x+-+other.x,+y:+self.y+-+other.y%7D%0A++++++++%7D%0A++++%7D%0A++++%0A++++assert_eq!(Point+%7Bx:+3,+y:+3%7D,+Point+%7Bx:+1,+y:+0%7D+%2B+Point+%7Bx:+2,+y:+3%7D);%0A++++assert_eq!(Point+%7Bx:+-1,+y:+-3%7D,+Point+%7Bx:+1,+y:+0%7D+-+Point+%7Bx:+2,+y:+3%7D);%0A%7D&
