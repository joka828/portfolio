import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";

import { visitTracking, initiliazeUserId } from "../helpers/trackings";
import styles from "../styles/Layout.module.css";
import "../styles/globals.css";

const TOPBAR_ITEMS = [
  {
    text: "Home",
    path: "",
  },
  {
    text: "Work experience",
    path: "work",
  },
  {
    text: "Personal Projects",
    path: "projects",
  },
  {
    text: "Contact me!",
    path: "contact",
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const firstPathParameter = router.pathname.slice(1).split("/")[0];

  useEffect(() => {
    initiliazeUserId();
    if (process.env.NODE_ENV !== "development") {
      visitTracking(firstPathParameter || "dashboard");
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Joaquin, Candalaft, portfolio, linkedin, developer, github"
        />
        <meta name="author" content="Joaquin Candalaft" />
        <meta
          property="og:image"
          content="https://joaquincandalaft.com/avatar.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.layoutWrapper}>
        <div className={styles.layout}>
          {/* TO DO: make the topbar actually responsive (maybe a burger) */}
          <div className={styles.topbar}>
            {TOPBAR_ITEMS.map((item) => (
              <Link key={item.path} href={`/${item.path}`}>
                <span
                  className={`${styles.topbarItem} ${firstPathParameter === item.path ? styles.highlighted : ""}`}
                >
                  {item.text}
                  <div className={styles.underlineWrapper}>
                    <div className={styles.underline} />
                  </div>
                </span>
              </Link>
            ))}
          </div>
          <Component {...pageProps} />
        </div>
        <div className={`${styles.backgroundDecoratorWrapper}`}>
          <div
            className={`${styles.backgroundDecorator} ${firstPathParameter ? styles.leftSideBackgroundDecorator : styles.rightSideBackgroundDecorator}`}
          />
        </div>
      </div>
    </>
  );
}

export default MyApp;
