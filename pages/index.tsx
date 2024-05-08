import type { NextPage } from "next";
import { useMemo } from "react";
import Head from "next/head";
import Image from "next/image";

import { capitalize } from "../helpers";
import { linkedinLinkTracking, githubLinkTracking } from "../helpers/trackings";
import styles from "../styles/Dashboard.module.css";

interface Props {
  lastCommit: {
    date: Date;
    message: string;
  };
}

export const getStaticProps = async () => {
  const lastCommitFetch = await fetch(
    "https://api.github.com/repos/joka828/portfolio/commits/master",
    {
      method: "GET",
      headers: { Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}` },
    }
  );

  const lastCommitJson = await lastCommitFetch.json();

  const lastCommit = lastCommitJson.commit;

  return {
    props: {
      lastCommit: {
        date: lastCommit.committer.date,
        message: lastCommit.message,
      },
    },
  };
};

const Dashboard: NextPage<Props> = ({ lastCommit }) => {
  const parsedDate = useMemo(() => {
    const date = new Date(lastCommit.date);
    const month = date.toLocaleString("default", { month: "short" });
    return `${date.getDate()}-${month}-${date.getFullYear()}`;
  }, [lastCommit]);

  return (
    <>
      <Head>
        <title>Joaquin Candalaft&apos;s portfolio</title>
        <meta name="description" content="Joaquin Candalaft's portfolio" />
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
            <Image
              className={styles.avatar}
              src="/avatar.jpg"
              alt="Joaquin's photo"
              width={150}
              height={150}
            />
          </div>
          {/* Only displayed on mobile */}

          <p className={styles.description}>
            I&apos;m a fullstack web developer. I&apos;ve been involved in
            projects with lots of technologies both for work and personal
            purposes.
          </p>

          <div className={styles.socials}>
            <a
              onClick={linkedinLinkTracking}
              className={styles.socialItem}
              href="https://www.linkedin.com/in/joaquin-candalaft/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <Image
                className={styles.icon}
                src="/linkedin.png"
                alt="Linkedin logo"
                width={20}
                height={20}
              />
            </a>
            <a
              onClick={githubLinkTracking}
              className={styles.socialItem}
              href="https://github.com/joka828"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <Image
                className={styles.icon}
                src="/github-icon.png"
                alt="Github logo"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>

        {/* Only displayed on desktop */}
        <div className={styles.rightColumn}>
          <Image
            className={styles.avatar}
            src="/avatar.jpg"
            alt="Joaquin's photo"
            width={400}
            height={400}
          />
        </div>
        {/* Only displayed on desktop */}

        <span className={styles.wipDisclaimer}>
          This portfolio is a work in progress. More coming soon!
          <br />
          Last update on {parsedDate}: {capitalize(lastCommit.message)}
        </span>
      </main>
    </>
  );
};

export default Dashboard;
