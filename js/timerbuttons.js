document.getElementById("start").addEventListener("click", function () {
    var min = Number(document.getElementById("min").innerHTML);
    var sec = Number(document.getElementById("sec").innerHTML);
    var dur = (min*60)+sec;
    startTimer(dur, document.getElementById("min"), document.getElementById("sec"));
    console.log("Started timer");
}, false);

document.getElementById("pause").addEventListener("click", function () {
    var min = Number(document.getElementById("min").innerHTML);
    var sec = Number(document.getElementById("sec").innerHTML);
    var dur = (min*60)+sec;
    reset(dur, document.getElementById("min"), document.getElementById("sec"));
    console.log("Paused timer");
}, false);

document.getElementById("reset").addEventListener("click", function () {
    var usermin = Number(document.getElementById("usermin").value);
    var usersec = Number(document.getElementById("usersec").value);
    var userdur = (usermin*60)+usersec;
    if(userdur == 0) {
      reset(1500, document.getElementById("min"), document.getElementById("sec"));
    } else {
      reset(userdur, document.getElementById("min"), document.getElementById("sec"));
    }
    console.log("Reset timer");
}, false);

document.getElementById("userset").addEventListener("click", function () {
    var usermin = Number(document.getElementById("usermin").value);
    var usersec = Number(document.getElementById("usersec").value);
    var userdur = (usermin*60)+usersec;
    reset(userdur, document.getElementById("min"), document.getElementById("sec"));
    console.log("Set timer");
}, false);