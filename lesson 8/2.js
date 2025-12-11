const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

const btnRed = document.getElementById('btnRed');
const btnYellow = document.getElementById('btnYellow');
const btnGreen = document.getElementById('btnGreen');

function tatHet() {
  red.style.opacity = 0.3;
  yellow.style.opacity = 0.3;
  green.style.opacity = 0.3;
}

btnRed.onclick = function() {
  tatHet();
  red.style.opacity = 1;
}

btnYellow.onclick = function() {
  tatHet();
  yellow.style.opacity = 1;
}

btnGreen.onclick = function() {
  tatHet();
  green.style.opacity = 1;
}
