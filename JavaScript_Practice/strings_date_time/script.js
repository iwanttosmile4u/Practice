// function sum(a, b) {
//   return a + b;
// }
// alert(`1 + 2 = ${sum(1, 2)}.`);

// let guestList = `Guests:
// * John
// * Pete
// * Mary
// `;
// alert(guestList);

// let guestList = "Guests:\n * John\n * Pete\n * Mary";
// alert(guestList);

// let str1 = "Hello\nWorld";
// let str2 = `Hello
// World`;
// alert(str1 == str2);

// alert("\u{20331}");

// let now = new Date();
// alert(now);

// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// alert(Dec31_1969);

// TASK 1
// * Write a function customCharAt(string,index)
// *   string - source string
// *   index - the index of the particular character of the string that we need
// * Return value: the character itself, that is placed on the specific index

// function customCharAt(string, index) {
//   return string[index];
// }
// const character = customCharAt("happy", 2);
// console.log(character);

/*TASK 2
 * Create a function. It should receive 1 argument - source string.
 *
 * Turn all of the odd characters of the string in to UPPERCASE.
 *
 * Return value: string with uppercase odd characters
 */

// function oddToUppercase(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     let order = i + 1;
//     if (order % 2 > 0) {
//       result += string[i].toUpperCase();
//     } else {
//       result += string[i];
//     }
//   }
//   return result;
// }
// console.log(oddToUppercase("fjfjfjfjjf"));

/* TASK 3
 * Create a function cutMaxLength(string, maxlength)
 * You need to cut the exact number of characters(maxLength) from source string.
 * Return value:
 *       if the number of the characters in source string is bigger then maxLength - the string that has been cut
 *       if the number of the characters in source string is smaller then maxLength - the source string itself
 */

//  переробити
// function cutMaxLength(string, maxLength) {
//   if (string.length > maxLength) {
//     return string.slise(0, maxLength) + "...";
//   } else {
//     return string;
//   }
// }
// console.log(cutMaxLength("gjfjfgkfkdkkkkvkfkfkdkkdkdkfkkfkdkfkkfkdkdkkd", 17));

/* TASK 4
 * Create a function getDayAgo(numberOfDays)
 *
 * Return value: name of the weekday, that was numberOfDays days before.
 */

// function getDayAgo (numberOfDays) {
//     const today = new Date();
//     const todayDate = today.getDate();
//     today.setDate(todayDate - numberOfDays);
// }

// назва дня тижня, який був 4 днів тому назад - п'ятниця

/*TASK 5
 * Create a function that takes string with date 'DD/MM/YYYY' as an argument.
 *
 * Return value: number of weekday of the first day in this month
 *
 * Create the same function for getting the name of the last weekday of the month.
 * */

// Створюємо 2 об'єкти Date: один дата нвродження, один - сьогодні
// Заводиться змінна з віком, яка дорівнює різниці років
// Якщо місяць дати народження більше чи дорівнює сьогоднішній даті, тоді треба прокрутити цю процедуру з днем, тод
// тоді ейдж++, якщо з днем нічого не стало, то нічого не зробити.
