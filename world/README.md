# Vybe Vault 3D Intelligence Map

A retro 90s Noir / CRT phosphor green themed 3D Node Graph interface visualizing the cognitive knowledge nodes and relationships of the `vybe-intelligence-vault` repository.

Built using **React 19**, **Vite**, **Tailwind CSS v4**, **Three.js (via React Three Fiber & Drei)**, **GSAP (ScrollTrigger)**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Pre-requisite: Generate the Data Index
The application consumes a static `vault-index.json` compiled from the markdown database. To build or update the index, run the build script from the vault root directory:
```bash
# From the vault root directory
node scripts/build-index.js
```
This script will parse all markdown files under `maps/`, `skills/`, `daily-digests/`, and `prompts/`, resolve linking relationships to compile `vault-index.json`, and recursively copy all `.md` source files into the React app's public assets folder so they can be lazy-loaded.

### 2. Launch Local Development
Navigate to this directory and start the Vite development server:
```bash
cd intelligence-map
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Application Architecture & Tech Stack

1. **Vite + React 19**: Scaffolded as a client-side single page app.
2. **Tailwind CSS v4**: Integrates using the new `@tailwindcss/vite` plugin. Scans and injects CSS declarations using standard `@import "tailwindcss";` in `src/index.css`.
3. **Three.js & React Three Fiber (R3F)**: Renders a 3D WebGL Canvas containing node spheres and connecting lines. Features Drei's `<Stars>` backdrop and damping `<OrbitControls>`.
4. **GSAP & ScrollTrigger**: Drives the camera flight paths to focus on category sectors based on page scroll positions.
5. **Level of Detail (LOD)**: Smoothly checks camera-to-node proximity in the rendering loop, showing high-contrast HTML text labels only when close.
6. **Command Palette (Cmd+K)**: Fully keyboard-accessible modal overlay to search and filter nodes instantly.
7. **Mobile Fallback**: Automatically collapses the 3D canvas on screens narrower than `768px` and renders a clean, directory-tree list.

---

## 📊 Graph Data Structure (`vault-index.json`)

The generated index file contains a JSON object structured as follows:

```json
{
  "nodes": [
    {
      "id": "skills/rag.md",
      "title": "Retrieval-Augmented Generation",
      "category": "skills",
      "tags": ["ai", "rag", "embeddings"],
      "tech_stack": ["Python", "LangChain"],
      "stars": 0,
      "quality_score": 9,
      "rag_relevance": 9,
      "last_updated": "2026-06-22",
      "summary": "Short explanation parsed from header..."
    }
  ],
  "edges": [
    {
      "id": "skills/rag.md->skills/vector-databases.md",
      "source": "skills/rag.md",
      "target": "skills/vector-databases.md",
      "type": "link"
    }
  ]
}
```

### Edge Types:
1. **`link`**: A direct relationship derived when one markdown file links to another via standard relative syntax (e.g. `[Vector DB](../skills/vector-databases.md)`).
2. **`shared-tags`**: Re-inforced relationships created when two vault nodes share two or more tags.

---

## ✍️ Adding New Vault Entries

To add files so they appear automatically in the 3D visualization:

1. Create a markdown file inside one of the monitored directories:
   *   `maps/` - System Stack Blueprints (Cyan nodes)
   *   `skills/` - Guided tutorials and signal checklists (Amber nodes)
   *   `daily-digests/` - Auto-generated evaluation files (Magenta nodes)
   *   `prompts/` - Custom LLM prompt templates (Emerald nodes)
2. Include links to other vault files using relative paths to establish connections:
   ```markdown
   Explore the related stack at [LangGraph Guide](../skills/langgraph.md).
   ```
3. Run `node scripts/build-index.js` in the vault folder. The script will rebuild the graph, establish the edges, copy the files, and update the view.

---

## 📦 Deployment Instructions

The project is built entirely as a static client-side bundle. No backend server is required.

### Build the Static Bundle
```bash
npm run build
```
This compiles the application assets into the `dist/` directory.

### Deploy to GitHub Pages (Actions)
You can configure a GitHub Action to deploy the `dist/` folder:
```yaml
- name: Deploy to GitHub Pages
  uses: JamesIves/github-pages-deploy-action@v4
  with:
    folder: intelligence-map/dist
```

### Deploy to Vercel or Netlify
1. Point your Vercel/Netlify repository root to this sub-directory (`intelligence-map`).
2. Set the build command to: `node ../scripts/build-index.js && npm run build` (so the index compiles dynamically on the server!).
3. Set the output directory to: `dist`.
