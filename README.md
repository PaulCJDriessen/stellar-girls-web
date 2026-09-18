# Stellar Girls — public site

Static pages for GitHub Pages: home, **news**, manual, health warning, support form, privacy, cookies.

Public URL (after custom domain): `https://stellargirls.is-a.dev`  
Legacy GitHub Pages URL: `https://paulcjdriessen.github.io/stellar-girls-web/`

Do not put Steamworks AppIDs or partner package IDs in this repo.

## News (one post per day)

1. Add `news/YYYY-MM-DD.html` (copy an existing post; keep paths as `../`).
2. Link it at the **top** of the list in `news.html`.
3. Deploy this folder to `stellar-girls-web` `main`.

## Custom domain (no personal name in social links)

Free subdomain via [is-a.dev](https://is-a.dev): `stellargirls.is-a.dev` → this Pages site.

1. Merge the `is-a-dev/register` PR for `domains/stellargirls.json`.
2. Repo **Settings → Pages → Custom domain**: `stellargirls.is-a.dev`, enforce HTTPS.
3. Keep the `CNAME` file in the site root committed.
4. Use `https://stellargirls.is-a.dev` on socials (and update the support form redirect if needed).
