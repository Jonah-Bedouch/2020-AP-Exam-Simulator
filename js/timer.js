var forceStop = false;
var advance = false;
function startTimer(duration) {
    var timer = duration*60, hours, minutes, seconds;
    var timeObject = document.getElementById("timer");
    var interval = setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer-(3600*hours)) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeObject.innerHTML = hours + ":" + minutes + ":" + seconds;

        --timer;

        if (timer <= 300 && !timeObject.classList.contains("warn")) {
            if (stage != 0) {
                timeObject.classList.add("warn");
                if (stage == submits) {
                } else {
                    displayModal("Submit Your Response Now", "Once time expires, you will not be able to go back to this question.", 0);
                }
            }
        }

        if (timer < 1) {
            timeObject.classList.remove("warn");
            timeObject.innerHTML = "00:00:00";
            advanceStage();
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

    }, 50);
}