# Profix Electronics & Appliances Website

Next.js (App Router), TypeScript, Tailwind CSS v4. Static export.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static site in /out
```

## Change contact details in one file
Phone, WhatsApp, email, domain and service area: `lib/site.ts`. Also update the domain in `public/robots.txt`.

## Where things are
| What | Where |
| --- | --- |
| Services, SEO copy, FAQs | `lib/services.ts` |
| Appliance brands and logos | `lib/brands.ts` |
| Areas and job card appliance list | `lib/areas.ts` |
| AI crawler files (llms.txt, llms-full.txt) | `lib/llms.ts` (built from the data above) |
| WhatsApp job card | `components/job-card.tsx` |
| Colours and animations | `app/globals.css` |

Add a service, brand or area by adding one entry to its file. The page, menus, footer, sitemap, schema and llms files update automatically.

## Google Ads landing pages
Two conversion-only pages for ads, built from one template:

| Page | URL |
| --- | --- |
| Generator repairs | `/lp/generator-repairs` |
| Cold room and commercial fridge repairs | `/lp/cold-room-and-commercial-fridge-repairs` |

- All copy, FAQs, photos and form options: `lib/landing-pages.ts` (items marked `CONFIRM` need checking against what Profix really offers).
- Template: `components/lp/landing-page.tsx`. Lead form: `components/lp/lead-card.tsx`.
- These pages hide the normal menu and footer (`components/site-shell.tsx`) so visitors only see call and WhatsApp actions.
- They are set to `noindex` (`LP_NOINDEX` in `lib/landing-pages.ts`) and are not in the sitemap.
- Conversion tracking: fill in `lib/analytics.ts` (AW- ID and the call and WhatsApp labels). Every call button, WhatsApp button and the job card submit already fire those events.
- Use the page URL as the ad final URL, e.g. `https://www.profixappliances.co.za/lp/generator-repairs`.

## Service pages
Each service in `lib/services.ts` now has: `pain` (the opening line), `worth` (repair or replace advice), `wait` (what to do while waiting), plus signs, inclusions and FAQs. `urgent: true` features a service in the "Cannot wait" band on the home page and gives it an "Urgent" tag in the menu. `showBrands: false` hides the appliance brand strip (used for generators and cold rooms).
The new services are `generator-repairs` and `cold-room-and-commercial-fridge-repairs`. They are in the menu, footer, sitemap, schema and job card automatically.
