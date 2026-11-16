import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { JsonLd } from "@/components/json-ld"
import { JobCard } from "@/components/job-card"
import { BrandStrip } from "@/components/brand-strip"
import { SERVICES, getService } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { SITE } from "@/lib/site"

export const dynamicParams = false
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `${SITE.url}/services/${s.slug}`, images: [{ url: s.image }] },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()
  const others = SERVICES.filter((x) => x.slug !== s.slug)

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: s.name, description: s.metaDescription, url: `${SITE.url}/services/${s.slug}`, serviceType: s.name, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "AdministrativeArea", name: "Gauteng" } }} />
      <PageHero crumbs={[{ name: "Services", href: "/services" }, { name: s.name, href: `/services/${s.slug}` }]} title={s.headline} text={s.intro}>
        <CallButton />
        <WhatsAppButton message={`Hi Profix, I need help with: ${s.name.toLowerCase()}.`} />
        <LinkButton href="#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>

      <section aria-label="Why it matters" className="bg-signal text-ink">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-4xl font-display text-2xl font-semibold leading-snug md:text-3xl">{s.pain}</p>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row"><CallButton look="dark" size="md" /></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="rounded-3xl border-l-8 border-signal bg-white p-6 text-xl font-medium leading-relaxed">{s.answer}</p>
          <h2 className="mt-12 text-3xl font-bold md:text-4xl">What is included</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {s.includes.map((i) => (
              <li key={i} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-lg">
                <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-signal" />
                {i}
              </li>
            ))}
          </ul>
          <h2 className="mt-14 text-3xl font-bold md:text-4xl">When to call us</h2>
          <ul className="mt-6 space-y-3">
            {s.signs.map((i) => (
              <li key={i} className="border-l-4 border-signal pl-4 text-xl">{i}</li>
            ))}
          </ul>
        </div>
        <MovingImage src={s.image} alt={s.imageAlt} priority className="min-h-[420px] rounded-[2rem] lg:sticky lg:top-32 lg:aspect-[4/5] lg:self-start" sizes="(min-width: 1024px) 40vw, 100vw" markWidth={52} />
      </section>

      {s.process && (
        <section className="bg-white py-20" aria-labelledby="process">
          <div className="mx-auto max-w-7xl px-5">
            <h2 id="process" className="text-3xl font-bold md:text-4xl">See how we work</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.process.map((p) => (
                <figure key={p.src} className="relative overflow-hidden rounded-[2rem]">
                  <div className="relative aspect-[4/3]"><Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div>
                  <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/90 px-4 py-1 font-display text-lg text-white">{p.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="how" className="mx-auto max-w-7xl px-5 py-20">
        <h2 id="how" className="text-3xl font-bold md:text-4xl">What happens when you call</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { t: "Tell us what is wrong", d: "Call or send a job card on WhatsApp with the brand, the fault and your area. Photos help." },
            { t: "We diagnose and quote", d: "A technician finds the real fault and explains it in plain language. You get a clear quote before any work starts." },
            { t: "We repair it", d: "You approve the price, then we fix it, usually at your home or business." },
          ].map((x, i) => (
            <li key={x.t} className="rounded-3xl bg-ink p-7 text-white">
              <span className="font-display text-5xl font-bold text-signal">{i + 1}</span>
              <p className="mt-3 font-display text-2xl font-semibold">{x.t}</p>
              <p className="mt-2 text-lg leading-relaxed text-silver">{x.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="Repair or replace" className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-7 md:p-9">
          <h2 className="text-3xl font-bold">Is it worth repairing?</h2>
          <p className="mt-4 text-lg leading-relaxed text-graphite">{s.worth}</p>
        </div>
        <div className="rounded-[2rem] border-2 border-signal bg-white p-7 md:p-9">
          <h2 className="text-3xl font-bold">While you wait for us</h2>
          <ul className="mt-4 space-y-3">
            {s.wait.map((w) => (
              <li key={w} className="flex items-start gap-3 text-lg leading-relaxed">
                <span aria-hidden="true" className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-signal" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">Get a quote for {s.name.toLowerCase()}</h2>
          <JobCard defaultAppliance={s.appliance} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-4xl font-bold">Questions about {s.name.toLowerCase()}</h2>
        <Faq items={s.faqs} />
      </section>

      {s.showBrands !== false && <BrandStrip />}

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-bold">We do this across Gauteng</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <Link key={a.slug} href={`/service-areas/${a.slug}`} className="rounded-full border-2 border-ink px-5 py-2 font-display text-lg font-medium transition hover:border-signal hover:bg-signal">{s.name} in {a.name}</Link>
            ))}
          </div>
          <h2 className="mt-12 text-3xl font-bold">Other services</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="rounded-full bg-steel px-5 py-2 font-display text-lg font-medium transition hover:bg-ink hover:text-white">{o.name}</Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
