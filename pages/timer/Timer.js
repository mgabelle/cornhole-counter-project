import {useState, useEffect} from 'react';
import {timeToMinutesSecondes} from '../utils.js';

export default function Timer({time, setTime}) {
    const [isPaused, setIsPaused] = useState(true);
    const [timer, setTimer] = useState(null);

    function createTimer() {
        if (time == 0) return null;
        const interval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime - 1 == 0) {
                    clearInterval(interval);
                }
                return prevTime - 1;
            });
        }, 1000); 
        return interval;
    }

    useEffect(() => {
        if (isPaused) {
            clearInterval(timer);
            return;
        }

         setTimer((prevTimer) => {
            clearInterval(prevTimer);
            return createTimer();
        });
    }, [isPaused])

    return (
        <div>
            Time : {timeToMinutesSecondes(time)} <br/>
            <button disabled={time == 0} onClick={() => setIsPaused(!isPaused)}>
                {isPaused ? "Start" : "Pause"}
            </button>
        </div>
    )
}