export interface Brand {
  slug: string
  name: string
  logo: string
  w: number
  h: number
  intro: string
  known: string
  image: string
  imageAlt: string
}

export const BRANDS: Brand[] = [
  { slug: "defy", name: "Defy", logo: "/profix-brand-logo-defy.png", w: 262, h: 137, known: "stoves, ovens, fridges and washing machines",
    intro: "Defy is one of the most common appliance brands in South African homes. We repair Defy stoves, ovens, fridges, freezers and washing machines.",
    image: "/profix-appliances-defy-gemini-petit-chef-oven.jpg", imageAlt: "Defy oven being repaired by a Profix technician" },
  { slug: "lg", name: "LG", logo: "/profix-brand-logo-lg.png", w: 266, h: 126, known: "washing machines, fridges, TVs and air conditioners",
    intro: "We repair LG washing machines, fridges, TVs and air conditioners, from error codes and leaks to boards and compressors.",
    image: "/profix-appliances-top-load-washing-machine-field-repair.jpg", imageAlt: "Top loader washing machine being repaired on site" },
  { slug: "whirlpool", name: "Whirlpool", logo: "/profix-brand-logo-whirlpool.png", w: 300, h: 99, known: "washing machines, fridges and dishwashers",
    intro: "Whirlpool washing machines, tumble dryers, fridges and dishwashers are built to last, and when they fault we repair them properly.",
    image: "/profix-appliances-front-load-washer-dryer-servicing.jpg", imageAlt: "Front load washer being serviced by a technician" },
  { slug: "hisense", name: "Hisense", logo: "/profix-brand-logo-hisense.png", w: 262, h: 42, known: "fridges, TVs, microwaves and air conditioners",
    intro: "We repair Hisense fridges, freezers, microwaves, TVs and air conditioners across Gauteng.",
    image: "/profix-appliances-wall-mounted-aircon-unit.jpg", imageAlt: "Wall mounted air conditioner unit" },
  { slug: "indesit", name: "Indesit", logo: "/profix-brand-logo-indesit.png", w: 286, h: 71, known: "washing machines, fridges and ovens",
    intro: "Indesit washing machines, fridges and ovens are popular in family homes. We diagnose and repair them on site where we can.",
    image: "/profix-appliances-washing-machine-motor-repair.jpg", imageAlt: "Washing machine motor being repaired" },
  { slug: "aeg", name: "AEG", logo: "/profix-brand-logo-aeg.png", w: 300, h: 113, known: "built in ovens, hobs, washing machines and dishwashers",
    intro: "AEG built in ovens, hobs, washing machines and dishwashers need careful repairs. We handle faults from heating elements to control boards.",
    image: "/profix-appliances-built-in-electric-oven-hob.jpg", imageAlt: "Built in electric oven and hob" },
  { slug: "ge", name: "GE", logo: "/profix-brand-logo-ge.png", w: 148, h: 148, known: "fridges, freezers and stoves",
    intro: "We repair GE fridges, freezers and stoves, and we can regas and replace parts where the unit is worth saving.",
    image: "/profix-appliances-refrigerator-condenser-gas-servicing.jpg", imageAlt: "Fridge being serviced with a gas cylinder on site" },
  { slug: "kic", name: "KIC", logo: "/profix-brand-logo-kic.png", w: 233, h: 120, known: "fridges and freezers",
    intro: "KIC fridges and freezers are a familiar sight in South African kitchens. We repair cooling faults, door seals, thermostats and compressors.",
    image: "/profix-appliances-refrigerator-compressor-repair.jpg", imageAlt: "Fridge compressor being repaired with gauges connected" },
  { slug: "fridgemaster", name: "Fridgemaster", logo: "/profix-brand-logo-fridgemaster.png", w: 500, h: 145, known: "fridges and freezers",
    intro: "Fridgemaster fridges and freezers need to stay cold all day. We repair gas leaks, compressors, fans and thermostats.",
    image: "/profix-appliances-fridge-freezer-gas-recharge-repair.jpg", imageAlt: "Fridge freezer being regassed with gauges on the floor" },
]

export function getBrand(slug: string) {
  return BRANDS.find((b) => b.slug === slug)
}
