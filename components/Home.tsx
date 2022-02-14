import React from "react";
import { Post } from "../global/post";
import homeStyles from "../styles/Home.module.scss";
import { PostLink } from "./PostLink";

interface Props {
  data: Post[] | null;
}

export const Home: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <>
      <h2 id={homeStyles.heading}>Blogs</h2>
      <div className={homeStyles.homeContainer}>
        {data &&
          data.map((post) => {
            return <PostLink key={post.postID} post={post} />;
          })}
      </div>
    </>
  );
};
