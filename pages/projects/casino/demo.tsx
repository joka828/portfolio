import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../../styles/Project.module.css'

const Casino: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Mazmo Casino Demo</title>
        <meta name="description" content="Joaquin Candalaft&apos;s casino project demo" />
      </Head>

      <main className={styles.main}>
        <span className={styles.title}>
          Mazmo Casino
        </span>
        <span className={styles.disclaimer}>
          Disclaimer: Mazmo has sexually explicit content. To see the app live while avoiding any sexual content, follow the below steps.
        </span>
        <span className={styles.liveDemoInfo}>
          (Mazmo is, for now, not available in english. Only spanish.)
          <br />
          To try it out, you have to register{' '}
          <a className={styles.link} href="https://mazmo.net/signup" target="_blank" rel="noreferrer">clicking here</a>.
          <br />
          and you can see it live{' '}
          <a className={styles.link} href="https://mazmo.net/chat/channels/6070e6365095e800113db8ba" target="_blank" rel="noreferrer">clicking here</a>{' '}
          (join the channel to access the casino).
        </span>
      </main>
    </>
  )
};

export default Casino;