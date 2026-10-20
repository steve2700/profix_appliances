"use client"

import { useEffect, useMemo, useState } from "react"
import { WhatsAppIcon } from "@/components/icons"
import { AREAS, APPLIANCES } from "@/lib/areas"
import { BRANDS } from "@/lib/brands"
import { WA_LINK } from "@/lib/site"
import { trackWhatsAppClick } from "@/lib/analytics"

const field = "h-12 w-full rounded-2xl border-2 border-silver bg-white px-4 text-lg text-ink placeholder:text-chrome focus:border-azure focus:outline-none"
const chip = (on: boolean) =>
  `rounded-full border-2 px-4 py-2 font-display text-base font-medium transition active:scale-95 ${on ? "border-signal bg-signal text-ink" : "border-silver bg-white text-ink hover:border-ink"}`
const label = "font-display text-xl font-semibold"

export function JobCard({ defaultAppliance = "", defaultArea = "", defaultBrand = "" }: { defaultAppliance?: string; defaultArea?: string; defaultBrand?: string }) {
  const [appliance, setAppliance] = useState(defaultAppliance)
  const [brand, setBrand] = useState(defaultBrand)
  const [fault, setFault] = useState("")
  const [status, setStatus] = useState<"Not working at all" | "Working but faulty">("Not working at all")
  const [area, setArea] = useState(defaultArea)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [ref, setRef] = useState("PF000000")

  useEffect(() => setRef(`PF${Math.floor(100000 + Math.random() * 900000)}`), [])

  const ready = appliance && name.trim()

  const message = useMemo(() => {
    const lines = [
      "*PROFIX JOB CARD*",
      `Ref: ${ref}`,
      `Name: ${name.trim() || "..."}`,
      `Appliance: ${appliance || "..."}`,
      `Brand and model: ${brand.trim() || "Not given"}`,
      `Status: ${status}`,
      `Location: ${area || "Not given"}`,
    ]
    if (fault.trim()) lines.push(`Problem: ${fault.trim()}`)
    if (phone.trim()) lines.push(`Call me on: ${phone.trim()}`)
    lines.push("", "I will send photos in this chat.")
    return lines.join("\n")
  }, [ref, name, appliance, brand, status, area, fault, phone])

  const send = () => {
    if (!ready) return
    trackWhatsAppClick()
    window.open(WA_LINK(message), "_blank", "noopener,noreferrer")
  }

  return (
    <div id="job-card" className="grid scroll-mt-28 gap-8 lg:grid-cols-[1fr_380px]">
      <div className="rounded-[2rem] bg-steel p-6 text-ink md:p-8">
        <fieldset>
          <legend className={label}>What is not working?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {APPLIANCES.map((p) => (
              <button key={p} type="button" aria-pressed={appliance === p} onClick={() => setAppliance(p)} className={chip(appliance === p)}>{p}</button>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={label}>Brand and model</span>
            <input className={`${field} mt-2`} list="brand-list" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Defy, LG, Whirlpool" autoComplete="off" />
            <datalist id="brand-list">{BRANDS.map((b) => <option key={b.slug} value={b.name} />)}</datalist>
          </label>
          <label className="block">
            <span className={label}>Where are you?</span>
            <select className={`${field} mt-2`} value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">Choose an area</option>
              {AREAS.map((a) => <option key={a.slug} value={a.name}>{a.name}</option>)}
              <option value="Other Gauteng area">Other Gauteng area</option>
            </select>
          </label>
        </div>

        <fieldset className="mt-6">
          <legend className={label}>Is it working at all?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(["Not working at all", "Working but faulty"] as const).map((s) => (
              <button key={s} type="button" aria-pressed={status === s} onClick={() => setStatus(s)} className={chip(status === s)}>{s}</button>
            ))}
          </div>
        </fieldset>

        <label className="mt-6 block">
          <span className={label}>What is it doing?</span>
          <textarea className={`${field} mt-2 h-24 py-3`} value={fault} onChange={(e) => setFault(e.target.value)} placeholder="Leaking, not heating, error code, strange noise" />
        </label>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={label}>Your name</span>
            <input className={`${field} mt-2`} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" autoComplete="name" />
          </label>
          <label className="block">
            <span className={label}>Best number to call</span>
            <input className={`${field} mt-2`} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional" inputMode="tel" autoComplete="tel" />
          </label>
        </div>

        <button type="button" onClick={send} disabled={!ready} className="mt-7 flex h-16 w-full items-center justify-center gap-3 rounded-full bg-[#25D366] font-display text-xl font-semibold text-ink transition hover:bg-[#1fbd5b] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-silver disabled:text-graphite/70">
          <WhatsAppIcon className="h-7 w-7" />
          Send job card on WhatsApp
        </button>
        <p className="mt-3 text-center text-sm text-graphite">
          {ready ? "WhatsApp opens with your job card ready to send. Add photos in the chat." : "Choose the appliance and add your name to send."}
        </p>
      </div>

      <aside aria-label="Job card preview" className="relative hidden self-start lg:block">
        <div className="relative rounded-[2rem] border-2 border-dashed border-white/30 bg-white/5 p-7 text-white backdrop-blur">
          <span aria-hidden="true" className="absolute -left-3 top-24 h-6 w-6 rounded-full bg-ink" />
          <span aria-hidden="true" className="absolute -right-3 top-24 h-6 w-6 rounded-full bg-ink" />
          <div className="flex items-baseline justify-between">
            <p className="font-display text-2xl font-bold tracking-wider">JOB CARD</p>
            <p className="font-display text-lg text-signal">{ref}</p>
          </div>
          <dl className="mt-10 space-y-4 text-lg">
            {[["Name", name], ["Appliance", appliance], ["Brand", brand], ["Status", status], ["Location", area], ["Problem", fault], ["Call me on", phone]].map(([k, v]) => (
              <div key={k} className="flex gap-3 border-b border-white/10 pb-3">
                <dt className="w-24 shrink-0 text-silver">{k}</dt>
                <dd className={`min-w-0 break-words ${v ? "text-white" : "text-white/30"}`}>{v || "Waiting"}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-silver">This is exactly what lands in our WhatsApp.</p>
        </div>
      </aside>
    </div>
  )
}
