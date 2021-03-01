/*TASK - 1
 * Show alert with message 'This is click', after the click on the 'Click me' button.
 */

// const clickMe = document.getElementById("clickMeBtn");
// clickMe.addEventListener("click", () => {
//   alert("This is click");
// });

/*TASK - 2
 * Show alert with message 'This is mouseover', after the hover on the 'Click me' button.
 */

// const clickMe = document.getElementById("clickMeBtn");
// clickMe.addEventListener("mouseover", () => {
//   alert("This is mouseover");
// });

/*TASK - 3
 * Create a function, that will be changing the background color of the 100px square randomly,
 * by the clicking on it. Every color should be random, transparent and white are not included in the list of colors.
 */

/*TASK - 4
 * There is a button 'Change color' next ot the 100px square. Create a function, that will change the color of the square randomly, by the clicking on the button, not on the square.
 */

function getRandomColor() {
  const firstColor = Math.floor(Math.random() * 255);
  const secondColor = Math.floor(Math.random() * 255);
  const thirdColor = Math.floor(Math.random() * 255);
  return `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
}

const createElement = (tagName, styles, text, handleClick = () => null) => {
  const elem = document.createElement(tagName);
  elem.style.cssText = styles;
  if (text) {
    elem.textContent = text;
  }
  elem.addEventListener("click", handleClick);
  return elem;
};
const square = createElement(
  "div",
  "width: 300px; height: 300px; background: #f0f;",
  ""
);
const btn = createElement("button", "", "Click me", () => {
  square.style.background = getRandomColor();
});
document.body.prepend(square, btn);
