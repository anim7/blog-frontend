import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { Theme } from "../global/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <>
      <Head>
        <title>Fitbit Blog</title>
        <meta
          name="description"
          content="This is a fitbit development blog which will guide you through your fitbit development journey. We will talk about everything right from creating your first fitbit clockface app to making analog and digital watches"
        />
        <meta name="keywords" content="tech fitbit development" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar theme={theme} setTheme={setTheme} />
      <Component {...pageProps} theme={theme} />
      <Footer />
    </>
  );
};

export default MyApp;
