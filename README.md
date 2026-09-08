# QA Automation Case Study: Playwright UI and API Smoke Tests

This is a portfolio demonstration of a maintainable QA automation baseline. It uses Playwright to validate one UI journey and one public API health check, then runs the same suite in GitHub Actions on every push and pull request.

## What this demonstrates

- UI validation using accessible roles and assertions.
- API-level health validation independent of the UI.
- A small, readable test structure that can grow by feature.
- HTML reports and traces for CI failures.
- A practical use of AI: accelerate test design and review, while keeping the assertions and expected behavior under engineer control.

## Run locally

```powershell
npm install
npx playwright install chromium
npm test
```

## Engineering decisions

The tests use stable, user-facing accessible roles rather than brittle CSS/XPath selectors. The API check is separate from the UI test so a failure can be triaged as service availability or browser-flow behavior. This project intentionally makes no claim about an employer, client, production system, defect count, or business result.

## Next improvements

1. Replace the public demo URLs with an authorized application under test.
2. Add test data setup and cleanup through an approved API.
3. Add visual regression checks for stable critical pages.
4. Use CI artifacts to investigate failed runs before retrying.