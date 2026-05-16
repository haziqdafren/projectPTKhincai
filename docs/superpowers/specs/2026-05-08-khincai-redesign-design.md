# Khincai Favorit Group — Website Redesign Design Spec
**Date:** 2026-05-08
**Status:** Approved for implementation

---

## Overview

Full ground-up rebuild of the PT Khincai Favorit Group company profile website. The redesign targets a premium, modern corporate aesthetic suited to a government construction contractor — credible, polished, and intentionally art-directed. Stack: React + Vite + react-router-dom + lucide-react + Framer Motion. All existing content data is preserved; only the presentation layer changes.

---

## Design Decisions

| Element | Choice | Rationale |
|---|---|---|
| Color palette | Refined Stone | Warm off-white base reads architectural and premium |
| Typography | DM Serif Display + Outfit | Editorial authority for headings, clean modern body |
| Hero layout | Asymmetric red column | Most distinctive, magazine-like, non-template feel |
| Navbar | Light transparent → frosted | Contemporary, sophisticated scroll behavior |
| Motion | Framer Motion fade-up | Subtle, professional — no flashy clip-path animations |
| Implementation | Full ground-up rebuild | Cleanest result, avoids structural CSS constraints |

---

## Design System

### Color Tokens

```css
--stone-50:  #F7F3EE   /* page background */
--stone-100: #EDE5DA   /* card backgrounds, subtle fills */
--stone-200: #D9CCBC   /* dividers, borders */
--stone-800: #3D342A   /* secondary body text */
--stone-950: #1C1916   /* primary text, near-black */

--red-700:   #B91C1C   /* primary brand red */
--red-800:   #991B1B   /* hover state */
--red-950:   #7F1D1D   /* deep crimson accents */

--white:     #FFFFFF
```

### Typography

- **Display font:** `DM Serif Display` — hero headings only, italic variant for emphasis words
- **All other text:** `Outfit` — nav, labels, buttons, body, captions
- **Google Fonts import:** `DM Serif Display` (regular, italic) + `Outfit` (300, 400, 500, 600, 700)

**Scale:**
| Role | Font | Size | Weight | Other |
|---|---|---|---|---|
| Hero heading | DM Serif Display | 72–80px desktop, 48px mobile | — | Italic for em word |
| H2 section | DM Serif Display | 40–48px | — | — |
| H3 card | DM Serif Display | 24px | — | — |
| Section label | Outfit | 11px | 700 | Uppercase, 0.2em spacing, red |
| Body | Outfit | 16–17px | 400 | 1.75 line-height |
| Button | Outfit | 12px | 700 | Uppercase, 0.08em spacing |
| Nav link | Outfit | 12px | 500 | Uppercase, 0.1em spacing |
| Caption | Outfit | 13px | 400 | stone-800 color |

### Spacing

Base unit: 4px. Section vertical padding: 120px desktop / 80px tablet / 60px mobile.

Container max-width: 1280px, padding: 0 2rem.

### Buttons

- **Primary:** `background: var(--red-700)`, white text, `padding: 0.9rem 2rem`, no clip-path, `box-shadow: 0 4px 20px rgba(185,28,28,0.25)`. Hover: `--red-800`, shadow intensifies, `translateY(-1px)`.
- **Ghost:** `background: transparent`, `border: 1.5px solid var(--stone-950)`, stone-950 text. Hover: border and text turn `--red-700`.
- **Ghost Light:** Same but `border-color: rgba(255,255,255,0.3)`, white text. For dark/red backgrounds.

### Motion

All animated elements use Framer Motion `whileInView` with `viewport: { once: true, margin: "-80px" }`.

- Default: `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}`, `transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }`
- Stagger children: `transition: { delay: index * 0.1 }`
- No parallax on mobile (respect `prefers-reduced-motion`).

---

## Component Specs

### Navbar

