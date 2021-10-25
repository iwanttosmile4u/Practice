/*TASK 2
 * Create a function. It should receive 1 argument - source string.
 *
 * Turn all of the odd characters of the string in to UPPERCASE.
 *
 * Return value: string with uppercase odd characters
 */

function getOddCharacters(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }
  return result;
}
console.log(
  getOddCharacters(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto atque dignissimos distinctio earum est facere facilis fuga, ipsa labore laborum obcaecati possimus qui ratione similique suscipit tempora temporibus totam."
  )
);
