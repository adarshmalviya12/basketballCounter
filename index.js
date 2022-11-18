let scoreHome = 0;
let scoreGuest = 0;
let home = document.getElementById("score-home");
let guest = document.getElementById("score-guest");

function homePlus1() {
    scoreHome += 1;
    home.textContent = scoreHome;
}
function homePlus2() {
    scoreHome += 2;
    home.textContent = scoreHome;
}
function homePlus3() {
    scoreHome += 3;
    home.textContent = scoreHome;
}

function guestPlus1() {
    scoreGuest += 1;
    guest.textContent = scoreGuest;
}
function guestPlus2() {
    scoreGuest += 2;
    guest.textContent = scoreGuest;
}
function guestPlus3() {
    scoreGuest += 3;
    guest.textContent = scoreGuest;
}