"use client"

import Image from "next/image"
import Link from "next/link"
import { CallButton, CircleCall } from "@/components/buttons"
import { PhoneIcon, WhatsAppIcon } from "@/components/icons"
import { SITE, WA_LINK } from "@/lib/site"
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics"

/** Header for ad landing pages: logo (not a link), one big call button, nothing else to click. */
export function LpHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white text-ink shadow-md shadow-ink/5">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-5">
        <div className="flex items-center gap-3" aria-label="Profix Electronics and Appliances">
          <Image src="/logo-mark.svg" alt="" width={80} height={35} priority className="h-7 w-auto sm:h-9" />
          <span className="h-7 w-px bg-ink/20 sm:h-9" aria-hidden="true" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-[0.12em] sm:text-2xl">PROFIX</span>
            <span className="mt-1 hidden text-[11px] font-medium tracking-wide text-graphite sm:block">Electronics &amp; Appliances</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm font-medium text-graphite lg:block">Serving {SITE.region}</span>
          <div className="hidden sm:block"><CallButton size="md" label={`Call ${SITE.phoneDisplay}`} pulse /></div>
          <div className="sm:hidden"><CircleCall /></div>
        </div>
      </div>
    </header>
  )
}

/** Sticky call and WhatsApp bar on mobile, WhatsApp bubble on desktop. */
export function LpActions({ waMessage }: { waMessage: string }) {
  return (
    <>
      <a href={WA_LINK(waMessage)} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} aria-label="Chat with Profix on WhatsApp" className="group fixed bottom-6 right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-xl shadow-black/30 transition hover:scale-105 md:flex">
        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsAppIcon className="relative h-8 w-8" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-ink px-4 py-2 font-display text-lg text-white opacity-0 transition group-hover:opacity-100">WhatsApp us</span>
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(11,27,52,.12)] backdrop-blur md:hidden">
        <a href={`tel:${SITE.phoneTel}`} onClick={trackCallClick} className="flex h-12 items-center justify-center gap-2 rounded-full bg-signal font-display text-xl font-semibold text-ink active:scale-95"><PhoneIcon className="h-5 w-5" />Call Now</a>
        <a href={WA_LINK(waMessage)} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] font-display text-xl font-semibold text-ink active:scale-95"><WhatsAppIcon className="h-6 w-6" />WhatsApp</a>
      </div>
    </>
  )
}

/** Slim footer: only what ad reviewers and customers need. Opens policies in a new tab so the landing page stays open. */
export function LpFooter() {
  return (
    <footer className="bg-ink px-5 pb-24 pt-10 text-sm text-silver md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} {SITE.name}. Serving {SITE.region}.</p>
        <p className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={`tel:${SITE.phoneTel}`} onClick={trackCallClick} className="font-semibold text-signal hover:underline">{SITE.phoneDisplay}</a>
          <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
          <Link href="/privacy-policy" target="_blank" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms-of-service" target="_blank" className="hover:text-white">Terms of Service</Link>
        </p>
      </div>
    </footer>
  )
}
