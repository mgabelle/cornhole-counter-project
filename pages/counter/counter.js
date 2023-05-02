import styles from '../../styles/Counter.module.css';
import CounterButton from "./CounterButton";
import {useState, useEffect} from 'react';

export default function Counter() {
    const [score, setScore] = useState({
        "minusTwo": false,
        "minusOne": false,
        "boardPoints":0,
        "holePoints":0
    });

    useEffect(() => {
        console.log(score);
    })
    return (
        <div className={styles.Counter}>
            <div> 
                <input 
                    type="checkbox"
                    checked={score.minusTwo}
                    onChange={() => {setScore({"minusTwo":!score.minusTwo})}}/>
                X 2
            </div>

            <div> 
                <input 
                    type="checkbox"
                    checked={score.minusOne}
                    onChange={() => {setScore({"minusTwo":!score.minusOne})}}/>
                - 1
            </div>

            <CounterButton 
                name={"Planche"} 
                points={1}
            />

            <CounterButton 
                name={"Trou"} 
                points={3}
            />
        </div>
    )
}