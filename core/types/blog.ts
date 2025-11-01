export type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  content: React.ComponentType;
};