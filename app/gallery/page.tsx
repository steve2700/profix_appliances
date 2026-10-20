import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { MovingImage } from "@/components/moving-image"
import { CtaBand } from "@/components/cta-band"
import { CallButton, LinkButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "Appliance Repair Gallery",
  description: "Photos of Profix technicians repairing washing machines, fridges, ovens, microwaves, air conditioners, TVs and gates across Gauteng.",
  alternates: { canonical: "/gallery" },
}

const photos: [string, string][] = [
  ["/profix-appliances-top-load-washing-machine-field-repair.jpg", "Top loader washing machine repaired on site"],
  ["/profix-appliances-refrigerator-condenser-gas-servicing.jpg", "Fridge serviced on site with a gas cylinder"],
  ["/profix-electronics-microwave-transformer-magnetron-repair.jpg", "Microwave transformer and magnetron repair"],
  ["/profix-appliances-air-conditioner-wall-unit-installation.jpg", "Air conditioner wall unit installation"],
  ["/profix-electronics-samsung-microwave-digital-panel.jpg", "Samsung microwave digital panel"],
  ["/profix-appliances-built-in-electric-oven-hob.jpg", "Built in electric oven and hob"],
  ["/profix-appliances-washing-machine-motor-repair.jpg", "Washing machine motor repair"],
  ["/profix-appliances-fridge-freezer-gas-recharge-repair.jpg", "Fridge freezer regas"],
  ["/profix-electronics-microwave-internal-components-testing.jpg", "Microwave internal components testing"],
  ["/profix-appliances-top-load-washing-machine-repair-bench.jpg", "Top loader washing machine opened for repair"],
  ["/profix-appliances-defy-gemini-petit-chef-oven.jpg", "Defy oven"],
  ["/profix-appliances-hvac-ac-installation-finished.jpg", "Outdoor air conditioner unit installed on a stand"],
  ["/profix-appliances-oven-control-board-repair.jpg", "Oven control board repair"],
  ["/profix-appliances-front-load-washer-dryer-servicing.jpg", "Front load washer dryer servicing"],
  ["/profix-appliances-gas-stove-burner-servicing.jpg", "Gas stove burner servicing"],
  ["/profix-electronics-microwave-disassembly-workbench.jpg", "Microwave stripped on a workbench"],
  ["/profix-appliances-hvac-aircon-manifold-servicing.jpg", "Air conditioner manifold gauge servicing"],
  ["/profix-appliances-oven-heating-element-repair.jpg", "Oven heating element repair"],
  ["/profix-appliances-refrigerator-compressor-repair.jpg", "Fridge compressor repair"],
  ["/profix-appliances-oven-selector-switch-wiring.jpg", "Oven selector switch wiring"],
  ["/profix-gates-automated-gate-motor-solar-setup.jpg", "Automated gate with solar motor"],
  ["/profix-gates-technician-welding-palisade-gate.jpg", "Technician welding a palisade gate"],
  ["/profix-gates-modern-wooden-slat-sliding-gate.jpg", "Modern wooden slat sliding gate"],
  ["/profix-gates-white-modern-security-gate.jpg", "White modern security gate"],
  ["/profix-gates-ornate-driveway-gate-welding.jpg", "Ornate driveway gate being welded"],
  ["/profix-gates-angle-grinder-track-servicing.jpg", "Sliding gate track servicing"],
  ["/profix-appliances-built-in-gas-hob-installation.jpg", "Built in gas hob installation"],
  ["/profix-appliances-electric-hob-internal-repair.jpg", "Electric hob internal repair"],
]

export default function GalleryPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "Gallery", href: "/gallery" }]} title="Our work, on the job" image={{ src: "/profix-electronics-microwave-transformer-magnetron-repair.jpg", alt: "Microwave repair on a workbench" }} text="Real repairs from real homes. Every job here started with a job card.">
        <CallButton />
        <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
      </PageHero>
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map(([src, alt], i) => (
            <MovingImage key={src} src={src} alt={alt} variant={i} className={`mb-5 break-inside-avoid rounded-[2rem] ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"}`} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
