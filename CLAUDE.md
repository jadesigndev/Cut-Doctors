# CLAUDE.md — Cut Doctors Barbershop Website

## Project Brief

Rebuild the website for **Cut Doctors Inc.**, a men's premier barbershop in East Orlando, FL (Waterford Lakes area). The current site is badly outdated. The new site must be a fast, clean, professional business site — not a portfolio or art piece. Every design and development decision should be evaluated against a single question: **"Does this help a new customer book an appointment or find us?"**

---

## Business Information (Always Current — Use These)

- **Business Name:** Cut Doctors Inc.
- **Tagline:** East Orlando's Premier Men's Barbershop
- **Address:** 829 Woodbury Rd, Orlando, FL 32828 *(behind Waterford Lakes Shopping Plaza, between Lake Underhill Rd & Waterford Lakes Pkwy)*
- **Phone:** (407) 203-2836
- **Email:** cutdoctorsinc@yahoo.com
- **Facebook:** https://www.facebook.com/pages/Cut-Doctors/316628785103039
- **Instagram:** https://www.instagram.com/cutdoctorsbarbershop/
- **Hours:**
  - Monday: 11:00 AM – 7:00 PM
  - Tuesday–Friday: 9:00 AM – 7:00 PM
  - Saturday: 9:00 AM – 5:00 PM
  - Sunday: Closed

### Known Services & Pricing (Seed Data — Update if client provides new menu)
| Service | Price |
|---|---|
| Haircut + Hot Towel Shave + Eyebrows | $25 |
| Haircut & Hot Towel Shave | $25+ |
| Haircut with Trimmer Shave | $25 |
| Regular Haircut | $20 |
| Kids Haircut | $20 |
| Seniors | $15 |
| Specialty Haircuts | $20+ |
| Shape Up | $10 |
| Designs | $10+ |
| Executive Hand Details, Gentlemen's Facials, More | Call |

---

## Design Direction

### Aesthetic Identity: "Classic Craft, Modern Execution"

Cut Doctors occupies a specific space — it's a **neighborhood institution** with old-school barbershop culture (pool table in the lounge, hot towel shaves, barber pole lore) and a genuinely welcoming vibe. The website must reflect that: **confident, masculine, warm, and approachable**. Not cold luxury. Not corporate. Not hip-hop streetwear. Not a "wellness spa for men." Think: a well-kept barbershop that opened in the right decade.

**Reference mood:** Classic barber aesthetics modernized — think *Art of Shaving* or *Executive Barber* stores with the warmth of a neighborhood shop. Clean lines, sharp typography, earthy-dark palette, no clutter.

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Background | Off-White / Warm Cream | `#F5F2ED` |
| Surface | Light Warm Gray | `#EBEBEB` |
| Primary Dark | Deep Charcoal | `#1C1C1C` |
| Accent | Barber Red | `#B22222` (firebrick — classic, not neon) |
| Accent Soft | Aged Gold | `#A0845C` |
| Text | Near Black | `#1A1A1A` |
| Text Muted | Warm Gray | `#6B6B6B` |

Avoid: neon colors, pure white backgrounds, gradients that feel digital/tech, anything that reads as a nightclub or fintech product.

### Typography

- **Headings:** `"Oswald"` — tall, condensed, confident. Very barbershop.
- **Subheadings / UI Labels:** `"Inter"` — neutral, legible, modern.
- **Accent / Pull Quotes:** `"Playfair Display"` Italic — for short quotes or editorial moments.
- **Monospace (hours, phone, prices):** `"IBM Plex Mono"` — gives a clean structured feel to business data.

Load all via Google Fonts.

### Texture & Material

- Use a **very subtle paper/grain noise overlay** (SVG `feTurbulence`, max 3–4% opacity) on sections with light backgrounds to avoid flat plastic look.
- Barber pole stripe motif can appear as a **thin decorative divider** (red/white diagonal stripes, 4px wide, used sparingly — once or twice max).
- Hero section: full-bleed photography with a **dark overlay** (`rgba(0,0,0,0.55)`) so white text is always legible. No gradient gimmicks.
- Card surfaces: `border-radius: 12px` — clean, not bubbly. No `3rem` pill shapes; this is a shop, not a wellness app.

---

## Site Architecture

### Required Pages / Sections (Single-Page or Multi-Page — Single-Page preferred for simplicity)

1. **Hero** — Immediate orientation + Book CTA
2. **Quick Info Bar** — Hours, address, phone (always visible near top)
3. **About** — Short brand story, the lounge, the culture
4. **Services** — Cards per service category
5. **Prices** — Clean table or grid
6. **Gallery** — Instagram-integrated or static photos of cuts
7. **The Barber Pole Story** (optional section) — Their unique origin story content
8. **Find Us / Contact** — Embedded Google Map, contact details, hours repeated
9. **Footer** — All contact info again, social icons, copyright

