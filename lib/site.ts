// Contact details for Profix. Change them here and the whole site updates.
export const SITE = {
  name: "Profix Electronics & Appliances",
  shortName: "Profix",
  url: "https://www.profixappliances.co.za",
  phoneDisplay: "073 225 1047",
  phoneTel: "+27732251047",
  whatsapp: "27732251047",
  email: "info@profixappliances.co.za",
  tagline: "Electronics & Appliances",
  // Used in headlines and schema. Confirm the real service area with the client.
  region: "Gauteng and its outskirts",
}

export const WA_LINK = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
