export type BlogPost = {
  id: number;
  title: string;
  author: string;
  image: string;
  alt: string;
  date: string;
  tags: string[];
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
