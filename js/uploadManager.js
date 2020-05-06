let files = [];

let questions = [];

let photos = [];

function upload(evt, out, render, renderOut, check, q, p) {
  let files = evt.target.files;

  var output = [];
  for (var i = 0, f;
    (f = files[i]); i++) {
    if (f.type.match(check) || check == "") {
      if (render) {
        var reader = new FileReader();
        reader.onload = ((file) => {
          return (e) => {
            var span = document.createElement("span");
            span.innerHTML = `<embed src="${e.target.result}" title="test" width="100%" height="100%"/>`;
            document.getElementById(renderOut).insertBefore(span, null);
            if (q != 0) {
              questions.push(q);
            }
          };
        })(f);

        reader.readAsDataURL(f);
      }

      if (!p) {
        output.push(
          `<li><p>${escape(f.name)}  <span class="rem" onclick="del('${evt.target.id}', '${out}', '${renderOut}', ${q}, -1)">×</span></p>
            </li>`
        );
      } else {
        let l = photos.length;
        if (l < 5) {
          photos.push(
            `<li id="${l}"><p>${escape(f.name)}  <span class="rem" onclick="del('${evt.target.id}', '${out}', '${renderOut}', ${q}, ${l})">×</span></p>
              </li>`
          );
        } else {
          photos.push(
            `<li id="${l}"><p class="warn">Too Many Photos  <span class="rem" onclick="del('${evt.target.id}', '${out}', '${renderOut}', ${q}, ${l})">×</span></p>
              </li>`
          );
        }
        evt.target.innerHTML = "";
      }
    } else {
      output = ["<li><p class='warn'>Invalid File Type</p></li>"];
      evt.target.value = "";
      document.getElementById(out).innerHTML = "";
    }
    if (!p) {
      if (output.length == 1 && out == "textSubmitOut") {
        document.getElementById("textSubmitBtn").disabled = false;
      } else if (output.length == 0 && out == "textSubmitOut") {
        document.getElementById("textSubmitBtn").disabled = true;
      }
      if (output.length != 0) {
        document.getElementById(out).innerHTML = `<ul class="attached"><li><h4>Your Attachment(s)</h4></li>${output.join("")} </ul>`;
      }
    } else if (p) {
      if (photos.length > 0 && photos.length <= 5) {
        document.getElementById("photoSubmitBtn").disabled = false;
      } else {
        document.getElementById("photoSubmitBtn").disabled = true;
      }
      if (photos.length != 0) {
        document.getElementById(out).innerHTML = `<ul class="attached"><li><h4>Your Attachment(s)</h4></li>${photos.join("")} </ul>`;
      }
    }
    else {
      document.getElementById(out).innerHTML = "";
      document.getElementById(renderOut).innerHTML = "";
    }
  }
}

function del(inRef, out, renderOut, q, p) {
  if (p == -1) {
    if (out == "textSubmitOut") {
      document.getElementById("textSubmitBtn").disabled = true;
    }
    document.getElementById(inRef).value = "";
    document.getElementById(out).innerHTML = "";
    if (renderOut != "") {
      document.getElementById(renderOut).innerHTML = "";
    }
    
  } else {
    let index = photos.indexOf(document.getElementById(p).outerHTML);
    photos.splice(index, 1);
    if (photos.length > 0 && photos.length <= 5) {
      document.getElementById("photoSubmitBtn").disabled = false;
    } else {
      document.getElementById("photoSubmitBtn").disabled = true;
    }
    if (photos.length != 0) {
      document.getElementById(out).innerHTML = `<ul class="attached"><li><h4>Your Attachment(s)</h4></li>${photos.join("")} </ul>`;
    } else {
      document.getElementById(out).innerHTML = "";
    }
    
  }
  if (q != 0) {
    let index = questions.indexOf(q);
    if (index > -1) {
      questions.splice(index, 1);
    }
  }
}

document.getElementById("q1In").addEventListener("change", (evt) => {
  upload(evt, 'q1InRep', true, 'q1', "application.pdf", 1, false);
}, false);
document.getElementById("q2In").addEventListener("change", (evt) => {
  upload(evt, 'q2InRep', true, 'q2', "application.pdf", 2, false);
}, false);
document.getElementById("textSubmission").addEventListener("change", (evt) => {
  upload(evt, 'textSubmitOut', false, '', "", 0, false);
}, false);
document.getElementById("photoSubmission").addEventListener("change", (evt) => {
  upload(evt, 'photoSubmitOut', false, '', "", 0, true);
}, false);
