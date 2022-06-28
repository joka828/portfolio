import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'

const Dashboard: NextPage = () => {
  return (
    <div>
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

          {/* Only displayed on mobile */}
          <div className={styles.avatarWrapper}>
            <Image className={styles.avatar} src="/avatar.jpg" alt="Joaquin&apos;s photo" width={150} height={150} />
          </div>
          {/* Only displayed on mobile */}

          <p className={styles.description}>
            I&apos;m a fullstack web developer. I&apos;ve been involved in projects with lots of technologies both for work and personal purposes.
          </p>

          <div className={styles.socials}>
            <a className={styles.socialItem} href="https://www.linkedin.com/in/joaquin-candalaft-1b3933130/" target="_blank" rel="noreferrer">
              LinkedIn
              <Image className={styles.icon} src="/linkedin.png" alt="Linkedin logo" layout="raw" width={20} height={20} />
            </a>
            <a className={styles.socialItem} href="https://github.com/joka828" target="_blank" rel="noreferrer">
              Github
              <Image className={styles.icon} src="/github-icon.png" alt="Github logo" layout="raw" width={20} height={20} />
            </a>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <Image className={styles.avatar} src="/avatar.jpg" alt="Joaquin&apos;s photo" width={400} height={400} />
        </div>

        <span className={styles.wipDisclaimer}>
          This portfolio is a work in progress. More coming soon!
        </span>

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
