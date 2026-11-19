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
  kind: "generator" | "cold" | "tv" | "aircon" | "ice"
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
      { q: "Why is my cold room not getting cold?", a: "Common causes are a failed compressor or condenser fan, an iced up evaporator, low refrigerant, a faulty controller or sensor, or a door that does not seal. We test each one to find the real fault before we quote." },
      { q: "Why is my freezer room or walk in freezer not freezing?", a: "A defrost fault, a failed fan motor, a refrigerant leak or a compressor problem can all stop a freezer room reaching temperature. We find which one so the fault does not come straight back." },
      { q: "Is it worth repairing, or should I replace it?", a: "We give you an honest opinion after the diagnosis, including when a repair does not make sense." },
      { q: "Do you service cold rooms too?", a: "Our focus is repairs. If you are not sure whether your cold room needs a repair or a service, WhatsApp us what it is doing and we will tell you." },
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
      src: "/profix-tv-repairs-hisense-tv-power-supply-board.jpg",
      alt: "Hisense TV power supply board being repaired",
      aspect: "aspect-[4/5]",
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
      { src: "/profix-tv-repairs-hisense-power-supply-closeup.jpg", alt: "Close up of a Hisense TV power supply board", caption: "Hisense power supply" },
      { src: "/profix-tv-repairs-main-board-hdmi-processor.jpg", alt: "TV main board with HDMI ports and processor", caption: "TV main board" },
      { src: "/profix-tv-repairs-led-backlight-strips.jpg", alt: "TV LED backlight strips lit up during testing", caption: "Backlight testing" },
      { src: "/profix-tv-repairs-main-board-inside-flat-screen-tv.jpg", alt: "Main board fitted inside a flat screen TV", caption: "Board inside the TV" },
      { src: "/profix-tv-repairs-power-supply-board-diagnosis.jpg", alt: "TV power supply board opened for diagnosis", caption: "Power supply diagnosis" },
      { src: "/profix-tv-repairs-main-board-power-section.jpg", alt: "Power section of a TV main board", caption: "Power section close up" },
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

  // ───────────────────────── AIRCON AND ICE MACHINES ─────────────────────────
  {
    "slug": "aircon-repairs",
    "kind": "aircon",
    "serviceName": "Aircon Repairs",
    "metaTitle": "Aircon Repairs in Johannesburg and Gauteng",
    "metaDescription": "Aircon not cooling or leaking water? Profix repairs air conditioners across Johannesburg and Gauteng. Clear quote first. Call now or WhatsApp a photo.",
    "keywords": [
      "aircon repairs",
      "aircon repair near me",
      "air conditioner repair",
      "aircon not cooling",
      "aircon leaking water",
      "aircon regas"
    ],
    "badge": "Split and wall mounted air conditioners",
    "h1": "Aircon Repairs in Johannesburg and Gauteng",
    "h1Area": "Aircon Repairs in {area}",
    "sub": "Aircon not cooling, leaking water or not switching on? Profix finds the fault on site and gives you a clear quote before any repair starts.",
    "hero": {
      "src": "/profix-appliances-air-conditioner-wall-unit-installation.jpg",
      "alt": "Wall mounted air conditioner unit on a wall",
      "aspect": "aspect-[4/5]"
    },
    "heroPoints": [
      "Split and wall mounted air conditioners",
      "We come to you to find the fault",
      "Clear quote before any repair starts",
      "Call, or WhatsApp a photo of the unit"
    ],
    "waMessage": "Hi Profix, my aircon needs repairs.",
    "source": "Google Ads: Aircon repairs page",
    "story": {
      "kicker": "If you have lived through a Gauteng summer, you know this feeling",
      "title": "It is the hottest night of the year. You press the remote. The aircon does nothing.",
      "beats": [
        {
          "time": "10:30 pm",
          "text": "The bedroom has been baking all day. You press the remote and the unit beeps, blinks or does not respond at all."
        },
        {
          "time": "11:15 pm",
          "text": "Or it is running, but the air coming out is warm. You stand in front of it, hoping. Nothing changes."
        },
        {
          "time": "1:40 am",
          "text": "The sheets are damp. A fan is only pushing hot air around. Nobody in the house is sleeping."
        },
        {
          "time": "Next morning",
          "text": "You are tired, short tempered and facing a full day. Or there is a drip on the wall, a puddle on the floor and a stain spreading under the unit."
        },
        {
          "time": "At work",
          "text": "The shop is stifling. Customers walk in, look around and leave. Staff are slow. The office is too hot to think."
        }
      ],
      "punch": "A broken aircon does not just make you hot. It takes your sleep, your focus and your good mood."
    },
    "turn": {
      "title": "Your aircon can probably be fixed.",
      "text": "Many aircon faults are small: low gas, a blocked drain, a dirty coil, a failed capacitor, a fan motor or a faulty sensor. A technician who tests the unit properly can find the fault and fix it, often without replacing the whole aircon.",
      "extra": "And if the unit is too far gone, we will tell you honestly before you spend anything."
    },
    "signsTitle": "Does this sound like your aircon?",
    "signs": [
      {
        "title": "Not cooling or blowing warm air",
        "text": "The unit runs but the room stays hot.",
        "fault": "Not cooling"
      },
      {
        "title": "Leaking water",
        "text": "Water dripping from the indoor unit, down the wall or onto the floor.",
        "fault": "Leaking water"
      },
      {
        "title": "Will not switch on",
        "text": "No lights, no response from the remote, or it switches itself off.",
        "fault": "Will not switch on"
      },
      {
        "title": "Frozen or iced up",
        "text": "Ice on the pipes or coil, weak airflow, or water when it thaws.",
        "fault": "Freezing up or ice"
      },
      {
        "title": "Noisy or smelly",
        "text": "Rattling, grinding or buzzing, or a musty or burning smell.",
        "fault": "Noisy or smelly"
      },
      {
        "title": "Outdoor unit not running",
        "text": "The fan is not turning, the unit hums or it trips the breaker.",
        "fault": "Something else"
      }
    ],
    "fixesTitle": "What we repair",
    "fixes": [
      {
        "title": "Not cooling or warm air",
        "text": "Dirty or iced coils, failed capacitors, compressor and sensor faults."
      },
      {
        "title": "Water leaks",
        "text": "Blocked drain lines, drain pans, pipework and frozen coils."
      },
      {
        "title": "Gas leaks and regassing",
        "text": "Finding the leak, repairing it and regassing the unit."
      },
      {
        "title": "Electrical faults",
        "text": "Capacitors, relays, control boards, remote receivers and wiring faults."
      },
      {
        "title": "Fan and airflow faults",
        "text": "Indoor and outdoor fan motors, blowers and noisy or rattling parts."
      },
      {
        "title": "Outdoor unit faults",
        "text": "Units that hum, trip the breaker or will not start."
      }
    ],
    "gallery": [
      {
        "src": "/profix-appliances-hvac-aircon-manifold-servicing.jpg",
        "alt": "Air conditioner being checked with gauges connected",
        "caption": "Gas and pressure checks"
      },
      {
        "src": "/profix-appliances-wall-mounted-aircon-unit.jpg",
        "alt": "Wall mounted air conditioner unit on a house wall",
        "caption": "Wall mounted unit"
      },
      {
        "src": "/profix-appliances-hvac-ac-installation-finished.jpg",
        "alt": "Outdoor air conditioner unit on a stand",
        "caption": "Outdoor unit"
      }
    ],
    "steps": [
      {
        "title": "Call or WhatsApp",
        "text": "Tell us what the aircon is doing, the brand and where you are. Photos help."
      },
      {
        "title": "We find the fault",
        "text": "A technician diagnoses it on site and explains the problem in plain language."
      },
      {
        "title": "Clear quote, then the repair",
        "text": "You approve the price before any work starts. Then we fix it."
      }
    ],
    "waitTitle": "While you wait for us",
    "wait": [
      "Switch the unit off at the remote and the wall if it is leaking, freezing up or making grinding noises.",
      "Clean or rinse the filters if you can. Blocked filters cause many faults.",
      "Do not keep resetting a breaker that keeps tripping.",
      "Send a photo of the unit labels and the fault on WhatsApp."
    ],
    "audience": {
      "title": "Aircons we repair",
      "items": [
        "Split air conditioners",
        "Wall mounted units",
        "Home aircons",
        "Office aircons",
        "Shop aircons",
        "Indoor and outdoor units"
      ]
    },
    "form": {
      "title": "Get your aircon fixed",
      "faultLabel": "What is it doing?",
      "faults": [
        "Not cooling",
        "Leaking water",
        "Will not switch on",
        "Freezing up or ice",
        "Noisy or smelly",
        "Something else"
      ],
      "detailLabel": "Brand and unit type",
      "detailPlaceholder": "e.g. Samsung 12000 BTU wall split",
      "statusLabel": "Right now",
      "statuses": [
        "Not working at all",
        "Working but faulty"
      ],
      "faultPlaceholder": "Tell us more, for example when it started and what the unit shows"
    },
    "faqs": [
      {
        "q": "Why is my aircon not cooling?",
        "a": "Low or leaking gas, dirty filters or coils, a failed capacitor or compressor, a fan problem or a sensor or control fault can all stop a unit cooling. We test to find which one."
      },
      {
        "q": "Why is my aircon leaking water inside?",
        "a": "A blocked or badly sloped drain line is the usual cause. A frozen coil from low gas or dirty filters can also make it drip. We find the cause before we quote."
      },
      {
        "q": "Can you regas my aircon?",
        "a": "Yes. We check for leaks first, because a unit that has lost gas usually has a leak, and topping it up without finding it will not last."
      },
      {
        "q": "Do you repair aircons at my home or business?",
        "a": "Yes. We diagnose and repair on site. If a part has to go to the workshop, we tell you before we take it."
      },
      {
        "q": "How much does an aircon repair cost?",
        "a": "It depends on the fault, so we do not guess. You get a clear quote after the diagnosis and before any repair work starts."
      },
      {
        "q": "Is it worth repairing my aircon or should I replace it?",
        "a": "We give you an honest opinion after the diagnosis, including when a repair does not make sense."
      },
      {
        "q": "Do you repair car aircons?",
        "a": "No. We repair home, shop and office air conditioners, including split and wall mounted units. For a car, please use an automotive air conditioning specialist."
      },
      {
        "q": "Do you install aircons?",
        "a": "This page is about repairs. If you need a new aircon installed, WhatsApp us what you need."
      },
      {
        "q": "Which areas do you cover?",
        "a": "We cover Johannesburg, Sandton, Randburg, Roodepoort, Pretoria, Centurion, Midrand, Kempton Park, Germiston, Boksburg, Benoni, Alberton and surrounding Gauteng areas."
      }
    ],
    "closing": {
      "title": "Get your cool back.",
      "text": "Call now or send a job card. Tell us what the aircon is doing and where you are, and we will tell you what happens next."
    }
  },
  {
    "slug": "ice-machine-repairs",
    "kind": "ice",
    "serviceName": "Ice Machine and Ice Maker Repairs",
    "metaTitle": "Ice Machine and Ice Maker Repairs in Gauteng",
    "metaDescription": "Ice machine not making ice? Profix repairs commercial ice machines and ice makers across Johannesburg and Gauteng. Clear quote first. Call now or WhatsApp.",
    "keywords": [
      "ice machine repair",
      "ice maker repair",
      "commercial ice machine repair",
      "ice machine not making ice",
      "ice maker not working",
      "restaurant ice machine repair"
    ],
    "badge": "Commercial ice machines and ice makers",
    "h1": "Ice Machine and Ice Maker Repairs in Gauteng",
    "h1Area": "Ice Machine Repairs in {area}",
    "sub": "No ice means no cold drinks and unhappy customers. Profix finds the fault on site and gives you a clear quote before any repair starts.",
    "hero": {
      "src": "/profix-appliances-glass-door-fridge-repair-on-site.jpg",
      "alt": "Technician repairing a commercial refrigeration unit on site",
      "aspect": "aspect-square"
    },
    "heroPoints": [
      "Commercial ice machines and under counter ice makers",
      "We come to you to find the fault",
      "Clear quote before any repair starts",
      "Call, or WhatsApp a photo of the machine"
    ],
    "waMessage": "Hi Profix, my ice machine needs repairs.",
    "source": "Google Ads: Ice machine repairs page",
    "story": {
      "kicker": "If you run a bar, a restaurant or a shop, you know this one",
      "title": "Friday afternoon. The busiest night of the week is coming. The ice bin is empty and the machine has stopped.",
      "beats": [
        {
          "time": "4:30 pm",
          "text": "You expected the bin to be full by now. The machine is silent, or humming away without making a single cube."
        },
        {
          "time": "6:00 pm",
          "text": "Staff start running to the shop for bags of ice. Every trip costs money and time, and the bags melt as fast as you can use them."
        },
        {
          "time": "8:15 pm",
          "text": "Drinks go out warm, or not at all. Orders back up. Customers frown and some of them leave."
        },
        {
          "time": "Closing time",
          "text": "The night's takings are lower than they should be, and you still do not know if the machine will work tomorrow."
        },
        {
          "time": "Or elsewhere",
          "text": "A butchery or fish counter that needs ice to keep stock fresh. A function with a hundred guests. A lodge in peak season."
        }
      ],
      "punch": "It is only ice. Until the day it is not there."
    },
    "turn": {
      "title": "Your ice machine can probably be fixed.",
      "text": "Many ice machine faults come down to a water supply or inlet valve problem, scale build-up, a dirty condenser, a failed sensor or a fan or compressor fault. A technician who tests the machine properly can find which one and tell you what a repair costs.",
      "extra": "If the machine is too old to be worth repairing, we will tell you honestly before you spend anything."
    },
    "signsTitle": "Does this sound like your ice machine?",
    "signs": [
      {
        "title": "Not making ice",
        "text": "The machine runs but the bin stays empty, or it will not start a cycle.",
        "fault": "Not making ice"
      },
      {
        "title": "Making too little ice",
        "text": "Small, thin or partly formed cubes, or very slow production.",
        "fault": "Making too little ice"
      },
      {
        "title": "Leaking water",
        "text": "Water under the machine, around the bin or coming from the drain.",
        "fault": "Leaking water"
      },
      {
        "title": "Wet or melting ice",
        "text": "Soft, wet or cloudy ice, or ice that sticks together.",
        "fault": "Ice is wet or melting"
      },
      {
        "title": "Noisy or tripping the power",
        "text": "Loud grinding or rattling, or the breaker trips when it runs.",
        "fault": "Noisy or tripping power"
      },
      {
        "title": "Machine has stopped",
        "text": "No lights, no response or a warning light on the front.",
        "fault": "Something else"
      }
    ],
    "fixesTitle": "What we repair",
    "fixes": [
      {
        "title": "Not making ice",
        "text": "Water inlet valves, water supply faults, blocked filters and scale build-up."
      },
      {
        "title": "Low ice production",
        "text": "Dirty condensers, fan faults, low refrigerant, sensors and thermostats."
      },
      {
        "title": "Water leaks",
        "text": "Water lines, drain faults, pumps and seals."
      },
      {
        "title": "Compressor and cooling faults",
        "text": "Compressors, evaporators, relays and refrigerant leaks."
      },
      {
        "title": "Controls and sensors",
        "text": "Bin sensors, thermostats, control boards and wiring faults."
      },
      {
        "title": "Machines we repair",
        "text": "Commercial cube and flake machines, under counter ice makers and fridge ice makers."
      }
    ],
    "gallery": [
      {
        "src": "/profix-appliances-refrigerator-compressor-repair.jpg",
        "alt": "Refrigeration compressor being repaired",
        "caption": "Compressor repair"
      },
      {
        "src": "/profix-appliances-refrigerator-condenser-gas-servicing.jpg",
        "alt": "Condenser and gas servicing on a refrigeration unit",
        "caption": "Condenser and gas servicing"
      },
      {
        "src": "/profix-cold-room-repairs-evaporator-and-racking.jpg",
        "alt": "Commercial refrigeration evaporator unit",
        "caption": "Commercial refrigeration"
      }
    ],
    "steps": [
      {
        "title": "Call or WhatsApp",
        "text": "Tell us what the ice machine is doing, the brand and where you are. Photos help."
      },
      {
        "title": "We find the fault",
        "text": "A technician diagnoses it on site and explains the problem in plain language."
      },
      {
        "title": "Clear quote, then the repair",
        "text": "You approve the price before any work starts. Then we fix it."
      }
    ],
    "waitTitle": "While you wait for us",
    "wait": [
      "Switch the machine off if it is leaking or making grinding noises.",
      "Close the water supply valve if water is leaking.",
      "Do not chip ice build-up with a knife or screwdriver. You can damage the evaporator.",
      "Send a photo of the machine nameplate and the fault on WhatsApp."
    ],
    "audience": {
      "title": "Businesses we keep supplied with ice",
      "items": [
        "Bars and pubs",
        "Restaurants and takeaways",
        "Hotels and lodges",
        "Cafes and coffee shops",
        "Butcheries and fish counters",
        "Liquor stores",
        "Caterers and events",
        "Supermarkets and spaza shops"
      ]
    },
    "form": {
      "title": "Get your ice machine fixed",
      "faultLabel": "What is it doing?",
      "faults": [
        "Not making ice",
        "Making too little ice",
        "Leaking water",
        "Noisy or tripping power",
        "Ice is wet or melting",
        "Something else"
      ],
      "detailLabel": "Machine brand and type",
      "detailPlaceholder": "e.g. Hoshizaki cube machine, or under counter",
      "statusLabel": "How urgent is it?",
      "statuses": [
        "Urgent, no ice",
        "Faulty but still making ice"
      ],
      "faultPlaceholder": "Tell us more, for example when it started and what you see"
    },
    "faqs": [
      {
        "q": "Do you repair commercial ice machines?",
        "a": "Yes. We repair commercial cube and flake ice machines and under counter ice makers. Send a photo of the nameplate on WhatsApp and we will confirm your model."
      },
      {
        "q": "Why is my ice machine not making ice?",
        "a": "Common causes are a water supply or inlet valve fault, scale build-up, a dirty condenser, a faulty sensor or a compressor or fan problem. We test each one to find the real fault."
      },
      {
        "q": "Why is my ice machine leaking water?",
        "a": "A blocked drain, a split water line, a faulty pump or a worn seal can all cause a leak. We find the source before we quote."
      },
      {
        "q": "Can you repair the ice maker in my fridge?",
        "a": "Yes. We repair fridge and freezer ice makers and water dispensers."
      },
      {
        "q": "Do you clean or service ice machines?",
        "a": "Our focus is repairs. If you are not sure whether your machine needs a repair or a service, WhatsApp us what it is doing and we will tell you."
      },
      {
        "q": "Do you repair on site?",
        "a": "Yes. In most cases we diagnose and repair on site. If a part has to go to the workshop, we tell you before we take it."
      },
      {
        "q": "How much does an ice machine repair cost?",
        "a": "It depends on the fault, so we do not guess. You get a clear quote after the diagnosis and before any repair work starts."
      },
      {
        "q": "Is it worth repairing or should I replace it?",
        "a": "We give you an honest opinion after the diagnosis, including when a repair does not make sense."
      },
      {
        "q": "Which areas do you cover?",
        "a": "We cover Johannesburg, Sandton, Randburg, Roodepoort, Pretoria, Centurion, Midrand, Kempton Park, Germiston, Boksburg, Benoni, Alberton and surrounding Gauteng areas."
      }
    ],
    "closing": {
      "title": "Get your ice back.",
      "text": "Call now or send a job card. Tell us what the machine is doing and where you are, and we will tell you what happens next."
    }
  },

]

export function getLp(slug: string) {
  return LANDING_PAGES.find((p) => p.slug === slug)
}
