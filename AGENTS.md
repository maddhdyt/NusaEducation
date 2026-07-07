<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# NusaEducation Design System & Art Style Guide
This guide dictates the visual identity and UI/UX patterns for the NusaEducation project. Always adhere to these rules for future development to maintain consistency with the newly revamped design (inspired by Jasper.ai / Modern Premium SaaS).

## 1. Core Aesthetic (Modern Premium)
- **Vibe:** Clean, elegant, highly legible, professional and soft. 
- **Spaciousness:** Generous padding and margins. Let elements breathe (e.g., `py-16 md:py-20`).
- **Container Layout:** Always use `max-w-[1380px] mx-auto px-6` for the main content container wrapper to maintain consistent width across all pages.
- **Contrast:** High contrast between deep dark colors and bright, vibrant accents, but without being harsh.
- **Borders & Shadows:** Use soft, modern shadows (`shadow-sm`, `shadow-md`, `shadow-lg`) and subtle borders (`border-slate-100`, `border-slate-200`). **AVOID harsh brutalist outlines, thick borders, or solid block shadows.**

## 2. Typography
- **Headings (H1, H2, H3):** Use `font-serif` (maps to Playfair Display / Instrument Serif).
  - Use `tracking-tight` or `tracking-normal`.
  - Use `WebkitTextStroke: "1px currentColor"` to add bold presence to large headers.
  - Line heights should be tight (`leading-[1.1]` or `leading-tight`).
- **Body Text (p, span, buttons):** Use `font-sans`.
  - Color: `#475569` or `#334155` for paragraphs.
  - Line heights should be relaxed (`leading-relaxed`).

## 3. Color Palette
- **Backgrounds:** `#FFFFFF` (White) and `#F8F9FA` or `#F1F5F9` (Light gray/off-white) for alternating sections.
- **Primary Text:** `#0A192F` or `#000033` (Deep Navy) for absolute prominence.
- **Accents:** 
  - Vibrant Orange: `#FF9F1C` (Primary CTA color, hover: `#ff9500`).
  - Deep Green: `#0B3A1C` (Used strictly for massive geometric SVGs and circle graphics).
  - Blue: `#3B82F6`
  - Red: `#E71D36`

## 4. Distinctive Visual Elements
- **Pixelated Masks:** Images must not be plain squares. Use 2D masking arrays (e.g., `1` and `0` matrices) to create jagged, asymmetric, pixel-art-style stepped edges.
- **Massive Geometric SVGs:** Use ultra-large SVG graphics (like massive 100px+ circles arranged in a grid/arrow) as the primary layouter.
- **Screen Bleeding:** Allow massive SVG graphics to aggressively bleed off the screen (e.g., `left-[-250px]`) for a wider, dramatic spatial effect.
- **Perfect Alignment:** Symmetrical and asymmetrical layouts must adhere to strict mathematical alignment (e.g., matching the exact top or bottom pixel coordinates of adjacent text/images).

## 4. Components & Interactions
- **Buttons:** 
  - Sharp or slightly rounded corners (`rounded-none` or `rounded-md`).
  - Solid buttons use vibrant colors with text white.
  - Outline buttons use dark borders with transparent backgrounds, hovering to light gray (`hover:bg-slate-50`).
  - On mobile, ensure buttons are full-width (`w-full`) or comfortably side-by-side with minimum widths (`min-w-[140px]`) and generous padding (`py-3`).
- **Cards (Floating/Static):**
  - Use clean backgrounds with soft rounded corners (`rounded-xl` or `rounded-2xl`) and subtle shadows. Do NOT use thick brutalist borders.
  - Interactive cards should have a translation and rotation on hover (e.g., `group-hover:-translate-y-4 group-hover:-rotate-3`).
- **Animations:** 
  - Rely on `animate-fade-in-up` for entrance animations with staggered delays (`delay-100`, `delay-200`).
  - Use Framer Motion for complex carousels or absolute floating elements.

## 5. Responsive Philosophy
- **Mobile First Focus:**
  - Do not let elements overlap text/faces on mobile.
  - Menus should use full-width hitboxes (`block w-full`) and exclusive `pointer-events` toggles.
  - Accordions must use React inline-styles (`maxHeight`, `opacity`) instead of Tailwind grids to avoid compiler/browser quirks.
  - Stagger text sizes dramatically: `text-[38px] sm:text-5xl md:text-[78px]`.
