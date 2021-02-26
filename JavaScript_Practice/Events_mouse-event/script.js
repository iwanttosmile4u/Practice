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

function getRandomColor() {
  let firstColor = Math.floor(Math.random() * 255);
  let secondColor = Math.floor(Math.random() * 255);
  let thirdColor = Math.floor(Math.random() * 255);
  return `rgb(${firstColor}), ${secondColor}, ${thirdColor}`;
}
console.log(getRandomColor());
