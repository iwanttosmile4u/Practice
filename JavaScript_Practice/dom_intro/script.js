// for (let i = 0; i < document.body.childNodes.length; i++) {
//   console.log(document.body.childNodes[i]);
// }
// let elements = document.querySelectorAll("ul>li:last-child");
// for (let elem of elements) {
//   alert(elem.innerHTML);
// }
// for (let elem of document.body.children) {
//   if (elem.matches('[href$="zip"]')) {
//     alert("Link for archive: " + elem.href);
//   }
// }
// alert(document.body.innerHTML);
// document.body.innerHTML = "New BODY";

// let name = prompt("Enter your name", "<b>Tania</b>");
// elem1.innerHTML = name;
// // elem2.textContent = name;

// // Мигающий елемент:
// setInterval(() => (elem.hidden = !elem.hidden), 1000);

/* TASK - 1
 * Get several elements from the page, by:
 *   tag
 *   class
 *   identifier
 *   CSS selector
 *   name attribute
 * Use console.dir() method to show up the elements
 * */

// console.dir(document.getElementsByTagName("li"));
// console.dir(document.getElementsByClassName("main-list"));
// console.dir(document.getElementById("list"));
// console.dir(document.querySelector(".training-list"));
// console.dir(document.querySelectorAll(".training-list"));
// console.dir(document.getElementsByName("list-item"));

/* TASK - 2
 * Create a function, that will:
 * take an element from the page with class 'training-list', and text content equals 'list-element 5'.
 * Show this element in console.
 * Replace text content in this element to "<p>Hello</p>" without creating a new HTML element on the page
 * Use array methods to complete the task.
 * */

// function getListItem() {
//   const allElements = document.querySelectorAll(".training-list");
//   //   allElements.forEach((element) => {
//   //     if (element.textContent === "list-element 5") {
//   //       element.textContent = "<p>Hello</p>";
//   //     }
//   //   });
//   for (let i = 0; i < allElements.length; i++) {
//     if (allElements[i].textContent === "list-element 5") {
//       allElements[i].textContent = "<p>Hello</p>";
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

// function askProductName(productsList) {
//   let productName = prompt("Enter some product").toLowerCase();
//   const noMatches = () => {
//     for (let i = 0; i < productName.length; i++) {
//       if (productsList[i].textContent.toLowerCase().includes(productName)) {
//         return false;
//       }
//     }
//     return true;
//   };
//   while (noMatches()) {
//     productName = prompt("Enter correct product").toLowerCase();
//   }
//   return productName;
// }
// const replaceAmount = () => {
//   const products = [...document.querySelectorAll(".storage-item")];
//   let productName = askProductName(products);
//   const newAmount = prompt("How many?");
//   const productLi = products.find((pr) =>
//     pr.textContent.toLowerCase().includes(productName)
//   );
//   console.log(productLi, productName);
//   productLi.textContent = `${productName} - ${newAmount}`;
// };
// replaceAmount();

// const ul = document.getElementsByTagName("ul");
// console.log(ul);

// const li = document.getElementsByClassName("storage-item");
// console.log(li);

// const firstItem = document.getElementById("first-item");
// consile.log(firstItem);

// const listItems = document.querySelectorAll(".storage-item");
// console.log(listItems);

// const listItem = document.querySelector(".storage-item");
// console.log(listItem);

// console.log(listItem.innerText);
// console.log(listItem.innerHTML);

// console.log(ul.innerText);

// listItem.innerText = "<span>Span here</span>";
// listItem.innerHTML = "<span>Span here</span>";

// console.log(listItem.outerHTML);

// const listItem = document.querySelectorAll(".storage-item")[4];
// listItem.classList.add("active");
