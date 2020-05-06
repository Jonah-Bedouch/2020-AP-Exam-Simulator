let stage = 0;

let submits = 0;

function begin() {
    if (questions.length != 0 && questions.includes(1)) {
        startTimer(0.09);
    }
}

function advanceStage() {
    stage += 1;
    if (stage == 1) {
        document.getElementById("prepPane").classList.add("hidden");
        document.getElementById("q1Pane").classList.remove("hidden");
        document.getElementById("submission").classList.remove("hidden");
        document.getElementById("timerHeader").innerHTML = "Time Left to Submit Work";
        displayModal("Your Exam Begins Now", "Start working on exam question 1 now.", 0);
        if (questions.length == 2) {
            startTimer(25);
        } else {
            startTimer(40);
        }
    } else if (stage == 2) {
        if (questions.length == 2) {
            document.getElementById("q1Pane").classList.add("hidden");
            document.getElementById("intermediatePane").classList.add("hidden");
            document.getElementById("q2Pane").classList.remove("hidden");
            document.getElementById("submission").classList.remove("hidden");
            document.getElementById("timerHeader").innerHTML = "Time Left to Submit Work";
            displayModal("Question 2 Begins Now", "Question 1 has finished. Start work on question 2 now.", 0);
            startTimer(15);
        } else {
            document.getElementById("timerHeader").innerHTML = "Time Until Your Exam Starts";
            endTest();
        }
    } else {
        endTest();
    }
}

function endTest() {
    document.getElementById("q1Pane").classList.add("hidden");
    document.getElementById("q2Pane").classList.add("hidden");
    document.getElementById("pastePane").classList.add("hidden");
    document.getElementById("attachPane").classList.add("hidden");
    document.getElementById("submission").classList.add("hidden");
    document.getElementById("text").checked = true;
    document.getElementById("photo").checked = false;
    document.getElementById("textInfo").classList.remove("hidden");
    document.getElementById("attachsub").classList.add("hidden");
    document.getElementById("textsub").classList.remove("hidden");
    document.getElementById("photoInfo").classList.add("hidden");
    document.getElementById("photosub").classList.add("hidden");
    document.getElementById("subselect").classList.remove("hidden");
    document.getElementById("pastesub").classList.add("hidden");
    document.getElementById("textSubmission").value = "";
    document.getElementById("photoSubmission").value = "";
    document.getElementById("q1In").value = "";
    document.getElementById("q2In").value = "";
    document.getElementById("photoSubmitOut").innerHTML = "";
    document.getElementById("photoSubmitBtn").disabled = true;
    document.getElementById("textSubmitOut").innerHTML = "";
    document.getElementById("textSubmitBtn").disabled = true;
    document.getElementById("q1").innerHTML = "";
    document.getElementById("q2").innerHTML = "";
    document.getElementById("q1InRep").innerHTML = "";
    document.getElementById("q2InRep").innerHTML = "";
    resetBox();
    photos = [];
    stage = 0;
    submits = 0;
    files = [];
    questions = [];
    photos = [];
    document.getElementById("completePane").classList.remove("hidden");
}

function setTypePhoto(evt) {
    if (evt.target.checked) {
        document.getElementById("textSubmission").value = "";
        document.getElementById("textSubmitOut").innerHTML = "";
        document.getElementById("textSubmitBtn").disabled = true;
        evt.target.checked = true;
        document.getElementById("text").checked = false;
        document.getElementById("photoInfo").classList.remove("hidden");
        document.getElementById("photosub").classList.remove("hidden");
        document.getElementById("textInfo").classList.add("hidden");
        document.getElementById("subselect").classList.add("hidden");
        document.getElementById("textsub").classList.add("hidden");
        document.getElementById("pastesub").classList.add("hidden");

    }
}

function setTypeText(evt) {
    if (evt.target.checked) {
        photos = [];
        evt.target.checked = true;
        document.getElementById("photo").checked = false;
        document.getElementById("photoSubmitOut").innerHTML = "";
        document.getElementById("photoSubmitBtn").disabled = true;
        document.getElementById("textInfo").classList.remove("hidden");
        document.getElementById("textsub").classList.remove("hidden");
        document.getElementById("photoInfo").classList.add("hidden");
        document.getElementById("photosub").classList.add("hidden");
        document.getElementById("subselect").classList.add("hidden");
        document.getElementById("pastesub").classList.add("hidden");
    }
}

