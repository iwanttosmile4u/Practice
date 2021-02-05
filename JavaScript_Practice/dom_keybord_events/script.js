// (ready) => alert("DOM is ready"),
//   alert(`Image size: ${image.offsetWidth}x${image.offsetHeight}`);
// document.addEventListener("DOMContentLoaded", ready);

// (window.onload = () => alert("Page is ready")),
//   alert(`Image size: ${image.offsetWidth}x${image.offsetHeight}`); - спочатку покажеться повідомлення
//   із розміром картинки, а потім 'Page is ready'

// window.onbeforeunload = function () {
//   return false;
// };

// function work() {
//   /*...*/
// }
// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", work);
// } else {
//   work();
// }
// console.log(document.readyState);

// function checkPhoneKey(key) {
//   return (
//     (key >= "0" && key <= "9") ||
//     key == "+" ||
//     key == "(" ||
//     key == ")" ||
//     key == "-" ||
//     key == "ArrowLeft" ||
//     key == "ArrowRight" ||
//     key == "Delete" ||
//     key == "Backspace"
//   );
// }

// document.onkeypress = function (event) {
//   console.log(event);
//   if (event.shiftKey) {
//     console.log("Pressed shift");
//   }
// };

// document.getElementById("test").onkeypress = function (event) {
//   //   console.log(event);
//   if (event.keyCode < 48 || event.keyCode > 57) {
//     console.log("not a number");
//     return false; - забороняємо в інпут вводити все, окрім чисел
//   }
// };

// let block = document.getElementById("test");
// let left = 0;
// document.onkeydown = function (event) {
//   console.log(event);
//   if (event.key == "ArrowRight") {
//     block.style.left = left + "px";
//     left++;
//   }
// };

// * Task - 01
//  *
//  * Create h1 element on a page using JavaScript. Place it on the page.
//  * After any kay on the page was pressed, print the key's name as the text content of the h1 element.
//  * */

// const header = document.createElement("h1");
// document.body.append(header);
// header.textContent = "Main header";
// document.addEventListener("keydown", (event) => {
//   if (event.key === "Backspace") {
//     header.textContent = header.textContent.substr(
//       0,
//       header.textContent.length - 1
//     );
//   } else header.textContent += event.key;
// });

// Створюємо новий елемент - тег h1 і апендимо його на сторінку.
/**
 * Task - 02
 *
 * Create a <p> element that should represent how many pixels the user had scrolled on the page from the top of it.
 * */
// Скільки пікселів юзер проскролить із самого верху

// const paragraph = document.createElement("p");
// paragraph.style.cssText = 'position: fixed; padding: 10px; background'
// document.addEventListener ('scroll', (event) => {

// })
