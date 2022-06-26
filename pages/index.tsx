import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'

const Dashboard: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joaquin Candalaft&apos;s portfolio</title>
        <meta name="description" content="Joaquin Candalaft&apos;s portfolio" />
        <meta name="keywords" content="Joaquin, Candalaft, portfolio, linkedin, developer" />
        <meta name="author" content="Joaquin Candalaft" />
        <meta property="og:image" content="https://joaquincandalaft.com/avatar.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>
            <span>
              Hi!
              <br />
              I&apos;m Joaquin, a developer.
            </span>
          </h1>
          <p className={styles.description}>
            I&apos;m a fullstack web developer. I&apos;ve been involved in projects with lots of technologies both for work and personal purposes.
          </p>
        </div>

        <div className={styles.rightColumn}>
          <Image src="/avatar.jpg" alt="Joaquin&apos;s photo" width={400} height={400} />
        </div>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </div>
  )
};

export default Dashboard;
