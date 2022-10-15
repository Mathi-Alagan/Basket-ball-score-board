let home_score = document.getElementById("home-score-count");
let guest_score = document.getElementById("guest-score-count");

let home_point = 0;
let guest_point = 0;

function home_plus_one() {
  home_point++;
  home_score.textContent = home_point;
}
function home_plus_two() {
  home_point += 2;
  home_score.textContent = home_point;
}
function home_plus_three() {
  home_point += 3;
  home_score.textContent = home_point;
}

function guest_plus_one() {
  guest_point++;
  guest_score.textContent = guest_point;
}
function guest_plus_two() {
  guest_point += 2;
  guest_score.textContent = guest_point;
}
function guest_plus_three() {
  guest_point += 3;
  guest_score.textContent = guest_point;
}
