import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import BackButton from "../../../components/backButton";
import styles from "../../../styles/Project.module.css";

const Sprinklers: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Automatic Sprinklers</title>
        <meta
          name="description"
          content="Joaquin Candalaft's sprinklers project"
        />
      </Head>

      <main className={styles.main}>
        <BackButton
          url="/projects"
          sectionName="Projects"
          className={styles.backButton}
        />
        <span className={styles.title}>Automatic Sprinklers</span>
        <div className={styles.content}>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              This IoT project is developed on <b>vueJS</b> and <b>nodeJS</b>.
              It consists on 3 components: a frontend and a backend hosted in
              google cloud and a raspberry pi hooked to the electrovalves that
              handle the sprinklers. This raspberry is running another node
              server to manage said valves.
            </span>
            <Image
              className={styles.projectImage}
              src="/screenshots/sprinklers-dashboard.png"
              alt="sprinklers dashboard screenshot"
              width={387}
              height={300}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              Using cron jobs, the raspberry pi schedules sprinkling cycles that
              run only on the selected days. This info is passed from the server
              to the raspberry through Socket.IO every time the user changes it
              on the frontend.
            </span>
            <video
              className={styles.projectImage}
              loop
              muted
              autoPlay
              controls
              src="/screenshots/sprinklers-schedule-interaction.webm"
              width={390}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              The app also features pool filling (handled by another valve
              hooked to the raspberry).
              <br />
              The status bar changes in real time to have a good awareness of
              what is happening even when I&apos;m away from home.
            </span>
            <video
              className={styles.projectImage}
              loop
              muted
              autoPlay
              controls
              src="/screenshots/sprinklers-filling-interaction.webm"
              width={390}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              I used auth0 library to handle login using google SSO. Therefore,
              my family and I can do the login in just 2 clicks.
            </span>
            <Image
              className={styles.projectImage}
              src="/screenshots/sprinklers-login.png"
              alt="sprinklers login screenshot"
              width={387}
              height={300}
            />
          </div>
          <div className={styles.section}>
            <span className={styles.sectionText}>
              I personally designed it mostly to use it when chilling at the
              garden, just with my phone. So, logically, this app has a
              &quot;mobile-first&quot; design that works just fine on any other
              screen thanks to my friend flexbox.
            </span>
            <video
              className={styles.projectImage}
              loop
              muted
              autoPlay
              controls
              src="/screenshots/sprinklers-responsiveness.webm"
              width={390}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Sprinklers;
