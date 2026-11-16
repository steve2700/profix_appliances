import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LandingPage } from "@/components/lp/landing-page"
import { LANDING_PAGES, LP_NOINDEX, getLp } from "@/lib/landing-pages"
import { SITE } from "@/lib/site"

export const dynamicParams = false
export function generateStaticParams() {
  return LANDING_PAGES.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const lp = getLp(slug)
  if (!lp) return {}
  return {
    title: lp.metaTitle,
    description: lp.metaDescription,
    keywords: lp.keywords,
    alternates: { canonical: `/lp/${lp.slug}` },
    robots: LP_NOINDEX ? { index: false, follow: false } : undefined,
    openGraph: { title: lp.metaTitle, description: lp.metaDescription, url: `${SITE.url}/lp/${lp.slug}`, images: [{ url: lp.hero.src }] },
  }
}

export default async function LandingRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lp = getLp(slug)
  if (!lp) notFound()
  return <LandingPage lp={lp} />
}
