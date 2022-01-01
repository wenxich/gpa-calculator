var modal = document.getElementById("myModal");

var btn = document.getElementById("chartButton");

var span = document.getElementsByClassName("close")[0];

// when button clicked -> display modal
btn.onclick = function() {
    modal.style.display = "block";
}

// when 'x' clicked -> stop displaying
span.onclick = function() {
    modal.style.display = "none";
}

// when outside of modal clicked -> stop displaying
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}