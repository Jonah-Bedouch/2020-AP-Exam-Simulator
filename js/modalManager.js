// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the Cancel & Confirm buttons for by Id
var cancel = document.getElementById("closeBtn");
var confirm = document.getElementById("mBtn");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

cancel.onclick = function() {
    modal.style.display = "none";
};

confirm.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function displayModal(header, body, footer) {
    document.getElementById("mHeader").innerHTML = header;
    document.getElementById("mContent").innerHTML = body;
    if (footer == 0) {
        document.getElementById("f0").classList.remove("hidden");
        document.getElementById("f1").classList.add("hidden");
    } else {
        document.getElementById("f1").classList.remove("hidden");
        document.getElementById("f0").classList.add("hidden");
    }
    modal.style.display = "block";
}