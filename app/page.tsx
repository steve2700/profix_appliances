import type { Metadata } from "next"
import Link from "next/link"
import { CallButton, LinkButton, WhatsAppButton } from "@/components/buttons"
import { HeroCollage } from "@/components/hero-collage"
import { PhotoStrip } from "@/components/photo-strip"
import { MovingImage } from "@/components/moving-image"
import { JobCard } from "@/components/job-card"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { BrandStrip } from "@/components/brand-strip"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"

export const metadata: Metadata = {
  title: { absolute: "Profix Electronics & Appliances | Appliance, Generator and Cold Room Repairs in Gauteng" },
  alternates: { canonical: "/" },
}

const why = [
  { t: "A clear quote first", d: "Send a job card with photos. You get a price before any work starts, with no surprises on the day." },
  { t: "We come to you", d: "Most repairs are done at your home or business, so you do not have to carry a fridge, a generator or a washing machine anywhere." },
  { t: "Real electronics skills", d: "We test boards, wiring and components with proper instruments, so we fix the fault instead of guessing." },
  { t: "Honest advice", d: "If a repair is not worth it, we tell you. We would rather earn your trust than your money." },
  { t: "Homes and businesses", d: "From a family kitchen to a butchery cold room or a shop generator, we repair what keeps you running." },
  { t: "Urgent jobs welcome", d: "Fridge warm, generator dead or cold room failing? Call and tell us. We will tell you honestly how soon we can get to you." },
]

const steps = [
  { t: "Tell us what is wrong", d: "Call, or send a job card on WhatsApp with the brand, the fault and your area. Photos help." },
  { t: "We diagnose and quote", d: "A technician finds the real fault and explains it in plain language. You get a clear quote before any work starts." },
  { t: "We repair it", d: "You approve the price, then we fix it, usually at your home or business." },
]

const faqs = [
  { q: "What areas do you cover?", a: "We operate across Gauteng and its outskirts, including Johannesburg, Sandton, Randburg, Roodepoort, Pretoria, Centurion, Midrand, Kempton Park, Germiston, Boksburg, Benoni and Alberton." },
  { q: "How do I get a quote?", a: "Fill in the job card on this page. It opens in WhatsApp, ready to send. Add photos of the appliance or the fault and we will come back with a quote." },
  { q: "Do you repair generators and cold rooms?", a: "Yes. We repair diesel and petrol generators, walk in cold rooms, freezer rooms and commercial fridges. These are urgent for most people, so call us and tell us what is happening." },
  { q: "Which appliance brands do you repair?", a: "We repair brands including Defy, LG, Whirlpool, Hisense, Indesit, AEG, GE, KIC and Fridgemaster. Put your brand and model on the job card and we will confirm." },
  { q: "Do you repair at my home or business?", a: "Yes. In most cases we repair at your home or business. If a part must go to the workshop, we tell you first." },
  { q: "How much will my repair cost?", a: "It depends on the fault, so we do not guess. You get a clear quote after the diagnosis and before any repair work starts." },
  { q: "Is it worth repairing an old appliance?", a: "Often yes. We diagnose first and give you an honest opinion, including when a repair does not make sense." },
]

