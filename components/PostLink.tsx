import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "../global/post";
import postLinkStyles from "../styles/PostLink.module.scss";

interface Props {
  post: Post;
}

export const PostLink: React.FunctionComponent<Props> = ({ post }) => {
  const getDateString = (d: Date): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(d);
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };
  return (
    <Link href={`/${post.slug}`}>
      <a className={postLinkStyles.postLinkContainer} id="postLinkContainer">
        {post.titleImage && (
          <div className={postLinkStyles.img}>
            <Image
              src={`data:image/png;base64,${post.titleImage.imageByte}`}
              alt="Blog Title Image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
        <div className={postLinkStyles.desc}>
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
          <div className={postLinkStyles.info}>
            <div className={postLinkStyles.pfp}>
              <Image
                src="/nopfp.jfif"
                alt="profile picture"
                width={40}
                height={40}
              />
            </div>
            <div id={postLinkStyles.authorAndDate}>
              <p id={postLinkStyles.author}>{post.author.username}</p>
              <p>{getDateString(post.publishedAt)}</p>
            </div>
            <span className={postLinkStyles.circle}></span>
            <p>{post.timeToRead} min read</p>
          </div>
        </div>
      </a>
    </Link>
  );
};
