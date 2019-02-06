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
let time = 30;

//function that creates the shapes
const createShapes = () => {
    for(let i = 0; i < 12; i++) {
      const shape = document.createElement("div");
      shape.id = "shapes" + i;
      shape.classList.add("shape");
      shape.classList.add(shapeSelection[Math.floor(Math.random() * shapeSelection.length)])
      main.appendChild(shape)
      setInterval(randomPosition, 1000, shape);
    }
}


const randomPosition = (shape) => {
  const styleTop = Math.floor(Math.random() * (window.innerHeight - 200));
  const styleLeft = Math.floor(Math.random() * (window.innerWidth - 100));

    shape.style.bottom = `${styleTop}px`;
    shape.style.left = `${styleLeft}px`;
    youWon();
}
//Function to start the game
const startGame = () => {
    tutorialPage.remove();
      createShapes();
        setInterval(startTimer, 1000)
}

//start button/game starter
button.addEventListener('click', startGame);

//Timer.com
const startTimer = () => {
  display.innerText = time--;
}

//Core game
const changeShape = (ev) => {
 if (ev.target.className === "shape square"){
   ev.target.classList.add('triangle');
   ev.target.classList.remove("square");
 }
 else if (ev.target.className === "shape triangle") {
   ev.target.classList.add('circle');
   ev.target.classList.remove('triangle');
 }
 else if (ev.target.className === "shape circle") {
   ev.target.classList.add("square");
   ev.target.classList.remove("circle");
 }
}

const getRid = () => {
    document.querySelectorAll(".shape").forEach( (el) => {
      el.remove();
        display.remove();
    })
  }

//win condition
const youWon = () => {
  const madShapes = document.querySelectorAll(".shape");
  if (document.querySelectorAll(".square").length === 12 && time > 0) {
    title.innerText = "SQUARES WIN";
      setTimeout(getRid, 300);
  } else if (document.querySelectorAll(".triangle").length === 12 && time > 0) {
    title.innerText = "TRIANGLES WIN";
      setTimeout(getRid, 300);
  } else if (document.querySelectorAll(".circle").length === 12 && time > 0) {
    title.innerText = "CIRCLES WIN";
      setTimeout(getRid, 300);
  } else if (time === 0) {
    console.log("you Lost");
      getRid();
  } else {
    title.innerText = "Click Those Shapes!";
  }
}

//change shape function
main.addEventListener('click', changeShape);
