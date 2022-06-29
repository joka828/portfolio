import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'

const HomeProjects: NextPage = () => {
  return (
    <>
      {/* <Head>
        <title>Joaquin Candalaft&apos;s portfolio</title>
        <meta name="description" content="Joaquin Candalaft&apos;s portfolio" />
        <meta name="keywords" content="Joaquin, Candalaft, portfolio, linkedin, developer" />
        <meta name="author" content="Joaquin Candalaft" />
        <meta property="og:image" content="https://joaquincandalaft.com/avatar.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className={styles.main}>
        HomeProjects route
      </main>
    </>
  )
};

export default HomeProjects;