/* ЗАДАЧА-02
 * Дополнить функционал предыдущего задания.
 * Вывести данные на экран после того как они были получены. Пока запрос обрабатывается - выводить на экан preloader анимацию.
 * */

// const url = "user.json";

// document.body.insertAdjacentHTML(
//   "afterbegin",
//   '<img src= "./Infinity.gif" alt = "preloader" id = "infinity">'
// );

// setTimeout(() => {
//   fetch("user.json")
//     .then((res) => res.json())
//     .then((users) => {
//       document.getElementById("infinity").remove();
//       users.forEach((item) => {
//         document.body.insertAdjacentHTML(
//           "afterbegin",
//           `<div>
//       <p>${item.name}</p>
//       <p>${item.age}</p>
//       <p>${item.gender}</p>
//       </div>`
//         );
//       });
//     });
// }, 2000);
