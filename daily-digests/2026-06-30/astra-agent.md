---
title: "Maxim-Kondratyev/astra-agent"
category: "Tooling"
tech_stack: ["Python", "AWS SDK (boto3)", "Amazon Bedrock (Claude models)", "AWS Lambda", "AWS CDK", "Mermaid.js (for diagrams)", "HTML/CSS (for reports)"]
quality_score: 9
rag_relevance: 8
tags: ["AWS Well-Architected Framework", "Infrastructure Assessment", "Autonomous AI Agent", "Security Auditing", "Resilience Evaluation"]
source: "https://github.com/Maxim-Kondratyev/astra-agent"
discovered_at: "2026-06-30T16:23:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ASTRA is an autonomous AI agent that evaluates AWS environments against the Well-Architected Framework using 34 automated infrastructure checks. It generates scored reports with actionable recommendations, architecture diagrams, and supports interactive chat for deeper analysis of findings.

## Key Features
- 34 automated, read-only AWS infrastructure checks across Security, Reliability, and SaaS pillars
- Interactive chat for exploring findings and generating remediation steps (CLI/IaC snippets)
- Generates scored reports with prioritized recommendations and architecture diagrams
- Supports customer context (architecture docs) for tailored analysis and gap detection
- Deployable via CLI, CDK, or CI/CD pipelines with `--checks-only` mode for zero-cost automation

## Why It Matters for RAG Builders
ASTRA provides automated, repeatable, and auditable assessments of AWS environments against the Well-Architected Framework, enabling teams to quickly identify risks, prioritize fixes, and maintain compliance without manual reviews or consultants.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS SDK (boto3)
Automated review identified **AWS SDK (boto3)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Amazon Bedrock (Claude models)
Automated review identified **Amazon Bedrock (Claude models)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS Lambda
Automated review identified **AWS Lambda** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS CDK
Automated review identified **AWS CDK** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid.js (for diagrams)
Automated review identified **Mermaid.js (for diagrams)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML/CSS (for reports)
Automated review identified **HTML/CSS (for reports)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
