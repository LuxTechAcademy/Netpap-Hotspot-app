var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//three 100 mbs modal
var threemodal = document.getElementById("three");


var btnthree = document.getElementById("threemodal");


var closethree = document.getElementsByClassName("closethree")[0];


btnthree.onclick = function() {
  threemodal.style.display = "block";
}



closethree.onclick = function() {
  threemodal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == threemodal) {
    threemodal.style.display = "none";
  }
}  
