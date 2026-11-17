"use client"

import type { ReactNode } from "react"
import { trackCallClick, trackEmailClick, trackWhatsAppClick } from "@/lib/analytics"

const track = { call: trackCallClick, whatsapp: trackWhatsAppClick, email: trackEmailClick }

/** A normal link that also counts as a Google Ads conversion. Safe to use inside server pages. */
export function TrackedLink({ kind, href, className, label, children }: { kind: keyof typeof track; href: string; className?: string; label?: string; children: ReactNode }) {
  const external = kind === "whatsapp"
  return (
    <a href={href} onClick={track[kind]} aria-label={label} className={className} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  )
}
