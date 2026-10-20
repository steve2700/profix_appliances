export interface Area {
  slug: string
  name: string
  places: string[]
  context: string
  image: string
  imageAlt: string
}

export const AREAS: Area[] = [
  { slug: "johannesburg", name: "Johannesburg", places: ["Rosebank", "Melville", "Parktown", "Linden"],
    context: "Johannesburg homes and offices run on washing machines, fridges and ovens that cannot be without for long. We repair them across the city.",
    image: "/profix-appliances-top-load-washing-machine-field-repair.jpg", imageAlt: "Top loader washing machine being repaired on site" },
  { slug: "sandton", name: "Sandton", places: ["Bryanston", "Morningside", "Rivonia", "Fourways"],
    context: "In Sandton, built in ovens, hobs, dishwashers and air conditioners need careful hands. We repair and service them in homes and apartments.",
    image: "/profix-appliances-built-in-electric-oven-hob.jpg", imageAlt: "Built in electric oven and hob" },
  { slug: "randburg", name: "Randburg", places: ["Northcliff", "Ferndale", "Fontainebleau", "Randpark Ridge"],
    context: "Randburg families depend on their appliances every day. We repair washing machines, fridges, stoves and more around Randburg.",
    image: "/profix-appliances-front-load-washer-dryer-servicing.jpg", imageAlt: "Front load washer being serviced" },
  { slug: "roodepoort", name: "Roodepoort", places: ["Florida", "Constantia Kloof", "Weltevreden Park", "Wilgeheuwel"],
    context: "We repair household appliances, TVs and air conditioners across Roodepoort and the West Rand.",
    image: "/profix-appliances-refrigerator-condenser-gas-servicing.jpg", imageAlt: "Fridge being serviced on site" },
  { slug: "pretoria", name: "Pretoria", places: ["Menlo Park", "Brooklyn", "Hatfield", "Waterkloof"],
    context: "From student flats in Hatfield to family homes in Waterkloof, we repair fridges, washing machines, ovens and more across Pretoria.",
    image: "/profix-appliances-defy-gemini-petit-chef-oven.jpg", imageAlt: "Defy oven being repaired" },
  { slug: "centurion", name: "Centurion", places: ["Irene", "Eldoraigne", "Lyttelton", "Highveld"],
    context: "Centurion homes and complexes call us for fridge, washing machine, oven and air conditioner repairs.",
    image: "/profix-appliances-air-conditioner-wall-unit-installation.jpg", imageAlt: "Air conditioner wall unit being installed" },
  { slug: "midrand", name: "Midrand", places: ["Halfway House", "Kyalami", "Noordwyk", "Vorna Valley"],
    context: "Midrand estates and apartments rely on us for appliance repairs, air conditioner installations and electronics repairs.",
    image: "/profix-appliances-hvac-ac-installation-finished.jpg", imageAlt: "Air conditioner outdoor unit installed on a stand" },
  { slug: "kempton-park", name: "Kempton Park", places: ["Bonaero Park", "Rhodesfield", "Glen Marais", "Birchleigh"],
    context: "Kempton Park households call us when the fridge warms up, the washing machine stops or the oven will not heat.",
    image: "/profix-electronics-microwave-transformer-magnetron-repair.jpg", imageAlt: "Microwave being repaired on a workbench" },
  { slug: "germiston", name: "Germiston", places: ["Primrose", "Dinwiddie", "Georgetown", "Elsburg"],
    context: "We repair household appliances, microwaves and gate motors for homes and small businesses around Germiston.",
    image: "/profix-gates-automated-gate-motor-solar-setup.jpg", imageAlt: "Automated gate with solar powered motor" },
  { slug: "boksburg", name: "Boksburg", places: ["Parkrand", "Witfield", "Beyers Park", "Sunward Park"],
    context: "Boksburg homes get fast, honest appliance repairs from Profix, with a clear quote before work starts.",
    image: "/profix-appliances-gas-stove-burner-servicing.jpg", imageAlt: "Gas stove burners being serviced" },
  { slug: "benoni", name: "Benoni", places: ["Northmead", "Rynfield", "Lakefield", "Farrarmere"],
    context: "We repair washing machines, fridges, stoves and electronics for Benoni families and small businesses.",
    image: "/profix-appliances-oven-heating-element-repair.jpg", imageAlt: "Oven heating element being repaired" },
  { slug: "alberton", name: "Alberton", places: ["Brackenhurst", "Meyersdal", "Raceview", "New Redruth"],
    context: "Alberton households rely on Profix for dependable fridge, washing machine, oven and air conditioner repairs.",
    image: "/profix-appliances-fridge-freezer-gas-recharge-repair.jpg", imageAlt: "Fridge freezer being regassed" },
]

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug)
}

export const APPLIANCES = [
  "Washing machine",
  "Dishwasher",
  "Fridge or freezer",
  "Oven, stove or hob",
  "Microwave",
  "Air conditioner",
  "TV or electronics",
  "Gate or gate motor",
  "Something else",
] as const
