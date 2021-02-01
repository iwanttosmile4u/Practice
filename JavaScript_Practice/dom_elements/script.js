/* TASK - 1
 * Get several elements from the page, by:
 *   tag
 *   class
 *   identifier
 *   CSS selector
 *   name attribute
 * Use console.dir() method to show up the elements
 * */

// let element = document.getElementById("list");
// let element2 = document.getElementsByTagName("li")[0];
// let elem3 = document.getElementsByClassName("storage");
// let elem4 = document.querySelector(".storage-item");
// console.dir(element);
// console.dir(element2);
// console.dir(elem3);
// console.dir(elem4);

/* TASK - 2
 * Create a function, that will:
 * take an element from the page with class 'training-list', and text content equals 'list-element 5'.
 * Show this element in console.
 * Replace text content in this element to "<p>Hello</p>" without creating a new HTML element on the page
 * Use array methods to complete the task.
 * */

// function getListItem() {
//   const listItems = document.querySelectorAll(".training-list");
//   for (let i = 0; i < listItems.length; i++) {
//     if (listItems[i].textContent === "list-element 5") {
//       listItems[i].textContent = "<p>Hello</p>";
//       return;
//     }
//   }
// }
// getListItem();

/* TASK - 5
 * Create a function that will ask the user what exact item he wants to change.
 * User needs to write only item name. If there are no matches in the list
 * keep asking until the item name becomes valid.
 * Then ask for a new amount of selected item.
 * Show data entered by the user on the page.
 * Example:
 * item name - 'Coffee',
 * new amount of it - '17'
 * It means that you need to change only the amount of 'Coffee' and it should be 17 now.
 * */

// let textNode = document.createTextNode("I am here");
// console.dir(textNode);

// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<strong>Hi!</strong> You have read message";
// document.body.append(div);

// const list = document.querySelector(".this-class");

// list.before("before");
// list.after("after");
// list.prepend("prepend");

/* TASK - 1
 * Get an element with class 'remove-me' and remove it from the page.
 * Find element with class 'make-me-bigger'. Replace class 'make-me-bigger' to 'active'. Class 'active' already exists in CSS.
 * */

// const elem = document.querySelector(".remove-me");
// elem.remove();
// const elem2 = document.querySelector(".make-me-bigger");
// elem2.classList.replace("make-me-bigger", "active");

/* TASK - 3:
 * Create a square.
 * Ask the user about the size and background color of the square.
 * Create an element in JS
 * Ask the size.
 * Ask the background color.
 * Add the styles to the element in JS
 * Place the element BEFORE the first script tag on your page
 * */

// let userData = prompt("Enter the size of the square");
// let userData2 = prompt("Enter the color");
// let square = document.createElement("div");

// square.style.width = userData + "px";
// square.style.height = userData + "px";
// square.style.background = userData2;
// document.body.prepend(square);
// console.log(square);

/* TASK - 4
 * Create two squares, using the same way that described in the previous task.
 * But these squares are going to have different background colors.
 * Create two elements in JS
 * Ask the user about the size for both of these squares
 * Ask the user about the fist background-color
 * Ask the user about the second background-color
 * Add the styles to both squares
 * Place both squares BEFORE the first element with the script tag on the page
 * */

// let size = prompt("Enter the size of the square");
// let color1 = prompt("Enter color of the first square");
// let color2 = prompt("Enter color of the second square");

// let theFirstSquare = document.createElement("div");
// let theSecondSquare = document.createElement("div");

// theFirstSquare.style.width = size + "px";
// theFirstSquare.style.height = size + "px";
// theFirstSquare.style.background = color1;

// theSecondSquare.style.width = size + "px";
// theSecondSquare.style.height = size + "px";
// theSecondSquare.style.background = color2;

// document.body.prepend(theFirstSquare, theSecondSquare);
// console.log(theFirstSquare, theSecondSquare);

/* TASK - 5
 * Rewrite the last task.
 * Ask the user the number of rectangles to create and the background color for all of them.
 * Create a CSS class with the basic properties: width: 200px; height: 200px; margin: 5px
 *
 * Ask the number of the rectangles
 * Ask the background-color
 *
 * Create a loop, where inside each iteration:
 *   create a rectangle
 *   add class, previously created in CSS
 *   add background-color
 *   append the element on the page BEFORE the first element with the tag script
 */
