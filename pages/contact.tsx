import type { NextPage } from "next";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

import { downloadCVTracking } from "../helpers/trackings";
import styles from "../styles/Contact.module.css";
import { Tooltip } from "@mui/material";
import toast from "react-hot-toast";

const email = "joaquin.candalaft@gmail.com";

const Contact: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <span className={styles.contactText}>
          Reach to me at
          <Tooltip title="Copy email">
            <b
              className={styles.emailText}
              onClick={() => {
                navigator.clipboard.writeText(email);
                toast.success("Email copied to clipboard!");
              }}
            >
              <ContentCopyOutlinedIcon /> {email}
            </b>
          </Tooltip>
        </span>
      </div>
      <div className={styles.section}>
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
    </main>
  );
};

export default Contact;
