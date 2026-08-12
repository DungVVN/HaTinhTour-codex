# AGENTS.md

## Project

Ha Tinh Tour is a Vietnamese travel discovery prototype, designed in the spirit of a Figma project with mock database data, for the flow **Khám phá Hà Tĩnh → Sơn Trang**.

## Scope

- Follow [requirement.md](requirement.md) as the product requirement.
- Treat the project primarily as a UI/UX prototype and interactive design artifact, not as a conventional frontend product or backend system.
- Use mock database data and local assets from `public` to demonstrate screens, content states and prototype flows.
- React is only the current implementation medium for the prototype. Do not infer production frontend architecture from it.
- Do not add a real backend, production database, API, real GPS, real maps, CMS, or technical SEO without explicit approval.

## UI rules

- Preserve Vietnamese labels from the requirement.
- Validate desktop, tablet, and mobile layouts together.
- Keep controls content-fit and tap-friendly on mobile.
- Use the existing travel/editorial visual direction: forest green, dark ink, coral accent, warm light background.
- Prefer real images from `public` and keep image alt text descriptive.
- Keep the page accessible: readable type, sufficient contrast, visible states, keyboard-friendly controls, and reduced-motion support.

### Full-viewport layout rule

- The website is a full-canvas prototype: primary sections must use `width: 100%`/`100vw` where appropriate and must not introduce a narrow centered `max-width` wrapper by default.
- All page-level content aligns to the shared `--layout-gutter` token in `src/spacing.css`; do not add one-off left/right margins that create large empty side zones.
- Horizontal gutters are intentionally compact: desktop `20–44px`, iPad `24–32px`, phone `16px`.
- Desktop, iPad, and phone must be checked together after any redesign. The content should expand with the viewport while cards, text columns, and controls retain readable internal widths.
- Use asymmetry inside the canvas for visual rhythm, not unused outer whitespace. Any new `max-width` must be justified for readability of a text block, never for the whole page shell.
- Full-viewport does not mean forcing every section to fill the viewport height: use content-driven section heights with compact padding. Avoid `min-height: svh` on ordinary content sections because it creates empty bands above and below cards.
- Do not change the full-viewport contract when redesigning a section; extend the shared tokens or breakpoint rules instead.

## Validation

- Run `npm run build` after focused UI changes.
- Verify production assets return HTTP 200 after deployment.
- Do not claim live runtime verification from a build alone.

## Deployment

- Vercel project: `ha-tinh-tour-explore-codex`.
- Production URL: https://ha-tinh-tour-explore-codex.vercel.app
