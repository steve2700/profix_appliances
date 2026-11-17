"use client"

import { useEffect, useState } from "react"
import { AREAS } from "@/lib/areas"

/**
 * Headline that matches the town in the ad. Use ad final URLs like
 * /lp/generator-repairs?area=Pretoria and the headline becomes
 * "Generator Repairs in Pretoria". Only known areas are accepted.
 */
export function LpH1({ base, template, className }: { base: string; template?: string; className?: string }) {
  const [text, setText] = useState(base)
  useEffect(() => {
    if (!template) return
    const wanted = new URLSearchParams(window.location.search).get("area")?.trim().toLowerCase()
    const hit = wanted ? AREAS.find((a) => a.name.toLowerCase() === wanted || a.slug === wanted) : undefined
    if (hit) setText(template.replace("{area}", hit.name))
  }, [template])
  return <h1 className={className}>{text}</h1>
}

/** Scrolls to a section named in the link, e.g. /lp/generator-repairs?go=quote */
export function LpScroll() {
  useEffect(() => {
    const go = new URLSearchParams(window.location.search).get("go")
    if (!go || !/^[a-z-]+$/.test(go)) return
    const t = window.setTimeout(() => document.getElementById(go)?.scrollIntoView({ behavior: "smooth", block: "start" }), 350)
    return () => window.clearTimeout(t)
  }, [])
  return null
}

/** Picks the fault in the job card and scrolls to it. */
export function FixThisButton({ fault }: { fault: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        window.dispatchEvent(new CustomEvent("lp-fault", { detail: fault }))
        document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }}
      className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 font-display text-lg font-semibold text-white transition hover:bg-graphite active:scale-95"
    >
      Get this fixed <span aria-hidden="true" className="text-signal">&rsaquo;</span>
    </button>
  )
}
