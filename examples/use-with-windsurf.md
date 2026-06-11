# Use with Windsurf

This guide explains how to use the Vybe Intelligence Vault with the Windsurf IDE (utilizing the Cascade assistant) for contextual code generation and framework selection.

## Loading Vault Context in Cascade

Cascade can read files and directories in your workspace:
- Open the vault repository as your workspace.
- Reference directories or files directly in your chat prompt.
- Cascade will read the YAML metadata and summaries to suggest relevant tools.

## Example Prompts

Here is a prompt template you can use:

```text
Look at workspace-archive/mcp-registry/ and summarize the available MCP servers that support SQLite database tool calling.
```
