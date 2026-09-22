# Horlar.dev — Personal Portfolio

A personal developer portfolio for **Horlar Jnr (Olayemi Motin Oladipupo)**, built with React, TypeScript, Tailwind CSS and Vite. It presents an about section, a project showcase with a screenshot gallery, skills, work experience, education, certifications, a "how I work" delivery process, and a contact form that emails messages straight to an inbox.

---

## 1. Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Icons | [lucide-react](https://lucide.dev) (site-wide icons) + a small set of hand-written SVG brand logos for the hero tech strip |
| Contact form delivery | [Web3Forms](https://web3forms.com) (no backend server required) |
| Hosting | Vercel |

No state-management library, router, or CMS is used — it's a single page, and all content lives in plain TypeScript data files (see §4).

---

## 2. Project structure

```
horlar-portfolio/
├── public/
│   └── assets/
│       ├── branding/        Logo/favicon assets
│       ├── documents/       cv.pdf — served by the "Download CV" buttons
│       ├── icons/           Misc. static icons
│       ├── profile/         Your portrait photo(s)
│       └── projects/        One folder per project, holding its screenshots
│           ├── eventease/
│           ├── study-circle/
│           ├── taskflow/
│           └── user-management/
│
├── src/
│   ├── main.tsx              App entry point
│   ├── App.tsx                Page layout — assembles every section in order
│   ├── index.css              Tailwind base + global styles (fonts, scroll-reveal, theme colours)
│   ├── vite-env.d.ts
│   │
│   ├── data/                 ← Edit these files to change the site's CONTENT
│   │   ├── site.ts             Name, role, hero copy, contact details, social links, nav labels
│   │   ├── projects.ts         Each project: name, description, tags, links, screenshots
│   │   ├── skills.ts           Skill groups + proficiency labels
│   │   ├── experience.ts       Work history entries
│   │   ├── education.ts        Degrees/diplomas
│   │   ├── certifications.ts   Certificates & training
│   │   ├── process.ts          "How I work" delivery-process steps
│   │   └── techStack.ts        Brand-logo icons used in the hero tech strip
│   │
│   ├── components/            ← Edit these files to change the site's LAYOUT/DESIGN
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx / ProjectCard.tsx / ProjectGallery.tsx
│   │   ├── About.tsx
│   │   ├── ContactInfo.tsx     "Let's Connect" card (About section sidebar)
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Certifications.tsx
│   │   ├── DeliveryProcess.tsx
│   │   ├── ContactCTA.tsx      Banner above the footer
│   │   ├── ContactForm.tsx     The actual message form + send logic
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                 Small reusable building blocks
│   │       ├── Container.tsx     Max-width page wrapper
│   │       ├── SectionHeading.tsx
│   │       ├── Reveal.tsx        Scroll-reveal wrapper (see §5)
│   │       ├── AssetImage.tsx    <img> with a graceful fallback if a file is missing
│   │       └── TechIcon.tsx      Renders one brand logo from techStack.ts
│   │
│   └── hooks/
│       ├── useScrollReveal.ts    Powers Reveal.tsx
│       └── useActiveSection.ts   Highlights the current section in the navbar
│
├── .env                        Not committed — holds your Web3Forms key (see §6)
├── tailwind.config.js
├── vite.config.ts               Sets up the "@/…" import alias for src/
└── package.json
```

**Rule of thumb:** to change *words, numbers, or links*, edit a file in `src/data/`. To change *how something looks or where it sits on the page*, edit the matching file in `src/components/`.

---

## 3. Running it locally

```bash
npm install        # install dependencies
npm run dev         # start the dev server — usually http://localhost:5173
npm run build       # type-check (tsc -b) + production build, output to /dist
npm run preview     # serve the production build locally, to sanity-check before deploying
```

`npm run dev` does **not** run the TypeScript check, so it's possible for `npm run build` to fail even when `npm run dev` looks fine. Always run `npm run build` once before pushing to GitHub/Vercel.

---

## 4. How each section gets its content

Every section component imports its data instead of hard-coding text, so you rarely need to touch component files just to update wording.

| Section on the page | Data file | Component(s) |
|---|---|---|
| Hero (name, tagline, tech strip, CV button) | `data/site.ts`, `data/techStack.ts` | `Hero.tsx` |
| Navbar links, availability badge | `data/site.ts` (`navLinks`) | `layout/Navbar.tsx` |
| Projects grid + gallery | `data/projects.ts` | `Projects.tsx`, `ProjectCard.tsx`, `ProjectGallery.tsx` |
| About Me paragraphs + quote | `data/site.ts` (`aboutHeading`, `aboutParagraphs`, `statement`) | `About.tsx` |
| Let's Connect card | `data/site.ts` (`contactDetails`) | `ContactInfo.tsx` |
| Skills (grouped, with proficiency pills) | `data/skills.ts` | `Skills.tsx` |
| Work Experience timeline | `data/experience.ts` | `Experience.tsx` |
| Education | `data/education.ts` | `Education.tsx` |
| Certifications | `data/certifications.ts` | `Certifications.tsx` |
| Delivery Process ("how I work" steps) | `data/process.ts` | `DeliveryProcess.tsx` |
| Footer, contact CTA banner | `data/site.ts` | `layout/Footer.tsx`, `ContactCTA.tsx` |

### Adding or editing a project

Open `data/projects.ts` and add an object to the `projects` array:

```ts
{
  slug: "my-new-project",             // used to build asset paths — keep it unique, kebab-case
  name: "My New Project",
  category: "Short one-line description of what it is",
  description: "One or two sentences for the card.",
  technologies: ["React", "Supabase"],
  image: "/assets/projects/my-new-project/screenshot-1.png",  // card thumbnail
  gallery: [                           // shown in the lightbox/gallery view
    "/assets/projects/my-new-project/screenshot-1.png",
    "/assets/projects/my-new-project/screenshot-2.png",
  ],
  githubUrl: "https://github.com/you/my-new-project",   // optional
  liveUrl: "https://my-new-project.vercel.app",          // optional
}
```

Then drop the matching screenshot files into `public/assets/projects/my-new-project/`. `AssetImage.tsx` shows a placeholder instead of a broken image if a file is missing, so you can add the entry first and drop in screenshots later without anything looking broken.

---

## 5. How the scroll-reveal animation works

Sections fade and slide gently into view the first time they're scrolled into the viewport (see `App.tsx`, where most sections are wrapped in `<Reveal>`).

- `hooks/useScrollReveal.ts` uses an `IntersectionObserver` to flip a piece of React state to `true` the moment an element enters the screen, then disconnects — so it only ever fires once per element (it doesn't hide again on scroll-up).
- `components/ui/Reveal.tsx` is a thin wrapper: it applies the `.reveal` class (defined in `index.css`) and adds `is-visible` once triggered. Some sections stagger with `<Reveal delayMs={120}>` so a pair of side-by-side blocks doesn't animate in at exactly the same instant.
- If the visitor's OS has "reduce motion" turned on, `index.css` swaps the slide+fade for a quick fade-only transition, instead of skipping the animation silently.

To wrap a new section in the same effect, just import `Reveal` and wrap the section's contents in it.

---

## 6. Making the contact form actually send email

The form (`ContactForm.tsx`) posts to **Web3Forms**, a service that emails a submission straight to your inbox with no backend code to write.

1. Go to [web3forms.com](https://web3forms.com), enter the email address you want messages delivered to, and confirm the verification email. You'll be given an **access key**.
2. In the project root (next to `package.json`), create a file called `.env`:
   ```
   VITE_WEB3FORMS_KEY=your_access_key_here
   ```
   This file is intentionally left out of Git (see `.gitignore`) — never commit an access key.
3. Restart `npm run dev` (Vite only reads `.env` on startup).
4. **On Vercel:** add the same `VITE_WEB3FORMS_KEY` variable under Project Settings → Environment Variables, then redeploy. Without this step, the live site won't have the key even though your local copy works.

**Fallback behaviour:** if `VITE_WEB3FORMS_KEY` isn't set at all, the form falls back to opening the visitor's email app with a pre-filled message instead of failing outright.

**Other built-in protections:**
- A hidden honeypot field (invisible to people, visible to spam bots) silently discards bot submissions.
- The Send button shows a "Sending…" state, then a success message (and clears the form) or an error message with your email as a backup contact.

---

## 7. Adding your CV

The "Download CV" buttons (in the Navbar and Hero) point at a fixed path: `site.cvPath` in `data/site.ts`, currently `/assets/documents/cv.pdf`.

To update it: replace `public/assets/documents/cv.pdf` with your new file **using that exact name and location**, or change `cvPath` in `data/site.ts` to match whatever file name you use. File names are case-sensitive once deployed, even though Windows doesn't enforce that locally.

---

## 8. Design tokens & theming

Custom Tailwind colours and shadows are defined in `tailwind.config.js`:

| Token | Used for |
|---|---|
| `navy-950 / 900 / 800` | Dark backgrounds (hero card, navbar, footer) |
| `blue-accent`, `blue-bright` | Primary brand blue (buttons, links, highlights) |
| `blue-soft` | Light blue backgrounds (quote blocks, icon chips) |
| `emerald-300 / 400` | Success states, "available" indicators |
| `shadow-card` / `shadow-card-hover` | Standard card elevation |
| `shadow-glow` | Blue glow behind primary buttons |

Icon weight is controlled globally by one rule in `index.css`:
```css
svg.lucide { stroke-width: 2.6; }
```
Change that single number to make every lucide-react icon on the site thinner or bolder at once.

---

## 9. Responsiveness notes

- Breakpoints follow Tailwind's defaults (`sm`, `md`, `lg`, `xl`).
- Grid sections (About/Let's Connect, Skills/Experience, Education/Certifications) use `grid-cols-1` at the base so a column can never be forced wider than the screen by long unbreakable content (e.g. email addresses, URLs) — see `App.tsx`.
- The hero's code-card, tech-stack strip and "Build. Create. Improve." flourish are hidden below the `sm` breakpoint, where there isn't room for them beside the portrait photo.

---

## 10. Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the repo in Vercel — it auto-detects a Vite project (`npm run build`, output directory `dist`).
3. Add the `VITE_WEB3FORMS_KEY` environment variable (see §6) before the first deploy that needs the contact form to work.
4. Every push to `main` triggers a new deployment automatically.

**Common build failure:** `npm run build` runs a full TypeScript check (`tsc -b`) that `npm run dev` skips. Always run `npm run build` locally before pushing — if it fails locally, it will fail on Vercel too.

---

## 11. Credits

- Icons: [lucide-react](https://lucide.dev)
- Hero tech-stack brand logos: path data from [Simple Icons](https://simpleicons.org) (CC0) — trademarks belong to their respective owners
- Fonts: [Inter](https://fonts.google.com/specimen/Inter) (body), [Caveat](https://fonts.google.com/specimen/Caveat) (hero handwriting flourish), loaded via Google Fonts
- Contact form delivery: [Web3Forms](https://web3forms.com)
