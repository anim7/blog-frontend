import axios, { AxiosError, AxiosResponse } from "axios";
import { Post } from "../global/post";

const URL = process.env.URL;

export const getPosts = async (): Promise<null | Post[]> => {
  let data: Post[] | null = null;
  if (URL) {
    await axios
      .get(`${URL}/api/posts`)
      .then((res: AxiosResponse) => {
        data = res.data;
      })
      .catch((err: AxiosError) => {
        throw new Error(err.message);
      });
  } else {
    throw new Error("URL not found");
  }
  return data;
};

export const getPost = async (slug: string): Promise<null | Post> => {
  let data: Post | null = null;
  if (URL) {
    await axios
      .get(`${URL}/api/posts/slug?slug=${slug}`)
      .then((res: AxiosResponse) => {
        data = res.data;
      })
      .catch((err: AxiosError) => {
        throw new Error(err.message);
      });
  } else {
    throw new Error("URL not found");
  }
  return data;
};
