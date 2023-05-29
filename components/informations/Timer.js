import {useState, useEffect} from 'react';
import {timeToMinutesSecondes} from '../../utils.js';

export default function Timer({time, setTime}) {
    const [isPaused, setIsPaused] = useState(true);
    const [timer, setTimer] = useState(null);
    const [imageSource, setImageSource] = useState(getImageSource(true));

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
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
            <img 
                src={imageSource}
                onClick={() => {
                    if (time > 0) {
                        setIsPaused(!isPaused);
                        setImageSource(getImageSource(!isPaused));
                    }
                }}
                style={{
                    cursor:"pointer",
                    height:"40px", 
                    width:"40px",
                    marginLeft: "15px",
                }}
            ></img>
            <span style={{marginLeft:"15px"}}>
                {time === -1 ? "Temps Illimité" : timeToMinutesSecondes(time)}
            </span>
        </div>
    )
}

function getImageSource(isPaused) {
    return isPaused ? "/play-button.png" : "/pause-button.png";
}