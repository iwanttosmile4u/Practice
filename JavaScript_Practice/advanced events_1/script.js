// const createList = (arr, parent = document.body) => {
//   const listItemsDOM = arr.map((element) => `<li>${element}</li>`).join("");
//   return parent.insertAdjacentHTML("afterbegin", listItemsDOM);
// };

// let springArray = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
// createList(springArray);

// elem.oncontextmenu = function (event) {
//   event.preventDefault();
//   alert("Button menu");
// };
// document.oncontextmenu = function (event) {
//   if (event.defaultPrevented) return;
//   event.preventDefault();
//   alert("Document menu");
// };

// Несколько слов про подход к решению ДЗ №7. Основываясь на основных ошибках.
// Метод map возвращает новый, трансформированный массив на базе исходного. Этот метод не принято использовать в качестве обычного цикла для перебора коллекции и выполнения операций с её элементами. Для этого есть forEach.
// В целом для решения задачи нужно следующее.
// 1. С помощью метода map мы создаем из существующего массива новый массив (массив строк), в котором элементы обернуты в тег li. Обернуть элементы в тег можно с помощью шаблонной строки.
// 2. Далее, с помощью метода join этот массив можно превратить в строку (в итоге получается строка в виде HTML-верстки).
// 3. Вышеуказанные операции можно делать внутри шаблонной строки, которая начинается и заканчивается из <ul>, внутри в интерполяции.
// 4. В итоге полученную строку можем превратить в DOM-элементы и заапендить на страницу с помощью метода insertAdjacentHTML()
// 5. Для опционально части задания можно использовать рекурсию.

// Реализовать функцию, которая будет получать массив элементов и выводить их на страницу в виде списка. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонних библиотек (типа Jquery).

// Технические требования:

// Создать функцию, которая будет принимать на вход массив и опциональный второй аргумент parent - DOM-элемент, к которому будет прикреплен список (по дефолту должен быть document.body).
// Каждый из элементов массива вывести на страницу в виде пункта списка;
// Используйте шаблонные строки и метод map массива для формирования контента списка перед выведением его на страницу;

// join - отримати з масиву рядок

// function createListOfItems(someArray, parentElement = document.body) {
//   const ul = document.createElement("ul");
//   ul.innerHTML = someArray.map((item) => `<li>${item}</li>`).join("");
//   parentElement.append(ul);
// }
// createListOfItems(["hello", "world", "Kyiv", "Kharkiv", "Odessa", "Lviv"]);

function createListOfItemsUsingNodes(someArray, parentElement = document.body) {
  const ul = document.createElement("ul");
  someArray.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    ul.append(li);
  });
  parentElement.append(ul);
}
createListOfItemsUsingNodes([
  "hello",
  "world",
  "Kyiv",
  "Kharkiv",
  "Odessa",
  "Lviv",
]);

/**
 * Task - 01
 *
 * Create any text element and container with 5 buttons inside.
 *
 * The task is to show inner text of the button that was just pressed.
 * Only one event listener can be used.
 * */

// const btnContainer = document.createElement("div");
// const text = document.createElement("p");
// const btnsData = ["hello", "world", "content", "today"];
// btnsData.forEach((str) => {
//   const btn = document.createElement("button");
//   btn.textContent = str;
//   btnContainer.append(btn);
// });
// document.body.prepend(text, btnContainer);
// btnContainer.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     text.textContent = e.target.textContent;
//   }
// });
