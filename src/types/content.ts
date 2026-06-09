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
  name: string;
  logo: string;
  alt: string;
  website?: string;
};
