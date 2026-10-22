# Renotech Air Engineering: website

Static home page for renotech.in. Plain HTML, CSS and JavaScript with no build step, ready for Cloudflare Pages.

Website design by [Inspirito Ventures Pvt Ltd](https://inspirito.in).

## What is in this folder

```
index.html            Home page
404.html              Shown for any address that does not exist yet
_headers              Cloudflare Pages headers (security, caching, keeps *.pages.dev out of Google)
robots.txt            Search engine rules
sitemap.xml           One-page sitemap
favicon.svg           Browser tab icon (plus favicon-32.png and apple-touch-icon.png)
assets/
  css/style.css       All styles
  js/main.js          Page content (products, services, checklist) and all animations
  js/vendor/          GSAP, ScrollTrigger and Lenis, kept locally so nothing loads from outside
  fonts/              Geist and Geist Mono (SIL Open Font License)
  img/logo/           Logo: colour, white (for dark backgrounds) and the globe mark on its own
  img/products/       One photo per product tile
  img/services/       service-01 to service-10, shown beside the services list on hover
  img/industries/     Photos for the moving "Application areas" strip
  img/sections/       Hero, about, why-choose-us and call-to-action photos
  img/og-image.jpg    Preview image for WhatsApp, LinkedIn and other link shares
```

## Deploy with GitHub Desktop and Cloudflare Pages

1. Unzip. You get a folder called `renotech-website`.
2. In GitHub Desktop, choose **File → Add local repository** and pick the `renotech-website` folder.
   It will say the folder is not a Git repository: click **create a repository** and then **Create repository**.
3. Click **Publish repository**. A private repository is fine.
4. In the Cloudflare dashboard, open **Workers & Pages → Create → Pages → Connect to Git**, then pick the repository.
5. Build settings:
   - Framework preset: **None**
   - Build command: `exit 0`
   - Build output directory: `/`
6. Click **Save and Deploy**. The site goes live at `https://<project-name>.pages.dev`.
7. To use the real domain, open the project's **Custom domains** tab and add `renotech.in` and `www.renotech.in`.

From then on, every commit you push from GitHub Desktop redeploys the site automatically.

The `*.pages.dev` address is kept out of Google by `_headers`. Only the custom domain gets indexed.

## Making changes

- **Text**: headings and section copy are in `index.html`. Product, service and checklist wording is at the top of `assets/js/main.js`.
- **Photos**: replace a file in `assets/img/...` with a new `.webp` or `.jpg` and update its name where it is used. Images are cached for a week, so a replacement shows up immediately only if it has a new file name.
- **After editing `style.css` or `main.js`**: change `?v=20261009` in `index.html` to a new value, so browsers fetch the new file.

## Before going live

- **Photos**: all photos are Unsplash stock placeholders, free to use commercially. Swap in Renotech's own plant, product and project photos when available.
- **Logo**: the logo was redrawn from a small image. Replace the three files in `assets/img/logo/` if the original artwork turns up.
- **Contact form**: not connected yet. Sending shows a message asking visitors to call or email. It can be wired to email with a Cloudflare Pages Function or a form service.
- **Map**: the map tile opens a Google Maps search for the business. Swap the link in `index.html` for the exact Google Business Profile link.
- **Other pages**: Products, Services, Projects, About Us and Contact are `#` links that do nothing until those pages are built.
- **Domain**: `canonical`, `og:image`, `robots.txt` and `sitemap.xml` assume `https://renotech.in/`. Change them if the domain is different.
