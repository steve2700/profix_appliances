// Google Ads landing pages. One entry = one page at /lp/<slug>.
// Everything you read on those pages lives in this file, so copy changes are easy.
//
// Before you spend ad money, check the items marked CONFIRM against what Profix
// really offers. Do not add claims you cannot back up (24/7, same day, years of
// experience, warranties, free call-outs) unless they are true.

// Ad landing pages are kept out of Google search results so they do not compete
// with the normal service pages. Ads still work. Set to false if you want these
// pages to rank organically as well.
export const LP_NOINDEX = true

export interface LpForm {
  title: string
  faultLabel: string
  faults: string[]
  detailLabel: string
  detailPlaceholder: string
  statusLabel: string
  statuses: [string, string]
  faultPlaceholder: string
}

export interface Lp {
  slug: string
  kind: "generator" | "cold" | "tv"
  serviceName: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  badge: string
  h1: string
  /** Optional headline for ads that target a town, e.g. "Generator Repairs in {area}". Use ?area=Pretoria on the ad URL. */
  h1Area?: string
  sub: string
  hero: { src: string; alt: string; aspect: string }
  heroPoints: string[]
  waMessage: string
  source: string
  story: {
    kicker: string
    title: string
    beats: { time?: string; text: string }[]
    punch: string
  }
  turn: { title: string; text: string; extra: string }
  signsTitle: string
  signs: { title: string; text: string; fault?: string }[]
  fixesTitle: string
  fixes: { title: string; text: string }[]
  gallery: { src: string; alt: string; caption: string }[]
  steps: { title: string; text: string }[]
  waitTitle: string
  wait: string[]
  waitNote?: string
  brands?: { title: string; text: string; image: string; imageAlt: string; engines: string[]; alternators: string[] }
  audience?: { title: string; items: string[] }
  form: LpForm
  faqs: { q: string; a: string }[]
  /** Real customer reviews only. Leave out (or empty) until you have permission to show them. */
  reviews?: { name: string; text: string; area?: string }[]
  closing: { title: string; text: string }
}

