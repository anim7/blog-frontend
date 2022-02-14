import Head from "next/head";
import React from "react";
import { Post } from "../global/post";
import postStyles from "../styles/Post.module.scss";

interface Props {
  post: Post | null;
}

export const PostComponent: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post ? post.title : "Fitbit Blog"}</title>
        <meta name="description" content={post?.summary} />
        <meta name="keywords" content={post?.metaTitle} />
      </Head>
      <div className={postStyles.postContainer}>
        {post && (
          <>
            <h1 className={postStyles.title}>{post.title}</h1>
            <hr />
            <p className={postStyles.content}>{post.summary}</p>
            <hr />
            <p className={postStyles.content}>{post.content}</p>
          </>
        )}
      </div>
    </>
  );
};
