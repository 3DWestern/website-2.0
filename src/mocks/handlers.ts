import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3000/api/blogs", () => {
    return HttpResponse.json({
      docs: [
        {
          id: 10,
          title: "Recap: Our Spring Hackathon Was a Blast",
          slug: "club-hackathon-recap",
          excerpt:
            "Over 40 students built 12 projects in 24 hours. Here's a look back at what we made.",

          author: {
            id: 2,
            name: "Marcus Lee",

            avatar: {
              url: "/images/avatar.webp",
              alt: "Marcus Lee",
            },
            updatedAt: "2026-06-21T20:06:12.407Z",
            createdAt: "2026-06-21T20:06:12.407Z",
          },
          date: "2025-05-25T16:45:00.000Z",
          readingTime: 4,

          coverImage: {
            url: "/images/workshop1.webp",
            alt: "Students collaborating around laptops",
          },

          tags: [
            {
              id: "6a3854cc176e5fb9a837ce1f",
              tag: "Events",
            },

            {
              id: "6a3854cc176e5fb9a837ce20",
              tag: "Community",
            },

            {
              id: "6a3854cc176e5fb9a837ce21",
              tag: "Hackathon",
            },
          ],

          content: {
            root: {
              type: "root",
              format: "",
              indent: 0,
              version: 1,

              children: [
                {
                  type: "paragraph",
                  format: "",
                  indent: 0,
                  version: 1,

                  children: [
                    {
                      mode: "normal",
                      text: "From late-night debugging to final demos, this year's hackathon brought out some incredible ideas.",
                      type: "text",
                      style: "",
                      detail: 0,
                      format: 0,
                      version: 1,
                    },
                  ],
                  direction: "ltr",
                  textFormat: 0,
                },
              ],
              direction: "ltr",
            },
          },
          updatedAt: "2026-06-21T21:18:00.926Z",
          createdAt: "2026-06-21T21:17:00.133Z",
          _status: "published",
        },
      ],
      totalDocs: 1,
      limit: 10,
      page: 1,
      totalPages: 1,
    });
  }),
];
