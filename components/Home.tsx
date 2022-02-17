import React, { useEffect } from "react";
import { Post } from "../global/post";
import { Theme } from "../global/theme";
import homeStyles from "../styles/Home.module.scss";
import { updateTheme } from "../utils/componentutils";
import { PostLink } from "./PostLink";

interface Props {
  data: Post[] | null;
  theme: Theme;
}

export const Home: React.FunctionComponent<Props> = ({ data, theme }) => {
  useEffect(() => {
    updateTheme(theme, document.getElementById("homeContainer")!);
  });
  return (
    <div id="homeContainer" className={homeStyles.homeContainer}>
      <h2 id={homeStyles.heading}>Blogs</h2>
      <div className={homeStyles.dataContainer}>
        {data &&
          data.map((post) => {
            return <PostLink key={post.postID} post={post} />;
          })}
      </div>
    </div>
  );
};
