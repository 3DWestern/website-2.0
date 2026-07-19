"use client";

import { useId } from "react";
import { Search, X } from "lucide-react";
import type { EventCategory } from "@/components/data/events";
import { cn } from "../ui/utils";

export type DateRangeFilter = "all" | "week" | "month" | "upcoming" | "past";

const dateRangeOptions: { value: DateRangeFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
  { value: "upcoming", label: "Upcoming" },
  { value: "past", label: "Past" },
];

type EventFilterBarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  category: EventCategory | "all";
  onCategoryChange: (value: EventCategory | "all") => void;
  categories: EventCategory[];
  dateRange: DateRangeFilter;
  onDateRangeChange: (value: DateRangeFilter) => void;
  resultCount: number;
};

export function EventFilterBar({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  categories,
  dateRange,
  onDateRangeChange,
  resultCount,
}: EventFilterBarProps) {
  const searchId = useId();

  return (
    <section className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="relative w-full sm:w-72">
              <label htmlFor={searchId} className="sr-only">
                Search events
              </label>
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id={searchId}
                type="text"
                placeholder="Search events…"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-9 py-2 text-sm rounded-lg border border-slate-200 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              />
              {search && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div role="group" aria-label="Filter by date range" className="flex flex-wrap gap-2">
              {dateRangeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => onDateRangeChange(opt.value)}
                  aria-pressed={dateRange === opt.value}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400",
                    dateRange === opt.value
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200",
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <span className="sm:ml-auto text-xs text-slate-400 whitespace-nowrap">
              {resultCount} {resultCount === 1 ? "event" : "events"}
            </span>
          </div>

          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange("all")}
              aria-pressed={category === "all"}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400",
                category === "all"
                  ? "bg-purple-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200",
              )}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                aria-pressed={category === cat}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400",
                  category === cat
                    ? "bg-purple-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}