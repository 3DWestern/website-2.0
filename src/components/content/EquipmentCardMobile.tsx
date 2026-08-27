"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { EquipmentItem } from "@/components/data/equipment";

interface EquipmentCardMobileProps {
  item: EquipmentItem;
  isActive: boolean;
  onToggle: () => void;
}

export function EquipmentCardMobile({
  item,
  isActive,
  onToggle,
}: EquipmentCardMobileProps) {
  return (
    <div className="clip-corners-sm overflow-hidden bg-black-bg">
      <button
        onClick={onToggle}
        className="relative block w-full overflow-hidden transition-[height] duration-500 ease-out"
        style={{ height: isActive ? 220 : 90 }}
      >
        <Image src={item.image} alt={item.alt} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center bg-black/30 px-5">
          <h4 className="text-base font-semibold">
            {item.title}
          </h4>
        </div>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: isActive ? "1fr" : "0fr",
          transition: "grid-template-rows .4s ease",
        }}
      >
        <div className="overflow-hidden">
          <div className="bg-grey-bg p-5">
            <p className="text-sm leading-relaxed text-secondary-text">
              {item.description}
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-purple-light">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {item.location}
            </div>
            <Link
              href={item.href}
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary-text hover:text-purple-light"
            >
              Book equipment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}