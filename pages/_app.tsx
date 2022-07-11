import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { useMemo } from 'react'

import styles from '../styles/Layout.module.css'
import '../styles/globals.css'


const TOPBAR_ITEMS = [
  {
    text: 'Home',
    path: '',
  },
  {
    text: 'Work experience',
    path: 'work',
  },
  {
    text: 'Personal Projects',
    path: 'projects',
  },
  {
    text: 'Contact me!',
    path: 'contact',
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const firstPathParam = router.pathname.slice(1).split('/')[0];

  const decoratorClasses = useMemo(() => {
    const classes = [];
    if (firstPathParam) {
      classes.push(styles.decoratorLeft);
    } else {
      classes.push(styles.decoratorRight);
    }

    return classes.join(' ');
  }, [firstPathParam]);

  return (
    <>
      <Head>
        <meta name="keywords" content="Joaquin, Candalaft, portfolio, linkedin, developer, github" />
        <meta name="author" content="Joaquin Candalaft" />
        <meta property="og:image" content="https://joaquincandalaft.com/avatar.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.layoutWrapper}>
        <div className={styles.layout}>
          {/* TO DO: make it responsive */}
          <div className={styles.topbar}>
            {
              TOPBAR_ITEMS.map((item) =>
                <Link
                  key={item.path}
                  href={`/${item.path}`}
                >
                  <span
                    className={`${styles.topbarItem} ${firstPathParam === item.path ? styles.highlighted : ''}`}
                  >
                    {item.text}
                    <div className={styles.underlineWrapper}>
                      <div className={styles.underline}/>
                    </div>
                  </span>
                </Link>
              )
            }
          </div>
          <Component {...pageProps} />
        </div>
        <div className={`${styles.backgroundDecorator} ${styles.leftBackgroundDecorator} ${!firstPathParam ? styles.hiddenLeftBackgroundDecorator : ''}`}/>
        <div className={`${styles.backgroundDecorator} ${styles.rightBackgroundDecorator} ${firstPathParam ? styles.hiddenRightBackgroundDecorator : ''}`}/>
      </div>
    </>
  );
}

export default MyApp