**Structure:**
- Fixed top, full width
- Logo: red `KFG` square mark (28×28px) + "KHINCAI / FAVORIT GROUP" in Outfit
- Desktop links: Beranda, Tentang Kami, Layanan, Kontak — Outfit 500 uppercase. Active: 2px red bottom border.
- CTA button: solid red, right-aligned
- Mobile: hamburger icon → full-height slide-in drawer from right, links stacked, CTA at bottom

**Scroll behavior:**
- At top: `background: rgba(247,243,238,0)`, no border
- After 60px scroll: `background: rgba(247,243,238,0.92)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid var(--stone-200)`, subtle drop shadow
- CSS transition: `transition: all 0.3s ease`

---

### Home Page

#### Hero Section

**Layout:** CSS Grid, `grid-template-columns: 1.4fr 1px 0.6fr`, full viewport height (`100svh`).

**Left panel (stone-50 background):**
- Vertically centered content block, max-width 560px
- Section label: "Kontraktor & Konstruksi Profesional"
- H1: "Membangun / *Infrastruktur* / Indonesia" — "Infrastruktur" in italic red
- Subtext: one paragraph, Outfit 17px, stone-800
- Two buttons: Primary "Lihat Layanan Kami" + Ghost "Konsultasi Gratis"

**Center divider:** 1px `var(--stone-200)`

**Right panel (red-700 background):**
- Stats stacked vertically, centered: value in DM Serif Display 48px white, label in Outfit 11px uppercase `rgba(white, 0.6)`
- Stats: 50+ Proyek Selesai, 12+ Tahun Pengalaman, 30+ Klien Terpercaya, 15+ Mitra Pemerintah
- Vertical brand name at bottom: "PT Khincai Favorit Group · Est. 2012" rotated 90°, Outfit 10px, `rgba(white,0.4)`
- Subtle diagonal line texture: repeating-linear-gradient at very low opacity

**Mobile:** Stack to single column. Red panel hidden; stats shown as 2×2 grid below hero text.

#### About Strip Section

Two-column, `1fr 1fr`, 120px vertical padding.

**Left:** Section label → H2 "Dipercaya Pemerintah, *Terbukti* di Lapangan" → body paragraph → checklist (CheckCircle2 icon in red, Outfit text) → CTA button.

**Right:** Two stacked cards (dark stone-950 background):
- Card 1: Award icon (red) + "Kontraktor Grade B" + description
- Card 2: Users icon (red) + "Tim Profesional" + description
- Cards have `border-left: 3px solid var(--red-700)`, subtle hover lift

#### Services Section

**Header row:** H2 left-aligned, "Semua Layanan →" right-aligned (desktop only).

**Grid:** `repeat(3, 1fr)` desktop, `repeat(2, 1fr)` tablet, `1fr` mobile. Gap: 1.5rem.

**Service card:**
- Background: white, `border: 1px solid var(--stone-200)`
- Padding: 2rem
- Icon: red, top-left
- Large number: bottom-right, 48px, `var(--stone-100)` color, absolute positioned
- H3 title, body text
- Hover: `box-shadow: 0 8px 32px rgba(0,0,0,0.08)`, `translateY(-4px)`, number color → `rgba(185,28,28,0.15)`

#### Trust Bar Section

Full-width, `background: var(--stone-950)`. Padding: 100px 0.

Two-column: Left = H2 + body in white/stone-200 colors + CTA button (ghost-light). Right = certification pills grid (2 cols): each pill has a red dot + white text in Outfit, `border: 1px solid rgba(255,255,255,0.1)`, `border-radius: 4px`.

Certifications: SIUJK Nasional, ISO 9001:2015, Standar K3, LPJK Terverifikasi, e-Katalog LKPP, BUMN Partner.

#### CTA Banner Section

Full-width `background: var(--red-700)`. Centered content.

- H2 in white, DM Serif Display
- Body in `rgba(white, 0.8)`
- Two buttons: Ghost Light "Hubungi Kami Sekarang" + Ghost Light "Pelajari Layanan"
- Background texture: `repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(0,0,0,0.03) 40px, rgba(0,0,0,0.03) 41px)`

