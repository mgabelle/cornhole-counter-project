import {useState, useEffect} from 'react';
import {timeToMinutesSecondes} from '../../utils.js';

import Snackbar from '@mui/material/Snackbar';


export default function Timer({time, setTime}) {
    const [isPaused, setIsPaused] = useState(true);
    const [timer, setTimer] = useState(null);
    const [imageSource, setImageSource] = useState(getImageSource(true));
    const [isNotificationOpen, setOpenNotification] = useState(false);

    function createTimer() {
        if (time == 0) return null;
        const interval = setInterval(() => {
            setTime(prevTime => {
                if (prevTime -1 === 60) { //Show notification when there is less than 1 minute
                    setOpenNotification(true);
                }
                if (prevTime - 1 === 0) {
                    setOpenNotification(true);
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
        <>
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
            <Snackbar
                anchorOrigin={{ vertical:'top', horizontal:'right'}}
                open={isNotificationOpen}
                onClose={() => {setOpenNotification(false)}}
                message={time === 0 ? "Temps écoulé" : "Il reste 1 minute"}
                autoHideDuration={5000}
            />
        </>
    )
}

function getImageSource(isPaused) {
    return isPaused ? "/play-button.png" : "/pause-button.png";
}