# ROCLA Collection — Website Plan (Handover Document)

> Handover brief for building a simple showcase website for ROCLA, a handmade choker brand.
> Written 2026-07-13. Scope agreed with the client's friend (the requester): **showcase only — no payment processing, no backend.**

---

## 1. Project context

- **Client:** ROCLA COLLECTION — a side project by two friends, **Clau and Ro** (brand name = Clau + Ro), who design and hand-make fabric chokers.
- **Requester:** A friend of the founders, helping them get the product known and sell more.
- **Current presence:** Instagram only — [@roclacollection](https://instagram.com/roclacollection) (~342 followers, 28 posts). Orders are handled via Instagram DM.
- **Goal of the site:** Look legitimate and professional, showcase the collection and the models, tell the founders' story, and give clear contact/order channels. Funnel visitors to Instagram/WhatsApp where sales actually happen.
- **Explicitly out of scope (for now):** e-commerce/cart/payments, user accounts, CMS, blog.

### Source material
Four reference screenshots live in the project root (`IMG_1728.PNG` – `IMG_1731.PNG`):
- `IMG_1728.PNG` — the logo: black serif "ROCLA" wordmark where the **O is a wavy figure-8 / spool shape**, on a deep wine-red circle.
- `IMG_1729.PNG` — the Instagram profile: bio reads *"complement & design, handcrafted"*; grid shows chokers worn by real people (editorial, warm, evening-out vibe). Story highlight named **"Vosotras"** (customers wearing the pieces).
- `IMG_1730.PNG` — brand intro post (Spanish), the founders' story. Key copy, verbatim:
  > "Somos Clau y Ro, dos amigas apasionadas por el mundo de los complementos.
  > Creemos que un look sencillo, con el complemento adecuado, lo cambia todo.
  > Así nació ROCLA, una idea que empezó hace tiempo y que por fin hoy ve la luz.
  > Todos nuestros diseños están hechos a mano por nosotras, cuidando cada detalle.
  > Esperamos que os encante todo y que disfrutéis de este camino con nosotras. ❤️"
- `IMG_1731.PNG` — product post example: **"Choquer Organza Gris"** worn (grey organza band with embroidered/beaded floral appliqué). Another model referenced: **"Choquer … Vino"** (wine-colored). Note: the brand spells it "Choquer" — keep their spelling.

### Product line (as seen on Instagram)
Handmade fabric chokers, elegant / evening-out aesthetic:
- Organza chokers with embroidered or beaded lace appliqués (grey "Organza Gris", wine "Vino", black lace, red/burgundy lace…)
- Flower (rose) chokers
- Long thin ribbon-style chokers
Exact final model list must come from the founders (see §7).

---

## 2. Site structure (single page)

One-page static site, mobile-first (traffic will come almost entirely from the Instagram bio link on phones). Anchor navigation. All copy in **Spanish** (their audience); structure the copy so an English version could be added later.

Top-to-bottom sections:

### 2.1 Hero
- ROCLA wordmark (logo) over a full-width photo of a choker being worn.
- Tagline drawn from their own words, e.g. *"Complementos hechos a mano"* or *"Un look sencillo, con el complemento adecuado, lo cambia todo."*
- Single CTA button: **"Ver la colección"** (anchor scroll).

### 2.2 La colección
- Photo grid of models. Each card: photo (worn, editorial style), model name (e.g. *Choquer Organza Gris*), one-line description, optionally price.
- Click/tap opens a larger photo view (lightbox or simple modal — keep it lightweight).
- Each card has a **"Pedir"** link → opens Instagram DM or WhatsApp with the model name pre-filled (WhatsApp: `https://wa.me/<number>?text=Hola!%20Me%20interesa%20el%20Choquer%20<Modelo>`).
- No cart, no checkout.

### 2.3 Nosotras (the story)
- Adapt the intro-post copy (§1, IMG_1730) — it's warm and authentic, use it nearly as-is.
- Photo of Clau y Ro if available.
- Emphasize: handmade by them, every detail cared for. This is the differentiator.

### 2.4 Cómo pedir
- Simple 3-step strip:
  1. **Elige tu modelo** (browse the collection)
  2. **Escríbenos** (Instagram DM or WhatsApp)
  3. **Lo hacemos a mano para ti** (sets expectations for handmade turnaround time)

### 2.5 Contacto / Footer
- Instagram link (primary channel), WhatsApp and/or email.
- "Síguenos en Instagram" callout — optionally a strip of recent-post thumbnails (static images linking to the profile; do NOT embed the live Instagram API, not worth the complexity).
- Logo mark, © ROCLA year.

---

## 3. Look & feel

Derived directly from the brand's existing identity — do not invent a new one.

### Colors
| Role | Value | Source |
|---|---|---|
| Brand burgundy (accents, buttons, hover states) | `#8a3a4a` (approx — sample from logo circle in IMG_1728.PNG) | Logo background |
| Background | Ivory/cream, e.g. `#faf6f1` | Editorial whitespace feel |
| Text | Near-black, e.g. `#1a1a1a` | Logo wordmark |
| Secondary/muted | Warm grey, e.g. `#8c8480` | Photography tones |

Burgundy is an **accent**, not a wall color — the site should feel airy, photography-led, with generous whitespace.

### Typography (Google Fonts, free)
- **Headings:** high-contrast display serif echoing the wordmark — first choice **Playfair Display**, alternative **Cormorant Garamond**.
- **Body:** quiet, clean sans-serif — e.g. **Inter** or **Jost**, light weights.
- Generous letter-spacing on the ROCLA name / nav to match the logo's feel.

### Overall tone
Editorial and feminine, evening-elegance — like their Instagram grid, not like a webshop. Big photos, minimal chrome, subtle transitions only. Avoid anything that reads "template e-commerce."

---

## 4. Technical approach

- **Stack:** plain HTML + CSS + a sprinkle of vanilla JS (mobile nav toggle, lightbox). **No framework, no build step.** Nothing to maintain or break.
- **Files:** `index.html`, `styles.css`, `script.js`, `/images/` (optimized), `favicon` from the logo mark.
- **Images:** compress/resize before shipping (target ≤ 200–300 KB each, `loading="lazy"` below the fold). Use the original photos from the founders, NOT the Instagram screenshots.
- **Responsive:** mobile-first CSS; test at 375px width first, then tablet/desktop.
- **SEO & sharing:**
  - `<title>` / meta description in Spanish (e.g. "ROCLA — Chokers y complementos hechos a mano").
  - Open Graph + Twitter card tags (logo or hero photo as `og:image`) so the link previews well in DMs/WhatsApp.
  - `lang="es"`.
- **Accessibility basics:** alt text on every product photo (model name + description), sufficient contrast, focus states.

### Hosting
- **GitHub Pages** (this folder `/Users/ascuadrado/Documents/GitHub/Rocla` is not yet a git repo — `git init`, push to GitHub, enable Pages) **or Netlify drag-and-drop**. Both free.
- Custom domain later (e.g. `roclacollection.com`, ~10–15 €/yr) — optional, not blocking.
- Once live, put the URL in the Instagram bio.

---

## 5. Deliverable checklist (build phase)

- [ ] `index.html` with the five sections in §2, Spanish copy
- [ ] `styles.css` implementing §3 (design tokens as CSS custom properties)
- [ ] Lightbox / enlarge-on-tap for collection photos
- [ ] Pre-filled WhatsApp/Instagram "Pedir" links per model
- [ ] Optimized images + favicon
- [ ] Meta/OG tags, alt text
- [ ] Verified on mobile viewport (375px), tablet, desktop
- [ ] Deployed to GitHub Pages or Netlify; live URL confirmed working

---

## 6. Open decisions (confirm with requester/founders before or during build)

1. **Primary order channel:** Instagram DM (zero setup, where they already work) vs **WhatsApp (recommended primary** if they're comfortable publishing a number — lower friction for Spanish buyers**)**. Suggestion: show both.
2. **Show prices?** Founders' call. If unsure, omit prices and let the DM conversation handle it.
3. **Domain now or later?** Free subdomain is fine to launch.

## 7. Content needed from the founders (blocking for final version, not for scaffold)

- Original product photos (2–3 per model, not screenshots) + the logo file (ideally transparent PNG/SVG of the wordmark, plus the red circle version)
- Final list of models with names (their spelling: "Choquer …") and one-line descriptions; prices if shown
- Contact details to publish: IG handle (@roclacollection ✔), WhatsApp number?, email?
- Optional: photo of Clau y Ro for the "Nosotras" section
- Optional: 2–3 customer photos ("Vosotras") for a future testimonials strip

> If content is missing at build time: scaffold the full site with tasteful placeholders (grey blocks labeled with the model names known so far) so the founders can see and react to the design immediately.

---

## 8. Future iterations (explicitly NOT now)

- Testimonials / "Vosotras" section with customer photos
- Simple order form (Netlify Forms / Formspree)
- Custom domain + brand email
- English version
- Payments (only if volume justifies it — Stripe Payment Links or Shopify Lite would be the low-effort path)
