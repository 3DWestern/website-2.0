import payload from "payload";
import config from "../../../payload.config";
import { highlightEvents, pastEvents } from "../../components/data/events";

const parseDate = (dateStr: string) => {
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  return new Date(cleaned).toISOString();
};

export const eventSeed = async () => {
  await payload.init({ config });

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
