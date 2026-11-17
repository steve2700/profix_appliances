import Image from "next/image"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { Faq } from "@/components/faq"
import { JsonLd } from "@/components/json-ld"
import { LeadCard } from "@/components/lp/lead-card"
import { LpActions, LpFooter, LpHeader } from "@/components/lp/lp-chrome"
import { FixThisButton, LpH1, LpScroll } from "@/components/lp/lp-client"
import { AREAS } from "@/lib/areas"
import { SITE } from "@/lib/site"
import type { Lp } from "@/lib/landing-pages"

function Tick() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-signal" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  )
}

export function LandingPage({ lp }: { lp: Lp }) {
  const callLabel = `Call ${SITE.phoneDisplay}`
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: lp.serviceName, description: lp.metaDescription, url: `${SITE.url}/lp/${lp.slug}`, serviceType: lp.serviceName, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "AdministrativeArea", name: "Gauteng" } }} />
      <LpHeader />
      <LpScroll />

      {/* 1. Hero: the keyword, the pain, one clear action */}
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute -right-16 top-0 -z-10 h-full w-[16%] skew-x-[-14deg] bg-signal" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex rounded-full bg-signal/15 px-4 py-1.5 font-display text-base font-semibold text-signal ring-1 ring-signal/40">{lp.badge}</p>
            <LpH1 base={lp.h1} template={lp.h1Area} className="rise mt-5 max-w-4xl text-5xl font-bold leading-[0.95] md:text-7xl" />
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-silver">{lp.sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CallButton pulse label={callLabel} />
              <WhatsAppButton label="WhatsApp a photo" message={lp.waMessage} />
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {lp.heroPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-lg"><Tick />{p}</li>
              ))}
            </ul>
          </div>
          <MovingImage src={lp.hero.src} alt={lp.hero.alt} priority className={`${lp.hero.aspect} rounded-[2rem] shadow-2xl shadow-black/50`} sizes="(min-width: 1024px) 38vw, 100vw" markWidth={68} />
        </div>
      </section>

      {/* 2. The story: make the problem felt */}
      <section aria-labelledby="story" className="bg-[#050c18] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-lg font-semibold uppercase tracking-widest text-signal">{lp.story.kicker}</p>
          <h2 id="story" className="mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">{lp.story.title}</h2>
          <ol className="mt-12 space-y-8 border-l-2 border-signal/40 pl-6 md:pl-8">
            {lp.story.beats.map((b, i) => (
              <li key={i} className="relative">
                <span aria-hidden="true" className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-signal md:-left-[41px]" />
                {b.time && <p className="font-display text-lg font-semibold text-signal">{b.time}</p>}
                <p className="mt-1 text-xl leading-relaxed text-silver md:text-2xl">{b.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-14 border-t border-white/15 pt-10 font-display text-3xl font-semibold leading-snug md:text-4xl">{lp.story.punch}</p>
        </div>
      </section>

      {/* 3. The turn: hope, then the call to action */}
      <section aria-labelledby="turn" className="relative isolate overflow-hidden bg-signal text-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:py-20 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <h2 id="turn" className="text-5xl font-bold leading-[0.95] md:text-7xl">{lp.turn.title}</h2>
            <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed md:text-2xl">{lp.turn.text}</p>
            <p className="mt-4 max-w-2xl text-xl font-semibold leading-relaxed">{lp.turn.extra}</p>
          </div>
          <div className="flex flex-col gap-3">
            <CallButton look="dark" label={callLabel} />
            <WhatsAppButton message={lp.waMessage} label="WhatsApp us now" />
            <LinkButton href="#quote" look="outline">Send a job card</LinkButton>
          </div>
        </div>
      </section>

      {/* 4. Recognise the problem */}
      <section aria-labelledby="signs" className="mx-auto max-w-7xl px-5 py-20">
        <h2 id="signs" className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">{lp.signsTitle}</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lp.signs.map((s) => (
            <li key={s.title} className="rounded-3xl border-l-8 border-signal bg-white p-6">
              <p className="font-display text-2xl font-semibold leading-tight">{s.title}</p>
              <p className="mt-2 text-lg leading-relaxed text-graphite">{s.text}</p>
              {s.fault && <FixThisButton fault={s.fault} />}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <CallButton label={`Seen one of these? ${callLabel}`} />
          <WhatsAppButton message={lp.waMessage} label="WhatsApp us" />
        </div>
      </section>

      {/* 5. What we fix, with proof photos */}
      <section aria-labelledby="fixes" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 id="fixes" className="text-4xl font-bold md:text-5xl">{lp.fixesTitle}</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lp.fixes.map((f, i) => (
              <li key={f.title} className="rounded-3xl bg-steel p-6">
                <span className="font-display text-lg font-bold text-signal">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-1 font-display text-2xl font-semibold leading-tight">{f.title}</p>
                <p className="mt-2 text-lg leading-relaxed text-graphite">{f.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lp.gallery.map((g) => (
              <figure key={g.src} className="relative overflow-hidden rounded-[2rem]">
                <div className="relative aspect-[4/3]"><Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div>
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/90 px-4 py-1 font-display text-lg text-white">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How it works: remove the fear of the next step */}
      <section aria-labelledby="steps" className="mx-auto max-w-7xl px-5 py-20">
        <h2 id="steps" className="text-4xl font-bold md:text-5xl">What happens when you call</h2>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {lp.steps.map((s, i) => (
            <li key={s.title} className="rounded-3xl bg-ink p-7 text-white">
              <span className="font-display text-5xl font-bold text-signal">{i + 1}</span>
              <p className="mt-3 font-display text-2xl font-semibold">{s.title}</p>
              <p className="mt-2 text-lg leading-relaxed text-silver">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 7. Useful advice while they wait (builds trust, keeps them on the page) */}
      <section aria-labelledby="wait" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[2rem] border-2 border-signal bg-white p-7 md:p-10">
          <h2 id="wait" className="text-3xl font-bold md:text-4xl">{lp.waitTitle}</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {lp.wait.map((w) => (
              <li key={w} className="flex items-start gap-3 text-lg leading-relaxed"><Tick />{w}</li>
            ))}
          </ul>
          {lp.waitNote && <p className="mt-6 rounded-2xl bg-steel p-4 text-lg font-medium">{lp.waitNote}</p>}
        </div>
      </section>

      {/* 8. Brands (generators) or who we help (cold rooms) */}
      {lp.brands && (
        <section aria-labelledby="brands" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="overflow-hidden rounded-[2rem] border border-silver bg-white p-4">
              <Image src={lp.brands.image} alt={lp.brands.imageAlt} width={669} height={457} className="h-auto w-full" />
            </div>
            <div>
              <h2 id="brands" className="text-4xl font-bold md:text-5xl">{lp.brands.title}</h2>
              <p className="mt-4 text-xl text-graphite">{lp.brands.text}</p>
              <p className="mt-8 font-display text-xl font-semibold">Engines</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {lp.brands.engines.map((b) => <li key={b} className="rounded-full bg-steel px-5 py-2 font-display text-lg font-medium">{b}</li>)}
              </ul>
              <p className="mt-6 font-display text-xl font-semibold">Alternators</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {lp.brands.alternators.map((b) => <li key={b} className="rounded-full bg-steel px-5 py-2 font-display text-lg font-medium">{b}</li>)}
              </ul>
              <div className="mt-8"><WhatsAppButton message={`Hi Profix, can you repair my generator? Brand: `} label="Check my brand on WhatsApp" /></div>
            </div>
          </div>
        </section>
      )}
      {lp.audience && (
        <section aria-labelledby="audience" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5">
            <h2 id="audience" className="text-4xl font-bold md:text-5xl">{lp.audience.title}</h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {lp.audience.items.map((b) => <li key={b} className="rounded-full bg-steel px-6 py-3 font-display text-xl font-medium">{b}</li>)}
            </ul>
          </div>
        </section>
      )}

      {lp.reviews && lp.reviews.length > 0 && (
        <section aria-labelledby="reviews" className="mx-auto max-w-7xl px-5 py-20">
          <h2 id="reviews" className="text-4xl font-bold md:text-5xl">What customers say</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {lp.reviews.map((r) => (
              <li key={r.name + r.text.slice(0, 12)} className="rounded-3xl bg-white p-7">
                <p className="text-lg leading-relaxed">{r.text}</p>
                <p className="mt-4 font-display text-lg font-semibold">{r.name}{r.area ? `, ${r.area}` : ""}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 9. The form */}
      <section aria-labelledby="form" className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 id="form" className="mb-3 max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">{lp.form.title}</h2>
          <p className="mb-10 max-w-2xl text-lg text-silver">Fill in the job card. It opens in WhatsApp with everything ready to send. Takes about a minute.</p>
          <LeadCard form={lp.form} subject={lp.serviceName} source={lp.source} />
        </div>
      </section>

      {/* 10. Objections */}
      <section aria-labelledby="faq" className="mx-auto max-w-4xl px-5 py-20">
        <h2 id="faq" className="mb-10 text-4xl font-bold">Questions people ask before they call</h2>
        <Faq items={lp.faqs} />
      </section>

      {/* 11. Areas */}
      <section aria-label="Areas we cover" className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-3xl font-bold">We come to you across Gauteng</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {AREAS.map((a) => <li key={a.slug} className="rounded-full border-2 border-ink px-5 py-2 font-display text-lg font-medium">{a.name}</li>)}
          </ul>
        </div>
      </section>

      {/* 12. Closing push */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white">
        <div aria-hidden="true" className="absolute -right-24 top-0 -z-10 h-full w-[38%] skew-x-[-14deg] bg-signal" />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold leading-[0.95] md:text-6xl">{lp.closing.title}</h2>
            <p className="mt-4 text-lg text-silver">{lp.closing.text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <CallButton look="white" label={callLabel} />
            <WhatsAppButton message={lp.waMessage} />
            <LinkButton href="#quote" look="dark">Send a job card</LinkButton>
          </div>
        </div>
      </section>

      <LpFooter />
      <LpActions waMessage={lp.waMessage} />
    </>
  )
}
