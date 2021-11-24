/* TASK - 2
 * Create a function that will take one argument - array from the previous task result.
 * The task is to show every dish from the array in the console and delete it from the source array.
 * After all of the dishes will be shown on the console, the array must be empty.
 * */

const showDishes = (allDishes) => {
  allDishes.forEach((el) => {
    console.log(el);
  });
  allDishes.splice(0, allDishes.length);
  return allDishes;
};

showDishes(["milk", "fish", "eggs", "chips"]);
