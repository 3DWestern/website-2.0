import { describe, it, expect } from "vitest";
import {
  getEvents,
  getEventsInRange,
  getEventsByDay,
  getEventsByWeek,
  getEventsByMonth,
} from "@/lib/cms/fetch";

describe("events", () => {
  it("fetches all events", async () => {
    const allEvents = await getEvents();
    console.log("Output: ", allEvents.toString().substring(0, 300));
    console.log("Length: ", allEvents.length);
    expect(Array.isArray(allEvents)).toBe(true);
  });

  it("fetches events by category", async () => {
    const byCategory = await getEvents("workshop");
    console.log("Output: ", byCategory.toString().substring(0, 300));
    console.log("Length: ", byCategory.length);
    expect(Array.isArray(byCategory)).toBe(true);
  });

  it("fetches events in a date range", async () => {
    const inRange = await getEventsInRange(
      new Date("2025-01-01"),
      new Date("2025-12-31"),
    );
    console.log("Output: ", inRange.toString().substring(0, 300));
    console.log("Length: ", inRange.length);
    expect(Array.isArray(inRange)).toBe(true);
  });

  it("fetches events by day", async () => {
    const byDay = await getEventsByDay(new Date());
    console.log("Output: ", byDay.toString().substring(0, 300));
    console.log("Length: ", byDay.length);
    expect(Array.isArray(byDay)).toBe(true);
  });

  it("fetches events by week", async () => {
    const byWeek = await getEventsByWeek(new Date());
    console.log("Output: ", byWeek.toString().substring(0, 300));
    console.log("Length: ", byWeek.length);
    expect(Array.isArray(byWeek)).toBe(true);
  });

  it("fetches events by month", async () => {
    const byMonth = await getEventsByMonth(new Date());
    console.log("Output: ", byMonth.toString().substring(0, 300));
    console.log("Length: ", byMonth.length);
    expect(Array.isArray(byMonth)).toBe(true);
  });
});
