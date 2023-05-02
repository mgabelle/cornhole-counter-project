import Head from 'next/head';
import Counter from "./counter/counter";
import styles from '../styles/Main.module.css';

export default function Home() {
  return (
    <div className={styles.Main}>
      <Head>
        <link rel="shortcut icon" href="/cornhole-image.ico" />
      </Head>
      {/* Informations */}
      <div className={styles.Info}>
        <div>Time : </div>
        <div>Manche :</div>
      </div>

      {/* Total score */}
      <div className={styles.Score}>
        Score : 12 - 5
      </div>
      
      {/* Score counter */}
      <div className={styles.CounterContainer}>
        <Counter/>
        <div className={styles.CounterLine}></div>
        <Counter/>
      </div>

      {/* Temporary score */}
      <div className={styles.TemporaryScore}>
        Score temporaire : 12 - 8
      </div>

      <style global jsx>
        {`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;}`
        }
      </style>
    </div>
  )
}
