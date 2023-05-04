import styles from '../../styles/Counter.module.css';
import CounterButton from "./CounterButton";
import {useState, useEffect} from 'react';

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
            <div> 
                <input 
                    type="checkbox"
                    checked={score.timesTwo}
                    onChange={updateTimesTwo}/>
                X 2
            </div>

            <div> 
                <input 
                    type="checkbox"
                    checked={score.minusOne}
                    onChange={updateMinusOne}/>
                - 1
            </div>

            <CounterButton 
                name={"Planche"} 
                variable={score.board}
                setter={updateBoard}
                disabledCounter={disabledCounter}
            />

            <CounterButton 
                name={"Trou"} 
                variable={score.hole}
                setter={updateHole}
                disabledCounter={disabledCounter}
            />
        </div>
    )
}