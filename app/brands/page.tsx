import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { CallButton, LinkButton } from "@/components/buttons"
import { CtaBand } from "@/components/cta-band"
import { BRANDS } from "@/lib/brands"

export const metadata: Metadata = {
  title: "Appliance Brands We Repair: Defy, LG, Whirlpool, Hisense and more",
  description: "Profix repairs Defy, LG, Whirlpool, Hisense, Indesit, AEG, GE, KIC and Fridgemaster appliances across Gauteng. Washing machines, fridges, ovens, microwaves and more.",
  alternates: { canonical: "/brands" },
}

export default function BrandsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Brands", href: "/brands" }]} title="Appliance brands we repair" image={{ src: "/profix-appliances-defy-gemini-petit-chef-oven.jpg", alt: "Defy oven being repaired" }} text="From everyday family brands to premium built in appliances, we repair the brands South African homes use.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b) => (
            <Link key={b.slug} href={`/brands/${b.slug}`} className="group rounded-[2rem] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-16 items-center"><Image src={b.logo} alt={`${b.name} logo`} width={b.w} height={b.h} className="max-h-14 w-auto" /></div>
              <h2 className="mt-6 text-2xl font-semibold">{b.name} repairs</h2>
              <p className="mt-2 text-graphite">{b.intro}</p>
              <span className="mt-4 inline-block font-display text-lg font-semibold text-azure">Read more</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
