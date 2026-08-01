# Mishra Collection Center — Website

A React + Vite site for Mishra Collection Center, styled with Tailwind CSS (via CDN).

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy to GitHub Pages (automatic)

1. Create a new repo on GitHub (e.g. `mishra-collection-center`) and push this
   project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

2. On GitHub, go to **Settings → Pages**, and under **Build and deployment**,
   set **Source** to **GitHub Actions**.

3. That's it. The included workflow (`.github/workflows/deploy.yml`) builds
   and publishes the site automatically on every push to `main`. Check the
   **Actions** tab for progress — the first deploy takes a couple of minutes.
   Your live URL will be:

   ```
   https://<your-username>.github.io/<repo-name>/
   ```

## Deploy elsewhere instead (optional, often simpler)

If you'd rather not use GitHub Pages, both of these auto-deploy straight
from a GitHub repo with no extra config, and give you a proper custom
domain option for free:

- **Netlify** — netlify.com → "Add new site" → "Import an existing project"
  → pick this repo → build command `npm run build`, publish directory `dist`.
- **Vercel** — vercel.com → "Add New Project" → pick this repo → it
  auto-detects Vite, no settings needed.

## Notes

- The booking form on `#book` emails new requests automatically via
  [Web3Forms](https://web3forms.com) using the access key already set in
  `src/App.jsx` (`WEB3FORMS_KEY`), sent to `sudhanshubgh@gmail.com`.
- Tailwind is loaded via CDN in `index.html` for simplicity. That's fine for
  a site this size; a larger project would normally install Tailwind as a
  proper build-time dependency instead.
