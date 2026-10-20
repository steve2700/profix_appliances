export interface Service {
  slug: string
  name: string
  short: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  image: string
  imageAlt: string
  headline: string
  intro: string
  answer: string
  appliance: string
  includes: string[]
  signs: string[]
  process?: { src: string; alt: string; caption: string }[]
  faqs: { q: string; a: string }[]
}

export const SERVICES: Service[] = [
  {
    slug: "washing-machine-and-dishwasher-repairs",
    name: "Washing Machine and Dishwasher Repairs",
    short: "Top loaders, front loaders, tumble dryers and dishwashers repaired on site.",
    metaTitle: "Washing Machine and Dishwasher Repairs in Gauteng",
    metaDescription:
      "Washing machine and dishwasher repairs in Gauteng. Leaks, drum faults, motors, pumps and error codes fixed by experienced technicians. Call Now or send a WhatsApp job card.",
    keywords: ["washing machine repairs Gauteng", "dishwasher repairs Johannesburg", "washing machine repair near me", "tumble dryer repairs"],
    image: "/profix-appliances-top-load-washing-machine-field-repair.jpg",
    imageAlt: "Technician repairing a top loader washing machine on site",
    headline: "Washing machine and dishwasher repairs, done at your home",
    intro:
      "A broken washing machine or dishwasher turns the whole house upside down. Profix technicians find the fault, explain it in plain language, give you a clear quote and fix it, usually at your home.",
    answer:
      "Profix repairs top loader and front loader washing machines, tumble dryers and dishwashers across Gauteng, including leaks, drum and bearing faults, motors, pumps and control boards.",
    appliance: "Washing machine",
    includes: [
      "Leaks, blocked pumps and drain faults",
      "Drum, bearing and spider arm repairs",
      "Motor and belt replacements",
      "Control board and error code faults",
      "Door seals, locks and hinges",
      "Dishwasher pumps, spray arms and heaters",
    ],
    signs: ["Water on the floor", "Machine will not spin or drain", "Loud banging or grinding", "Error codes on the display", "Dishes still dirty after a cycle"],
    process: [
      { src: "/profix-appliances-top-load-washing-machine-repair-bench.jpg", alt: "Top loader washing machine opened for repair", caption: "Diagnosing the fault" },
      { src: "/profix-appliances-washing-machine-motor-repair.jpg", alt: "Washing machine motor being repaired", caption: "Motor repair" },
      { src: "/profix-appliances-front-load-washer-dryer-servicing.jpg", alt: "Front load washer being serviced", caption: "Front loader service" },
    ],
    faqs: [
      { q: "Do you repair washing machines at my home?", a: "Yes. In most cases we repair your washing machine or dishwasher at your home. If a part needs to go to the workshop, we will tell you before we take it." },
      { q: "Which brands do you repair?", a: "We repair brands including Defy, LG, Whirlpool, Indesit, AEG and Hisense. Put the brand and model on the job card and we will confirm." },
      { q: "Is it worth repairing an old washing machine?", a: "Often yes. We give you an honest opinion after the diagnosis, including when a repair does not make sense." },
    ],
  },
  {
    slug: "fridge-and-freezer-repairs",
    name: "Fridge and Freezer Repairs",
    short: "Not cooling, leaking or noisy? We repair fridges and freezers, including regassing.",
    metaTitle: "Fridge and Freezer Repairs in Gauteng",
    metaDescription:
      "Fridge and freezer repairs in Gauteng. Not cooling, gas leaks, compressors, thermostats and fans fixed by experienced technicians. Call Now or send a WhatsApp job card for a quote.",
    keywords: ["fridge repairs Gauteng", "freezer repairs Johannesburg", "fridge not cooling", "regas fridge", "fridge compressor repair"],
    image: "/profix-appliances-refrigerator-condenser-gas-servicing.jpg",
    imageAlt: "Fridge being serviced on site with a gas cylinder",
    headline: "Fridge and freezer repairs that save your food",
    intro:
      "When a fridge stops cooling, food is lost fast. We repair fridges and freezers across Gauteng, from simple thermostat faults to gas leaks and compressor replacements.",
    answer:
      "Profix repairs fridges and freezers across Gauteng, including cooling faults, gas leaks and regassing, compressors, fans, thermostats and door seals.",
    appliance: "Fridge or freezer",
    includes: [
      "Fridge and freezer regassing",
      "Compressor testing and replacement",
      "Thermostat and defrost system repairs",
      "Fan motor and condenser repairs",
      "Door seal and hinge replacement",
      "Side by side and double door models",
    ],
    signs: ["Not cooling or not freezing", "Ice build up inside", "Water leaking onto the floor", "Fridge running non stop", "Strange humming or clicking"],
    process: [
      { src: "/profix-appliances-fridge-freezer-gas-recharge-repair.jpg", alt: "Fridge freezer being regassed with gauges connected", caption: "Regassing" },
      { src: "/profix-appliances-refrigerator-compressor-repair.jpg", alt: "Fridge compressor repair with gauges on the back of the unit", caption: "Compressor repair" },
      { src: "/profix-appliances-refrigerator-gas-manifold-diagnostics.jpg", alt: "Gas manifold gauges connected during fridge diagnostics", caption: "Gas diagnostics" },
    ],
    faqs: [
      { q: "Why is my fridge not cooling?", a: "Common causes are a gas leak, a faulty compressor, a failed fan or a thermostat problem. We test each one before quoting." },
      { q: "Can you regas a fridge at my home?", a: "Yes. We regas fridges and freezers on site where the unit is accessible, after fixing the leak." },
      { q: "How fast should I act on a warm fridge?", a: "Quickly. Move perishables to a cool box and call us. A fast repair saves food and often saves the compressor." },
    ],
  },
  {
    slug: "oven-stove-and-hob-repairs",
    name: "Oven, Stove and Hob Repairs",
    short: "Electric and gas ovens, stoves and hobs repaired, serviced and installed.",
    metaTitle: "Oven, Stove and Hob Repairs in Gauteng",
    metaDescription:
      "Oven, stove and hob repairs in Gauteng. Heating elements, control boards, selector switches and gas burners fixed, plus built in oven and hob installations. Call Now for a quote.",
    keywords: ["oven repairs Gauteng", "stove repairs Johannesburg", "hob repairs", "oven heating element replacement", "gas stove repairs"],
    image: "/profix-appliances-built-in-electric-oven-hob.jpg",
    imageAlt: "Built in electric oven and hob in a kitchen",
    headline: "Oven, stove and hob repairs for your kitchen",
    intro:
      "When the oven will not heat or a hob plate goes cold, dinner is cancelled. We repair and service electric and gas ovens, stoves and hobs, and we install built in units.",
    answer:
      "Profix repairs electric and gas ovens, stoves and hobs across Gauteng, including heating elements, thermostats, selector switches, control boards and gas burners, and installs built in ovens and hobs.",
    appliance: "Oven, stove or hob",
    includes: [
      "Oven heating element replacement",
      "Thermostat and selector switch repairs",
      "Oven control board repairs",
      "Hob plate and ceramic hob repairs",
      "Gas burner servicing and ignition faults",
      "Built in oven and hob installation",
    ],
    signs: ["Oven not heating or heating unevenly", "Hob plate not working", "Gas burner will not light", "Tripping the power", "Display or timer not working"],
    process: [
      { src: "/profix-appliances-oven-control-board-repair.jpg", alt: "Oven control board being repaired", caption: "Control board repair" },
      { src: "/profix-appliances-oven-heating-element-repair.jpg", alt: "Oven heating element being replaced", caption: "New heating element" },
      { src: "/profix-appliances-gas-stove-burner-servicing.jpg", alt: "Gas stove burner servicing by a technician", caption: "Gas burner service" },
    ],
    faqs: [
      { q: "Do you repair gas stoves?", a: "Yes. We service gas burners and repair ignition and control faults. Gas work is done with safety checks." },
      { q: "Can you install a built in oven and hob?", a: "Yes. We install built in ovens and hobs and check that everything works before we leave." },
      { q: "Why is my oven not heating?", a: "It is often a failed heating element, thermostat or selector switch. We test the parts and replace the one at fault." },
    ],
  },
  {
    slug: "microwave-oven-repairs",
    name: "Microwave Oven Repairs",
    short: "Microwaves not heating, sparking or dead? We repair magnetrons, transformers and boards.",
    metaTitle: "Microwave Oven Repairs in Gauteng",
    metaDescription:
      "Microwave oven repairs in Gauteng. Not heating, sparking, dead display or noisy? Magnetron, transformer, diode and control board repairs. Call Now or send a WhatsApp job card.",
    keywords: ["microwave repairs Gauteng", "microwave not heating", "magnetron replacement", "Samsung microwave repair", "microwave repair Johannesburg"],
    image: "/profix-electronics-microwave-transformer-magnetron-repair.jpg",
    imageAlt: "Microwave transformer and magnetron being repaired on a workbench",
    headline: "Microwave oven repairs by real electronics technicians",
    intro:
      "A microwave that runs but does not heat is usually repairable. We test with proper instruments and replace the part at fault, so you do not pay for a new microwave you do not need.",
    answer:
      "Profix repairs microwave ovens across Gauteng, including magnetrons, high voltage transformers, diodes, capacitors, door switches and digital control panels.",
    appliance: "Microwave",
    includes: [
      "Magnetron testing and replacement",
      "High voltage transformer and diode repairs",
      "Door switch and latch repairs",
      "Digital control panel faults",
      "Turntable motor and fan repairs",
      "Safety checks after every repair",
    ],
    signs: ["Runs but does not heat", "Sparking or burning smell", "Display dead or blank", "Loud humming or buzzing", "Door will not close properly"],
    process: [
      { src: "/profix-electronics-microwave-internal-components-testing.jpg", alt: "Microwave internal components being tested", caption: "Testing the parts" },
      { src: "/profix-electronics-microwave-disassembly-workbench.jpg", alt: "Microwave stripped down on a workbench", caption: "Stripped for repair" },
      { src: "/profix-electronics-samsung-microwave-digital-panel.jpg", alt: "Samsung microwave with a digital control panel", caption: "Digital panel faults" },
    ],
    faqs: [
      { q: "Is it worth repairing a microwave?", a: "For many faults yes. We diagnose first and tell you honestly whether a repair costs less than a replacement." },
      { q: "Is microwave repair safe?", a: "Microwaves hold dangerous voltage even when switched off. Our technicians discharge and test them safely. Please never open one yourself." },
    ],
  },
  {
    slug: "air-conditioner-installation-and-repairs",
    name: "Air Conditioner Installation and Repairs",
    short: "Aircon installation, servicing, regassing and repairs for homes and offices.",
    metaTitle: "Air Conditioner Installation and Repairs in Gauteng",
    metaDescription:
      "Air conditioner installation, servicing and repairs in Gauteng. Wall mounted splits, regassing, leaks and electrical faults. Call Now or send a WhatsApp job card for a free quote.",
    keywords: ["aircon installation Gauteng", "air conditioner repairs Johannesburg", "aircon regas", "split unit installation", "aircon service"],
    image: "/profix-appliances-air-conditioner-wall-unit-installation.jpg",
    imageAlt: "Wall mounted air conditioner unit being installed",
    headline: "Air conditioner installation, service and repairs",
    intro:
      "A well installed and serviced air conditioner cools better and costs less to run. We install wall mounted split units, service them and repair faults across Gauteng.",
    answer:
      "Profix installs, services and repairs wall mounted air conditioners across Gauteng, including regassing, leak repairs, electrical faults and outdoor unit installation.",
    appliance: "Air conditioner",
    includes: [
      "Wall mounted split unit installation",
      "Aircon servicing and cleaning",
      "Regassing and leak repairs",
      "Electrical and control faults",
      "Outdoor unit stands and piping",
      "Fault finding with gauges",
    ],
    signs: ["Not cooling or heating", "Water leaking inside", "Ice on the unit", "Strange noises or smells", "Needs a new installation"],
    process: [
      { src: "/profix-appliances-hvac-ac-installation-finished.jpg", alt: "Outdoor air conditioner unit installed on a stand", caption: "Finished installation" },
      { src: "/profix-appliances-hvac-aircon-manifold-servicing.jpg", alt: "Air conditioner serviced with gauges connected", caption: "Gas and pressure checks" },
      { src: "/profix-appliances-wall-mounted-aircon-unit.jpg", alt: "Wall mounted air conditioner unit on a house wall", caption: "Wall mounted unit" },
    ],
    faqs: [
      { q: "Do you install air conditioners?", a: "Yes. We install wall mounted split units, including the outdoor stand, piping and electrical connections." },
      { q: "How often should an aircon be serviced?", a: "Once a year is a good rule, and more often in dusty areas. A service keeps it cooling and helps prevent leaks." },
    ],
  },
  {
    slug: "tv-and-electronics-repairs",
    name: "TV and Electronics Repairs",
    short: "Flat screen TV, soundbar and home electronics repairs by trained technicians.",
    metaTitle: "TV and Electronics Repairs in Gauteng",
    metaDescription:
      "TV and electronics repairs in Gauteng. Flat screen TVs, motherboards, power supplies and backlights tested and repaired. Call Now or send a WhatsApp job card for a quote.",
    keywords: ["TV repairs Gauteng", "flat screen TV repair Johannesburg", "TV motherboard repair", "electronics repairs", "LED TV repair"],
    image: "/profix-electronics-flat-screen-tv-disassembly.jpg",
    imageAlt: "Flat screen TV opened up for repair",
    headline: "TV and electronics repairs you can trust",
    intro:
      "A TV that will not switch on or has lines on the screen does not always need replacing. Our electronics technicians test the board, power supply and backlight, and repair what is faulty.",
    answer:
      "Profix repairs flat screen TVs and home electronics across Gauteng, including motherboards, power supplies and backlight faults, with a clear quote before work starts.",
    appliance: "TV or electronics",
    includes: [
      "No power and standby light faults",
      "Motherboard and power supply repairs",
      "Backlight and screen faults",
      "Sound and HDMI problems",
      "Soundbar and home theatre repairs",
      "Component level circuit board work",
    ],
    signs: ["TV will not switch on", "Lines or dark patches on screen", "Sound but no picture", "Keeps restarting", "HDMI or input not working"],
    process: [
      { src: "/profix-electronics-tv-screen-repair-team.jpg", alt: "Technicians repairing a flat screen TV on the floor", caption: "TV repair in progress" },
      { src: "/profix-electronics-tv-motherboard-diagnostics.jpg", alt: "TV motherboard being diagnosed", caption: "Motherboard diagnostics" },
      { src: "/profix-electronics-multimeter-circuit-testing.jpg", alt: "Multimeter testing a circuit board", caption: "Circuit testing" },
    ],
    faqs: [
      { q: "Can you repair a cracked TV screen?", a: "A cracked panel is usually not economical to replace. We tell you honestly. Faults on the boards and power supply are usually repairable." },
      { q: "How do I get a quote?", a: "Send a job card with the TV brand, model and a short description of what it is doing. A photo of the screen helps." },
    ],
  },
  {
    slug: "circuit-board-and-appliance-electrical-repairs",
    name: "Circuit Board and Appliance Electrical Repairs",
    short: "Control boards, wiring harnesses and electrical faults repaired with test instruments.",
    metaTitle: "Appliance Circuit Board and Electrical Repairs in Gauteng",
    metaDescription:
      "Appliance circuit board and electrical repairs in Gauteng. Control boards, wiring harnesses, selector switches and sensors tested and repaired. Call Now or send a WhatsApp job card.",
    keywords: ["appliance circuit board repair Gauteng", "control board repair", "wiring harness repair", "appliance electrical faults", "multimeter testing"],
    image: "/profix-appliances-oven-control-board-repair.jpg",
    imageAlt: "Oven control board exposed for repair",
    headline: "Circuit board and appliance electrical repairs",
    intro:
      "Many appliance faults are electrical, not mechanical. We test control boards, wiring and switches with proper instruments and repair the fault, so you do not replace the whole appliance.",
    answer:
      "Profix repairs appliance control boards, wiring harnesses, selector switches, sensors and power faults across Gauteng, testing with a multimeter before replacing any part.",
    appliance: "Something else",
    includes: [
      "Control and display board repairs",
      "Wiring harness and connector repairs",
      "Selector switch and relay replacement",
      "Sensor and thermostat testing",
      "Burnt and shorted component repairs",
      "Multimeter and instrument testing",
    ],
    signs: ["Appliance dead with no lights", "Trips the power", "Burning smell", "Display shows odd symbols", "Works then stops randomly"],
    process: [
      { src: "/profix-appliances-oven-selector-switch-wiring.jpg", alt: "Oven selector switch and wiring", caption: "Selector switch and wiring" },
      { src: "/profix-electronics-microwave-multimeter-voltage-check.jpg", alt: "Technician checking voltage with a multimeter inside a microwave", caption: "Voltage checks" },
      { src: "/profix-electronics-multimeter-circuit-testing.jpg", alt: "Multimeter testing a circuit board", caption: "Board testing" },
    ],
    faqs: [
      { q: "Can a faulty control board be repaired?", a: "Often yes. We test the board and replace the failed component, which is usually cheaper than a new board." },
      { q: "What appliances do you do electrical repairs on?", a: "Washing machines, ovens, fridges, microwaves, air conditioners and TVs. If it plugs in, we can usually test it." },
    ],
  },
  {
    slug: "gate-motor-and-gate-repairs",
    name: "Gate Motor and Gate Repairs",
    short: "Sliding and swing gate repairs, tracks, welding and automated gate motors.",
    metaTitle: "Gate Motor and Gate Repairs in Gauteng",
    metaDescription:
      "Gate motor and gate repairs in Gauteng. Sliding gate tracks, welding, palisade gates and automated gate motors with solar options. Call Now or send a WhatsApp job card for a quote.",
    keywords: ["gate motor repairs Gauteng", "sliding gate repairs Johannesburg", "gate welding", "automated gate installation", "solar gate motor"],
    image: "/profix-gates-automated-gate-motor-solar-setup.jpg",
    imageAlt: "Automated gate with a solar powered gate motor",
    headline: "Gate motor and gate repairs",
    intro:
      "When the gate will not open, you are locked in or out. We repair sliding and swing gates, service tracks and rollers, weld damaged frames and set up automated gate motors.",
    answer:
      "Profix repairs and services sliding and swing gates across Gauteng, including tracks, welding and automated gate motors with solar options.",
    appliance: "Gate or gate motor",
    includes: [
      "Sliding gate track and roller repairs",
      "Welding and gate frame repairs",
      "Gate motor installation and repairs",
      "Solar powered gate motor setups",
      "Palisade and decorative gates",
      "Remote and keypad faults",
    ],
    signs: ["Gate sticks or jumps off the track", "Motor hums but gate does not move", "Remote not working", "Damaged or bent frame", "Needs automating"],
    process: [
      { src: "/profix-gates-technician-welding-palisade-gate.jpg", alt: "Technician welding a palisade gate", caption: "Welding repairs" },
      { src: "/profix-gates-angle-grinder-track-servicing.jpg", alt: "Technician using an angle grinder on a sliding gate track", caption: "Track servicing" },
      { src: "/profix-gates-modern-wooden-slat-sliding-gate.jpg", alt: "Modern wooden slat sliding gate", caption: "Finished sliding gate" },
    ],
    faqs: [
      { q: "Can you automate my existing gate?", a: "In most cases yes. We check the gate and track, then quote for the motor and setup." },
      { q: "Do you offer solar gate motors?", a: "Yes. Solar powered gate motors keep working during load shedding. Tell us about your gate on the job card." },
    ],
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}
