import Head, { Link } from "next/head";

import styles from "./styles.module.scss";

const SITE_TITLE = "The Decker | Yu & Ya's personal website";

export default function Layout({ children, home }) {
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
      <nav>
        {home ? null : <Link href="/">Home</Link>}
      </nav>
      <main>{children}</main>
      <footer className={styles.footer}>©2020 Yu Zhou and Ya Wang All Rights Reserved </footer>
    </div>
  );
}
