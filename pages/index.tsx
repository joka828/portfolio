import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Dashboard.module.css'

const Dashboard: NextPage = () => {
  return (
    <>
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
            Hi!
            <br />
            I&apos;m Joaquin, a developer.
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
            <a className={styles.socialItem} href="https://www.linkedin.com/in/joaquin-candalaft/" target="_blank" rel="noreferrer">
              LinkedIn
              <Image className={styles.icon} src="/linkedin.png" alt="Linkedin logo" layout="raw" width={20} height={20} />
            </a>
            <a className={styles.socialItem} href="https://github.com/joka828" target="_blank" rel="noreferrer">
              Github
              <Image className={styles.icon} src="/github-icon.png" alt="Github logo" layout="raw" width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Only displayed on desktop */}
        <div className={styles.rightColumn}>
          <Image className={styles.avatar} src="/avatar.jpg" alt="Joaquin&apos;s photo" width={400} height={400} />
        </div>
        {/* Only displayed on desktop */}

        <span className={styles.wipDisclaimer}>
          This portfolio is a work in progress. More coming soon!
        </span>
      </main>
    </>
  )
};

export default Dashboard;
