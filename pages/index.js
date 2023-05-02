import Head from 'next/head';
import Counter from "./counter/Counter";
import styles from '../styles/Main.module.css';
import {useState, useEffect} from 'react';

const POINTS_LIMIT = 15;
const POINTS_DOWN = 10;

export default function Home() {
  const [totalScore, setTotalScore] = useState([0, 0]);
  const [temporaryScore, setTemporaryScore] = useState([0, 0]);

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

  function updatePointsAndScore() {
    //Set points for each player
    let pointsPlayer1 = scorePlayer1.points*(scorePlayer1.timesTwo ? 2 : 1) - (scorePlayer2.minusOne ? 1 : 0);
    let pointsPlayer2 = scorePlayer2.points*(scorePlayer2.timesTwo ? 2 : 1) - (scorePlayer1.minusOne ? 1 : 0);
    setPointsPlayer1(pointsPlayer1);
    setPointsPlayer2(pointsPlayer2);

    //Set temporary score
    let points = pointsPlayer1 - pointsPlayer2;
    if (points > 0) {
      setTemporaryScore([calculateNewScore(totalScore[0], points), totalScore[1]]);
    } else {
      setTemporaryScore([totalScore[0], calculateNewScore(totalScore[1], points)]);
    }
  }

  useEffect(() => {
    updatePointsAndScore();
  }, [scorePlayer1, scorePlayer2]);

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
        Score : {totalScore[0]} - {totalScore[1]}
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
        Score temporaire : {temporaryScore[0]} - {temporaryScore[1]}
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

function calculateNewScore(currentScore, points) {
  let newScore = currentScore + Math.abs(points);
  return (newScore > POINTS_LIMIT) ? POINTS_DOWN : newScore;
}
