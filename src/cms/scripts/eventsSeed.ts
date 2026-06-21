import { Payload } from "payload";
import { highlightEvents, pastEvents } from "../../components/data/events";
import { parseDate } from "./utils";

export const eventSeed = async (payload: Payload) => {
  for (const event of [...highlightEvents, ...pastEvents]) {
    await payload.create({
      collection: "events",
      data: {
        title: event.title,
        date: parseDate(event.date),
        time: event.time,
        image: event.image,
        alt: event.alt,
        location: event.location,
        category: event.category,
        description: event.description,
        url: event.url,
      },
    });
  }
};
