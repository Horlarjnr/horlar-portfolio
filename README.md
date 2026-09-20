# Horlar.dev — Personal Developer Portfolio

A production-ready portfolio built with **React + TypeScript + Vite + Tailwind CSS**, matching the provided reference layout with your real content from your CV.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

Deploy the contents of `dist/` to Vercel, Netlify, or any static host (this is the same deployment model as your other Vite projects like EventEase).

## Replacing content

All real content lives in `src/data/` — you never need to touch component code to update text:

| File | Controls |
|---|---|
| `src/data/site.ts` | Name, brand, headline, statement, location, email, phone, social links, nav links |
| `src/data/projects.ts` | Featured projects, descriptions, tech badges, GitHub/live links, image paths |
| `src/data/skills.ts` | Skill categories and proficiency labels |
| `src/data/experience.ts` | Work experience timeline |
| `src/data/education.ts` | Education entries |
| `src/data/certifications.ts` | Certifications |

## Replacing images (no code changes needed)

Everything under `public/assets/` is referenced by path, never hard-coded inline. Drop your real files in at the **same filenames** and the site picks them up automatically:

```
public/assets/
  profile/
    profile-main.jpg       ← hero portrait
    profile-about.jpg      ← reserved for an About-section photo, if you add one
  projects/
    eventease/screenshot-1.png / -2.png / -3.png
    study-circle/screenshot-1.png / -2.png / -3.png
    user-management/screenshot-1.png / -2.png / -3.png
    taskflow/screenshot-1.png / -2.png / -3.png
  branding/
    logo.svg
    favicon.svg
  documents/
    cv.pdf                 ← powers every "Download CV" button
  icons/                   ← empty, for any extra tool/project icons you want to add
```

Every image currently in these folders is a **generated placeholder** (a navy card with a `</>` mark and filename), since no real photos or screenshots were supplied yet. Just overwrite the file at the same path with your real asset — no component needs to change. If a file is ever missing or fails to load, the `AssetImage` component (`src/components/ui/AssetImage.tsx`) automatically shows a clean placeholder instead of a broken image icon.

## Adding more project screenshots

Each project supports a gallery beyond `screenshot-1`. Add more files (e.g. `screenshot-4.png`) to the project's folder and add the path to that project's `gallery` array in `src/data/projects.ts`.

## Notes on content sourcing

- Experience, education, and certifications are taken directly from your CV (`Olayemi_Motin_CV.docx`) — nothing invented.
- Project tech-stack badges and descriptions follow the brief you provided for each project.
- Skills are shown with qualitative proficiency labels (Beginner / Intermediate / Proficient / Advanced) — no fabricated percentages.
