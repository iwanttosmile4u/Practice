// const guestsList = `Guests:
//     * John
//     * Pete
//     * Mary
// `;
// console.log(guestsList);

// const guestsList = "Guests: \n John \n Pete \n \t Mary";
// console.log(guestsList);
// console.log("I'm the Walrus! And the backslash: \\");

// const string = "It's a backslash: \\";
// console.log(string);
// console.log(string.length);

// const string = `Hello`;
// console.log(string[1]);
// console.log(string.charAt(4));

// const string = "Widget with id";
// console.log(string.indexOf("id", 2));

// const str = "Hello! My name is beautifull";
// const target = "is";

// let pos = 0;
// while (true) {
//   const foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   console.log(`We've found ${foundPos}`);
//   pos = foundPos + 1;
// }

// const str = "stringify";
// console.log(str.slice(0, 6));

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// function ucFirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }
// console.log(ucFirst("roma"));

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes("viagra") || lowerStr.includes("xxx");
// }
// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "...";
//   } else {
//     return str;
//   }
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 10));
// console.log(truncate("Всем привет!", 20));
