const red = document.getElementById("Red");
const green = document.getElementById("Green");
const blue = document.getElementById("Blue");
const resetcolors = document.getElementById("Reset");
const colorBox = document.getElementById("color-box");
const pickedColor = document.getElementById("color-value");

function changeRed() {
  colorBox.style.backgroundColor = "red";
  pickedColor.textContent = "Red";
}

function changeGreen() {
  colorBox.style.backgroundColor = "green";
  pickedColor.textContent = "Green";
}

function changeBlue() {
  colorBox.style.backgroundColor = "blue";
  pickedColor.textContent = "Blue";
}
function reset() {
  colorBox.style.backgroundColor = "white";
  pickedColor.textContent = "None";
}

red.addEventListener("click", changeRed);
green.addEventListener("click", changeGreen);
blue.addEventListener("click", changeBlue);
resetcolors.addEventListener("click", reset);
