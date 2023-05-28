export {timeToMinutesSecondes, isBlank};

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

function isBlank(text) {
    if (!text || text.trim() === "") {
        return true;
    }
    return false;
}