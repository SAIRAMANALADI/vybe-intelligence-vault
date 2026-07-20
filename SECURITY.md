# Security Policy

## Reporting Secret Leaks or Vulnerabilities

If you identify any sensitive credentials, secret tokens, private emails, phone numbers, or absolute paths accidentally committed to this public vault:

1. **Do Not Open a Public Issue**: To prevent spreading the leak, please do not open a public issue.
2. **Contact Privately**: Email the maintainer directly at [sairamanladi2007@gmail.com](mailto:sairamanladi2007@gmail.com) with the details.
3. **Prompt Removal**: We will immediately remove the file, rotate any leaked tokens, and scrub the repository's git history if necessary.

## Secret Management & Token Rotation

> [!IMPORTANT]
> **Token Rotation Action Required**: If any Personal Access Token (PAT) was previously stored in local `.git/config` files or committed, the repository owner must immediately revoke and rotate it via GitHub Developer Settings.

- **Secrets Storage**: All automated workflow tokens must be stored exclusively in GitHub Actions Secrets (`VAULT_GITHUB_TOKEN`, `GEMINI_API_KEY`, `MISTRAL_API_KEY`, etc.).
- **No Embedded Credentials**: Never include tokens in git remotes, documentation, or committed scripts.
