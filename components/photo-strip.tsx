import { MovingImage } from "@/components/moving-image"

const photos: [string, string][] = [
  ["/profix-appliances-built-in-electric-oven-hob.jpg", "Built in electric oven and hob"],
  ["/profix-appliances-washing-machine-motor-repair.jpg", "Washing machine motor being repaired"],
  ["/profix-gates-modern-wooden-slat-sliding-gate.jpg", "Modern wooden slat sliding gate"],
  ["/profix-electronics-samsung-microwave-digital-panel.jpg", "Samsung microwave with digital panel"],
  ["/profix-appliances-defy-gemini-petit-chef-oven.jpg", "Defy oven"],
  ["/profix-appliances-hvac-ac-installation-finished.jpg", "Air conditioner outdoor unit installed"],
  ["/profix-appliances-refrigerator-condenser-gas-servicing.jpg", "Fridge serviced on site"],
  ["/profix-appliances-oven-control-board-repair.jpg", "Oven control board repair"],
  ["/profix-gates-technician-welding-palisade-gate.jpg", "Technician welding a palisade gate"],
  ["/profix-appliances-front-load-washer-dryer-servicing.jpg", "Front load washer servicing"],
]

export function PhotoStrip() {
  const all = [...photos, ...photos]
  return (
    <div className="overflow-hidden" aria-label="Recent work">
      <div className="strip flex w-max gap-4">
        {all.map(([src, alt], i) => (
          <MovingImage key={i} src={src} alt={i < photos.length ? alt : ""} variant={i} sizes="320px" className="h-64 w-72 shrink-0 rounded-[2rem]" markWidth={40} />
        ))}
      </div>
    </div>
  )
}
