import Image from "next/image"
import Link from "next/link"
import { BRANDS } from "@/lib/brands"

/** Endless scrolling row of brand logos. Pauses on hover. */
export function BrandStrip({ title = "Brands we repair" }: { title?: string }) {
  const row = (hidden: boolean) =>
    BRANDS.map((b) => (
      <Link key={`${hidden}-${b.slug}`} href={`/brands/${b.slug}`} tabIndex={hidden ? -1 : undefined} aria-hidden={hidden || undefined} aria-label={hidden ? undefined : `${b.name} repairs`} className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl bg-white px-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <Image src={b.logo} alt={hidden ? "" : `${b.name} logo`} width={b.w} height={b.h} className="max-h-11 w-auto max-w-full object-contain" />
      </Link>
    ))
  return (
    <section aria-label={title} className="py-12">
      <p className="mb-6 text-center font-display text-2xl font-semibold text-graphite">{title}</p>
      <div className="overflow-hidden">
        <div className="strip-fast flex w-max gap-4 pr-4">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  )
}
