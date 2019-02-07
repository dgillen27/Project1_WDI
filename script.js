const body = document.querySelector("body")
const shape = document.querySelector("div");
const button = document.querySelector(".start");
const easyButton = document.querySelector("#easy")
const medButton = document.querySelector("#medium")
const hardButton = document.querySelector("#hard")
const diffButton = document.querySelectorAll(".difficulty")
const display = document.querySelector('#clock');
const main = document.querySelector("main");
const allShapes = document.querySelectorAll("div");
const title = document.querySelector("#title");
const shapeSelection = ["square", "triangle", "circle"]
const placeTime = document.querySelector("#clock");
const starterSquare = document.querySelector("#starter-square");
const starterTriangle = document.querySelector("#starter-triangle");
const starterCircle = document.querySelector("#starter-circle");
const tutorialPage = document.querySelector("section");
let time = 30;
let difficultyTime = 2000;
const easyTime = 2000;
const mediumTime = 1500;
const hardTime = 1200;
let difficulty = 12;
const easyNum = 12;
const mediumNum = 14;
const hardNum = 16;
// const difficult;

const selectDifficulty = (ev) => {
  if (ev.target === easyButton) {
    title.innerText = "Lazy Mode";
    difficulty = easyNum;
    difficultyTime = easyTime
  } else if (ev.target === medButton) {
    title.innerText = "Mediocre Mode";
    difficulty = mediumNum;
    difficultyTime = mediumTime
  } else if (ev.target === hardButton) {
    title.innerText = "Boss Mode";
    difficulty = hardNum;
    difficultyTime = hardTime
  }
}

easyButton.addEventListener("click", selectDifficulty);
medButton.addEventListener("click", selectDifficulty);
hardButton.addEventListener("click", selectDifficulty)

const createShapes = () => {
    for(let i = 0; i < difficulty; i++) {
      const shape = document.createElement("div");
      shape.id = "shapes" + i;
      shape.classList.add("shape");
      shape.classList.add(shapeSelection[Math.floor(Math.random() * shapeSelection.length)]);
      shape.style.left = -200 + "px"
      main.appendChild(shape);
      setInterval(randomPosition, 1500, shape);
    }
}

const randomPosition = (shape) => {
  const styleBottom = Math.floor(Math.random() * (window.innerHeight - 200));
  const styleLeft = Math.floor(Math.random() * (window.innerWidth - 100));

    shape.style.bottom = `${styleBottom}px`;
    shape.style.left = `${styleLeft}px`;
}

const startGame = () => {
    tutorialPage.remove();
    createShapes();
    setInterval(startTimer, 1000);
};

button.addEventListener('click', startGame);

const startTimer = () => {
  display.innerText = time--;
  endGame();
};

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

main.addEventListener('click', changeShape);

const changeTutorialShape = (ev) => {
  if (ev.target.className === "starter-square"){
    ev.target.classList.add('starter-triangle');
    ev.target.classList.remove("starter-square");
  }
  else if (ev.target.className === "starter-triangle") {
    ev.target.classList.add('starter-circle');
    ev.target.classList.remove('starter-triangle');
  }
  else if (ev.target.className === "starter-circle") {
    ev.target.classList.add("starter-square");
    ev.target.classList.remove("starter-circle");
  }
}

main.addEventListener("click", changeTutorialShape)

const winPage = () => {
  let highestTimeoutId = setTimeout(";");
  for (let i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
  const winMsg = document.createElement("h3");
  const msg = document.createTextNode("HEY DUDE! YOU WON");
  winMsg.appendChild(msg);
  main.appendChild(winMsg);

  title.innerText = "Spectacular job!"
}

const losePage = () => {
  let highestTimeoutId = setTimeout(";");
  for (let i = 0; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
  const loseMsg = document.createElement("h3");
  const lost = document.createTextNode("WAY TO BE, YOU LOST")
  loseMsg.appendChild(lost);
  main.appendChild(loseMsg);

  title.innerText = "You are a dissapointment";
}

const getRid = () => {
    document.querySelectorAll(".shape").forEach( (el) => {
    el.remove();
    })

  }

const resetGame = () => {
  location.reload();
}

const resetButton = () => {
  const endButton = document.createElement("button")
  const txt = document.createTextNode("Try again?")
  endButton.classList.add("endButton")
  endButton.appendChild(txt);
  main.appendChild(endButton);

  endButton.addEventListener("click", resetGame)
}

const endGame = () => {
  const madShapes = document.querySelectorAll(".shape");
  if (document.querySelectorAll(".square").length === difficulty && time > 0) {
      winPage();
      resetButton();
  } else if (document.querySelectorAll(".triangle").length === difficulty && time > 0) {
      winPage();
      resetButton();
  } else if (document.querySelectorAll(".circle").length === difficulty && time > 0) {
      winPage();
      resetButton();
  } else if (time < 0) {
      losePage();
      resetButton();
  } else {
    title.innerText = "Click Those Shapes!";
  }
}
