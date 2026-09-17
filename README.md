# The Brownie Bench — website

A complete, responsive one-page site built out from the original design comp.
No build step, no dependencies — open `index.html` and it runs.

```
index.html
assets/css/styles.css
assets/js/main.js
assets/img/    logo (white + pink), menu brownie, 5 flavour photos,
               arch photo, 2 crumb graphics, hero scallop
```

## What was already designed (kept as-is)

Header, hero, flavour selector, the "Homemade & baked fresh" split, and the
"Does this sound familiar?" story — all carried over from the comp, including
the original copy, palette and stagger.

Palette and type lifted from the comp:

| Token | Value | Used for |
|---|---|---|
| `--coral` | `#FB7F8D` | Hero heading, buttons, CTA band |
| `--pink` | `#E0407B` | Flavour labels, sub-headings |
| `--amber` | `#E2A23D` | Section headings, body copy |
| `--cream` | `#FCF3E7` | Page background |
| `--blush` | `#FBDDE4` | Hero gradient, featured box |
| `--cocoa` | `#4A2A1B` | Footer |

Type is **Poppins** (400/500/600/700) throughout, loaded from Google Fonts.

## What was added to finish it

The comp stopped after the story section. Added below that:

1. **The Brownie Bench promise** — three trust cards (gluten free kitchen, baked to order, NZ-wide)
2. **How it works** — four steps
3. **Boxes & prices** — three tiers
4. **Delivery** — where, bake days, courier, packaging, pick up
5. **Questions** — six-item FAQ accordion
6. **Order CTA** band
7. **Footer** — nav, contact, socials

Plus working behaviour throughout: slide-open menu overlay, sticky header,
multi-select flavour picker, scroll reveals, and keyboard/`Esc` support.

---

## Your supplied assets (in use)

| File | Source | Where |
|---|---|---|
| `logo-white.svg` | your `Group 8.svg` | Header over the hero, and the footer |
| `logo-pink.svg` | recoloured from the same file | Header once it sticks over cream |
| `menu-brownie.png` | your `brownie 1.png` | Menu button |
| `brownie-milk-chocolate.png` | your `Milk Choc.png` | Flavour tile |
| `brownie-peanut-butter.png` | your `Peanut butter.png` | Flavour tile |
| `brownie-coffee.png` | your `Coffee.png` | Flavour tile |
| `brownie-caramel.png` | your `caramel.png` | Flavour tile |
| `brownie-tim-tam.png` | your `tim tam.png` | Flavour tile |
| `bench-brownies.jpg` | your cooling-rack photo | "Homemade & baked fresh" arch |

The header cross-fades between the white and pink logo on scroll, so the lockup
stays legible on both the pink hero and the cream sticky bar. If you'd rather
have a different colour for the stuck state, change the one `fill` value in
`logo-pink.svg`.

## ⚠️ Before this goes live

Everything below is a placeholder I could not know. Nothing here is invented
fact — it's all marked on the page itself so it can't ship by accident.

| Item | Where | What to do |
|---|---|---|
| **Prices** | `.box-price` — shows `$00` | Set real prices, remove `data-placeholder` and the `.price-note` line |
| **Box sizes/names** | Boxes section | "The Taster / The Bench / The Whole Batch" and the 4/9/16 counts are my suggestion — change to your actual range |
| **Page weight** | `assets/img/brownie-*.png` | Page is ~2.4 MB, mostly the five flavour PNGs at ~390 KB each. Converting those to WebP would cut roughly 80% with no visible loss — worth doing before launch. (The arch photo is already an optimised JPEG.) |
| **Email** | Footer + CTA | `hello@thebrowniebench.co.nz` is a guess — set the real address |
| **Socials** | Footer, `data-social` | Point Instagram/Facebook at the real profiles |
| **Ordering** | `#order` CTA | Currently a `mailto:`. Connect a real checkout (Shopify Lite, Squarespace, a form) when you're ready |
| **Delivery details** | Delivery section | Bake days and courier timings are written generically — make them match what you actually do |
| **FAQ allergens** | FAQ item 3 | I wrote dairy/egg/nuts. **Check this against your actual recipes** before publishing — allergen copy carries real risk |

**No testimonials or reviews were added.** Those have to be real ones from
real customers, so I left the section out rather than filling it with invented
quotes. It drops in easily once you have some.

**"Tim Tam"** is a registered Arnott's trademark. Fine to describe a flavour as
inspired by one, but worth a quick check on how you word it commercially.

## Running it

```
python3 -m http.server 8000
```

Then <http://localhost:8000>.

## Accessibility notes

Skip link, visible focus rings, `aria-expanded` on the menu, `aria-pressed` on
flavour buttons, a live region on the picker, and full `prefers-reduced-motion`
handling. Contrast: the amber body copy on cream is the lightest pairing on the
page — if you want it to pass AA comfortably at small sizes, darken
`--amber-deep` a step.
