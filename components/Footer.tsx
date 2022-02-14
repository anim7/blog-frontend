import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerStyles from "../styles/Footer.module.scss";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.leftFooter}>
        {/* change this later */}
        copyright message
      </div>
      <div className={footerStyles.rightFooter}>
        <a
          href="https://www.linkedin.com/in/anish-pandit-15840a224/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            className={footerStyles.image}
            width={30}
            height={30}
          />
        </a>
        <a href="https://github.com/anim7" target="_blank" rel="noreferrer">
          <Image
            src="/github.png"
            alt="Github"
            className={footerStyles.image}
            width={30}
            height={30}
          />
        </a>
        <button
          onClick={() => {
            window.open(`mailto:anishpandit0703@gmail.com`);
          }}
        >
          {" "}
          <Image
            src="/gmail.png"
            alt="Gmail"
            className={footerStyles.image}
            width={40}
            height={30}
          />
        </button>
      </div>
    </footer>
  );
};
