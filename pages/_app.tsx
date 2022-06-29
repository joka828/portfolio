import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/Layout.module.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.layout}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
