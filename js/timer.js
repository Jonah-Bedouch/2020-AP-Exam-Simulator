var forceStop = false;
var advance = false;
function startTimer(duration) {
    duration = duration*60;

    var start = Date.now(),
        diff,
        hours,
        minutes,
        seconds;

    var timeObject = document.getElementById("timer");

    function timer() {
        diff = duration - (((Date.now() - start)/1000) | 0);

        hours = (diff / 3600) | 0;
        minutes = ((diff-(3600*hours)) / 60) | 0;
        seconds = (diff % 60) | 0;

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeObject.innerHTML = hours + ":" + minutes + ":" + seconds;

        console.log(diff);

        if (diff <= 300 && !timeObject.classList.contains("warn")) {
            if (stage != 0) {
                timeObject.classList.add("warn");
                if (stage == submits) {
                } else {
                    displayModal("Submit Your Response Now", "Once time expires, you will not be able to go back to this question.", 0);
                }
            }
        }

        if (diff <= 0) {
            advanceStage();
            timeObject.classList.remove("warn");
            clearInterval(interval);
        }

        if (forceStop == true) {
            timeObject.classList.remove("warn");
            timeObject.innerHTML = "00:00:00";
            forceStop = false;
            clearInterval(interval);
        }

        if (advance == true) {
            timeObject.classList.remove("warn");
            timeObject.innerHTML = "00:00:00";
            advance = false;
            advanceStage();
            clearInterval(interval);
        }
    }

    timer();
    var interval = setInterval(timer, 1000);
}
