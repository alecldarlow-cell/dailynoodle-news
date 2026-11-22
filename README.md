# Noodle News — news.dailynoodle.co.uk

The Daily Noodle's data desk, split out of `alecldarlow-cell/dailynoodle` (at 071b999) on 22 Nov 2026 so news publishes on its own, outside the daily puzzle site's test gate.

- Each piece is one HTML file in `reports/`, at the same path it had on dailynoodle.co.uk; old links there forward here.
- Front page: `index.html` + `front.js`/`front.css`, listing `feed.json`.
- Writing a piece: `toolchain/` (read `toolchain/news-desk-v6.md` and `toolchain/SESSION-PROTOCOL.md` first). Build the piece, put it in `reports/`, push to `main`.
- Publish: `.github/workflows/build.yml` runs `tools/build.js` (tracker, link-preview tags, Share button, "← News" row, dark mode, feed) and `tools/check.js`, then deploys `_site` to GitHub Pages, usually within a couple of minutes. Forward-dated pieces appear on their day (nightly run).
- Never rename a piece's file path: shared links depend on it.
