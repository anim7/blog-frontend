import { Image } from "./image";
import { User } from "./user";

export interface Post {
  postID: string;
  title: string;
  metaTitle: string;
  summary: string;
  content: string;
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;
  rating: number;
  views: number;
  timeToRead: number;
  author: User;
  titleImage: Image;
  slug: string;
}