export const LANDING_PAGES: Lp[] = [
  // ───────────────────────── GENERATORS ─────────────────────────
  {
    slug: "generator-repairs",
    kind: "generator",
    serviceName: "Generator Repairs",
    metaTitle: "Generator Repairs in Johannesburg and Gauteng",
    metaDescription:
      "Generator won't start or keeps cutting out? Profix repairs diesel and petrol generators across Johannesburg and Gauteng. Call now or send a WhatsApp job card.",
    keywords: [
      "generator repairs Johannesburg",
      "generator repairs Gauteng",
      "diesel generator repairs",
      "petrol generator repairs",
      "generator not starting",
      "generator repair near me",
    ],
    badge: "Diesel and petrol generators",
    h1: "Generator Repairs in Johannesburg and Gauteng",
    h1Area: "Generator Repairs in {area}",
    sub: "The power is out and your generator should be running. If it will not start, keeps cutting out or gives you no power, call Profix before the night gets any longer.",
    hero: {
      src: "/profix-generator-repairs-portable-petrol-generators-johannesburg.jpg",
      alt: "Three portable petrol generators in a Johannesburg yard at dusk waiting for repairs",
      aspect: "aspect-square",
    },
    heroPoints: [
      "Portable petrol to canopy diesel generators",
      "Fault explained in plain language",
      "Clear quote before any repair starts",
      "Call, or WhatsApp a photo of the problem",
    ],
    waMessage: "Hi Profix, my generator needs repairs.",
    source: "Google Ads: Generator repairs page",
    story: {
      kicker: "Every generator owner knows this moment",
      title: "The lights go out. You walk to the generator. You pull the cord. Nothing.",
      beats: [
        { time: "6:48 pm", text: "The power cuts out in the middle of supper. Nobody panics. You have a generator. That is exactly what it is for." },
        { time: "6:51 pm", text: "You turn the key. It cranks, coughs and dies. You try again. And again. The battery gets weaker with every attempt." },
        { time: "7:40 pm", text: "The house is dark and getting cold. The kids are doing homework by phone torchlight, and the phones are running out too." },
        { time: "9:15 pm", text: "The freezer is starting to sweat. The food you paid for this month is slowly turning into a loss." },
        { time: "Or at work", text: "The card machine is dead. Customers are leaving. Your staff stand around waiting for you to sort it out while the day's takings walk out of the door." },
      ],
      punch: "The worst part is not the dark. It is knowing the one thing that was supposed to protect you has let you down.",
    },
    turn: {
      title: "It does not have to stay like this.",
      text: "Many generators that seem dead are not. A blocked fuel filter, a flat battery, stale fuel, a failed AVR or a missed service is often all it takes. A technician who knows engines can find the fault, show you what it is and get your power back.",
      extra: "And before you spend a fortune on a new generator, let us tell you honestly whether yours can be saved.",
    },
    signsTitle: "Does this sound like your generator?",
    signs: [
      { title: "It will not start", text: "It just clicks, cranks slowly or turns over and never catches.", fault: "Will not start" },
      { title: "It starts, then cuts out", text: "It runs for a minute or two, or dies the moment you switch the load on.", fault: "Starts then cuts out" },
      { title: "It runs but gives no power", text: "The engine sounds fine but the lights stay off, or the voltage is low and unstable.", fault: "No power output" },
      { title: "Smoke, fumes or a fuel smell", text: "Black or white smoke, or a strong smell of fuel while it runs.", fault: "Smoke or strange noise" },
      { title: "Overheating or leaking", text: "Temperature warnings, oil or coolant on the floor, steam from the engine.", fault: "Overheating or leaking" },
      { title: "Rough running or surging", text: "It hunts up and down, shakes, backfires or sounds like it is struggling.", fault: "Something else" },
    ],
    fixesTitle: "What we repair",
    fixes: [
      { title: "Starting faults", text: "Batteries, starter motors, solenoids, glow plugs and stop and start control faults." }, // CONFIRM
      { title: "Fuel system", text: "Blocked filters, stale or dirty fuel, air in the system, fuel pumps and injectors." },
      { title: "Smoke and poor running", text: "Rough running, surging, black smoke and carbon build-up from running under light load." },
      { title: "Overheating and leaks", text: "Radiators, hoses, coolant, water pumps, oil leaks and head gasket faults." },
      { title: "Alternator and power output", text: "AVR faults, no voltage, low or unstable output and worn alternator parts." }, // CONFIRM
      { title: "Controllers and wiring", text: "Auto start panels, breakers, changeover switch and wiring faults." }, // CONFIRM
      { title: "Engine overhauls", text: "When the damage goes deeper: gaskets, pistons, rings and engine rebuilds." }, // CONFIRM
    ],
    gallery: [
      { src: "/profix-generator-repairs-technicians-servicing-diesel-canopy-generator.jpg", alt: "Technicians on site working on a canopy diesel generator", caption: "Canopy diesel generator" },
      { src: "/profix-generator-repairs-diesel-engine-bay-alternator-starter.jpg", alt: "Inside a diesel generator engine bay showing engine, starter motor and alternator", caption: "Engine bay diagnosis" },
      { src: "/profix-generator-repairs-technician-servicing-portable-petrol-generator.jpg", alt: "Technician servicing a portable petrol generator with a tool kit", caption: "Portable petrol generator" },
    ],
    steps: [
      { title: "Call or WhatsApp", text: "Tell us what the generator is doing, the brand and size, and where you are. Photos help." },
      { title: "We find the fault", text: "A technician diagnoses it and explains the problem in plain language." },
      { title: "Clear quote, then the repair", text: "You approve the price before any work starts. Then we get it running." },
    ],
    waitTitle: "While you wait for us",
    wait: [
      "Stop cranking after a few tries. Keep going and you flatten the battery.",
      "Never run a generator indoors or in a garage. The exhaust carries carbon monoxide.",
      "Let a hot generator cool down before you refuel it.",
      "Send a photo of the nameplate and any warning lights on WhatsApp. It helps us prepare.",
    ],
    brands: {
      title: "Engines and alternators we work on",
      text: "Not sure if your generator is covered? Send a photo of the nameplate on WhatsApp and we will tell you.", // CONFIRM brand list
      image: "/profix-generator-engine-and-alternator-brands.jpg",
      imageAlt: "Logos of generator engine and alternator brands including Perkins, Cummins, Deutz, Yanmar, Volvo, John Deere, CAT, Mecc Alte and Leroy-Somer",
      engines: ["Perkins", "Cummins", "Deutz", "Yanmar", "Volvo", "John Deere", "CAT", "FAWDE"],
      alternators: ["Mecc Alte", "Leroy-Somer", "Marelli Motori"],
    },
    form: {
      title: "Get your generator fixed",
      faultLabel: "What is it doing?",
      faults: ["Will not start", "Starts then cuts out", "No power output", "Smoke or strange noise", "Overheating or leaking", "Something else"],
      detailLabel: "Brand and size",
      detailPlaceholder: "e.g. Perkins 20 kVA diesel, or 5 kVA petrol",
      statusLabel: "Right now",
      statuses: ["No power, urgent", "Faulty but still running"],
      faultPlaceholder: "Tell us more, for example when it started and what you have tried",
    },
    faqs: [
      { q: "Do you repair both diesel and petrol generators?", a: "Yes. We repair portable petrol generators and larger canopy diesel generators. Send the brand and a photo of the nameplate on WhatsApp and we will confirm." },
      { q: "My generator will not start. What should I check first?", a: "Check the fuel level, the battery connections, the emergency stop button and the breaker. If it still will not start, stop cranking so you do not flatten the battery, and call us." },
      { q: "Why will my generator not start after standing for months?", a: "Stale fuel and a flat battery are two of the most common reasons. Blocked filters and a gummed up fuel system can also be the cause. A technician can check all of these." },
      { q: "Can you repair it at my home or business?", a: "In most cases we diagnose and repair on site. If a part has to go to the workshop, we will tell you before we take it." },
      { q: "How much does a generator repair cost?", a: "It depends on the fault, so we do not guess. You get a clear quote after the diagnosis and before any repair work starts. Photos and details on WhatsApp help us give you an early idea." },
      { q: "My generator starts but gives no power. What is wrong?", a: "When the engine runs but there is no output, the fault is often in the alternator or the AVR, or in the breaker or wiring after it. We test each to find the part at fault before we quote." },
      { q: "My generator cuts out when I switch the load on. Why?", a: "Common causes are a blocked fuel filter, air in the fuel system, a worn injector or an overloaded or faulty alternator. We find which one it is." },
      { q: "Do you service generators too?", a: "Our focus is repairs. If you are not sure whether your generator needs a repair or a service, WhatsApp us what it is doing and we will tell you." },
      { q: "Is it worth repairing my generator or should I buy a new one?", a: "We give you an honest opinion after the diagnosis, including when a repair does not make sense." },
      { q: "Which areas do you cover?", a: "We cover Johannesburg, Sandton, Randburg, Roodepoort, Pretoria, Centurion, Midrand, Kempton Park, Germiston, Boksburg, Benoni, Alberton and surrounding Gauteng areas." },
    ],
    closing: {
      title: "Get your power back.",
      text: "Call now or send a job card. Tell us what the generator is doing and where you are, and we will tell you what happens next.",
    },
  },

  // ───────────────── COLD ROOMS AND COMMERCIAL FRIDGES ─────────────────
  {
    slug: "cold-room-and-commercial-fridge-repairs",
    kind: "cold",
    serviceName: "Cold Room and Commercial Fridge Repairs",
    metaTitle: "Cold Room and Commercial Fridge Repairs in Gauteng",
    metaDescription:
      "Cold room not cooling? Profix repairs cold rooms, commercial fridges and freezers across Johannesburg and Gauteng. Protect your stock. Call now or WhatsApp us.",
    keywords: [
      "cold room repairs Johannesburg",
      "cold room repairs Gauteng",
      "commercial fridge repairs",
      "commercial fridge repairs Johannesburg",
      "cold room not cooling",
      "walk-in freezer repairs",
    ],
    badge: "Cold rooms, freezer rooms and commercial fridges",
    h1: "Cold Room and Commercial Fridge Repairs in Gauteng",
    h1Area: "Cold Room and Fridge Repairs in {area}",
    sub: "Every hour your cold room runs warm, your stock, your money and your reputation are at risk. Call now and let us get the cold back.",
    hero: {
      src: "/profix-cold-room-repairs-evaporator-unit-butchery-cold-room.jpg",
      alt: "Butchery cold room with an evaporator unit mounted above the hanging rail",
      aspect: "aspect-[4/5]",
    },
    heroPoints: [
      "Walk-in cold rooms, freezer rooms and commercial fridges",
      "We come to you, because a cold room cannot be moved",
      "Fault explained in plain language",
      "Clear quote before any repair starts",
    ],
    waMessage: "Hi Profix, my cold room or commercial fridge needs repairs.",
    source: "Google Ads: Cold room and commercial fridge repairs page",
    story: {
      kicker: "If your business depends on cold, you know this feeling",
      title: "You open up. It is warm. The compressor is silent. Your stomach drops.",
      beats: [
        { time: "5:40 am", text: "You unlock before anyone else arrives. You pull the cold room door and the air that meets you is not cold. It is not even cool." },
        { time: "5:42 am", text: "You check the thermometer. The number is far too high and it is still climbing." },
        { time: "5:45 am", text: "You are doing the sums in your head. This week's meat order. The dairy that came in yesterday. The produce. Everything you paid for and everything you promised your customers today." },
        { time: "6:30 am", text: "Your staff arrive. Nobody says much. The supplier's invoice is still due on Friday, and the stock you cannot sell is still on the books." },
        { time: "All day", text: "You cannot serve it. You cannot risk it. And you cannot un-spoil it." },
      ],
      punch: "It was never just stock. It is the early mornings, the loan you took and the reputation you built one happy customer at a time.",
    },
    turn: {
      title: "The cold can be saved. Speed is what saves it.",
      text: "Many cold room failures start small: an iced up evaporator, a failing fan motor, a faulty controller or a refrigerant leak. Catch it early and it is a repair. Wait and it can become a write-off.",
      extra: "Call us now. Tell us what is happening and where you are, and we will tell you honestly how soon we can get to you.",
    },
    signsTitle: "Warning signs your cold room or fridge is failing",
    signs: [
      { title: "It cannot hold temperature", text: "The temperature creeps up through the day or never reaches where it should.", fault: "Not cooling or too warm" },
      { title: "Ice on the evaporator or ceiling", text: "Heavy frost or ice build-up around the coil and fans, or ice that will not defrost.", fault: "Ice build-up" },
      { title: "Compressor will not start or keeps stopping", text: "Loud, hot, short cycling, or completely silent.", fault: "Compressor not starting" },
      { title: "Water on the floor", text: "Pooling water or dripping from the evaporator, a blocked drain or a leaking unit.", fault: "Leaking water or gas" },
      { title: "Fans not turning", text: "The fans on the evaporator or condenser have stopped, or sound rough.", fault: "Fans not working or noisy" },
      { title: "Door seals and doors", text: "Torn seals, a door that will not close properly, or frost forming around the frame.", fault: "Something else" },
      { title: "Display fridge sweating or warm", text: "Glass door fridges and freezers not cooling, or frosting up inside.", fault: "Not cooling or too warm" },
      { title: "Alarm or controller error", text: "A temperature alarm, blank display or an error code on the controller.", fault: "Something else" },
    ],
    fixesTitle: "What we repair",
    fixes: [
      { title: "Compressors and condensing units", text: "Struggling or failed compressors, condenser fans, relays, contactors and overloads." },
      { title: "Evaporators and fans", text: "Iced up coils, dead fan motors, blocked drain lines and defrost heater faults." },
      { title: "Gas leaks and regassing", text: "Finding the leak, repairing it and regassing the system." },
      { title: "Controllers and thermostats", text: "Temperature controllers, sensors, defrost timers and wiring faults." },
      { title: "Door seals, hinges and heaters", text: "Torn gaskets, worn hinges, door frame heaters and strip curtains." }, // CONFIRM
      { title: "Commercial fridges and freezers", text: "Glass door display fridges, upright and under counter fridges, prep fridges and chest freezers." },
    ],
    gallery: [
      { src: "/profix-cold-room-repairs-walk-in-evaporator-fans.jpg", alt: "Walk-in cold room with a four fan evaporator unit mounted on the ceiling", caption: "Walk-in cold room" },
      { src: "/profix-appliances-glass-door-fridge-repair-on-site.jpg", alt: "Technician repairing a glass door fridge on site", caption: "Glass door fridge repair" },
      { src: "/profix-appliances-refrigerator-compressor-repair.jpg", alt: "Refrigeration compressor being repaired", caption: "Compressor repair" },
    ],
    steps: [
      { title: "Call or WhatsApp", text: "Tell us what is happening, the type and size of your cold room or fridge, and where you are. A photo of the controller helps." },
      { title: "We find out why it stopped", text: "A technician diagnoses it on site and explains the fault in plain language." },
      { title: "Clear quote, then the repair", text: "You approve the price before any work starts. Then we get the cold back." },
    ],
    waitTitle: "Save your stock while we are on our way",
    wait: [
      "Keep the cold room door closed. Every time it opens, the cold escapes.",
      "Check the breaker and isolator. If it keeps tripping, do not keep resetting it.",
      "Move your highest risk stock to any working fridge or freezer you have.",
      "Send a photo of the controller display and the unit nameplate on WhatsApp.",
    ],
    waitNote: "If food has been warm for hours, do not gamble with your customers' health. When in doubt, throw it out.",
    audience: {
      title: "Businesses we keep cold",
      items: ["Butcheries", "Restaurants and takeaways", "Supermarkets and spaza shops", "Caterers and events", "Bakeries and cafes", "Fresh produce and farm shops", "Liquor stores and bars", "Guest houses and lodges"], // CONFIRM
    },
    form: {
      title: "Get your cold back",
      faultLabel: "What is happening?",
      faults: ["Not cooling or too warm", "Compressor not starting", "Ice build-up", "Leaking water or gas", "Fans not working or noisy", "Something else"],
      detailLabel: "Cold room size or fridge type",
      detailPlaceholder: "e.g. 3m x 3m cold room, or glass door fridge",
      statusLabel: "How urgent is it?",
      statuses: ["Urgent, stock at risk", "Faulty but still cooling"],
      faultPlaceholder: "Tell us more, for example when it started and what temperature it shows",
    },
    faqs: [
      { q: "Do you repair both cold rooms and commercial fridges?", a: "Yes. We repair walk-in cold rooms and freezer rooms, glass door display fridges, upright and under counter fridges, prep fridges and chest freezers." },
      { q: "My cold room is not cooling. What should I do first?", a: "Keep the door closed, check that the breaker and isolator have not tripped, and look for ice on the evaporator. Do not keep resetting a tripping breaker. Then call us with what you see." },
      { q: "Can you come out today?", a: "Call us now with your area and what is happening, and we will tell you honestly how soon we can get to you." },
      { q: "Do you repair on site?", a: "Yes. A cold room cannot be moved, so we diagnose and repair on site. For smaller fridges, if a part has to go to the workshop, we will tell you before we take it." },
      { q: "How much does a cold room repair cost?", a: "It depends on the fault, so we do not guess. You get a clear quote after the diagnosis and before any repair work starts." },
      { q: "Is it worth repairing, or should I replace it?", a: "We give you an honest opinion after the diagnosis, including when a repair does not make sense." },
      { q: "Which areas do you cover?", a: "We cover Johannesburg, Sandton, Randburg, Roodepoort, Pretoria, Centurion, Midrand, Kempton Park, Germiston, Boksburg, Benoni, Alberton and surrounding Gauteng areas." },
    ],
    closing: {
      title: "Save your stock. Call now.",
      text: "Do not stand there watching the thermometer climb. Tell us what is happening and where you are, and we will tell you what happens next.",
    },
  },
  // ───────────────────────── TV REPAIRS ─────────────────────────
  {
    slug: "tv-repairs",
    kind: "tv",
    serviceName: "TV Repairs",
    metaTitle: "TV Repair in Johannesburg and Gauteng | In-Home Service",
    metaDescription:
      "Flat screen TV not working? Profix repairs TVs across Johannesburg and Gauteng. Screen faults, no power, no picture. We come to you. Call now or WhatsApp a photo.",
    keywords: [
      "tv repair",
      "tv repairs near me",
      "in home tv repair",
      "flat screen tv repair",
      "tv screen repair",
      "television repair near me",
      "hisense tv repair near me",
    ],
    badge: "In-home TV repair service",
    h1: "TV Repair in Johannesburg and Gauteng",
    h1Area: "TV Repair in {area}",
    sub: "Flat screen TV not working? We come to you, find the fault and give you a clear quote before any repair starts. If a board needs the workshop, we tell you first.",
    hero: {
      src: "/profix-electronics-tv-screen-repair-team.jpg",
      alt: "Technicians repairing a flat screen TV on the floor",
      aspect: "aspect-[4/3]",
    },
    heroPoints: [
      "Flat screen, smart and big screen TVs",
      "We come to you to diagnose the fault",
      "Clear quote before any repair starts",
      "Call, or WhatsApp a photo of the screen",
    ],
    waMessage: "Hi Profix, my TV needs repairs.",
    source: "Google Ads: TV repairs page",
    story: {
      kicker: "You know this feeling",
      title: "Five minutes to kick-off. You press the power button. A red light blinks. Nothing else.",
      beats: [
        { time: "7:55 pm", text: "The family is on the couch. Snacks are out. The match, the series, the Sunday movie you have all been waiting for is about to start." },
        { time: "7:56 pm", text: "You press power. The standby light blinks, clicks or does nothing at all. You unplug it, plug it back in and try again." },
        { time: "7:58 pm", text: "Or the sound is playing and the screen is black. Or the picture is covered in lines. The TV you paid for is a dark, silent slab on the wall." },
        { time: "Next day", text: "A shop tells you it is cheaper to buy a new one. You were not planning to spend that this month." },
        { time: "For many homes", text: "It is the TV a parent watches all day for company. The one the kids sit in front of after school. It is not just a screen." },
      ],
      punch: "Before you write off a TV you paid for, find out what is really wrong with it.",
    },
    turn: {
      title: "Your TV may not be finished.",
      text: "Many TVs that go dark have a fault in the power supply, the backlight or the main board, and those are often repairable. A technician with the right instruments can find the fault and tell you honestly what a repair would cost compared with a new TV.",
      extra: "A cracked screen is usually the exception, and we will tell you that straight too.",
    },
    signsTitle: "Does this sound like your TV?",
    signs: [
      { title: "It will not switch on", text: "Dead, or the standby light blinks, clicks or stays red.", fault: "Will not switch on" },
      { title: "Sound but no picture", text: "You can hear it, but the screen is black or very dark.", fault: "Sound but no picture" },
      { title: "Lines or dark patches", text: "Vertical or horizontal lines, shadows or patches across the screen.", fault: "Lines or dark patches" },
      { title: "It keeps restarting", text: "It switches itself off, loops on the logo or restarts again and again.", fault: "Keeps restarting" },
      { title: "HDMI or input not working", text: "No signal from your decoder, console or soundbar.", fault: "HDMI or input fault" },
      { title: "Dim or flickering picture", text: "A very dim picture, flickering or colours that look wrong.", fault: "Something else" },
    ],
    fixesTitle: "What we repair",
    fixes: [
      { title: "No power faults", text: "Standby light blinking, dead TVs and power supply board faults." },
      { title: "Backlight faults", text: "Sound but no picture, dim or shadowy screens and backlight problems." },
      { title: "Main board faults", text: "Boards, restart loops and software or hardware faults on the board." },
      { title: "Screen faults", text: "Lines and patches caused by board and panel connection faults. We tell you honestly if the panel itself is damaged." },
      { title: "HDMI and sound", text: "Input, HDMI and sound problems." },
      { title: "Soundbars and home theatre", text: "Soundbars and home theatre systems, tested and repaired." },
    ],
    gallery: [
      { src: "/profix-electronics-tv-screen-repair-team.jpg", alt: "Technicians repairing a flat screen TV", caption: "TV repair in progress" },
      { src: "/profix-electronics-tv-motherboard-diagnostics.jpg", alt: "TV motherboard being diagnosed", caption: "Board diagnostics" },
      { src: "/profix-electronics-flat-screen-tv-disassembly.jpg", alt: "Flat screen TV opened up for repair", caption: "Opened for repair" },
    ],
    steps: [
      { title: "Call or WhatsApp", text: "Tell us the brand, the size and what the TV is doing. A photo of the screen and the model sticker helps." },
      { title: "We find the fault", text: "A technician diagnoses it and explains the problem in plain language." },
      { title: "Clear quote, then the repair", text: "You approve the price before any work starts. Then we get the picture back." },
    ],
    waitTitle: "Before we get there",
    wait: [
      "Unplug the TV for a few minutes, then try again. It can clear some faults.",
      "Do not open the back. Power supplies can hold a dangerous charge.",
      "Do not press on the screen. It can damage the panel.",
      "Take a photo of the screen fault, the model sticker on the back and any blinking pattern on the standby light.",
    ],
    audience: {
      title: "TVs we repair",
      items: ["Flat screen LED and LCD TVs", "Smart TVs", "Big screen TVs", "Hisense", "LG", "Samsung", "Soundbars", "Home theatre systems"], // CONFIRM brands and sizes
    },
    form: {
      title: "Get your TV fixed",
      faultLabel: "What is it doing?",
      faults: ["Will not switch on", "Sound but no picture", "Lines or dark patches", "Keeps restarting", "HDMI or input fault", "Cracked screen", "Something else"],
      detailLabel: "TV brand, size and model",
      detailPlaceholder: "e.g. Hisense 55 inch, or the model on the back",
      statusLabel: "Right now",
      statuses: ["Not working at all", "Working but faulty"],
      faultPlaceholder: "Tell us more, for example when it started and what the standby light does",
    },
    faqs: [
      { q: "Do you repair TVs at my home?", a: "We come to you to diagnose the fault. Some repairs can be finished at home. Board level work can need the workshop, and we tell you before we take anything." },
      { q: "Do you repair Hisense TVs?", a: "Yes. We repair Hisense and other brands of flat screen TV. Put the brand, size and model on the job card, or send a photo of the sticker on the back, and we will confirm." },
      { q: "Can you repair a cracked TV screen?", a: "A cracked panel is usually not economical to replace, and we tell you that honestly. Faults on the boards and power supply are usually repairable." },
      { q: "My TV has sound but no picture. Can it be fixed?", a: "This is commonly a backlight or power supply fault, and both are usually repairable. We test to confirm before we quote." },
      { q: "How much does a TV repair cost?", a: "It depends on the fault, so we do not guess. You get a clear quote after the diagnosis and before any repair work starts." },
      { q: "Is it worth repairing my TV or should I buy a new one?", a: "We give you an honest opinion after the diagnosis, including when a repair does not make sense." },
      { q: "Which areas do you cover?", a: "We cover Johannesburg, Sandton, Randburg, Roodepoort, Pretoria, Centurion, Midrand, Kempton Park, Germiston, Boksburg, Benoni, Alberton and surrounding Gauteng areas." },
    ],
    closing: {
      title: "Get the picture back.",
      text: "Call now or send a job card. Tell us what the TV is doing and where you are, and we will tell you what happens next.",
    },
  },
]

export function getLp(slug: string) {
  return LANDING_PAGES.find((p) => p.slug === slug)
}
