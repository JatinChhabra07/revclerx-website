# RevClerx.ai

## Overview

RevClerx.ai is the marketing site for an enterprise AI consulting brand that helps Fortune-class organizations design, deploy, and operationalize AI that drives measurable business value. The site is a static, six page experience built with hand-written HTML, CSS, and a small amount of vanilla JavaScript, with Tailwind delivered via CDN for utility classes.

## Pages

- `index.html` Home page with hero, methodology, services preview, case studies preview, and CTA.
- `services.html` Six service lines covering process automation, AI agents, conversational AI, data insights, integration, and strategy.
- `industries.html` Industry verticals served (financial services, healthcare, manufacturing, and more).
- `case-studies.html` Selected enterprise outcomes with quantified impact.
- `about.html` Company story, team, values, and credentials.
- `contact.html` Contact form, office details, and scheduling CTA.

A styled `404.html` is also included for unknown routes.

## Local preview

From the project root:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser. Any modern static file server works equally well (`npx serve`, `php -S`, etc.).

## Deploy options

### Vercel
- Drag and drop the project folder onto the Vercel dashboard, or
- Run `vercel` from the project root.
- `vercel.json` enables clean URLs, disables trailing slashes, and applies security headers.

### Netlify
- Drag and drop the project folder onto the Netlify dashboard, or
- Run `netlify deploy --prod --dir=.` from the project root.
- `netlify.toml` sets `publish = "."` and applies security headers.

### Cloudflare Pages
- Connect the Git repository in the Cloudflare Pages dashboard, leave the build command empty, and set the output directory to `.`, or
- Use Wrangler: `wrangler pages deploy .`

## Customization

- Brand colors and gradient stops live in `styles.css`. Look for the indigo and emerald color references and the `.grad-text`, `.blob`, and `.bg-grid` utility classes.
- Page copy lives directly inside each HTML file. Section headings, statistics, and CTAs are inline so each page can be edited without a build step.
- Navigation links and footer content are duplicated across pages. Update them per file when adding or renaming pages.
- Update `sitemap.xml`, `robots.txt`, and the meta tags in each page head when changing the production domain from the placeholder `https://revclerx.ai`.

## Browser support

Targets modern evergreen browsers (latest two major versions of Chrome, Edge, Firefox, and Safari). No legacy IE support.

## No build step

The site is pure HTML, CSS, and vanilla JavaScript. Tailwind utility classes are delivered through the official CDN script, so there is no bundler, no package manager, and no transpilation. Edit a file, refresh the browser, and the change is live.
