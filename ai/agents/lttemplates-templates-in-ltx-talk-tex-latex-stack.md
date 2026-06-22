---
title: lttemplates - Templates in ltx-talk - TeX - LaTeX Stack Exchange
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://tex.stackexchange.com/questions/763951/templates-in-ltx-talk
published_at: '2026-06-22T10:45:38.573405+05:30'
collected_at: '2026-06-22T10:45:38.573416+05:30'
tags:
- agents
- hackernews
- paper
- producthunt
- reddit
- scripts
- web-crawled
- workflows
status: active
resource_id: blog:lttemplates-templates-in-ltx-talk-tex-latex-stack
first_seen: '2026-06-22T10:45:38.573416+05:30'
last_seen: '2026-06-22T10:45:38.573416+05:30'
last_checked: '2026-06-22T10:45:38.573416+05:30'
health_score: 100
---

# lttemplates - Templates in ltx-talk - TeX - LaTeX Stack Exchange

## Summary

- **Template Customization in `ltx-talk`**: To modify footers/headers in `ltx-talk`, users must either edit existing instances (e.g., `\EditInstance{footer}{std}{...}`) or declare new template types via `\DeclareTemplateCode` if default templates lack required features (e.g., custom footers with lines/logos).

- **Key Structural Overrides**: Customizations like a footer line or two-line header require direct manipulation of template internals (e.g., `\DeclareTemplateCode` blocks) due to `ltx-talk`'s rigid template interface, as default `footer-element` instances lack native support for such modifications.

- **Institutional Theme Workflow**: For university CI themes, package authors must either extend `ltx-talk`'s template system (via `\DeclareTemplateType`) or override instances (e.g., `\EditInstance{header}{std}{...}`) to enforce branding rules (colors, logos, separators).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-22T10:45:38.573405+05:30

## Related Tags

- agents
- hackernews
- paper
- producthunt
- reddit
- scripts
- web-crawled
- workflows

## Source

Original source: https://tex.stackexchange.com/questions/763951/templates-in-ltx-talk
