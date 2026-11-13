# Developer Portfolio — free, static website

A responsive portfolio built with **HTML + CSS + JavaScript only**. No npm, frameworks, paid hosting, database, or API keys are required.

## 1. Preview locally

**Simplest option:** double-click `index.html` and open it in your browser.

**Optional local server:** In VS Code, open this folder and use the Live Server extension, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## 2. Personalize before publishing

Edit `data.js`. That's where you can update:

- `name` and `initials` (both are placeholders initially)
- Your headline, school, About section, and skills
- `email`, `github`, `linkedin`, and `resume` (empty links are hidden)
- Each project's title, description, bullet points, technologies, and source/demo URLs

The included projects (VEDA, Bottleneck Path Visualizer, Auto-Login Bot, Weather App) are **starter drafts** based on your previously discussed work. Review every description for accuracy before publishing. No source/demo URLs have been invented.

If you want to include your résumé, put a file called `resume.pdf` next to `index.html` and set `resume: "resume.pdf"` in `data.js`.

**Important:** Never put passwords, access tokens, API credentials, or sensitive files in this public repository. For your auto-login project, remove saved credentials before sharing source code.

## 3. Publish for $0 with GitHub Pages

1. Create a free GitHub account if you don't already have one.
2. Create a new **public** repository named `<YOUR-GITHUB-USERNAME>.github.io` (use your actual username).
3. Add the contents of this folder to the repository root. `index.html` must be in the root, not nested in another folder.
4. Commit your files to the repository's `main` branch.
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/(root)`, and save.
7. Your website will be available at `https://<YOUR-GITHUB-USERNAME>.github.io` once GitHub finishes publishing.

Reference: https://docs.github.com/en/pages/quickstart

You do not need to purchase a domain. You can add one later if you want.

## 4. Website features

- Responsive layout for mobile/tablet/desktop
- Accessible navigation and project details
- Project filters for AI, algorithms, and web work
- Dark/light appearance toggle (saved in the browser when storage is available)
- Optional clickable links to source code, demos, résumé, GitHub, LinkedIn, and email
- No tracking scripts, third-party fonts, or external dependencies

## Files

- `index.html` — page content and sections
- `styles.css` — design, layout, and responsive styling
- `data.js` — edit personal and project details here
- `app.js` — small interactive features
- `favicon.svg` — browser tab icon
- `.nojekyll` — ensures direct static file publishing on GitHub Pages

## Next improvements

Consider adding real project screenshots, video demos, links to public repositories, and a one-page résumé. These are optional; the site already works without them.
