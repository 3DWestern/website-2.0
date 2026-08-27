"use client";

import { useState } from "react";
import { equipment } from "@/components/data/equipment";
import { EquipmentCardDesktop } from "./EquipmentCardDesktop";

export function EquipmentGridDesktop() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const rows = [equipment.slice(0, 3), equipment.slice(3, 6)];

  return (
    <div className="mx-auto hidden max-w-[1400px] flex-col gap-6 lg:flex">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          onMouseLeave={() => setActiveId(null)}
          className="flex justify-center gap-6"
        >
          {row.map((item) => (
            <EquipmentCardDesktop
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onHover={() => setActiveId(item.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}