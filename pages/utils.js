export {timeToMinutesSecondes};

function timeToMinutesSecondes(time) {
	var min = Math.floor(time/60);
	var sec = time%60;
	
    if (min < 10) {
        min = `0${min}`;
    }

    if (sec < 10) {
        sec = `0${sec}`
    }
	return `${min}:${sec}`;
}