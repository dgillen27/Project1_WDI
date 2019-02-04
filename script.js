const square = document.querySelector(".square");
const triangle = document.querySelector(".triangle");
const circle = document.querySelector(".circle");
const shape = document.querySelector("div");


// const changeShapes = (ev) => {
//   if (ev.target.classList === "square") {
//     ev.target.classList.add('triangle');
//     ev.target.classList.remove("square");
//     console.log("this was a square")
//   } else if (shape.classList === "triangle") {
//     ev.target.classList.add('circle')
//     ev.target.classList.remove('triangle')
//   } else if (shape.classList === "circle") {
//     ev.target.classList.add("square")
//     ev.target.classList.remove("circle")
//   }
// }

square.addEventListener('click', (ev) => {
    console.log("square")
  if (ev.target.className === "square"){
    ev.target.classList.add('triangle');
    ev.target.classList.remove("square");
  } else if (shape.className === "triangle") {
    ev.target.classList.add('circle')
    ev.target.classList.remove('triangle')
  } else if (shape.className === "circle") {
    ev.target.classList.add("square")
    ev.target.classList.remove("circle")
  }
});

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
