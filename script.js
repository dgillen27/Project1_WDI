const shape = document.querySelector("div");
const button = document.querySelector(".start");
const easyButton = document.querySelector("#easy")
const medButton = document.querySelector("#medium")
const hardButton = document.querySelector("#hard")
const diffButton = document.querySelectorAll(".difficulty")
const display = document.querySelector('#clock');
const main = document.querySelector("main");
const title = document.querySelector("#title");
const shapeSelection = ["square", "triangle", "circle"]
const tutorialPage = document.querySelector("section");
let time = 30;
let difficultyTime = 1700;
let difficulty = 15;

const selectDifficulty = (ev) => {
  if (ev.target === easyButton) {
    title.innerText = "LAZY MODE";
    difficulty = 12;
    difficultyTime = 2800;
  } else if (ev.target === medButton) {
    title.innerText = "TUFF MODE";
    difficulty = 15;
    difficultyTime = 2300;
  } else if (ev.target === hardButton) {
    title.innerText = "BOSS MODE";
    difficulty = 16;
    difficultyTime = 1800;
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
      setInterval(randomPosition, difficultyTime, shape);
    }
}

const randomPosition = (shape) => {
  const styleBottom = Math.floor(Math.random() * (window.innerHeight - 210));
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
  const msg = document.createTextNode("CONGRATS! YOU WON");
  winMsg.appendChild(msg);
  main.appendChild(winMsg);

  main.removeEventListener('click', changeShape);
  title.innerText = "SPECTACULAR JOB!"
}

const losePage = () => {
  let highestTimeoutId = setTimeout(";");
  for (let i = -1; i < highestTimeoutId; i++) {
    clearTimeout(i);
  }
  const loseMsg = document.createElement("h3");
  const lost = document.createTextNode("WAY TO BE, YOU LOST");
  loseMsg.appendChild(lost);
  main.appendChild(loseMsg);

  main.removeEventListener('click', changeShape);
  title.innerText = "BETTER LUCK NEXT TIME!";
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
  const txt = document.createTextNode("TRY AGAIN?")
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
    title.innerText = "CLICK THOSE SHAPES!";
  }
}
