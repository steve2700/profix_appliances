import { SITE } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { BRANDS } from "@/lib/brands"

const head = `# Profix Electronics & Appliances

> Profix repairs and installs household appliances, electronics and gates across ${SITE.region}, South Africa. Services include washing machine and dishwasher repairs, fridge and freezer repairs, oven, stove and hob repairs, microwave repairs, air conditioner installation and repairs, TV and electronics repairs, circuit board repairs, and gate motor and gate repairs. Brands: ${BRANDS.map((b) => b.name).join(", ")}.

Website: ${SITE.url}
Phone and WhatsApp: ${SITE.phoneDisplay}
Email: ${SITE.email}
Service area: ${SITE.region}
How to get a quote: send a WhatsApp job card from ${SITE.url}/contact with the appliance, brand and model, the fault and the location, then add photos in the chat.
`

export function llmsShort() {
  let o = head + "\n## Services\n"
  for (const s of SERVICES) o += `- [${s.name}](${SITE.url}/services/${s.slug}): ${s.short}\n`
  o += "\n## Brands\n"
  for (const b of BRANDS) o += `- [${b.name} repairs](${SITE.url}/brands/${b.slug}): ${b.intro}\n`
  o += "\n## Areas\n"
  for (const a of AREAS) o += `- [Appliance repairs in ${a.name}](${SITE.url}/service-areas/${a.slug})\n`
  o += `\n## Pages\n- [Contact and job card](${SITE.url}/contact)\n- [Gallery](${SITE.url}/gallery)\n- [About](${SITE.url}/about)\n- [FAQ](${SITE.url}/faq)\n- [Full content for AI](${SITE.url}/llms-full.txt)\n`
  return o
}

export function llmsFull() {
  let o = head + "\n## Services in detail\n"
  for (const s of SERVICES) {
    o += `\n### ${s.name}\nURL: ${SITE.url}/services/${s.slug}\n${s.answer}\n\n${s.intro}\n\nIncluded: ${s.includes.join("; ")}.\nCall us when: ${s.signs.join("; ")}.\n`
    for (const f of s.faqs) o += `\nQ: ${f.q}\nA: ${f.a}\n`
  }
  o += "\n## Brands\n"
  for (const b of BRANDS) o += `\n### ${b.name} repairs\nURL: ${SITE.url}/brands/${b.slug}\n${b.intro}\n`
  o += "\n## Areas\n"
  for (const a of AREAS) o += `\n### Appliance repairs in ${a.name}\nURL: ${SITE.url}/service-areas/${a.slug}\n${a.context} Suburbs: ${a.places.join(", ")}.\n`
  return o
}
