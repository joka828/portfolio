import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import BackButton from '../../../components/backButton';
import styles from '../../../styles/Project.module.css'

const Casino: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Mazmo Casino</title>
        <meta name="description" content="Joaquin Candalaft&apos;s casino project" />
      </Head>

      <main className={styles.main}>
        <BackButton 
          url="/projects"
          sectionName='Projects'
          className={styles.backButton}
        />
        <Link href="/projects/casino/demo">
          <span className={styles.demoButton}>
            Demo
          </span>
        </Link>
        <span className={styles.title}>
          Mazmo Casino
        </span>

        <div className={styles.content}>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              This casino is an app built on reactJS and nodeJS that integrates with Mazmo (a social network) through webhooks and an iframe.
              <br />
              On the left, you can see the iframe implemented by me, while the right column is the chat channel from Mazmo.
              <br />
              <br />
              It started out as a text bot. Each message was sent through a webhook to the casino&apos;s node server and was interpreted as commands to play.
              <br />
              Later on, I asked Mazmo&apos;s creator to add an iframe to the chat to be able to provide a visual, much more comfortable UX.
            </span>
            <Image 
              className={styles.projectImage}
              src="/screenshots/casino-dashboard.png"
              alt="casino screenshot"
              layout="raw"
              width={384}
              height={300}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              Within the iframe I can send messages to the document of Mazmo so, since Mazmo is open-source, I personally implemented{' '}
              an interface to be able to open the modal to transfer the currency through this messages that the iframe sends.
            </span>
            <video
              className={styles.projectImage}
              loop
              muted
              autoPlay
              controls
              src="/screenshots/casino-interaction.webm"
              width={390}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              The casino is quite <b>responsive</b>, too. It can fit within 80% of the screen of any phone and still be fully usable.
            </span>
            <video
              className={styles.projectImage}
              loop
              muted
              autoPlay
              controls
              src="/screenshots/casino-responsiveness.webm"
              width={150}
            />
          </div>
        </div>
      </main>
    </>
  )
};

export default Casino;