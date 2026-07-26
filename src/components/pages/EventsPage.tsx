"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarX } from "lucide-react";
import { koulen } from "@/lib/fonts";
import {
  CalendarGrid,
  CalendarGridSkeleton,
  MonthNav,
} from "@/components/content/CalendarGrid";
import { EventCard, EventCardSkeleton } from "@/components/content/EventCard";
import { EventDetailModal } from "@/components/content/EventDetailModal";
import { EventFilterBar } from "@/components/content/EventFilterBar";
import {
  formatDayLabel,
  isSameDay,
  isSameMonth,
  parseEventDate,
} from "@/components/content/calendarUtils";
import { useEvents, View } from "@/context/EventContext";
import { Event } from "@/types/content";

const AGENDA_PAGE_SIZE = 8;
export function EventsPage() {
  const {
    category,
    setCategory,
    view,
    setView,
    currentDate,
    setCurrentDate,
    events,
    isLoading: eventsLoading,
    allCategories,
  } = useEvents();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [search, setSearch] = useState("");
  const [agendaPage, setAgendaPage] = useState(1);

  // `events` is already filtered by category + view/date range from context.
  // Only search narrowing happens here.
  const filteredEvents = useMemo(() => {
    const q = search.toLowerCase().trim();
    return events.filter(
      (event) =>
        !q ||
        event.title.toLowerCase().includes(q) ||
        event.location.toLowerCase().includes(q),
    );
  }, [events, search]);

  // Only "upcoming" can span multiple months; day/week/month are already
  // scoped to currentDate by context, so this filter is a no-op for those.
  const calendarMonthEvents = useMemo(
    () =>
      view === "upcoming"
        ? filteredEvents.filter((e) =>
            isSameMonth(parseEventDate(e.schedule.date), currentDate),
          )
        : filteredEvents,
    [filteredEvents, currentDate, view],
  );

  const selectedDayEvents = useMemo(
    () =>
      selectedDate
        ? filteredEvents
            .filter((e) =>
              isSameDay(parseEventDate(e.schedule.date), selectedDate),
            )
            .sort((a, b) =>
              a.schedule.startTime.localeCompare(b.schedule.startTime),
            )
        : [],
    [filteredEvents, selectedDate],
  );

  const agendaEvents = useMemo(
    () =>
      [...filteredEvents].sort(
        (a, b) =>
          parseEventDate(a.schedule.date).getTime() -
          parseEventDate(b.schedule.date).getTime(),
      ),
    [filteredEvents],
  );
  const visibleAgenda = agendaEvents.slice(0, agendaPage * AGENDA_PAGE_SIZE);
  const hasMoreAgenda = visibleAgenda.length < agendaEvents.length;

  const handleSearch = (v: string) => {
    setSearch(v);
    setAgendaPage(1);
  };
  const handleCategory = (v: string) => {
    setCategory(v);
    setAgendaPage(1);
  };
  const handleViewChange = (v: View) => {
    setView(v);
    setAgendaPage(1);
  };
  const handleReset = () => {
    setSearch("");
    setCategory("all");
    setView("month");
    setAgendaPage(1);
  };
  const handleMonthChange = (v: Date) => setCurrentDate(v);

  return (
    <main className="min-h-screen pt-[88px]">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`text-3xl sm:text-4xl lg:text-5xl mb-4 ${koulen.className}`}
          >
            Our Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            Workshops, socials, and meetings — see what's happening in the
            makerspace.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <EventFilterBar
        search={search}
        onSearchChange={handleSearch}
        category={category}
        onCategoryChange={handleCategory}
        categories={allCategories}
        view={view}
        onViewChange={handleViewChange}
        resultCount={filteredEvents.length}
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop / tablet: calendar-first layout */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
              {eventsLoading ? (
                <CalendarGridSkeleton />
              ) : (
                <CalendarGrid
                  month={currentDate}
                  onMonthChange={handleMonthChange}
                  events={calendarMonthEvents}
                  selectedDate={selectedDate}
                  onSelectDate={setSelectedDate}
                />
              )}
            </div>

            <div>
              <h3 className={`text-lg mb-4 ${koulen.className}`}>
                {selectedDate ? formatDayLabel(selectedDate) : "Select a day"}
              </h3>
              {eventsLoading ? (
                <div className="flex flex-col gap-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <EventCardSkeleton key={i} variant="compact" />
                  ))}
                </div>
              ) : selectedDayEvents.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {selectedDayEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      variant="compact"
                      onClick={setSelectedEvent}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center text-center py-12 px-4 rounded-xl border border-dashed border-slate-200">
                  <CalendarX
                    className="w-8 h-8 text-slate-300 mb-3"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-slate-500">
                    No events on this day
                    {category !== "all" || search
                      ? " matching your filters"
                      : ""}
                    .
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile: agenda/list view */}
          {/* Mobile: agenda/list view */}
          <div className="md:hidden">
            <MonthNav
              month={currentDate}
              onMonthChange={handleMonthChange}
              onToday={() => setCurrentDate(new Date())}
            />
            {eventsLoading ? (
              <div className="flex flex-col gap-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <EventCardSkeleton key={i} variant="compact" />
                ))}
              </div>
            ) : agendaEvents.length > 0 ? (
              <>
                <div className="flex flex-col gap-3">
                  {visibleAgenda.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      variant="compact"
                      onClick={setSelectedEvent}
                    />
                  ))}
                </div>
                {hasMoreAgenda && (
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => setAgendaPage((p) => p + 1)}
                      className="px-8 py-3 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                    >
                      Load more events
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center text-center py-16">
                <CalendarX
                  className="w-10 h-10 text-slate-300 mb-4"
                  aria-hidden="true"
                />
                <p className="text-slate-500 mb-4">
                  No events match those filters.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full py-4 mt-12">
          <p className="text-lg font-semibold mb-4 text-center">
            Want to organize an event?&nbsp;
            <Link href="/contact" className="text-purple-700 underline">
              Contact Us
            </Link>
          </p>
        </div>
      </section>

      <EventDetailModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </main>
  );
}
