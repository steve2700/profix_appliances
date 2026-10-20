import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CallButton, LinkButton } from "@/components/buttons"
import { CtaBand } from "@/components/cta-band"
import { SERVICES } from "@/lib/services"

export const metadata: Metadata = {
  title: "Appliance, Electronics and Gate Repair Services in Gauteng",
  description: "All Profix services: washing machine, dishwasher, fridge, oven, microwave, air conditioner, TV, circuit board and gate motor repairs across Gauteng.",
  alternates: { canonical: "/services" },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Services", href: "/services" }]} title="Repair services across Gauteng" image={{ src: "/profix-appliances-top-load-washing-machine-field-repair.jpg", alt: "Technician repairing a washing machine at a customer's home" }} text="From washing machines to gate motors, pick a service or send a job card and we will sort it.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group grid overflow-hidden rounded-[2rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[220px_1fr]">
              <MovingImage src={s.image} alt={s.imageAlt} variant={i} className="min-h-52" sizes="220px" markWidth={38} />
              <div className="p-6">
                <h2 className="text-2xl font-semibold leading-tight">{s.name}</h2>
                <p className="mt-3 text-graphite">{s.short}</p>
                <span className="mt-4 inline-block font-display text-lg font-semibold text-azure">Read more</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
