const shape = document.querySelector("div");
const button = document.querySelector("button")
const display = document.querySelector('#clock');
const main = document.querySelector("main")
const allShapes = document.querySelectorAll("div")
const title = document.querySelector("#title")
const shapeSelection = ["square", "triangle", "circle"]
const placeTime = document.querySelector("#clock")
const starterSquare = document.querySelector("#starter-square")
const starterTriangle = document.querySelector("#starter-triangle")
const starterCircle = document.querySelector("#starter-circle")
const tutorialPage = document.querySelector("section")//tutorial pagerandomPosition
let time = 10;

//function that creates the shapes
const createShapes = () => {
    for(let i = 0; i < 12; i++) {
      const shape = document.createElement("div");
      shape.id = "shapes" + i;
      shape.classList.add("shape");
      shape.classList.add(shapeSelection[Math.floor(Math.random() * shapeSelection.length)])
      main.appendChild(shape)
      // debugger;
      setInterval(randomPosition, 1000, shape);
    }
}


const randomPosition = (shape) => {
  const styleTop = Math.floor(Math.random() * (window.innerHeight - 200));
  const styleLeft = Math.floor(Math.random() * (window.innerWidth - 100));

    shape.style.bottom = `${styleTop}px`;
    shape.style.left = `${styleLeft}px`;
}
//Function to start the game
const startGame = () => {
    tutorialPage.remove();
      createShapes();
        setInterval(startTimer, 1000)
}

//start button/game starter
button.addEventListener('click', startGame);

//Timer function taken from stackoverflow
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);
//
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         display.textContent = minutes + ":" + seconds;
//
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
//     dur = duration;
// }


//Timer.com

const startTimer = () => {
  display.innerText = time--
}
//Core game

const changeShape = (ev) => {
 if (ev.target.className === "shape square"){
   ev.target.classList.add('triangle');
   ev.target.classList.remove("square");
 }
 else if (ev.target.className === "shape triangle") {
   ev.target.classList.add('circle')
   ev.target.classList.remove('triangle')
 }
 else if (ev.target.className === "shape circle") {
   ev.target.classList.add("square")
   ev.target.classList.remove("circle")
 }
 youWon();
}


const getRid = () => {
    document.querySelectorAll(".shape").forEach( (el) => {
      el.remove();
    })
  }
//win condition

const youWon = () => {
  const madShapes = document.querySelectorAll(".shape")
  if (document.querySelectorAll(".square").length === 12 && time > 0) {
    title.innerText = "SQUARES WIN"
      setTimeout(getRid, 300);
  } else if (document.querySelectorAll(".triangle").length === 12 && time > 0) {
    title.innerText = "TRIANGLES WIN"
      setTimeout(getRid, 300);
  } else if (document.querySelectorAll(".circle").length === 12 && time > 0) {
    title.innerText = "CIRCLES WIN"
      setTimeout(getRid, 300);
  }else if (time <= 0) {
    alert("you lost")
  } else {
    title.innerText = "Click Those Shapes!"
  }
}

//change shape function

main.addEventListener('click', changeShape);
