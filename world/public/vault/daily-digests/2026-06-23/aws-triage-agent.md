---
title: purpleshellsecurity/aws-triage-agent
category: world/public/vault/daily-digests/2026-06-23
tech_stack:
- Python
- AWS Lambda
- Amazon Bedrock
- AWS GuardDuty
- Amazon EventBridge
- Amazon SQS
- AWS CloudTrail
- AWS IAM
- AWS SAM
- GitHub Actions
quality_score: 9
rag_relevance: 7
tags:
- AWS security
- GuardDuty triage
- read-only agent
- event-driven
- SIEM integration
source: https://github.com/purpleshellsecurity/aws-triage-agent
discovered_at: '2026-06-23T02:41:57Z'
evaluated_by: mistral-small-latest
---

## Summary
A read-only AI agent that triages AWS GuardDuty findings by analyzing CloudTrail context and reasoning on Amazon Bedrock to produce structured verdicts for SIEM integration. It operates event-driven via Lambda and EventBridge, ensuring no changes to the AWS account.

## Key Features
- Event-driven architecture with zero idle compute costs
- Read-only access to AWS resources (CloudTrail, GuardDuty) via IAM least-privilege policies
- Structured verdicts with severity scoring, MITRE tactics, and actionable recommendations
- Integration with Amazon Bedrock for reasoning without API key exposure
- Durable SQS queue for SIEM compatibility and offline resilience

## Why It Matters for RAG Builders
It provides automated, structured triage of AWS security alerts to accelerate incident response while maintaining strict read-only access and human-in-the-loop oversight.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS Lambda
Automated review identified **AWS Lambda** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Amazon Bedrock
Automated review identified **Amazon Bedrock** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS GuardDuty
Automated review identified **AWS GuardDuty** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Amazon EventBridge
Automated review identified **Amazon EventBridge** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Amazon SQS
Automated review identified **Amazon SQS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS CloudTrail
Automated review identified **AWS CloudTrail** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS IAM
Automated review identified **AWS IAM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AWS SAM
Automated review identified **AWS SAM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
