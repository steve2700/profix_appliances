import { MovingImage } from "@/components/moving-image"

const chip = "absolute z-10 rounded-full bg-white px-4 py-2 font-display text-base font-semibold text-ink shadow-lg shadow-ink/15"

export function HeroCollage() {
  return (
    <div className="relative" aria-label="Profix technicians at work">
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="float-a"><MovingImage src="/profix-appliances-top-load-washing-machine-field-repair.jpg" alt="Technician repairing a top loader washing machine on site" priority className="aspect-[3/4] rounded-[2.5rem]" sizes="(min-width: 1024px) 22vw, 45vw" /></div>
          <div className="float-c"><MovingImage src="/profix-appliances-fridge-freezer-gas-recharge-repair.jpg" alt="Fridge freezer being regassed with gauges connected" variant={1} priority className="aspect-[4/3] rounded-[2.5rem]" sizes="(min-width: 1024px) 22vw, 45vw" /></div>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:mt-14 sm:gap-5">
          <div className="float-b"><MovingImage src="/profix-electronics-microwave-transformer-magnetron-repair.jpg" alt="Microwave being repaired on a workbench" variant={2} priority className="aspect-[4/3] rounded-[2.5rem]" sizes="(min-width: 1024px) 22vw, 45vw" /></div>
          <div className="float-a"><MovingImage src="/profix-appliances-air-conditioner-wall-unit-installation.jpg" alt="Air conditioner wall unit being installed" variant={1} className="aspect-[3/4] rounded-[2.5rem]" sizes="(min-width: 1024px) 22vw, 45vw" /></div>
        </div>
      </div>
      <span className={`${chip} float-b left-[-6px] top-[38%] sm:left-[-18px]`}>Washing machines</span>
      <span className={`${chip} float-a right-[-4px] top-[6%] sm:right-[-14px]`}>Microwaves</span>
      <span className={`${chip} float-c bottom-[22%] right-[-4px] sm:right-[-14px]`}>Air conditioners</span>
      <span className={`${chip} float-b bottom-[4%] left-[8%]`}>Fridges and freezers</span>
    </div>
  )
}
