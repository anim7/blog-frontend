import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { PostComponent } from "../../components/Post";
import { Post } from "../../global/post";
import { Theme } from "../../global/theme";
import { getPost } from "../../utils/postutils";

interface Props {
  post: Post | null;
  theme: Theme;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const PostPage: NextPage<Props> = ({ post, theme }) => {
  return <PostComponent post={post} theme={theme} />;
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let data: Post | null = null;
  const { slug } = context.params as IParams;
  await getPost(slug)
    .then((res: Post | null) => {
      data = res;
    })
    .catch((err: Error) => {
      console.error(err);
    });
  return {
    props: {
      post: data,
    },
    revalidate: 100,
  };
};
