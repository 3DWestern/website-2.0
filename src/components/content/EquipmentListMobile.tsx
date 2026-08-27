"use client";

import { useState } from "react";
import { equipment } from "@/components/data/equipment";
import { EquipmentCardMobile } from "./EquipmentCardMobile";

export function EquipmentListMobile() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-4 lg:hidden">
      {equipment.map((item) => (
        <EquipmentCardMobile
          key={item.id}
          item={item}
          isActive={activeId === item.id}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}