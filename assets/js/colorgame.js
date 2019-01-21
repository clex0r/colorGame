var numSquares = 6;
var colors = generateColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

hardButton.addEventListener("click", function(){
  easyButton.classList.remove("selected");
  this.classList.add("selected");
  numSquares = 6;
  colors = generateColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {

      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
})
easyButton.addEventListener("click", function(){
  hardButton.classList.remove("selected");
  this.classList.add("selected");
  numSquares = 3;
  colors = generateColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];

    }else {
        squares[i].style.display = "none";
    }
  }
})
resetButton.addEventListener("click", function(){
  colors = generateColor(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New colors";
  message.textContent = "";
});

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      h1.style.backgroundColor= clickedColor;
      resetButton.textContent = "Play again";
    }else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again!"
    }
  })
}
colorDisplay.textContent = pickedColor;

function changeColors(colors){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors;
  }
}

function pickColor(){
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}
function generateColor(num){
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor(){
  //RGB -> R
  var r = Math.floor(Math.random() * 256);
  //RGB -> G
  var g = Math.floor(Math.random() * 256);
  //RGB -> B
  var b = Math.floor(Math.random() * 256);
  //String them together
  return "rgb(" + r + ", " + g + ", " + b +")";
}