export default function Home() {
  const urgent = SERVICES.filter((s) => s.urgent)
  const everyday = SERVICES.filter((s) => !s.urgent)
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="absolute -right-32 -top-32 -z-10 h-[520px] w-[520px] rounded-full bg-azure/10 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-40 left-10 -z-10 h-[420px] w-[420px] rounded-full bg-signal/15 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="rise font-display text-xl font-semibold text-azure" style={{ animationDelay: "0ms" }}>Profix Electronics &amp; Appliances</p>
            <h1 className="rise mt-3 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl" style={{ animationDelay: "120ms" }}>
              Appliance, generator and cold room repairs across Gauteng.
            </h1>
            <p className="rise mt-6 max-w-xl text-xl leading-relaxed text-graphite" style={{ animationDelay: "240ms" }}>
              Washing machines, fridges, ovens, microwaves, air conditioners, TVs, gates, generators and cold rooms. Tell us what is not working and we will tell you what it costs.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
              <CallButton pulse />
              <LinkButton href="/contact#job-card" look="outline">Get a Free Quote</LinkButton>
              <WhatsAppButton label="WhatsApp" />
            </div>
            <ul className="rise mt-10 flex flex-wrap gap-x-8 gap-y-2 font-display text-lg font-medium text-graphite" style={{ animationDelay: "480ms" }}>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal" />All major brands</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal" />Repairs at your home or business</li>
              <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-signal" />Job card in under a minute</li>
            </ul>
          </div>
          <div className="px-2 sm:px-6"><HeroCollage /></div>
        </div>
      </section>

      <BrandStrip />

      {/* Urgent: generators and cold rooms */}
      <section aria-labelledby="urgent" className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-display text-lg font-semibold uppercase tracking-widest text-signal">Cannot wait</p>
          <h2 id="urgent" className="mt-3 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">When the power is out or the cold is gone, every hour counts</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {urgent.map((s, i) => (
              <div key={s.slug} className="overflow-hidden rounded-[2rem] bg-white text-ink">
                <MovingImage src={s.image} alt={s.imageAlt} variant={i} className="aspect-[16/9]" sizes="(min-width: 1024px) 50vw, 100vw" markWidth={48} />
                <div className="p-7">
                  <h3 className="text-3xl font-bold leading-tight">{s.name}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-graphite">{s.pain}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <CallButton size="md" />
                    <LinkButton href={`/services/${s.slug}`} look="outline" size="md">How we help</LinkButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everyday services */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] md:text-5xl">If it plugs in, or slides open, we can look at it</h2>
          <LinkButton href="/services" look="dark" size="md">See all services</LinkButton>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {everyday.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group block overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <MovingImage src={s.image} alt={s.imageAlt} variant={i} className="aspect-[4/3]" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
              <div className="p-6">
                <h3 className="text-xl font-semibold leading-tight">{s.name}</h3>
                <p className="mt-3 text-graphite">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-lg font-semibold text-azure">
                  View service
                  <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-signal text-ink transition group-hover:translate-x-1">&rsaquo;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="how" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 id="how" className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">How a Profix repair works</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((x, i) => (
              <li key={x.t} className="rounded-3xl bg-ink p-7 text-white">
                <span className="font-display text-5xl font-bold text-signal">{i + 1}</span>
                <p className="mt-3 font-display text-2xl font-semibold">{x.t}</p>
                <p className="mt-2 text-lg leading-relaxed text-silver">{x.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Job card */}
      <section className="cut-both bg-ink px-5 pb-28 pt-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-4xl font-bold leading-[1.05] md:text-5xl">Send your job card on WhatsApp</h2>
            <p className="mt-4 text-xl text-silver">A few quick answers and your repair is in our queue. No forms to wait on, no phone tag.</p>
          </div>
          <JobCard />
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">Why people call Profix</h2>
        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {why.map((w) => (
            <div key={w.t} className="border-l-4 border-signal pl-6">
              <h3 className="text-2xl font-semibold">{w.t}</h3>
              <p className="mt-2 max-w-md text-lg leading-relaxed text-graphite">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo strip */}
      <section className="pb-20" aria-labelledby="work">
        <h2 id="work" className="mx-auto mb-8 max-w-7xl px-5 text-4xl font-bold md:text-5xl">On the job</h2>
        <PhotoStrip />
      </section>

      {/* Areas */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] md:text-5xl">Repairs near you in Gauteng</h2>
          <p className="mt-4 max-w-2xl text-lg text-graphite">We operate across Gauteng and its outskirts. Find your area to see how we help.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <Link key={a.slug} href={`/service-areas/${a.slug}`} className="rounded-full border-2 border-ink px-6 py-2.5 font-display text-xl font-medium transition hover:border-signal hover:bg-signal">{a.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <h2 className="mb-10 text-4xl font-bold md:text-5xl">Common questions</h2>
        <Faq items={faqs} />
      </section>

      <CtaBand />
    </>
  )
}