---

### About Page

#### Page Hero

Same asymmetric grid as home hero but height: `60vh`. Left: label + H1 + subtext. Right red panel: single large stat or "Est. 2012" display + scroll indicator line at bottom.

#### Vision & Mission

Two cards side-by-side:
- Vision card: `background: var(--stone-950)`, white text, Eye icon red, H2 quote style
- Mission card: `background: var(--stone-100)`, dark text, Target icon red, checklist

#### Values Grid

2×2 grid. Each card: large number (top-left, faint), icon (red), H3, body. `background: white`, `border: 1px solid var(--stone-200)`. Hover lift.

#### Timeline

Vertical center line (`2px, var(--stone-200)`). Alternating left/right cards. Each: year in DM Serif Display red, title H3, body. Dot on center line: `8px circle, var(--red-700)`.

#### Team Grid

4 columns. Each: red circle avatar with initials (DM Serif Display), name H3, role caption. Hover: avatar border becomes red.

---

### Services Page

#### Page Hero

Same pattern as About page hero. Right red panel: "8 Layanan Tersedia" display.

#### Services List

Alternating rows: odd = icon left, text right; even = text left, icon right. Each row:
- Large number (80px, faint stone-200)
- Icon block: red square with white icon, 72×72px
- Title H2, description, feature pills (`background: var(--stone-100)`, small Outfit text)

#### Process Section

6 steps. Desktop: horizontal flex with arrow connectors. Mobile: stacked.
Each step: number circle (red), title, body. Arrow: `→` in stone-200.

---

### Contact Page

Two-column: `0.9fr 1.1fr`.

**Left — Info:**
- Section label + H2
- Three info cards: Location, Phone, Email — each with red icon, label, value
- Optional map placeholder: stone-100 block, 240px height, "Lokasi Kami" centered

**Right — Form:**
- Fields: Nama Lengkap, Perusahaan, Nomor Telepon, Pesan
- Field style: no box, only bottom border `1px solid var(--stone-200)`. Focus: `border-color: var(--red-700)`, label slides up (floating label pattern)
- Submit: full-width primary button
- Note below: "Respon dalam 1×24 jam kerja"

---

### Footer

`background: var(--stone-950)`. `border-top: 2px solid var(--red-700)`.

Four columns:
1. Logo + tagline + social icons (placeholder)
2. Navigasi: Beranda, Tentang Kami, Layanan, Kontak
3. Layanan: list of 4 services
4. Kontak: address, phone, email in Outfit, stone-200 color

Bottom bar: `border-top: 1px solid rgba(255,255,255,0.06)`. Left: copyright. Right: certification badges inline.

---

## File Structure

```
src/
  index.css          ← design tokens, global reset, buttons, section-label
  App.jsx            ← routes (unchanged structure)
  components/
    Navbar.jsx       ← full rewrite
    Navbar.css
    Footer.jsx       ← full rewrite
    Footer.css
  pages/
    Home.jsx         ← full rewrite
    Home.css
    About.jsx        ← full rewrite
    About.css
    Services.jsx     ← full rewrite
    Services.css
    Contact.jsx      ← full rewrite
    Contact.css
```

---

## Implementation Order

1. `index.css` — design tokens, reset, global styles, buttons, section-label
2. `Navbar.jsx` + `Navbar.css` — scroll behavior, mobile drawer
3. `Footer.jsx` + `Footer.css`
4. `Home.jsx` + `Home.css` — all 5 sections
5. `About.jsx` + `About.css`
6. `Services.jsx` + `Services.css`
7. `Contact.jsx` + `Contact.css`

---

## Non-Goals

- No CMS integration
- No real images (placeholder blocks only)
- No backend / form submission logic
- No Projects or Portfolio page (not in current nav)
- No animations on mobile for performance + accessibility
