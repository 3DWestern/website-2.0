"use client";
import useSWR from "swr";
import { createContext, useContext, useState, useMemo } from "react";
import { apiClient } from "@/lib/cms/api.client";
import {
  endOfDay,
  endOfWeek,
  format,
  isSameMonth,
  isWithinInterval,
  startOfDay,
  startOfWeek,
} from "date-fns";
import type { Event, EventCategory } from "@/types/content";

export type View = "day" | "week" | "month" | "upcoming" | "past";
export const views: View[] = ["day", "week", "month", "upcoming", "past"];

const EventsContext = createContext<{
  events: Event[];
  isLoading: boolean;
  view: View;
  setView: (v: View) => void;
  currentDate: Date;
  setCurrentDate: (d: Date) => void;
  category: string | undefined;
  setCategory: (c: string | undefined) => void;
  allCategories: EventCategory[];
} | null>(null);

export function EventsProvider({
  initialEvents,
  initialDate,
  allCategories,
  children,
}: {
  initialEvents: Event[];
  initialDate: Date;
  allCategories: EventCategory[];
  children: React.ReactNode;
}) {
  const [view, setView] = useState<View>("month");
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [category, setCategory] = useState<string | undefined>(undefined);

  const monthKey = format(currentDate, "yyyy-MM");
  const isInitialMonth = monthKey === format(initialDate, "yyyy-MM");

  const { data, isLoading } = useSWR(
    ["events", monthKey],
    () => apiClient.for("events").getByMonth?.(currentDate),
    {
      fallbackData: isInitialMonth ? initialEvents : undefined,
      revalidateOnFocus: false,
    },
  );

  // Single source of truth for category + view/date-range filtering.
  // Every consumer (calendar, agenda, filter bar count) reads the same list.
  const events = useMemo(() => {
    let result = data ?? [];

    if (category && category !== "all") {
      result = result.filter((event) =>
        event.categories.some((cat) => cat.name === category),
      );
    }

    switch (view) {
      case "day": {
        const interval = {
          start: startOfDay(currentDate),
          end: endOfDay(currentDate),
        };
        result = result.filter((e) =>
          isWithinInterval(new Date(e.schedule.startTime), interval),
        );
        break;
      }
      case "week": {
        const interval = {
          start: startOfWeek(currentDate),
          end: endOfWeek(currentDate),
        };
        result = result.filter((e) =>
          isWithinInterval(new Date(e.schedule.startTime), interval),
        );
        break;
      }
      case "month":
        result = result.filter((e) =>
          isSameMonth(new Date(e.schedule.startTime), currentDate),
        );
        break;
      case "upcoming":
        result = result.filter(
          (e) => e.status === "upcoming" || e.status === "ongoing",
        );
        break;
      case "past":
        result = result.filter((e) => e.status === "past");
        break;
    }

    return result;
  }, [data, view, currentDate, category]);

  return (
    <EventsContext.Provider
      value={{
        events,
        isLoading,
        view,
        setView,
        currentDate,
        setCurrentDate,
        category,
        setCategory,
        allCategories,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export const useEvents = () => {
  const ctx = useContext(EventsContext);
  if (!ctx) throw new Error("useEvents must be used within EventsProvider");
  return ctx;
};
