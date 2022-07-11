import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Work.module.css'

const Work: NextPage = () => {
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
        <span>
          Coming soon!
        </span>
        <br />
        <div>
          You can also{' '}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <b className={styles.resumeLink}>
              download my resume!
            </b>
          </a>
        </div>
      </main>
    </>
  )
};

export default Work;