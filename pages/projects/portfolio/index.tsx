import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/future/image'
import Link from 'next/link'
import BackButton from '../../../components/backButton'
import styles from '../../../styles/Project.module.css'

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Portfolio</title>
        <meta name="description" content="Joaquin Candalaft&apos;s portfolio project" />
      </Head>

      <main className={styles.main}>
        <BackButton
          url="/projects"
          sectionName='Projects'
          className={styles.backButton}
        />
        <Link href="/">
          <span className={styles.demoButton}>
            Demo
          </span>
        </Link>
        <span className={styles.title}>
          My Portfolio
        </span>
        <div className={styles.content}>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              This portfolio is developed on <b>nextJS</b>, which has a feature that I really like: native server-side rendering.
              This allows me to have a fast first render and be scanned by search engine crawlers (SEO).
              <br />
              <br />
              It has all been designed personally by me, so don&apos;t expect that much from the visuals.
            </span>
            <Image
              className={styles.projectImage}
              src="/screenshots/portfolio-dashboard.png"
              alt="Portfolio dashboard screenshot"
              width={534}
              height={300}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              <b>It features full responsiveness</b>, implemented with with media-queries with breakpoints at 1024px and 768px for mobile devices.
            </span>
            <video
              className={styles.projectImage}
              loop
              muted
              autoPlay
              controls
              src="/screenshots/portfolio-responsiveness.webm"
              width={390}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              I used all the necessary meta tags to <b>improve my SEO</b> and be well positioned on search engines.
              <br />
              You can try <a className={styles.googleLink} href="https://www.google.com/search?q=joaquin+candalaft">Googling me</a>.
            </span>
            <Image
              className={styles.projectImage}
              src="/screenshots/portfolio-seo.png"
              alt="Portfolio SEO code screenshot"
              width={534}
              height={300}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              It is integrated with Vercel <b>CI-CD</b>. With just a push on my github repo, the deploy is up and ready within 20 to 30 seconds.
            </span>
            <Image
              className={styles.projectImage}
              src="/screenshots/portfolio-cicd.png"
              alt="Vercel CICD screenshot"
              width={534}
              height={300}
            />
          </div>
        </div>
      </main>
    </>
  )
};

export default Portfolio;