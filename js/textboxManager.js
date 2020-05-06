function paste (evt) {
    evt.target.value = evt.clipboardData.getData('Text');
    evt.returnValue = false;
    evt.target.readOnly = true;
    document.getElementById("pasteSubmitBtn").disabled = false;
}

function resetBox (evt) {
    document.getElementById("uploadBox").value = "";
    document.getElementById("uploadBox").readOnly = false;
    document.getElementById("pasteSubmitBtn").disabled = true;
}

document.getElementById("uploadBox").addEventListener("keypress", (evt) => {evt.returnValue = false;}, false);
document.getElementById("uploadBox").addEventListener("paste", paste, false);
document.getElementById("resetBox").addEventListener("click", resetBox, false);