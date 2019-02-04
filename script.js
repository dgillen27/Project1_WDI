  // const square = document.querySelector(".square");
  // const triangle = document.querySelector(".triangle");
  // const circle = document.querySelector(".circle");

const shape = document.querySelector("div");
const button = document.querySelector("button")
const display = document.querySelector('#clock');
const main = document.querySelector("main")
const allShapes = document.querySelectorAll("div")
const reallyAllShapes = document.querySelectorAll("")

//function that creates the shapes
const createShapes = () => {
  const shapes = document.createElement("div")
  const reallyAllShapes = document.querySelector(".square")
  // const position = (shapes) => {
  //   const styleTop = Math.floor(Math.random() * 100) + 1;
  //   const styleLeft = Math.floor(Math.random() * 100) + 1;
  //
  //   shapes.style.top = styleTop
  //   shapes.style.left = styleLeft
  // }
  shapes.setAttribute("class", "square")
  main.appendChild(shapes)
}

//Function to start the game
const startGame = () => {
  startTimer(60, display);
  for(let i = 0; i < 12; i++) {
    createShapes();
  }
}

//start button/game starter
button.addEventListener('click', startGame);

//Timer function taken from stackoverflow
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

const youWon = () => {
if (allShapes[0].className === "circle" && allShapes[1].className === "circle" && allShapes[2].className === "circle") {
  alert("You did it, you won")}

}

//Core game

const sheets = (ev) => {
 if (ev.target.className === "square"){
   ev.target.classList.add('triangle');
   ev.target.classList.remove("square");
   console.log("you clicked a square")
 }
 else if (ev.target.className === "triangle") {
   ev.target.classList.add('circle')
   ev.target.classList.remove('triangle')
   console.log("you clicked a triangle");
 }
 else if (ev.target.className === "circle") {
   ev.target.classList.add("square")
   ev.target.classList.remove("circle")
   console.log("you clicked a cirlce");
 }
 youWon();
}


//change shape function
main.addEventListener('click', sheets);

//win condition









// CODE THAT KINDA WORKED BEFORE

// square.addEventListener('click', () => {
//   square.classList.add('triangle');
//   square.classList.remove("square");
//   console.log("YOU CLICKED A SQUARE");
// });
//
// triangle.addEventListener('click', () => {
//   triangle.classList.add('circle')
//   triangle.classList.remove('triangle')
//   console.log("YOU CLICKED A TRIANGLE")
// });
//
// circle.addEventListener('click', (ev) => {
//     circle.classList.add("square")
//     circle.classList.remove("circle")
//     console.log("YOU CLICKED A CIRCLE")
// });
