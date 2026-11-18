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
  /** Pain led opening line, shown on the service page. */
  pain: string
  /** Honest repair or replace guidance. */
  worth: string
  /** Safe things to do while waiting for the technician. */
  wait: string[]
  /** Featured on the home page as an urgent, business critical repair. */
  urgent?: boolean
  /** Hide the appliance brand strip on this page. */
  showBrands?: boolean
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
    pain:
      "Piles of laundry. A kitchen floor under water. A dishwasher full of plates nobody can use. When a washing machine quits mid cycle, it takes the whole week down with it.",
    worth:
      "Most washing machine and dishwasher faults are repairable: pumps, belts, bearings, door locks, seals and boards. A repair usually makes sense when the drum, motor and cabinet are sound. If the drum has rusted through or the repair would cost close to a new machine, we will tell you.",
    wait: [
      "Switch it off at the wall, and close the water tap if it is leaking.",
      "Do not force the door open on a full drum. Let it drain first.",
      "Take a photo of any error code and the model sticker, usually inside the door or on the back.",
    ],
    includes: [
      "Leaks, blocked pumps and drain faults",
      "Drum, bearing and spider arm repairs",
      "Motor and belt replacements",
      "Control board and error code faults",
      "Door seals, locks and hinges",
      "Dishwasher pumps, spray arms and heaters",
    ],
    signs: ["Water on the floor", "Machine will not spin or drain", "Loud banging or grinding", "Error codes on the display", "Dishes still dirty after a cycle", "Clothes come out soaking wet", "Burning smell during a cycle"],
    process: [
      { src: "/profix-appliances-top-load-washing-machine-repair-bench.jpg", alt: "Top loader washing machine opened for repair", caption: "Diagnosing the fault" },
      { src: "/profix-appliances-washing-machine-motor-repair.jpg", alt: "Washing machine motor being repaired", caption: "Motor repair" },
      { src: "/profix-appliances-front-load-washer-dryer-servicing.jpg", alt: "Front load washer being serviced", caption: "Front loader service" },
    ],
    faqs: [
      { q: "Do you repair washing machines at my home?", a: "Yes. In most cases we repair your washing machine or dishwasher at your home. If a part needs to go to the workshop, we will tell you before we take it." },
      { q: "Which brands do you repair?", a: "We repair brands including Defy, LG, Whirlpool, Indesit, AEG and Hisense. Put the brand and model on the job card and we will confirm." },
      { q: "Is it worth repairing an old washing machine?", a: "Often yes. We give you an honest opinion after the diagnosis, including when a repair does not make sense." },
      { q: "Why is my washing machine leaking?", a: "Common causes are a worn door seal, a loose or split hose, a failed pump or a blocked drain filter. We find the exact source before we quote." },
      { q: "Why will my washing machine not spin?", a: "A worn belt, a failed motor, a faulty lid or door switch, or a control fault can all stop the spin. We test each one to find the part at fault." },
      { q: "Do you repair dishwashers too?", a: "Yes. We repair dishwasher pumps, spray arms, heaters, door seals and control faults." },
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
    pain:
      "Warm milk. Soft ice cream. A freezer full of meat you bought in bulk to save money, slowly thawing while you work out what to do. A dead fridge costs you more with every hour.",
    worth:
      "Gas leaks, fans, thermostats, door seals and defrost faults are usually worth repairing. If a sealed system on a very old fridge is badly damaged, replacing it can make more sense. We give you the honest picture after the diagnosis.",
    wait: [
      "Keep the doors shut. A closed freezer stays cold far longer than one you keep opening.",
      "Move milk, meat and other perishables into a cooler box with ice if you can.",
      "Do not chip ice with a knife or screwdriver. You can puncture the gas line. Switch it off and let it thaw.",
    ],
    includes: [
      "Fridge and freezer regassing",
      "Compressor testing and replacement",
      "Thermostat and defrost system repairs",
      "Fan motor and condenser repairs",
      "Door seal and hinge replacement",
      "Side by side and double door models",
      "Ice maker and water dispenser faults",
    ],
    signs: ["Not cooling or not freezing", "Ice build up inside", "Water leaking onto the floor", "Fridge running non stop", "Strange humming or clicking", "Food spoiling early", "Warm fridge but frozen freezer"],
    process: [
      { src: "/profix-appliances-fridge-freezer-gas-recharge-repair.jpg", alt: "Fridge freezer being regassed with gauges connected", caption: "Regassing" },
      { src: "/profix-appliances-refrigerator-compressor-repair.jpg", alt: "Fridge compressor repair with gauges on the back of the unit", caption: "Compressor repair" },
      { src: "/profix-appliances-refrigerator-gas-manifold-diagnostics.jpg", alt: "Gas manifold gauges connected during fridge diagnostics", caption: "Gas diagnostics" },
    ],
    faqs: [
      { q: "Why is my fridge not cooling?", a: "Common causes are a gas leak, a faulty compressor, a failed fan or a thermostat problem. We test each one before quoting." },
      { q: "Can you regas a fridge at my home?", a: "Yes. We regas fridges and freezers on site where the unit is accessible, after fixing the leak." },
      { q: "How fast should I act on a warm fridge?", a: "Quickly. Move perishables to a cool box and call us. A fast repair saves food and often saves the compressor." },
      { q: "Why is my freezer icing up?", a: "Heavy ice is often a door seal that does not close properly, or a fault in the defrost system such as the heater, timer or sensor. We find which one." },
      { q: "Why is my fridge making a loud noise?", a: "A noisy fan, a struggling compressor or a loose part can all be the cause. We find the source so a small fault does not turn into a big one." },
      { q: "Can you repair my commercial fridge or cold room?", a: "Yes. See our cold room and commercial fridge repairs page for businesses." },
    ],
  },
  {
    slug: "cold-room-and-commercial-fridge-repairs",
    name: "Cold Room and Commercial Fridge Repairs",
    short: "Walk-in cold rooms, freezer rooms and commercial fridges repaired on site. Protect your stock.",
    metaTitle: "Cold Room and Commercial Fridge Repairs in Gauteng",
    metaDescription:
      "Cold room and commercial fridge repairs in Gauteng. Compressors, evaporators, gas leaks, controllers and door seals repaired on site. Call Now to protect your stock.",
    keywords: ["cold room repairs Gauteng", "cold room repairs Johannesburg", "commercial fridge repairs", "walk in freezer repairs", "cold room not cooling", "butchery cold room repair"],
    image: "/profix-cold-room-repairs-evaporator-and-racking.jpg",
    imageAlt: "Walk in cold room with a four fan evaporator unit and racking",
    headline: "Cold room and commercial fridge repairs that save your stock",
    intro:
      "When a cold room warms up, a week of stock and a day of takings are on the line. Profix repairs walk in cold rooms, freezer rooms and commercial fridges across Gauteng, on site, with a clear quote before work starts.",
    answer:
      "Profix repairs walk in cold rooms, freezer rooms, glass door display fridges, upright and under counter fridges and chest freezers across Gauteng, including compressors, evaporators, fans, gas leaks, controllers and door seals.",
    appliance: "Cold room or commercial fridge",
    urgent: true,
    showBrands: false,
    pain:
      "You open up and the cold room is warm. The compressor is silent. In your head you are already adding up the meat, the dairy, the produce and the supplier invoice that is still due on Friday. Every hour counts.",
    worth:
      "Compressors, fans, controllers, defrost faults, gas leaks and door seals are usually worth repairing. A cold room cannot be moved, so repair on site is usually the right answer. If the system is old and the repair makes no sense, we tell you honestly.",
    wait: [
      "Keep the cold room door closed. Every opening lets the cold out.",
      "Check the breaker and isolator. If it keeps tripping, do not keep resetting it.",
      "Move your highest risk stock to any working fridge or freezer you have.",
      "If food has been warm for hours, do not gamble with your customers' health. When in doubt, throw it out.",
    ],
    includes: [
      "Compressor and condensing unit repairs",
      "Evaporator coil and fan motor repairs",
      "Gas leak finding and regassing",
      "Temperature controller and sensor faults",
      "Defrost heater, timer and drain faults",
      "Door seals, hinges and heaters",
      "Glass door display fridge repairs",
      "Under counter fridges and chest freezers",
    ],
    signs: ["Cold room will not reach temperature", "Ice on the evaporator or ceiling", "Compressor will not start or keeps stopping", "Water pooling on the floor", "Evaporator fans not turning", "Display fridge warm or sweating", "Controller alarm or error code"],
    process: [
      { src: "/profix-cold-room-repairs-walk-in-evaporator-fans.jpg", alt: "Walk in cold room with an evaporator unit on the ceiling", caption: "Walk in cold room" },
      { src: "/profix-appliances-glass-door-fridge-repair-on-site.jpg", alt: "Technician repairing a glass door fridge on site", caption: "Glass door fridge" },
      { src: "/profix-appliances-refrigerator-compressor-repair.jpg", alt: "Refrigeration compressor being repaired", caption: "Compressor repair" },
    ],
    faqs: [
      { q: "Do you repair both cold rooms and commercial fridges?", a: "Yes. We repair walk in cold rooms and freezer rooms, glass door display fridges, upright and under counter fridges, prep fridges and chest freezers." },
      { q: "My cold room is not cooling. What should I do first?", a: "Keep the door closed, check that the breaker and isolator have not tripped and look for ice on the evaporator. Do not keep resetting a tripping breaker. Then call us with what you see." },
      { q: "Can you come out today?", a: "Call us with your area and what is happening, and we will tell you honestly how soon we can get to you." },
      { q: "Do you repair on site?", a: "Yes. A cold room cannot be moved, so we diagnose and repair on site. For smaller fridges, if a part has to go to the workshop, we tell you before we take it." },
      { q: "Why is there ice on my cold room evaporator?", a: "Heavy ice is often a defrost fault, a door that does not seal or a drain problem. We find which one so the ice does not come straight back." },
      { q: "Is it worth repairing, or should I replace it?", a: "We give you an honest opinion after the diagnosis, including when a repair does not make sense." },
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
    pain:
      "Dinner for the family, guests on the way, a roast half done, and the oven goes cold. Or the hob plate you use every single day just stops working.",
    worth:
      "Heating elements, thermostats, selector switches and hob plates are common wear parts, so repair usually makes sense. We only suggest replacing an oven when the repair would cost more than the oven is worth.",
    wait: [
      "Switch the oven or hob off at the wall or isolator.",
      "If you smell gas, turn off the gas supply, open windows, avoid flames and switches, and call your gas supplier or emergency services. Do not wait for a repair.",
      "Note which plate or element is faulty, and the model number on the plate inside the door frame or on the back.",
    ],
    includes: [
      "Oven heating element replacement",
      "Thermostat and selector switch repairs",
      "Oven control board repairs",
      "Hob plate and ceramic hob repairs",
      "Gas burner servicing and ignition faults",
      "Built in oven and hob installation",
    ],
    signs: ["Oven not heating or heating unevenly", "Hob plate not working", "Gas burner will not light", "Tripping the power", "Display or timer not working", "Smell of burning or gas", "Door will not close or seal"],
    process: [
      { src: "/profix-appliances-oven-control-board-repair.jpg", alt: "Oven control board being repaired", caption: "Control board repair" },
      { src: "/profix-appliances-oven-heating-element-repair.jpg", alt: "Oven heating element being replaced", caption: "New heating element" },
      { src: "/profix-appliances-gas-stove-burner-servicing.jpg", alt: "Gas stove burner servicing by a technician", caption: "Gas burner service" },
    ],
    faqs: [
      { q: "Do you repair gas stoves?", a: "Yes. We service gas burners and repair ignition and control faults. Gas work is done with safety checks." },
      { q: "Can you install a built in oven and hob?", a: "Yes. We install built in ovens and hobs and check that everything works before we leave." },
      { q: "Why is my oven not heating?", a: "It is often a failed heating element, thermostat or selector switch. We test the parts and replace the one at fault." },
      { q: "Why does my oven trip the power?", a: "A failed heating element or a damaged wire can leak current and trip the breaker. Please do not keep resetting it. Call us so we can test it safely." },
      { q: "Why is only one hob plate not working?", a: "The plate itself, its switch or its wiring has failed. We test each one and replace only what is faulty." },
      { q: "Do you repair ceramic hobs?", a: "Yes. We repair electric and ceramic hobs, including plates, switches and internal wiring." },
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
    pain:
      "The workhorse of the kitchen goes quiet, or starts to bang and spark. Reheating dinner, defrosting, quick lunches, all suddenly harder.",
    worth:
      "Many microwave faults come down to a small part such as a door switch, diode or fuse. Some, like a failed magnetron on a budget model, can cost close to a new unit. We test first and tell you honestly.",
    wait: [
      "Stop using it if it sparks, smells burnt or arcs.",
      "Unplug it. Never open the casing yourself. A microwave can hold a dangerous charge even when switched off.",
      "Note the brand and model on the back or inside the door.",
    ],
    includes: [
      "Magnetron testing and replacement",
      "High voltage transformer and diode repairs",
      "Door switch and latch repairs",
      "Digital control panel faults",
      "Turntable motor and fan repairs",
      "Safety checks after every repair",
    ],
    signs: ["Runs but does not heat", "Sparking or burning smell", "Display dead or blank", "Loud humming or buzzing", "Door will not close properly", "Food heats unevenly", "Turntable does not turn"],
    process: [
      { src: "/profix-electronics-microwave-internal-components-testing.jpg", alt: "Microwave internal components being tested", caption: "Testing the parts" },
      { src: "/profix-electronics-microwave-disassembly-workbench.jpg", alt: "Microwave stripped down on a workbench", caption: "Stripped for repair" },
      { src: "/profix-electronics-samsung-microwave-digital-panel.jpg", alt: "Samsung microwave with a digital control panel", caption: "Digital panel faults" },
    ],
    faqs: [
      { q: "Is it worth repairing a microwave?", a: "For many faults yes. We diagnose first and tell you honestly whether a repair costs less than a replacement." },
      { q: "Is microwave repair safe?", a: "Microwaves hold dangerous voltage even when switched off. Our technicians discharge and test them safely. Please never open one yourself." },
      { q: "Why is my microwave sparking?", a: "Sparking can come from a damaged waveguide cover, food residue or a failing component. Stop using it and have it checked. Carrying on can cause more damage." },
      { q: "Why does my microwave run but not heat?", a: "A failed magnetron, diode, capacitor or transformer is the usual cause. We test each one with instruments to find the part at fault." },
      { q: "Do you repair built in microwaves?", a: "Yes, where the unit can be reached safely. Tell us the brand and model on the job card." },
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
    pain:
      "A Gauteng summer afternoon. A stuffy bedroom. A small office with a dead unit and staff wilting at their desks. Or a unit that drips water down a freshly painted wall.",
    worth:
      "Low gas, blocked drains, dirty filters and failed capacitors or fan motors are routine repairs. If an old unit has a failed compressor, we will tell you honestly whether a new installation makes more sense, and quote for it.",
    wait: [
      "Switch the unit off if it is leaking, freezing up or making grinding noises.",
      "Clean or rinse the filters if you can. Blocked filters cause many faults.",
      "Take a photo of the labels on the indoor and outdoor units.",
    ],
    includes: [
      "Wall mounted split unit installation",
      "Aircon servicing and cleaning",
      "Regassing and leak repairs",
      "Electrical and control faults",
      "Outdoor unit stands and piping",
      "Fault finding with gauges",
    ],
    signs: ["Not cooling or heating", "Water leaking inside", "Ice on the unit", "Strange noises or smells", "Needs a new installation", "Blowing warm air", "Trips the breaker when it starts"],
    process: [
      { src: "/profix-appliances-hvac-ac-installation-finished.jpg", alt: "Outdoor air conditioner unit installed on a stand", caption: "Finished installation" },
      { src: "/profix-appliances-hvac-aircon-manifold-servicing.jpg", alt: "Air conditioner serviced with gauges connected", caption: "Gas and pressure checks" },
      { src: "/profix-appliances-wall-mounted-aircon-unit.jpg", alt: "Wall mounted air conditioner unit on a house wall", caption: "Wall mounted unit" },
    ],
    faqs: [
      { q: "Do you install air conditioners?", a: "Yes. We install wall mounted split units, including the outdoor stand, piping and electrical connections." },
      { q: "How often should an aircon be serviced?", a: "Once a year is a good rule, and more often in dusty areas. A service keeps it cooling and helps prevent leaks." },
      { q: "Why is my aircon leaking water inside?", a: "A blocked or badly sloped drain line is the usual cause. Frozen coils from low gas or dirty filters can also make it drip. We find the cause before we quote." },
      { q: "Why is my aircon blowing warm air?", a: "Low gas, a failed compressor or capacitor, a dirty coil or a control fault can all cause it. We check pressures and electrical parts to find which." },
      { q: "Do you quote for a new installation?", a: "Yes. Send a photo of the wall and the spot for the outdoor unit on a job card and we will quote." },
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
    image: "/profix-tv-repairs-hisense-power-supply-closeup.jpg",
    imageAlt: "Close up of a Hisense TV power supply board being repaired",
    headline: "TV and electronics repairs you can trust",
    intro:
      "A TV that will not switch on or has lines on the screen does not always need replacing. Our electronics technicians test the board, power supply and backlight, and repair what is faulty.",
    answer:
      "Profix repairs flat screen TVs and home electronics across Gauteng, including motherboards, power supplies and backlight faults, with a clear quote before work starts.",
    appliance: "TV or electronics",
    pain:
      "The big match is about to start. The kids' favourite show. And the screen goes black with the sound still playing, or the TV clicks, flashes its standby light and never comes on.",
    worth:
      "Power supply, board and backlight faults are often repairable, and a repair can cost less than a new TV. A cracked panel is usually the exception. We tell you before you spend anything.",
    wait: [
      "Unplug the TV for a few minutes and try again. It can clear some faults.",
      "Do not open the back. Power supplies can hold a dangerous charge.",
      "Take a photo of the screen fault, the model sticker on the back and any blinking pattern on the standby light.",
    ],
    includes: [
      "No power and standby light faults",
      "Motherboard and power supply repairs",
      "Backlight and screen faults",
      "Sound and HDMI problems",
      "Soundbar and home theatre repairs",
      "Component level circuit board work",
    ],
    signs: ["TV will not switch on", "Lines or dark patches on screen", "Sound but no picture", "Keeps restarting", "HDMI or input not working", "Standby light blinking", "Dim picture or shadowy screen"],
    process: [
      { src: "/profix-tv-repairs-main-board-hdmi-processor.jpg", alt: "TV main board with HDMI ports and processor", caption: "Main board diagnostics" },
      { src: "/profix-tv-repairs-led-backlight-strips.jpg", alt: "TV LED backlight strips lit up during testing", caption: "Backlight testing" },
      { src: "/profix-tv-repairs-power-supply-board-diagnosis.jpg", alt: "TV power supply board opened for diagnosis", caption: "Power supply repair" },
    ],
    faqs: [
      { q: "Can you repair a cracked TV screen?", a: "A cracked panel is usually not economical to replace. We tell you honestly. Faults on the boards and power supply are usually repairable." },
      { q: "How do I get a quote?", a: "Send a job card with the TV brand, model and a short description of what it is doing. A photo of the screen helps." },
      { q: "Why does my TV have sound but no picture?", a: "This is commonly a backlight or power supply fault, and both are usually repairable. We test to confirm before we quote." },
      { q: "Why is my TV standby light blinking?", a: "The blink pattern is often a clue to a power supply, board or backlight fault. Tell us the brand and the pattern on the job card and we can start narrowing it down." },
      { q: "Do you repair TVs at my home?", a: "Some faults can be diagnosed at home. Board level work can need the workshop. We tell you before we take anything, and you get a quote first." },
      { q: "Do you repair soundbars and home theatre systems?", a: "Yes. We repair soundbars, home theatre systems and other home electronics." },
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
    pain:
      "The appliance looks perfectly fine, but it is dead. No lights, no response, or it works and then randomly stops. Someone has told you the board is gone and it is cheaper to buy a new one.",
    worth:
      "Many board faults come down to a single failed component such as a capacitor, relay or resistor. Repairing that component is often cheaper than a new board or a new appliance. If a board is too badly damaged, we say so.",
    wait: [
      "Unplug the appliance.",
      "Do not keep switching it on and off. It can make a burnt component worse.",
      "Take photos of any burn marks and the model number.",
    ],
    includes: [
      "Control and display board repairs",
      "Wiring harness and connector repairs",
      "Selector switch and relay replacement",
      "Sensor and thermostat testing",
      "Burnt and shorted component repairs",
      "Multimeter and instrument testing",
    ],
    signs: ["Appliance dead with no lights", "Trips the power", "Burning smell", "Display shows odd symbols", "Works then stops randomly", "Smell of burning plastic", "Buttons or touch panel unresponsive"],
    process: [
      { src: "/profix-appliances-oven-selector-switch-wiring.jpg", alt: "Oven selector switch and wiring", caption: "Selector switch and wiring" },
      { src: "/profix-electronics-microwave-multimeter-voltage-check.jpg", alt: "Technician checking voltage with a multimeter inside a microwave", caption: "Voltage checks" },
      { src: "/profix-electronics-multimeter-circuit-testing.jpg", alt: "Multimeter testing a circuit board", caption: "Board testing" },
    ],
    faqs: [
      { q: "Can a faulty control board be repaired?", a: "Often yes. We test the board and replace the failed component, which is usually cheaper than a new board." },
      { q: "What appliances do you do electrical repairs on?", a: "Washing machines, ovens, fridges, microwaves, air conditioners and TVs. If it plugs in, we can usually test it." },
      { q: "How do you test a control board?", a: "We use a multimeter and other instruments to test components and tracks before we replace anything, so we fix the real fault." },
      { q: "Do you repair boards at my home?", a: "Some faults can be tested on site. Board level repair can need the workshop. We tell you before we take anything." },
      { q: "Why does my appliance keep tripping the breaker?", a: "A failed element, a damaged wire or a faulty component can leak current. Please do not keep resetting it. Call us so we can test it safely." },
    ],
  },
  {
    slug: "generator-repairs",
    name: "Generator Repairs",
    short: "Diesel and petrol generators that will not start, cut out or give no power. Repaired on site.",
    metaTitle: "Generator Repairs in Johannesburg and Gauteng",
    metaDescription:
      "Generator repairs in Johannesburg and Gauteng. Diesel and petrol generators that will not start, cut out or give no power. Call Now or send a WhatsApp job card.",
    keywords: ["generator repairs Johannesburg", "generator repairs Gauteng", "diesel generator repairs", "petrol generator repairs", "generator not starting", "generator repair near me"],
    image: "/profix-generator-repairs-diesel-engine-bay-alternator-starter.jpg",
    imageAlt: "Inside a diesel generator engine bay showing the engine, starter motor and alternator",
    headline: "Generator repairs when you cannot afford the dark",
    intro:
      "When the power is out and the generator will not start, every minute is felt. Profix repairs diesel and petrol generators across Gauteng, from portable petrol units to canopy diesel sets, with a clear quote before work starts.",
    answer:
      "Profix repairs diesel and petrol generators across Gauteng, including starting faults, fuel system problems, overheating, alternator and output faults, control panels and engine overhauls.",
    appliance: "Generator",
    urgent: true,
    showBrands: false,
    pain:
      "The lights go out. You walk to the generator and pull the cord. Nothing. The freezer starts to sweat, the card machine is dead, and the one thing that was supposed to protect you has let you down.",
    worth:
      "Many generators that seem dead are not. Flat batteries, stale fuel, blocked filters, failed AVRs and missed services are common and fixable. We tell you honestly whether yours can be saved before you spend on a new one.",
    wait: [
      "Stop cranking after a few tries. Keep going and you flatten the battery.",
      "Never run a generator indoors or in a garage. The exhaust carries carbon monoxide.",
      "Let a hot generator cool before refuelling.",
      "Send a photo of the nameplate and any warning lights on WhatsApp.",
    ],
    includes: [
      "Starting faults, batteries and starter motors",
      "Fuel system, filters and injectors",
      "Overheating, leaks and head gasket faults",
      "Alternator and AVR faults",
      "Control panel and wiring faults",
      "Black smoke and carbon build up",
      "Portable petrol generators",
      "Canopy diesel generators",
    ],
    signs: ["Will not start or just clicks", "Starts then cuts out", "Runs but gives no power", "Black or white smoke", "Overheating or leaking", "Surging or rough running"],
    process: [
      { src: "/profix-generator-repairs-technicians-servicing-diesel-canopy-generator.jpg", alt: "Technicians on site working on a canopy diesel generator", caption: "Canopy diesel generator" },
      { src: "/profix-generator-repairs-technician-servicing-portable-petrol-generator.jpg", alt: "Technician servicing a portable petrol generator", caption: "Portable petrol generator" },
      { src: "/profix-generator-repairs-diesel-engine-cylinder-carbon-buildup.jpg", alt: "Carbon build up inside a diesel engine", caption: "Engine diagnosis" },
    ],
    faqs: [
      { q: "Do you repair both diesel and petrol generators?", a: "Yes. We repair portable petrol generators and larger canopy diesel generators. Send the brand and a photo of the nameplate on WhatsApp and we will confirm." },
      { q: "My generator will not start. What should I check first?", a: "Check the fuel level, the battery connections, the emergency stop button and the breaker. If it still will not start, stop cranking so you do not flatten the battery, and call us." },
      { q: "Why will my generator not start after standing for months?", a: "Stale fuel and a flat battery are two of the most common reasons. Blocked filters and a gummed up fuel system can also be the cause." },
      { q: "Can you repair it at my home or business?", a: "In most cases we diagnose and repair on site. If a part has to go to the workshop, we tell you before we take it." },
      { q: "Is it worth repairing my generator or should I buy a new one?", a: "We give you an honest opinion after the diagnosis, including when a repair does not make sense." },
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
    pain:
      "Locked out in the rain with the gate stuck halfway. Locked in and late for work. Or worst of all, a gate that will not close at night and leaves your home open.",
    worth:
      "Tracks, rollers, remotes, keypads and motors are often repairable. On a very old or badly damaged gate, replacing the motor can be the better option. We tell you after we have seen the gate.",
    wait: [
      "If the gate is stuck open, use the manual release only if you know how, then secure the property as best you can.",
      "Do not force a gate that jams. You can damage the motor or bend the frame.",
      "Take a photo of the motor label and the gate track.",
    ],
    includes: [
      "Sliding gate track and roller repairs",
      "Welding and gate frame repairs",
      "Gate motor installation and repairs",
      "Solar powered gate motor setups",
      "Palisade and decorative gates",
      "Remote and keypad faults",
    ],
    signs: ["Gate sticks or jumps off the track", "Motor hums but gate does not move", "Remote not working", "Damaged or bent frame", "Needs automating", "Gate will not close at night", "Motor runs but gate barely moves"],
    process: [
      { src: "/profix-gates-technician-welding-palisade-gate.jpg", alt: "Technician welding a palisade gate", caption: "Welding repairs" },
      { src: "/profix-gates-angle-grinder-track-servicing.jpg", alt: "Technician using an angle grinder on a sliding gate track", caption: "Track servicing" },
      { src: "/profix-gates-modern-wooden-slat-sliding-gate.jpg", alt: "Modern wooden slat sliding gate", caption: "Finished sliding gate" },
    ],
    faqs: [
      { q: "Can you automate my existing gate?", a: "In most cases yes. We check the gate and track, then quote for the motor and setup." },
      { q: "Do you offer solar gate motors?", a: "Yes. Solar powered gate motors keep working during load shedding. Tell us about your gate on the job card." },
      { q: "Why does my gate motor hum but not move?", a: "A jammed gate, a damaged gear or rack, a failed capacitor or a motor fault can cause this. We check the gate first, then the motor." },
      { q: "Why is my gate remote not working?", a: "Flat batteries are the easy one. Otherwise it could be the remote itself, the receiver or the control board." },
      { q: "Do you do welding?", a: "Yes. We weld damaged gate frames, palisade bars and brackets." },
    ],
  },
]

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug)
}