function submissionNav(evt, navLocation) {
    if (navLocation == "attachPane") {
        resetBox();
        document.getElementById("attachPane").classList.remove("hidden");
        document.getElementById("pastePane").classList.add("hidden");
        document.getElementById("pastesub").classList.add("hidden");
        document.getElementById("attachsub").classList.remove("hidden");
        document.getElementById("subselect").classList.add("hidden");
        if (stage == 1) {
            document.getElementById("q1Pane").classList.add("hidden");
        } else if (stage == 2) {
            document.getElementById("q2Pane").classList.add("hidden");
        }
    } else if (navLocation == "pastePane") {
        document.getElementById("attachPane").classList.add("hidden");
        document.getElementById("pastePane").classList.remove("hidden");
        document.getElementById("pastesub").classList.remove("hidden");
        document.getElementById("subselect").classList.add("hidden");
        if (stage == 1) {
            document.getElementById("q1Pane").classList.add("hidden");
        } else if (stage == 2) {
            document.getElementById("q2Pane").classList.add("hidden");
        }
    } else if (navLocation == "main") {
        resetBox();
        document.getElementById("attachPane").classList.add("hidden");
        document.getElementById("pastePane").classList.add("hidden");
        document.getElementById("pastesub").classList.add("hidden");
        document.getElementById("attachsub").classList.add("hidden");
        document.getElementById("subselect").classList.remove("hidden");
        if (stage == 1) {
            document.getElementById("q1Pane").classList.remove("hidden");
        } else if (stage == 2) {
            document.getElementById("q2Pane").classList.remove("hidden");
        }
    }
}

function submit() {
    document.getElementById("modal").style.display = "none";
    submits += 1;
    if (questions.length == 1) {
        forceStop = true;
        endTest();
    } else {
        if (stage == 1) {
            resetBox();
            photos = [];
            document.getElementById("text").checked = true;
            document.getElementById("photo").checked = false;
            document.getElementById("photoSubmitOut").innerHTML = "";
            document.getElementById("photoSubmitBtn").disabled = true;
            document.getElementById("textSubmission").value = "";
            document.getElementById("textSubmitOut").innerHTML = "";
            document.getElementById("textSubmitBtn").disabled = true;
            document.getElementById("q1Pane").classList.add("hidden");
            document.getElementById("attachPane").classList.add("hidden");
            document.getElementById("pastePane").classList.add("hidden");
            document.getElementById("submission").classList.add("hidden");
            document.getElementById("attachsub").classList.add("hidden");
            document.getElementById("photosub").classList.add("hidden");
            document.getElementById("textsub").classList.remove("hidden");
            document.getElementById("subselect").classList.remove("hidden");
            document.getElementById("intermediatePane").classList.remove("hidden");
            document.getElementById("timerHeader").innerHTML = "Time Left Until Question 2";
        } else {
            forceStop = true;
            endTest();
        }
        
    }
}

function newExam(evt) {
    document.getElementById("completePane").classList.add("hidden");
    document.getElementById("prepPane").classList.remove("hidden");
}

document.getElementById("start").addEventListener("click", begin, false);
document.getElementById("attachNav").addEventListener("click", (event) => (submissionNav(event, "attachPane")), false);
document.getElementById("pasteNav").addEventListener("click", (event) => (submissionNav(event, "pastePane")), false);
document.getElementById("attachReturn").addEventListener("click", (event) => (submissionNav(event, "main")), false);
document.getElementById("pasteReturn").addEventListener("click", (event) => (submissionNav(event, "main")), false);
document.getElementById("textSubmitBtn").addEventListener("click", (event) => {displayModal("Ready to Submit?", "You will not be able to return to the question once you complete this step.", 1);});
document.getElementById("photoSubmitBtn").addEventListener("click", (event) => {displayModal("Ready to Submit?", "You will not be able to return to the question once you complete this step.", 1);});
document.getElementById("pasteSubmitBtn").addEventListener("click", (event) => {displayModal("Ready to Submit?", "You will not be able to return to the question once you complete this step.", 1);});
document.getElementById("smBtn").addEventListener("click", submit, false);
document.getElementById("photo").addEventListener("change", setTypePhoto, false);
document.getElementById("text").addEventListener("change", setTypeText, false);
document.getElementById("newExam").addEventListener("click", newExam, false);
document.getElementById("skipWait").addEventListener("click", (evt) => {advance = true;}, false);
