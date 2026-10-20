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
