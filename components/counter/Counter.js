import styles from '../../styles/Counter.module.css';
import CounterButton from "./CounterButton";
import {useState, useEffect} from 'react';
import Switch from '@mui/material/Switch';

export default function Counter({score, setScore}) {

    const [disabledCounter, setDisabledCounter] = useState(false);

    useEffect(() => {
        //Cornhole rules : no more than 4 bags
        if (score.board + score.hole == 4) {
            setDisabledCounter(true);
        } else {
            setDisabledCounter(false);
        }
    }, [score])

    function updateTimesTwo() {
        setScore({
            ...score,
            timesTwo: !score.timesTwo
        })
    }

    function updateMinusOne() {
        setScore({
            ...score,
            minusOne: !score.minusOne
        })
    }

    function updateBoard(points) {
        setScore({
            ...score,
            board: score.board + points 
        })
    }

    function updateHole(points) {
        setScore({
            ...score,
            hole: score.hole + points 
        })
    }

    return (
        <div className={styles.Counter}>
            <div className={styles.Checkbox}>
                <div>
                    <Switch 
                        checked={score.timesTwo}
                        onChange={updateTimesTwo}
                        size='small'
                        inputProps={{ 'aria-label': 'controlled' }}/>
                    <span style={{whiteSpace:"nowrap"}}>X 2</span>
                </div>

                <div>
                    <Switch 
                            checked={score.minusOne}
                            onChange={updateMinusOne}
                            size='small'
                            inputProps={{ 'aria-label': 'controlled' }}/>
                    <span style={{whiteSpace:"nowrap"}}>- 1</span>
                </div>
            </div>

            <div className={styles.CounterElement}>
                <CounterButton 
                    name={"Planche"} 
                    variable={score.board}
                    setter={updateBoard}
                    disabledCounter={disabledCounter}
                    className={styles.CounterElement}
                />
            </div>
            
            <div className={styles.CounterElement}>
                <CounterButton 
                    name={"Trou"} 
                    variable={score.hole}
                    setter={updateHole}
                    disabledCounter={disabledCounter}
                    className={styles.CounterElement}
                />
            </div>
        </div>
    )
}