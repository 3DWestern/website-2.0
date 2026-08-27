import { EquipmentGridDesktop } from "@/components/content/EquipmentGridDesktop";
import { EquipmentListMobile } from "@/components/content/EquipmentListMobile";

export function EquipmentSection() {
  return (
    <section className="w-full bg-[#0B0D10] px-6 py-16 lg:py-24">
      <div className="mb-12 text-center lg:mb-16">
        <h2 className="text-primary-text">Equipment</h2>
        <p className="mt-3 text-[15px] text-muted sm:text-base">
          Industrial-grade tools, ready whenever you are.
        </p>
      </div>

      <EquipmentGridDesktop />
      <EquipmentListMobile />
    </section>
  );
}