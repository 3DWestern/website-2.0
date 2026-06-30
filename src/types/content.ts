import type { DefaultTypedEditorState } from "@payloadcms/richtext-lexical";

export type Tag = {
  id: number;
  title: string;
  description?: string;
};

export type Author = {
  id: number;
  name: string;
  avatar: {
    url: string;
    alt: string;
  };
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  /** One-sentence summary shown below the title and used in meta tags */
  excerpt?: string;
  /** ISO 8601 date string — Payload stores this as a date field */
  date: string;
  /** Minutes to read — derive this in a Payload beforeChange hook */
  readingTime?: number;
  /** Hero image — Payload upload field */
  coverImage?: {
    url: string;
    alt?: string;
  };
  /** Relationship field pointing at an Authors collection */
  author: Author;
  /** Array of plain strings — Payload array or select field */
  tags?: Tag[];
  /** The main article body.
   * richText type from payload, read docs for more info
   * Includes all DEFAULT features offered by payload
   * https://payloadcms.com/docs/rich-text/official-features
   * */
  content: DefaultTypedEditorState;
};
export type Showcase = {
  id: number;
  title: string;
  creator: string;
  image: string;
  alt: string;
};

export type Sponsor = {
  id: number;
  name: string;
  logo: string;
  alt: string;
  website?: string;
};
