import type { Event } from "@/components/data/events";
import { MenuItem } from "@/components/data/teamdata";
import { BlogPost, Showcase, Sponsor, Author } from "@/types/content";

// Get the ordinal identifier for the day
const getOrdinal = (day: number) => {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

// format date into Month DD, YYYY
export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = getOrdinal(date.getDate());
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

// Transform ONE payload doc object to an event object
export const transformEvent = (doc: any): Event => {
  return {
    id: doc.id,
    title: doc.title,
    date: formatDate(doc.date),
    time: doc.time,
    image: doc.image,
    alt: doc.alt,
    location: doc.location,
    category: doc.category,
    description: doc.description,
    url: doc.url || "",
  };
};

// transform an entire payload doc to event objects
export const transformEvents = (docs: any[]): Event[] => {
  return transformDocs<Event>(docs, transformEvent);
};

// transform ONE payload doc object to an event object
export const transformSponsor = (doc: any): Sponsor => {
  return {
    id: doc.id,
    name: doc.name,
    logo: doc.logo,
    alt: doc.alt,
    website: doc.website || "",
  };
};

// transform an entire payload doc to sponsor objects
export const transformSponsors = (docs: any[]): Sponsor[] => {
  return transformDocs<Sponsor>(docs, transformSponsor);
};

// transform ONE payload doc object into a blog
export const transformBlog = (doc: any): BlogPost => {
  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    // author may come back as just an ID (string/number) if not populated,
    // or as a full Author object if fetched with depth >= 1
    author:
      typeof doc.author === "object" && doc.author !== null
        ? {
            id: doc.author.id,
            name: doc.author.name,
            avatar: doc.author.avatar,
          }
        : doc.author, // fallback: unpopulated, just the raw ID
    date: formatDate(doc.date),
    readingTime: doc.readingTime,
    coverImage: doc.coverImage,
    tags: doc.tags?.map((t: { tag: string }) => t.tag),
    content: doc.content,
  };
};

// transform an entire payload doc to blog objects
export const transformBlogs = (docs: any[]): BlogPost[] => {
  return transformDocs<BlogPost>(docs, transformBlog);
};

export const transformAuthor = (doc: any): Author => {
  return {
    id: doc.id,
    name: doc.name,
    avatar: doc.avatar,
  };
};

export const transformAuthors = (docs: any[]): Author[] => {
  return transformDocs<Author>(docs, transformAuthor);
};

// transform ONE payload doc object into a showcase object
export const transformProject = (doc: any): Showcase => {
  return {
    id: doc.id,
    title: doc.title,
    creator: doc.creator,
    image: doc.image,
    alt: doc.alt,
  };
};

// transform an entire payload doc to showcase objects
export const transformProjects = (docs: any[]): Showcase[] => {
  return transformDocs<Showcase>(docs, transformProject);
};

// transform ONE payload doc object into a team member object
export const transformTeamMember = (doc: any): MenuItem => {
  return {
    image: doc.image,
    name: doc.name,
    role: doc.role,
    description: doc.description || "",
    emoji: doc.emoji || "",
    linkedin: doc.linkedin || "",
    github: doc.github || "",
    website: doc.website || "",
  };
};

// transform an entire payload doc to team member objects
export const transformTeamMembers = (docs: any[]): MenuItem[] => {
  return transformDocs<MenuItem>(docs, transformTeamMember);
};

// Transform an entire payload doc to a generic typed object
export const transformDocs = <T>(
  docs: any[],
  transformItem: (doc: any) => T,
): T[] => {
  return docs.map(transformItem);
};