---

## Component Requirements

### NAVBAR — "Sticky & Functional"

- **Always visible** (sticky top). No disappearing nav for a business site — users should always be able to jump to sections.
- Logo left (wordmark: "Cut Doctors" in Oswald), links center/right, **"Book Now" CTA button** in accent red on the far right.
- Mobile: Hamburger menu that reveals a full-screen or drawer menu. The "Book Now" button must still be visible even on mobile without opening the menu — pin it in the hamburger area.
- Scrolled state: Add a subtle `box-shadow` and slight background tint for depth. No dramatic morphing — this is a business nav, not a gallery site.

### HERO — "First 3 Seconds"

- Full-viewport-height (`100dvh`) background photo of a great haircut being executed, or the shop interior. Source from Unsplash with queries like: `"barbershop interior"`, `"barber fade haircut"`, `"men's grooming"`.
- Dark overlay so white text reads clearly.
- **Content layout:** Centered or bottom-left. Keep it short:
  - Eyebrow text (IBM Plex Mono, small caps): `"East Orlando's Premier Men's Barbershop"`
  - H1 (Oswald, 5–7rem): Two lines, e.g., `"Sharp Cuts. / Clean Fades."`
  - One sentence subheading (Inter, muted white).
  - **Two buttons:** `"Book Your Cut"` (Accent Red, filled) + `"See Services"` (outline/ghost).
- **Book Now must be the largest interactive element on the page.**
- No autoplay video. No particle effects. No GSAP split-text theatrics. Simple fade-in on load.

### QUICK INFO BAR — "The $1 Decision Strip"

