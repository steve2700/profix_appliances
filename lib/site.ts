// Contact details for Profix. Change them here and the whole site updates.
export const SITE = {
  name: "Profix Electronics & Appliances",
  shortName: "Profix",
  url: "https://www.profixappliances.co.za",
  phoneDisplay: "072 033 5950",
  phoneTel: "+27720335950",
  whatsapp: "27720335950",
  email: "contact@profixappliances.co.za",
  tagline: "Electronics & Appliances",
  // Used in headlines and schema. Confirm the real service area with the client.
  region: "Gauteng and its outskirts",
}

export const WA_LINK = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
