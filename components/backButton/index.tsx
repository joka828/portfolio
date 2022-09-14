import React, { useMemo } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/future/image';
import Link from 'next/link';

import styles from './styles.module.css'

import BackArrow from './left-arrow.svg';

interface Props {
  className?: string;
  sectionName: string;
  url: string;
}

const BackButton: React.FunctionComponent<Props> = ({ className, sectionName, url }) => {

  const router = useRouter();
  const href = useMemo(() => {
    if (url) {
      return url;
    }

    return router.pathname.slice(1).split('/').slice(0, -1).join('/'); // Take out the last path item
  }, [url, router.pathname]);

  return (
    <Link href={href}>
      <div className={`${className} ${styles.wrapper}`}>
        <Image src="/left-arrow.svg" alt="back button arrow" height={20} width={20} />
        <span className={styles.text}>Back{' '}
          <span className={styles.extraText}>
            to {sectionName}
          </span>
        </span>
      </div>
    </Link>
  );
}

export default BackButton;