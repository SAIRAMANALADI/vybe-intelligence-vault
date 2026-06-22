# Harvester Pipeline: Configuring Secrets

To run the LLM-driven harvester pipeline, you must configure API keys and authorization tokens as Secrets in your GitHub repository.

## Required and Optional Secrets

Navigate to your GitHub Repository -> **Settings** -> **Secrets and variables** -> **Actions** and add the following secrets:

### 1. Repository Token (Required for Commits & Pull Requests)
* **Secret Name**: `VAULT_GITHUB_TOKEN`
* **Description**: A GitHub Personal Access Token (PAT) with `repo` and `workflow` scopes. This is used by the Action to checkout the vault, write changes, create branches, and open review Pull Requests.
* **Fallback**: If not provided, the default workflow will attempt to use `${{ secrets.GITHUB_TOKEN }}`, but opening PRs across repositories or running workflows on custom branches might be restricted depending on org permissions.

### 2. LLM Provider API Keys (At least one is required)
Depending on your selected provider (controlled via the `LLM_PROVIDER` environment variable in the workflow), configure the corresponding secret:
* **Anthropic Claude**:
  * **Secret Name**: `ANTHROPIC_API_KEY`
  * **Value**: Your `sk-ant-...` API key.
* **OpenAI GPT-4o**:
  * **Secret Name**: `OPENAI_API_KEY`
  * **Value**: Your `sk-...` API key.
* **Google Gemini**:
  * **Secret Name**: `GEMINI_API_KEY`
  * **Value**: Your Google AI Studio Gemini API key.
* **Local Ollama Fallback**:
  * **Secret Name**: `OLLAMA_ENDPOINT` (Optional)
  * **Value**: The endpoint URL (e.g. `http://my-gpu-runner.local:11434`). Enabled automatically if running on a self-hosted runner or if the endpoint is reachable.

### 3. Discord Alerts (Optional)
* **Secret Name**: `DISCORD_WEBHOOK_URL`
* **Description**: The Discord channel webhook URL. High-value repositories (quality score >= 8 AND RAG relevance >= 8) will trigger immediate notifications to this channel.

---

## Selecting the LLM Provider in the Workflow

You can set the provider in your `.github/workflows/harvester.yml` using the `LLM_PROVIDER` env variable:
```yaml
env:
  LLM_PROVIDER: "anthropic" # Options: "anthropic", "openai", "gemini", "ollama"
```

The script will automatically validate the presence of the corresponding API key and fallback to Ollama if no keys are found or if the API request fails repeatedly.
