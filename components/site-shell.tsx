"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

/**
 * Wraps every page with the normal site header, footer and floating buttons.
 * Ad landing pages (/lp/...) get none of that: no menu, no footer links, no
 * distractions. They bring their own slim header and sticky call bar.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  const path = usePathname() ?? ""
  if (path === "/lp" || path.startsWith("/lp/")) {
    return <main className="pb-[72px] md:pb-0">{children}</main>
  }
  return (
    <>
      <Header />
      <main className="pb-[72px] md:pb-0">{children}</main>
      <Footer />
      <FloatingActions />
    </>
  )
}
