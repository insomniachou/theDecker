import Head from "next/head";
// import Link from "next/link";
import { useEffect } from "react";
import { initGA, logPageView } from "../../utils/analytics";

import styles from "./styles.module.scss";

const SITE_TITLE = "The Decker | Yu & Ya's personal website";

export default function Layout({ children, home }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>{SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Yu Zhou and Ya Wang's personal website"
        />
      </Head>
      {/* <nav>
        {home ? null : (
          <Link href="/">
            <a target="_blank" rel="noopener noreferrer">
              Home
            </a>
          </Link>
        )}
      </nav> */}
      <main>{children}</main>
      <footer className={styles.footer}>
        ©2020 Yu Zhou and Ya Wang All Rights Reserved{" "}
      </footer>
    </div>
  );
}
