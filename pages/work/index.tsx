import type { NextPage } from "next";
import Head from "next/head";

import BusinessIcon from "@mui/icons-material/Business";

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
            <div className={styles.companyWrapper}>
              <BusinessIcon className={styles.companyIcon} />
              <div className={styles.titleColumn}>
                <h3 className={styles.title}>Mercado Libre</h3>
                <span>11/2017 - 08/2018</span>
                <span>Front-end web developer</span>
              </div>
            </div>
            <span className={styles.sectionText}>
              At Mercado Libre I was first in charge of maintaining a React
              component library, I was able to develop a lot my communicational
              skills and learn how to work with many teams at the same time. I
              also learned about testing with Jest and Enzyme.
              <br />
              After that, I was part of the team that developed the beginnings
              of the Mercado Envio&apos;s platform, where I kept learning more
              ReactJS and NodeJS.
              <br />
              <br />
              Technologies I worked with: ReactJS, NodeJS, Nginx, webpack, HTML,
              CSS, Grails.
            </span>
          </div>
          <div className={styles.section}>
            <div className={styles.companyWrapper}>
              <BusinessIcon className={styles.companyIcon} />
              <div className={styles.titleColumn}>
                <h3 className={styles.title}>Elementum</h3>
                <span>09/2018 - 07/2019</span>
                <span>Software Engineer</span>
              </div>
            </div>
            <span className={styles.sectionText}>
              In Elementum I was part of the team that developed the new
              platform for the frontends of the company. I was able to learn a
              lot about the architecture of a big platform and how to work with
              a big team. I learned Angular for the first time, which was really
              challenging to me at that time. Also, I was able to learn about
              microfrontends and microservices and how to work with them.
              <br />
              <br />
              Technologies I worked with: ReactJS, NodeJS, Angular,
              Microservices, Microfrontends.
            </span>
          </div>
          <div className={styles.section}>
            <div className={styles.companyWrapper}>
              <BusinessIcon className={styles.companyIcon} />
              <div className={styles.titleColumn}>
                <h3 className={styles.title}>Mural</h3>
                <span>08/2019 - 08/2021</span>
                <span>Full Stack Engineer</span>
              </div>
            </div>
            <span className={styles.sectionText}>
              Mural was a really challenging experience for me as a frontender,
              since I was in the &quot;canvas&quot; team, which was in charge of
              developing a board with floating widgets that could be moved and
              interacted with in many ways. It was a really atypical project,
              and I learned a lot about Javascript itself and its tricks. I also
              was in charge of developing the APIs I needed for my frontend
              features, so I developed as a full stack engineer in this company.
              <br />
              Mural has a strong design and product team, so I was able to learn
              a lot about how to work closely with them to iterate fast and
              effectively each feature. It was really enjoyable to end up with
              great solutions thanks to the collaboration with them.
              <br />
              <br />
              Technologies I worked with: ReactJS, NodeJS, Express, MongoDB,
              Docker.
            </span>
          </div>
          <div className={styles.section}>
            <div className={styles.companyWrapper}>
              <BusinessIcon className={styles.companyIcon} />
              <div className={styles.titleColumn}>
                <h3 className={styles.title}>Kavak</h3>
                <span>08/2021 - 09/2022</span>
                <span>Senior Software Engineer</span>
              </div>
            </div>
            <span className={styles.sectionText}>
              Kavak was a particular challenge for me, since I have almost
              always worked with ReactJS and it was my first time working with
              the second version of AngularJS. It took me a little while to get
              used to it, but as soon as I caught up with it, I was able to
              develop a lot of features and make a real impact on the frontend
              teams.
              <br />I was part of a team that changed a lot of frontend
              workflows and even changing the way product and design teams
              worked with the frontend teams. I was able to improve and refactor
              core features in the Angular application to improve performance
              and developer experience.
              <br />
              <br />
              Technologies I worked with: Angular, NodeJS, Express, postgreSQL,
              I18N, SEO management.
            </span>
          </div>
          <div className={styles.section}>
            <div className={styles.companyWrapper}>
              <BusinessIcon className={styles.companyIcon} />
              <div className={styles.titleColumn}>
                <h3 className={styles.title}>Pauca</h3>
                <span>11/2022 - 05/2024</span>
                <span>Senior Software Engineer</span>
              </div>
            </div>
            <span className={styles.sectionText}>
              Pauca was my first experience working with a small team in a
              fast-paced startup enviroment.
              <br />I was in charge of developing the frontend of a variety of
              applications from scratch, which was an interesting experience
              since it involved a lot of reasearch to find the right tools and
              make the most scalable decisions to ensure the growth of each one
              of them. As in Mural, I had the opportunity to work closely with
              the product team, with fast iterations to make quick and effective
              releases for the new clients.
              <br />I also had the opportunity to work with the backend team and
              learn Python for the first time. Working in the backend team I
              also was able to learn about Docker more in detail and be able to
              understand its full flow to deploy many services and workers.
              <br />
              <br />
              Technologies I worked with: ReactJS, NextJS, RemixJS, Material UI,
              Tailwind, Python, FastAPI, Docker.
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;
