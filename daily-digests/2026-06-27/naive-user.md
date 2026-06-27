---
title: "TechGardenCode/naive-user"
category: "Tooling"
tech_stack: ["Node.js", "Playwright", "Playwright MCP", "Claude Code", "Codex", "Gemini CLI", "GitHub Copilot CLI", "OpenCode"]
quality_score: 9
rag_relevance: 7
tags: ["AI-driven testing", "UX validation", "accessibility auditing", "browser automation", "source-blind evaluation"]
source: "https://github.com/TechGardenCode/naive-user"
discovered_at: "2026-06-27T04:00:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
naive-user is an AI agent that tests web applications as a first-time, source-blind user, identifying bugs, UX gaps, and accessibility issues by interacting with a live browser and reporting findings without prior knowledge of the app's source code.

## Key Features
- Interacts with live web apps as a naive first-time user, simulating real user behavior without prior knowledge of the app's structure.
- Generates a persistent mental model and dated findings reports under `qa/naive-user/<app>/`, refining insights across multiple runs.
- Severity-ranked findings (bug, broken-expectation, ux-gap, surprise, a11y) with detailed repro steps and screenshots for evidence.
- Integrates with multiple AI harnesses (Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode) via Playwright MCP for seamless deployment.
- Supports configurable authentication steps, app startup commands, and automated or manual commit of findings to version control.

## Why It Matters for RAG Builders
It proactively identifies critical UX, accessibility, and functional gaps before real users encounter them, reducing post-deployment fixes and improving product quality.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright MCP
Automated review identified **Playwright MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex
Automated review identified **Codex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini CLI
Automated review identified **Gemini CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Copilot CLI
Automated review identified **GitHub Copilot CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenCode
Automated review identified **OpenCode** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
