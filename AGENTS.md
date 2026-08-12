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

## Validation

- Run `npm run build` after focused UI changes.
- Verify production assets return HTTP 200 after deployment.
- Do not claim live runtime verification from a build alone.

## Deployment

- Vercel project: `ha-tinh-tour-explore`.
- Production URL: https://ha-tinh-tour-explore.vercel.app
