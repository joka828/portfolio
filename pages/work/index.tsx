import type { NextPage } from "next";
import Head from "next/head";

import { downloadCVTracking } from "../../helpers/trackings";
import styles from "../../styles/Work.module.css";

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>Joaquin Candalaft&apos;s work experience</title>
        <meta
          name="description"
          content="Joaquin Candalaft's work experience"
        />
      </Head>

      <main className={styles.main}>
        <div>
          You can also{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={downloadCVTracking}
          >
            <b className={styles.resumeLink}>download my resume!</b>
          </a>
        </div>
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.titleColumn}>
              <h2>Mercado Libre</h2>
              <span>11/2017 - 08/2018</span>
              <span>Front-end web developer</span>
            </div>
            <span className={styles.sectionText}>
              Here goes a description of what I did at Mercado Libre.
            </span>
          </div>
          <div className={styles.section}>
            <div className={styles.titleColumn}>
              <h2>Elementum</h2>
              <span>09/2018 - 07/2019</span>
              <span>Software Engineer</span>
            </div>
            <span className={styles.sectionText}>
              Here goes a description of what I did at Elementum.
            </span>
          </div>
          <div className={styles.section}>
            <div className={styles.titleColumn}>
              <h2>Mural</h2>
              <span>08/2019 - 08/2021</span>
              <span>Full Stack Engineer</span>
            </div>
            <span className={styles.sectionText}>
              Here goes a description of what I did at Mural.
            </span>
          </div>
          <div className={styles.section}>
            <div className={styles.titleColumn}>
              <h2>Kavak</h2>
              <span>08/2021 - 09/2022</span>
              <span>Senior Software Engineer</span>
            </div>
            <span className={styles.sectionText}>
              Here goes a description of what I did at Kavak.
            </span>
          </div>
          <div className={styles.section}>
            <div className={styles.titleColumn}>
              <h2>Pauca</h2>
              <span>11/2022 - 05/2024</span>
              <span>Senior Software Engineer</span>
            </div>
            <span className={styles.sectionText}>
              Here goes a description of what I did at Pauca.
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;
