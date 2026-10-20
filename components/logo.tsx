import Image from "next/image"
import Link from "next/link"

export function Logo({ tone = "light", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const onDark = tone === "dark"
  return (
    <Link href="/" aria-label="Profix Electronics and Appliances home" className={`group flex items-center gap-3 ${className}`}>
      <Image src={onDark ? "/logo-mark-light.svg" : "/logo-mark.svg"} alt="" width={80} height={35} priority className="h-7 w-auto transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-9" />
      <span className={`h-7 w-px sm:h-9 ${onDark ? "bg-white/30" : "bg-ink/20"}`} aria-hidden="true" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-bold tracking-[0.12em] sm:text-2xl ${onDark ? "text-white" : "text-ink"}`}>PROFIX</span>
        <span className={`mt-1 hidden text-[11px] font-medium tracking-wide sm:block ${onDark ? "text-silver" : "text-graphite"}`}>Electronics &amp; Appliances</span>
      </span>
    </Link>
  )
}
