import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CtaBand } from "@/components/cta-band"
import { BrandStrip } from "@/components/brand-strip"
import { PhotoStrip } from "@/components/photo-strip"
import { CallButton, LinkButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "About Profix Electronics & Appliances",
  description: "Profix repairs appliances, electronics and gate motors across Gauteng. Learn how we work and what to expect when you book a repair.",
  alternates: { canonical: "/about" },
}

const points = [
  { t: "Diagnose first", d: "We find the real fault with proper test instruments before we quote, so you only pay for what the appliance needs." },
  { t: "Quote before work", d: "Every job starts with a clear price. No surprises when the technician packs up." },
  { t: "Repair at your home", d: "Most repairs happen at your home or business, so you do not need to carry anything anywhere." },
  { t: "Honest advice", d: "If a repair does not make sense, we say so and help you decide what to do next." },
]

export default function AboutPage() {
  return (
    <>
      {/* TODO: replace the copy below with the owner's real story, years in business and team details. */}
      <PageHero crumbs={[{ name: "About", href: "/about" }]} title="Repairs by technicians who know electronics" image={{ src: "/profix-appliances-washing-machine-repairman-on-site.jpg", alt: "Profix technician repairing a washing machine on site" }} text="Profix repairs appliances, electronics and gate motors across Gauteng and its outskirts.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">We fix the fault, not just the symptom</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            A broken fridge, oven or washing machine disrupts the whole household. Profix was built around fast, honest repairs. We test with real instruments, replace only what has failed and explain what we found in plain language.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
            We also work on TVs, microwaves, air conditioners and gate motors, so one call covers most of what breaks around your home.
          </p>
        </div>
        <MovingImage src="/profix-appliances-top-load-washing-machine-field-repair.jpg" alt="Profix technician repairing a top loader washing machine" className="aspect-[4/5] max-h-[560px] w-full rounded-[2rem]" priority markWidth={52} />
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          {points.map((p) => (
            <div key={p.t} className="border-l-4 border-signal pl-6">
              <h3 className="text-2xl font-semibold">{p.t}</h3>
              <p className="mt-2 max-w-md text-lg text-graphite">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
      <BrandStrip title="Brands we repair every week" />
      <section className="pb-20"><PhotoStrip /></section>
      <CtaBand />
    </>
  )
}
