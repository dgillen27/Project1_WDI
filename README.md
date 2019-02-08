# Project 1 WDI Dan Gillen, Matchy Shapes!

Deployed here http://matchyshapes.surge.sh/

## Instructions

In this game, the objective is to change the shape of each floating object to one uniform shape. You do this by clicking on the existing randomly generated shapes.

To start the game off, the player will click the **start** button. Upon clicking the start button, several shapes will randomly generate and will be moving in random directions around the screen.

The player must then click on the shapes to change their form so that they are all the same shape. When the player clicks on a square it will turn into a triangle, a triangle will turn into a circle, and a circle will turn into a square. If you can match up the shapes within the time limit you win. If not, you lose.

## Wireframe

[StartPage Wireframe](imgs/WireFrame1.jpg)


[PlayPhase Wireframe](imgs/WireFrame2.jpg)


[EndGame Wireframe](imgs/WireFrame3.jpg)


## Header

In the header there will be information displayed about the difficulty in the top left corner, as well as some encouraging messages. In the top right corner there will be a counter to keep track of the time while the game is in effect.

## Section

In the section there will be a menu page that is removed on start. On the menu page there will be, instructions, a practice area, difficulty selectors (in button form), and a start button.

## Main

On the main page there will be shapes moving that are clickable which is where the primary game occurs. The goal is to make all of these shapes of the same type.

## Technologies

- HTML
- CSS
- JavaScript

## MVP

- Create a way to cycle through the shape types
- Create a winning condition
- Create a timer that links up with the winning condition

## Post MVP

- Create difficulty levels
- Add major styling and transitions
- Create a way to go back to the home page

## Obstacles

The major problems I encountered include:

- Making a way to cycle through the different shape types  
- Figuring out how to create the winning condition
- Creating a timer and linking it up with the win condition

## Solutions

The solutions for the aforementioned problems were:

- Adding and removing classes rather than toggling classes.
- Using querySelectorAll on the shapes class. This gathered each shape into a node list whose length could then be checked against a winning condition number, like so: ```document.querySelectorAll(".square").length === difficulty```
- To create a timer, I created a time variable that contained a set number that decremented by one every second using `setInterval`. When the value of the time variable reached zero, the game ended and the player lost if the win condition was not met.

## Code Snippet

```
const selectDifficulty = (ev) => {
  if (ev.target === easyButton) {
    title.innerText = "LAZY MODE";
    difficulty = 12;
    difficultyTime = 2000;
  } else if (ev.target === medButton) {
    title.innerText = "TUFF MODE";
    difficulty = 15;
    difficultyTime = 1700;
  } else if (ev.target === hardButton) {
    title.innerText = "BOSS MODE";
    difficulty = 16;
    difficultyTime = 1500;
  }
}
```

This bit of code here, is something that I am very proud of. I spent a fair amount of time considering the best way to balance this game such that it would be accessible to many different player types. Each mode has a variance of difficulty that I would say is rather subtle. With this code here, depending on the players choice of difficulty the shapes will pause for .5s, .3s or not pause at all for added challenge.

## Sources

Code from lines 105-107 found at https://stackoverflow.com/questions/3847121/how-can-i-disable-all-settimeout-events
