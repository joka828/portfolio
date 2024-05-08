import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";

import { openProjectDetailTracking } from "../../helpers/trackings";
import styles from "../../styles/Projects.module.css";

const HomeProjects: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joaquin Candalaft&apos;s personal projects</title>
        <meta
          name="description"
          content="Joaquin Candalaft's personal projects"
        />
      </Head>

      <main className={styles.main}>
        <Link className={styles.section} href="/projects/portfolio">
          <div
            className={styles.section}
            onClick={openProjectDetailTracking("portfolio")}
          >
            <span className={styles.title}>Portfolio</span>
            <div className={styles.sectionContent}>
              <Image
                className={styles.projectImage}
                src="/portfolio-image.png"
                alt="Portfolio Image"
                width={339}
                height={150}
              />
              <span className={styles.description}>
                Yes, a meta-reference. This portfolio is developed on nextJS. It
                features SEO management, CICD through vercel and native nextJS
                Server Side Rendering.
              </span>
            </div>
          </div>
        </Link>
        <Link className={styles.section} href="/projects/casino">
          <div
            className={styles.section}
            onClick={openProjectDetailTracking("casino")}
          >
            <span className={styles.title}>Mazmo Casino</span>
            <div className={styles.sectionContent}>
              <Image
                className={styles.projectImage}
                src="/casino-image.png"
                alt="Portfolio Image"
                width={350}
                height={273}
              />
              <span className={styles.description}>
                Mazmo is a social network which has an internal currency. I made
                a casino that integrates with its chat-webhooks and iframe to
                provide a really homogeneous experience, like if it was a
                feature of mazmo itself.
                <br />
                The frontend is developed on reactJS and the server is running
                on nodeJS.
              </span>
            </div>
          </div>
        </Link>
        <Link className={styles.section} href="/projects/sprinklers">
          <div
            className={styles.section}
            onClick={openProjectDetailTracking("sprinklers")}
          >
            <span className={styles.title}>Automatic sprinklers</span>
            <div className={styles.sectionContent}>
              <Image
                className={styles.projectImage}
                src="/sprinklers-image.png"
                alt="Portfolio Image"
                width={348}
                height={150}
              />
              <span className={styles.description}>
                This app, developed on vueJS and nodeJS, is an IoT project which
                I use to water my lawn automatically. It features Google-SSO,
                SocketIO to connect from a cloud server to the raspberry at home
                and cron jobs to turn on the sprinklers.
              </span>
            </div>
          </div>
        </Link>
        <span className={styles.wipDisclaimer}>
          This section is a WIP, more details on the projects and more
          responsiveness coming soon
        </span>
      </main>
    </>
  );
};

export default HomeProjects;
