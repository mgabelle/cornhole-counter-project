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
    
            />

            <CounterButton 
                name={"Trou"} 
                variable={score.hole}
                setter={updateHole}
            />
        </div>
    )
}