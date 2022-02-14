import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import navStyles from "../styles/Navbar.module.scss";
import { handleLinkClick, handleClick } from "../utils/navutils";

const { useEffect } = React;

export const Navbar: React.FunctionComponent = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath == "/") {
      handleLinkClick("homeLink", navStyles.link, navStyles.activeLink, false);
    } else if (router.asPath == "/contact") {
      handleLinkClick(
        "contactLink",
        navStyles.link,
        navStyles.activeLink,
        false
      );
    } else {
      handleLinkClick("none", navStyles.link, navStyles.activeLink, true);
    }
  }, [router.asPath]);

  return (
    <nav className={navStyles.navContainer}>
      <button
        className={navStyles.expandBtn}
        onClick={() => {
          handleClick(
            navStyles.navContainer,
            navStyles.activeContainer,
            navStyles.links,
            navStyles.active,
            navStyles.authBtns
          );
        }}
      >
        <span className={navStyles.expandBtnLine}></span>
        <span className={navStyles.expandBtnLine}></span>
        <span className={navStyles.expandBtnLine}></span>
      </button>
      <div className={navStyles.leftContainer}>
        <Link href="/">
          <a className={navStyles.logo}>
            <h1>Fitbit Blog</h1>
          </a>
        </Link>
        <ul className={navStyles.links}>
          <li className={navStyles.link} id="homeLink">
            <Link href="/">
              <a
                onClick={() => {
                  handleLinkClick(
                    "homeLink",
                    navStyles.link,
                    navStyles.activeLink,
                    false
                  );
                }}
              >
                <p>Home</p>
              </a>
            </Link>
          </li>
          <li className={navStyles.link} id="contactLink">
            <Link href="/contact">
              <a
                onClick={() => {
                  handleLinkClick(
                    "contactLink",
                    navStyles.link,
                    navStyles.activeLink,
                    false
                  );
                }}
              >
                <p>Contact</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={navStyles.rightContainer}>
        <Link href="/auth/signup">
          <a className={navStyles.authBtns}>Sign Up</a>
        </Link>
        <Link href="/auth/signin">
          <a className={navStyles.authBtns}>Sign In</a>
        </Link>
      </div>
    </nav>
  );
};
