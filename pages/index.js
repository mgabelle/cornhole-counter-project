import Head from 'next/head';
import Counter from "../components/counter/Counter";
import Score from "../components/score/Score";
import Timer from '../components/informations/Timer';
import Background from '../components/Background';
import Round from '../components/informations/Round';

import styles from '../styles/Main.module.css';
import {useState, useEffect} from 'react';

const POINTS_LIMIT = 15;
const POINTS_DOWN = 10;

export default function Home() {
  const [time, setTime] = useState(600);

  const [totalScore, setTotalScore] = useState([0, 0]);
  const [temporaryScore, setTemporaryScore] = useState([0, 0]);

  const [scorePlayer1, setScorePlayer1] = useState(createNewScore());

  const [scorePlayer2, setScorePlayer2] = useState(createNewScore());

  const [pointsPlayer1, setPointsPlayer1] = useState(0);
  const [pointsPlayer2, setPointsPlayer2] = useState(0);
  
  const [round, setRound] = useState(1);

  useEffect(() => {
    updatePointsAndScore();
  }, [scorePlayer1, scorePlayer2]);

  function updatePointsAndScore() {
    //Set points for each player
    let pointsPlayer1 = (scorePlayer1.board + scorePlayer1.hole*3)*(scorePlayer1.timesTwo ? 2 : 1) - (scorePlayer2.minusOne ? 1 : 0);
    let pointsPlayer2 = (scorePlayer2.board + scorePlayer2.hole*3)*(scorePlayer2.timesTwo ? 2 : 1) - (scorePlayer1.minusOne ? 1 : 0);
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

  function validateRound() {
    setRound(round + 1);
    setTotalScore(temporaryScore);
    setTemporaryScore([0,0]);
    setScorePlayer1(createNewScore());
    setScorePlayer2(createNewScore());

    if (temporaryScore[0] == POINTS_LIMIT || temporaryScore[1] == POINTS_LIMIT) {
      announceWinner(temporaryScore);
      resetGame();
    }
  }

  function resetGame() {
    setRound(0);
    setTotalScore([0,0]);
    setTemporaryScore([0,0]);
    setScorePlayer1(createNewScore());
    setScorePlayer2(createNewScore());
  }

  return (
    <div className={styles.Main}>
      <Head>
        <link rel="shortcut icon" href="/cornhole-image.ico" />
        <title>Cornhole</title>
      </Head>

      {/* Background Image */}
      <Background/>

      {/* Informations */}
      <div className={styles.Info}>
        <Timer time={time} setTime={setTime}/>
        <Round round={round}/>
      </div>

      {/* Total score */}
      <Score totalScore={totalScore}/>
      
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

      {/* Next round */}
      <div className={styles.RoundButtonDiv}>
        <button onClick={validateRound}>Valider la manche</button>
      </div>

      <style global jsx>
        {`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            height: 100%;
            overflow: hidden;
          }
          `
        }
      </style>
    </div>
  )
}

function calculateNewScore(currentScore, points) {
  let newScore = currentScore + Math.abs(points);
  return (newScore > POINTS_LIMIT) ? POINTS_DOWN : newScore;
}

function createNewScore() {
  return {
    timesTwo:false, 
    minusOne:false, 
    board:0, 
    hole:0
  }
}

function announceWinner(totalScore) {
  console.log(totalScore);
  alert(`Game over. Score is ${totalScore[0]} - ${totalScore[1]}`);
 }
