# AGENTS.md

Guidance for AI coding agents working on this portfolio.

## Project Snapshot

This is a Create React App portfolio deployed to GitHub Pages at `https://cloi-23.github.io/portfolio`.

- React 19 with `react-scripts`.
- Tailwind CSS plus custom CSS in `src/index.css` and `src/App.css`.
- Animation libraries: `framer-motion` and `gsap` with `ScrollTrigger`.
- Icons: `lucide-react`.
- Project content: `src/data/projects.json`.
- Static assets: `public/profile.png`, logos, resume PDF, and project screenshots.

## Commands

Use these from the repository root:

```bash
npm start
npm run build
npm test
```

Before finishing meaningful code changes, run:

```bash
npm run build
```

Run tests when behavior changes. The default CRA test command is interactive, so prefer a CI-style invocation if needed:

```bash
CI=true npm test -- --watchAll=false
```

## Refactor Direction

The goal is to modernize the portfolio into a focused project showcase. The site should primarily flex real project screenshots and live URLs, with sharp typography, intentional spacing, high-contrast sections, tactile interactions, and a cleaner code structure.

Prioritize these improvements:

1. Keep page-level components in `src/pages` and reusable UI in `src/components`.
2. Split large page files into focused sections when they grow:
   - `HeroSection`
   - `TopNav` or `HeaderControls`
   - `ProjectsSection`
   - `ContactSection`
3. Move repeated colors, spacing, shadows, and radii into Tailwind theme tokens or small constants.
4. Remove leftover CRA starter styles and documentation when replacing them with project-specific content.
5. Replace inline styles with Tailwind classes or component-level constants unless a library requires inline values.
6. Normalize component names so exported names match file intent. For example, avoid generic `Portfolio` exports in multiple files.
7. Keep animation logic isolated in components or small hooks. Clean up `requestAnimationFrame`, event listeners, intervals, and GSAP triggers.
8. Preserve project screenshots and public paths unless intentionally migrating them.

## Modern Visual Direction

Apply a current portfolio style that feels premium and usable:

- Use a restrained dark/light system with one clear accent. The existing accent is `#DDF160`; keep it unless the full design system changes.
- Prefer editorial layouts: large confident type, asymmetric project grids, generous section rhythm, and strong screenshots.
- Keep cards tight and purposeful. Avoid nested cards and decorative filler.
- Use real project screenshots as first-class visuals.
- Make the hero immediately communicate the work and invite visitors into the projects. Avoid vague template copy.
- Add subtle motion for state changes and scroll reveals, but respect `prefers-reduced-motion`.
- Design mobile first. Check header controls, hero typography, marquee content, project cards, and overlay menu at narrow widths.
- Ensure text never overlaps controls or escapes buttons/cards.

## Accessibility

Treat accessibility as part of the refactor, not a cleanup pass.

- Every interactive control must have a clear accessible name.
- Icon-only buttons need `aria-label`.
- Buttons that open content need `aria-expanded` and, when practical, `aria-controls`.
- External links should clearly remain links; buttons should perform in-page actions.
- Use semantic lists: do not nest `ul` elements where `li` is intended.
- Keep color contrast readable in both dark and light modes.
- Respect keyboard navigation for menus, project cards, and contact controls.
- Provide useful `alt` text for project images and decorative empty alt text for non-informative images.

## Performance

The portfolio should feel smooth on normal laptops and phones.

- Avoid unnecessary timers for offscreen project cards when possible.
- Clean up GSAP `ScrollTrigger` instances on unmount.
- Do not add new large dependencies for layout or animation without a clear reason.
- Keep image dimensions stable with `aspect-ratio`, width, height, and `object-fit`.
- Consider lazy loading below-the-fold images.

## Current Cleanup Targets

Useful first passes:

- `src/App.css` contains CRA starter styles and duplicated Tailwind directives. Remove unused styles after confirming nothing depends on them.
- `src/README.md` does not exist and `README.md` is still CRA default text. Replace it with portfolio-specific setup, deployment, and architecture notes.
- `src/pages/HomePage.jsx` is the page-level entry for the portfolio showcase. Split it into section components if it grows.
- The old FaceJS, overlay, marquee, resume accordion, and ecommerce-style CTA components have been removed.
- Keep `src/components/Projects` focused on reusable project showcase UI. Add new components only when the page starts duplicating real structure.

## Coding Style

- Keep components small and explicit.
- Prefer data-driven sections for projects, links, skills, and CTAs.
- Use `lucide-react` icons for common UI actions.
- Keep comments rare and useful.
- Use ASCII in source files unless preserving existing user-facing text.
- Do not eject CRA unless the user explicitly asks for a build-tool migration.
- Remove unused face-recognition components and assets when the project-showcase redesign no longer references them.

## Suggested Refactor Sequence

1. Establish theme tokens in `tailwind.config.js` and clean global CSS.
2. Keep `src/pages/HomePage.jsx` as the page entry and split large sections into `src/components`.
3. Update hero copy, header controls, and CTA language around project links.
4. Modernize projects into a stronger responsive showcase with large images and clear URLs.
5. Remove overlay/menu/demo complexity that distracts from the projects.
6. Add reduced-motion handling and lazy-load below-the-fold images.
7. Replace the default README with portfolio-specific documentation.
8. Run build, test key mobile/desktop layouts, and note any remaining visual checks.

## Guardrails

- Keep the portfolio personal and specific. Do not turn it into a generic SaaS landing page.
- Preserve deployment compatibility with GitHub Pages.
- Do not introduce backend requirements for static portfolio features.
- Ask before replacing the visual identity, deleting large assets, or migrating away from CRA.