- Immediately below the hero. Dark charcoal background (`#1C1C1C`), warm gold text.
- Three columns: **📍 Address** | **📞 Phone** | **🕐 Hours** (with today's hours highlighted if possible via JS `Date`).
- This is often the only section a returning customer reads. Make it unmissable.
- On mobile: Stack vertically, large tap targets, phone number is a `tel:` link.

### ABOUT — "Who We Are"

- Two-column layout: text left, interior shop photo right (or vice versa).
- Short copy block — 3–4 sentences max. Focus on: professional staff, old-school traditions (hot towel shaves), men's lounge (pool table), great price point.
- Pull quote in Playfair Display Italic (accent gold): Something like *"You'll leave feeling great and looking even better."*
- No padding-heavy, empty, generic "welcome to our shop" filler.

### SERVICES — "What We Do"

- Grid of service cards (3-column desktop, 1-column mobile).
- Each card: Icon (Lucide React — scissors, droplet, star, etc.), Service name (Oswald bold), 1-line description (Inter), price tag (IBM Plex Mono, accent red).
- Hovering a card: subtle lift (`translateY(-4px)`) and a thin red left-border accent. Nothing more.
- Suggested card groupings:
  - Haircuts (Regular, Fade, Specialty, Kids, Seniors)
  - Shaves (Hot Towel Shave, Trimmer Shave, Shave + Cut combo)
  - Grooming Extras (Eyebrows, Shape Up, Designs, Facials, Hand Details)

### PRICES — "No Surprises"

- Clean, readable price table or grid layout.
- Use `IBM Plex Mono` for prices so they align like a real menu.
- Desktop: Two-column table. Mobile: Single column list.
- Accent the best-value or most-popular item with a small red `"Popular"` badge.
- End section with a line: *"More services available. Call us for details."* with the phone number as a link.

### GALLERY — "Proof of Work"

- A masonry or uniform grid of 6–9 photos. Static images are fine if no Instagram API is set up.
- Caption each with a service name (e.g., "Skin Fade + Beard Lineup").
- Instagram CTA below: `"Follow us @cutdoctorsbarbershop"` with the Instagram icon.
- If client provides Instagram API access, embed a live 6-post feed grid. If not, use curated Unsplash images of high-quality barbershop work as placeholders — clearly labeled for replacement.

### THE BARBER POLE STORY (Optional but Recommended)

- A single full-width dark-background section.
- Heading: `"Why 'Cut Doctors'?"` in Oswald.
- 2–3 paragraph version of their barber pole origin story. This is unique brand content — it builds credibility and depth that generic barbershop sites don't have.
- Pull quote in Playfair Italic: *"Barbers: the original surgeons."*
- A barber pole SVG animation (rotating stripe) as a decorative right-side element.

### CONTACT & FIND US — "Get Here"

- Two columns: Left = contact details (address, phone, hours table, email). Right = embedded Google Map iframe centered on 829 Woodbury Rd, Orlando FL 32828.
- Hours should be displayed in a clear table with **today's row highlighted** using JS.
- CTA below: `"Questions? Call us: (407) 203-2836"` — the number is a `tel:` link.
- **No contact form unless specifically requested.** Customers are going to call or walk in, not email. Remove friction.

### FOOTER — "Clean Close"

- Dark charcoal background, rounded top corners (`border-radius: 40px 40px 0 0`).
- Three columns: Brand + tagline | Nav links | Contact info + social icons.
- Social icons (Instagram, Facebook) in accent gold.
- Status indicator: pulsing green dot + `"Open Now"` / `"Closed"` label that switches by JS using business hours.
- Bottom strip: `"© 2025 Cut Doctors Inc. | East Orlando, FL"` in IBM Plex Mono, small.

---

## Booking Integration

> ⚠️ **Critical item — confirm with client before launch.**

- The "Book Now" button must link to their actual scheduling software. Common options: **Booksy**, **Square Appointments**, **StyleSeat**, **Vagaro**.
- If they don't have one yet, the button should open a modal or section that says: *"Ready to book? Call us or walk in!"* with the phone number prominently displayed as a tap-to-call link.
- Do **not** build a custom booking system. Link out to whatever they use.
- The booking CTA must appear in: Navbar, Hero (primary button), Services section (end), and a final standalone CTA section above the footer.

---

## SEO & Content Requirements

### Meta Tags (in `<head>`)

```html
<title>Cut Doctors | Men's Barbershop in East Orlando, FL</title>
<meta name="description" content="Cut Doctors is East Orlando's premier men's barbershop. Professional haircuts, hot towel shaves, fades & more near Waterford Lakes. Walk-ins welcome.">
<meta property="og:title" content="Cut Doctors Barbershop — East Orlando, FL">
<meta property="og:image" content="[hero image url]">
<meta name="geo.region" content="US-FL">
<meta name="geo.placename" content="Orlando">
```

### Structured Data (JSON-LD in `<script>`)

Include `LocalBusiness` schema with:
- `name`, `address`, `telephone`, `openingHours`, `priceRange`, `url`, `sameAs` (Facebook + Instagram URLs)

### Content Breadcrumbs for SEO

- Use proper semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`.
- Every section heading must be a real `<h2>` or `<h3>`, not a `<div>` styled to look like one.
- Image `alt` tags: Descriptive, location-aware. E.g., `alt="Men's fade haircut at Cut Doctors barbershop in Orlando FL"`.

---

## Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v3 (utility classes) + minimal custom CSS in `index.css`
- **Animation:** GSAP 3 with ScrollTrigger — **use sparingly**. Animate on scroll: section headings (fade-up), service cards (staggered fade-in). Do NOT animate things that don't need it.
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Oswald, Inter, Playfair Display, IBM Plex Mono)
- **Map:** Google Maps embed (iframe) or `react-leaflet` if interactivity is needed
- **Single App.jsx** (split into `components/` if > 500 lines)

---

## Anti-Patterns — Never Do These

- ❌ No "cinematic" full-page scroll takeovers or pinned sections. This is a barbershop, not a product launch.
- ❌ No massive hero text animations that delay content visibility. Users should see the key info within 1 second of page load.
- ❌ No dark-mode-only design. Default to the warm light palette; dark sections (About, Footer) are accents, not the default.
- ❌ No lottie animations, particle fields, or WebGL. They slow down the site on mobile and feel wrong for the brand.
- ❌ No stock photo clichés: smiling men in suits, generic handshakes, abstract blue spheres. Use real barbershop imagery.
- ❌ No contact form as the primary CTA. Customers call or walk in.
- ❌ No "Lorem ipsum." Every word on the page must be intentional, real, and written for Cut Doctors.
- ❌ Do not bury the phone number, address, or hours. They belong above the fold or within one scroll on mobile.

---

## Guiding Principles (Read Before Every Build Decision)

1. **Clarity over cleverness.** A customer landing on this page at 8:45 AM wants to know if the shop is open and how to book. Help them do that in 5 seconds.
2. **Respect the offline experience.** Cut Doctors has a real identity: the lounge, the pool table, the hot towel ritual. The website should feel like an extension of walking through that door, not a rebrand.
3. **Mobile is primary.** Most barbershop searches happen on phones, often while walking. Large tap targets, `tel:` links, the map tappable, no tiny text.
4. **Content is trust.** The barber pole story, the service descriptions, the honest prices — this content is what makes a stranger trust the shop enough to book. Preserve and present it well.
5. **Speed is a feature.** A barbershop site should load in under 2 seconds. No unnecessary dependencies.