/* ЗАДАЧА-01
 * Написать функцию, которая выводит сообщение на экран.
 *
 * Аргументы:
 * 1 - текст сообщения
 * 2 - длительность задержки
 *
 * Возвращаемое значение: Promise, внутри котрого и вызывается отсрочка.
 * */

let showMessage = function (text, delay) {
  return new Promise((resolve, reject) => {
    if (!text) {
      reject("No text found!");
      return;
    }
    setTimeout(() => {
      alert(text);
      resolve();
    }, delay);
  });
};
const msgPromise = showMessage(undefined, 2000)
  .then(() => {
    document.write("Success");
  })
  .catch((e) => {
    document.write(e);
  });
