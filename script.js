const square = document.querySelector(".square");
const triangle = document.querySelector(".triangle");
const circle = document.querySelector(".circle");
const shape = document.querySelectorAll("div");

// square.addEventListener('click', () => {
//   square.style.left("50px")
// })

square.addEventListener('click', () => {
  console.log("YOU CLICKED SQUARE");
  square.classList.toggle('triangle')
});

triangle.addEventListener('click', () => {
  triangle.classList.toggle('circle')
  console.log("YOU CLICKED TRIANGLE")
});

circle.addEventListener('click', (ev) => {
    circle.classList.toggle("square")
    console.log("YOU CLICKED SQUARE")
});
