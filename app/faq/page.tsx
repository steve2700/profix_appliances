import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { MovingImage } from "@/components/moving-image"
import { BrandStrip } from "@/components/brand-strip"
import { CallButton, WhatsAppButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "Appliance Repair FAQ",
  description: "Answers to common questions about appliance repairs, quotes, brands, air conditioner installation and areas covered by Profix in Gauteng.",
  alternates: { canonical: "/faq" },
}

const items = [
  { q: "What areas do you cover?", a: "We operate across Gauteng and its outskirts, including Johannesburg, Sandton, Randburg, Roodepoort, Pretoria, Centurion, Midrand, Kempton Park, Germiston, Boksburg, Benoni and Alberton." },
  { q: "How do I get a quote?", a: "Complete the job card on our website. It opens in WhatsApp, ready to send. Add photos of the appliance or the fault and we will come back with a quote." },
  { q: "Which brands do you repair?", a: "We repair brands including Defy, LG, Whirlpool, Hisense, Indesit, AEG, GE, KIC and Fridgemaster, and many others. Put the brand and model on the job card and we will confirm." },
  { q: "Do you repair at my home?", a: "Yes. In most cases we repair at your home or business. If a part must go to the workshop, we tell you before we take it." },
  { q: "Is it worth repairing an old appliance?", a: "Often yes. We diagnose first and give you an honest opinion, including when a repair does not make sense." },
  { q: "Why is my fridge not cooling?", a: "Common causes are a gas leak, a faulty compressor, a failed fan or a thermostat fault. We test each one before quoting." },
  { q: "Do you install air conditioners?", a: "Yes. We install wall mounted split units, including the outdoor stand, piping and electrical connections, and we service and repair them too." },
  { q: "Can you repair TVs and microwaves?", a: "Yes. We repair flat screen TVs, microwaves and other home electronics, including boards, power supplies, magnetrons and transformers." },
  { q: "Do you repair gate motors?", a: "Yes. We repair sliding and swing gates and gate motors, and we can set up solar powered gate motors." },
]

export default function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "FAQ", href: "/faq" }]} title="Appliance repair questions, answered" image={{ src: "/profix-appliances-front-load-washer-dryer-servicing.jpg", alt: "Front load washer dryer being serviced" }} text="Quick answers for homeowners and landlords.">
        <CallButton />
        <WhatsAppButton />
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.4fr_1fr]">
        <Faq items={items} />
        <div className="grid gap-5 self-start sm:grid-cols-2 lg:sticky lg:top-32 lg:grid-cols-1">
          <MovingImage src="/profix-appliances-refrigerator-condenser-gas-servicing.jpg" alt="Fridge being serviced on site" className="aspect-[4/3] rounded-[2rem]" />
          <MovingImage src="/profix-electronics-samsung-microwave-digital-panel.jpg" alt="Microwave with a digital control panel" className="aspect-[4/3] rounded-[2rem]" variant={1} />
        </div>
      </section>
      <BrandStrip />
      <CtaBand />
    </>
  )
}
