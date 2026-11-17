"use client"

import { useEffect, useMemo, useState } from "react"
import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { AREAS } from "@/lib/areas"
import { SITE, WA_LINK } from "@/lib/site"
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics"
import type { LpForm } from "@/lib/landing-pages"

const field = "h-12 w-full rounded-2xl border-2 border-silver bg-white px-4 text-lg text-ink placeholder:text-chrome focus:border-azure focus:outline-none"
const chip = (on: boolean) =>
  `rounded-full border-2 px-4 py-2 font-display text-base font-medium transition active:scale-95 ${on ? "border-signal bg-signal text-ink" : "border-silver bg-white text-ink hover:border-ink"}`
const label = "font-display text-xl font-semibold"

export function LeadCard({ form, subject, source }: { form: LpForm; subject: string; source: string }) {
  const [fault, setFault] = useState("")
  const [status, setStatus] = useState(form.statuses[0])
  const [detail, setDetail] = useState("")
  const [more, setMore] = useState("")
  const [area, setArea] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [ref, setRef] = useState("PF000000")

  useEffect(() => setRef(`PF${Math.floor(100000 + Math.random() * 900000)}`), [])

  useEffect(() => {
    const pick = (e: Event) => {
      const f = (e as CustomEvent<string>).detail
      if (form.faults.includes(f)) setFault(f)
    }
    window.addEventListener("lp-fault", pick)
    return () => window.removeEventListener("lp-fault", pick)
  }, [form.faults])

  const ready = Boolean(fault && name.trim())

  const message = useMemo(() => {
    const lines = [
      "*PROFIX JOB CARD*",
      `Ref: ${ref}`,
      `Service: ${subject}`,
      `Name: ${name.trim() || "..."}`,
      `Problem: ${fault || "..."}`,
      `${form.detailLabel}: ${detail.trim() || "Not given"}`,
      `Status: ${status}`,
      `Location: ${area || "Not given"}`,
    ]
    if (more.trim()) lines.push(`Details: ${more.trim()}`)
    if (phone.trim()) lines.push(`Call me on: ${phone.trim()}`)
    lines.push("", "I will send photos in this chat.", `Source: ${source}`)
    return lines.join("\n")
  }, [ref, subject, name, fault, form.detailLabel, detail, status, area, more, phone, source])

  const send = () => {
    if (!ready) return
    trackWhatsAppClick()
    window.open(WA_LINK(message), "_blank", "noopener,noreferrer")
  }

  return (
    <div id="quote" className="grid scroll-mt-24 gap-8 lg:grid-cols-[1fr_340px]">
      <div className="rounded-[2rem] bg-steel p-6 text-ink md:p-8">
        <fieldset>
          <legend className={label}>{form.faultLabel}</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {form.faults.map((f) => (
              <button key={f} type="button" aria-pressed={fault === f} onClick={() => setFault(f)} className={chip(fault === f)}>{f}</button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className={label}>{form.statusLabel}</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {form.statuses.map((s) => (
              <button key={s} type="button" aria-pressed={status === s} onClick={() => setStatus(s)} className={chip(status === s)}>{s}</button>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={label}>{form.detailLabel}</span>
            <input className={`${field} mt-2`} value={detail} onChange={(e) => setDetail(e.target.value)} placeholder={form.detailPlaceholder} autoComplete="off" />
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

        <label className="mt-6 block">
          <span className={label}>Anything else we should know?</span>
          <textarea className={`${field} mt-2 h-24 py-3`} value={more} onChange={(e) => setMore(e.target.value)} placeholder={form.faultPlaceholder} />
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
          {ready ? "WhatsApp opens with your job card ready to send. Add photos in the chat." : "Choose what is happening and add your name to send."}
        </p>
      </div>

      <aside aria-label="Prefer to talk" className="self-start rounded-[2rem] border-2 border-dashed border-white/30 bg-white/5 p-7 text-white">
        <p className="font-display text-3xl font-bold leading-tight">Rather talk to someone?</p>
        <p className="mt-3 text-lg text-silver">Call us now. Tell us what is happening and where you are.</p>
        <a href={`tel:${SITE.phoneTel}`} onClick={trackCallClick} className="ring mt-6 flex h-16 items-center justify-center gap-3 rounded-full bg-signal font-display text-2xl font-semibold text-ink transition hover:bg-signal-dark active:scale-95">
          <PhoneIcon className="h-6 w-6" />
          {SITE.phoneDisplay}
        </a>
        <p className="mt-5 text-sm text-silver">Your job card goes straight to our WhatsApp, ready for us to reply.</p>
      </aside>
    </div>
  )
}
