import styles from '../../styles/Counter.module.css';
import CounterButton from "./CounterButton";

export default function Counter({score, setScore}) {

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

    function addPoints(points) {
        setScore({
            ...score,
            points: score.points + points 
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
                points={1}
                pointsAdder={addPoints}
            />

            <CounterButton 
                name={"Trou"} 
                points={3}
                pointsAdder={addPoints}
            />
        </div>
    )
}