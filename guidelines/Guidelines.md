# Accessibility guidelines (WCAG 2.1 AA)

Apply these rules on every change to the Platinum Medical Evaluations site. Target is **WCAG 2.1 Level AA**.

## Must follow

* One `<h1>` per page; nest headings logically (do not skip levels).
* Unique, descriptive `document.title` per route.
* Descriptive link and button text — no “click here” / bare “learn more” for primary actions.
* Meaningful `alt` on informative images (e.g. logos: brand name). Decorative images use `alt=""` and `aria-hidden` where appropriate.
* Body text contrast ≥ 4.5:1; large text ≥ 3:1. Do not convey meaning by color alone.
* Visible `:focus-visible` outline on all interactive controls. Never remove outline without a replacement.
* “Skip to main content” link as the first focusable element; page content in `<main id="main-content">`.
* Use semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
* Forms: every field has a programmatically associated `<label>`; required fields marked with text (“Required”) plus `required` / `aria-required`; errors are specific, tied with `aria-invalid` / `aria-describedby`, and announced (`role="alert"`).
* In-page navigation should move keyboard focus to the target section.
* Respect `prefers-reduced-motion` for smooth scrolling and decorative motion.

## Out of scope for this codebase (until built or vendor-integrated)

Patient portal / MFA, appointment scheduling widgets, billing / pay-online, telehealth UI, downloadable PDFs, video/audio captions, multi-location microsites, and third-party embeds (require vendor VPAT).

## Testing cadence

* Automated scan (axe / WAVE): every deploy + monthly
* Keyboard-only pass: quarterly
* Screen reader pass (NVDA / VoiceOver): quarterly, focus on contact form
* 200% zoom check: quarterly
* Contrast audit: on any design/brand update
* Full manual WCAG 2.1 AA audit: annually (or after a demand letter)

Log date, pages covered, issues found, and resolution date for each test.
