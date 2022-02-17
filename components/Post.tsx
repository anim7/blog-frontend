import Head from "next/head";
import React, { useEffect } from "react";
import { Post } from "../global/post";
import { Theme } from "../global/theme";
import postStyles from "../styles/Post.module.scss";
import { updateTheme } from "../utils/componentutils";

interface Props {
  post: Post | null;
  theme: Theme;
}

export const PostComponent: React.FunctionComponent<Props> = ({
  post,
  theme,
}) => {
  useEffect(() => {
    updateTheme(theme, document.getElementById("postContainer")!);
  });

  return (
    <>
      <Head>
        <title>{post ? post.title : "Fitbit Blog"}</title>
        <meta name="description" content={post?.summary} />
        <meta name="keywords" content={post?.metaTitle} />
      </Head>
      <div className={postStyles.postContainer} id="postContainer">
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
