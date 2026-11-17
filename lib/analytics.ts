// Fill these in once you've created your Google Ads conversion actions:
// Google Ads > Goals > Conversions > Summary > [action] > Tag setup > Google tag
// Paste your conversion ID (starts with AW-) and each action's label below.
// Until GOOGLE_ADS_CONVERSION_ID is set, these functions do nothing — safe to
// leave blank while you're not running ads yet.

// Google tag installed on every page (from Google Ads > Install the Google tag).
// It is added in app/layout.tsx. Only one Google tag should load per page.
export const GOOGLE_TAG_ID = "GTM-PSNHX3Z6"

export const GOOGLE_ADS_CONVERSION_ID = "AW-18574546229"

export const CONVERSION_LABELS = {
  call: "Dxf9COfN8LkdELWqhJlF", // Click to call conversion
  whatsapp: "IHmjCPis8bkdELWqhJlF", // WhatsApp click conversion
  email: "", // label for email clicks
}

/** Always tells the Google tag container about the click, so you can build triggers on these events. */
function pushEvent(name: string) {
  if (typeof window === "undefined") return
  const w = window as typeof window & { dataLayer?: unknown[] }
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: name })
}

function fireConversion(label: string) {
  if (!GOOGLE_ADS_CONVERSION_ID || !label) return
  if (typeof window === "undefined") return
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag !== "function") return
  w.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${label}`,
    value: 1.0,
    currency: "ZAR",
  })
}

export function trackCallClick() {
  pushEvent("call_click")
  fireConversion(CONVERSION_LABELS.call)
}
export function trackWhatsAppClick() {
  pushEvent("whatsapp_click")
  fireConversion(CONVERSION_LABELS.whatsapp)
}
export function trackEmailClick() {
  pushEvent("email_click")
  fireConversion(CONVERSION_LABELS.email)
}
