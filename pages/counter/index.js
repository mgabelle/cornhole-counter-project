import Head from 'next/head';
import Counter from "../../components/counter/Counter";
import Score from "../../components/score/Score";
import TemporaryScore from '../../components/score/TemporaryScore';
import Timer from '../../components/informations/Timer';
import Background from '../../components/Background';
import Round from '../../components/informations/Round';
import Button from '@mui/material/Button';

import styles from '../../styles/Main.module.css';

import {useState, useEffect} from 'react';
import { useRouter } from "next/router";

const DEFAULT_POINTS_LIMIT = 15;
const DEFAULT_POINTS_DOWN = 10;

export default function Cornhole() {
  const router = useRouter();
  const {
    blueTeam,
    redTeam,
    inputTime,
    isUnlimitedTime,
    pointsValue,
  } = router.query;
  
  console.log(router.query);

  const [time, setTime] = useState(isUnlimitedTime === "true" ? -1 : parseInt(inputTime));

  const pointsLimit = pointsValue ? pointsValue : DEFAULT_POINTS_LIMIT;
  const pointsDown = pointsLimit === 15 ? DEFAULT_POINTS_DOWN : 15; 

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

    if (temporaryScore[0] == pointsLimit || temporaryScore[1] == pointsLimit) {
      announceWinner(temporaryScore);
    }

    if (time === 0 && temporaryScore[0] !== temporaryScore[1]) {
      announceWinner(temporaryScore);
    }
  }

  function calculateNewScore(currentScore, points) {
    let newScore = currentScore + Math.abs(points);
    return (newScore > pointsLimit) ? pointsDown : newScore;
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
        <Counter score={scorePlayer1} setScore={setScorePlayer1} color="primary"/>
        <Counter score={scorePlayer2} setScore={setScorePlayer2} color="error"/>
      </div>

      {/* Temporary score */}
      <div className={styles.BottomDiv}>
        <TemporaryScore 
            team1Name={blueTeam}
            team2Name={redTeam}
            pointsPlayer1={pointsPlayer1}
            pointsPlayer2={pointsPlayer2}
            temporaryScore={temporaryScore}
        />

        {/* Next round */}
        <Button 
          variant="contained" 
          color='success'
          sx={{
            maxWidth: "70px",
            maxHeight: "70px",
            width: "70px",
            height: "50px",
            fontSize: "10px",
            alignSelf: "center"
          }}
          onClick={validateRound}
        >Valider<br/> Manche</Button>
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

          body {
            max-width: 450px;
            margin: auto;
          }
          `
        }
      </style>
    </div>
  )
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
