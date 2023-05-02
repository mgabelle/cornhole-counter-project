import Head from 'next/head';
import Counter from "./counter/Counter";
import styles from '../styles/Main.module.css';
import {useState, useEffect} from 'react';

export default function Home() {
  const [scorePlayer1, setScorePlayer1] = useState({
    timesTwo: false,
    minusOne: false,
    points:0,
  });

  const [scorePlayer2, setScorePlayer2] = useState({
    timesTwo: false,
    minusOne: false,
    points:0
  });

  const [pointsPlayer1, setPointsPlayer1] = useState(0);
  const [pointsPlayer2, setPointsPlayer2] = useState(0);

  function updatePointsPlayer1() {
    let points = scorePlayer1.points*(scorePlayer1.timesTwo ? 2 : 1) - (scorePlayer2.minusOne ? 1 : 0)
    setPointsPlayer1(points);
  }

  function updatePointsPlayer2() {
    let points = scorePlayer2.points*(scorePlayer2.timesTwo ? 2 : 1) - (scorePlayer1.minusOne ? 1 : 0)
    setPointsPlayer2(points);
  }

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
        <Counter score={scorePlayer1} setScore={setScorePlayer1}/>
        <div className={styles.CounterLine}></div>
        <Counter score={scorePlayer2} setScore={setScorePlayer2}/>
      </div>

      {/* Temporary score */}
      <div className={styles.TemporaryScore}>
        Points equipe 1 : {pointsPlayer1} <br/>
        Points equipe 2 : {pointsPlayer2} <br/>
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
