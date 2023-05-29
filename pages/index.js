import Head from 'next/head';
import Link from 'next/link';

import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

import {useState} from 'react';

export default function Home() {
    const [gameData, setGameData] = useState({
      blueTeam: "",
      redTeam: "",
      inputTime: 600,
      isUnlimitedTime: false,
      pointsValue: 15,
    });


    const handlePointsValueChange = (event) => {
      setGameData({
        ...gameData,
        pointsValue: parseInt(event.target.value)
      });
    };

    return (
      <div className='HomeMain'>
        <Head>
          <link rel="shortcut icon" href="/cornhole-image.ico" />
          <title>Cornhole</title>
        </Head>

        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px"
        }}>
          <div 
            style={{
              backgroundImage: "url(/logo-cornhole-vie.jpg)", 
              backgroundPosition: "center",
              width: "74px",
              height: "34px"
            }}>&nbsp;</div>

          {/* <img src='/logo-cornhole-vie.jpg'></img> */}
          <p style={{marginLeft: "10px"}}>VIE Cornhole</p>
        </div>

        {/* Team names */}
        <FormControl>
          <FormLabel id="team-name-label">Equipe Bleu</FormLabel>
          <TextField id="outlined-basic" label="" variant="outlined" onChange={(e) => {
            setGameData({
              ...gameData,
              blueTeam: e.target.value
            })
          }}/>
        </FormControl>

        <FormControl>
          <FormLabel id="team-name-label">Equipe Rouge</FormLabel>
          <TextField id="outlined-basic" label="" variant="outlined" onChange={(e) => {
            setGameData({
              ...gameData,
              redTeam: e.target.value
            })
          }}/>
        </FormControl>

        {/* Game Time in minutes */}
        <div>
          <FormGroup>
            <FormLabel id="time-label">Temps</FormLabel>
            <FormControlLabel control={<Checkbox onChange={(e) => {
              setGameData({
                ...gameData,
                isUnlimitedTime: !gameData.isUnlimitedTime
              })
            }}/>} label="Temps illimité" />

            <Slider
              onChange={(e) => {
                setGameData({
                  ...gameData,
                  inputTime: e.target.value
                })
              }}
              disabled={gameData.isUnlimitedTime}
              aria-label="Time"
              defaultValue={600}
              valueLabelDisplay="auto"
              valueLabelFormat={formatSecond}
              step={60}
              marks={getMinutesMarks()}
              min={300}
              max={1800}
            />
          </FormGroup>
        </div>

        {/* Points number */}
        <div>
        <FormControl>
          <FormLabel id="points-label">Points</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gameData.pointsValue}
              onChange={handlePointsValueChange}
            >
              <FormControlLabel value={15} control={<Radio />} label="15 points (retour à 10)" />
              <FormControlLabel value={21} control={<Radio />} label="21 points (retour à 15)" />
            </RadioGroup>
        </FormControl>
        </div>

        {/* Button new game */}
        <div>
          <Link
          href={{
            pathname: "/counter",
            query: gameData, // the data
          }}
          >
            <Button variant="contained" color='error' onClick={() => console.log(gameData)}>Nouvell partie</Button>
          </Link>
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
              width: 100%
              overflow: hidden;
            }

            body {
              max-width: 450px;
              margin: auto;
            }

            .HomeMain > div {
              width: 100%;
              margin-bottom: 20px;
            }

            .HomeMain {
              margin-right: 18px;
              margin-left: 18px;
            }
            `
          }
        </style>
      </div>
    )
}

function getMinutesMarks() {
  let marks = [];
  for (let i = 300; i <= 60*30; i+=300) {
    marks.push({
      value: i,
      label: formatSecond(i),
    })
  }
  return marks;
}

function formatSecond(value) {
    return `${value/60}min`
}
