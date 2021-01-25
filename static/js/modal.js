var trailmodal = document.getElementById("trail");


var opentrail = document.getElementById("trail-btn-trail");


var closetrail = document.getElementsByClassName("closetrail")[0];


opentrail.onclick = function() {
  trailmodal.style.display = "block";
}

closetrail.onclick = function() {
  trailmodal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == trailmodal) {
    trailmodal.style.display = "none";
  }
}