/* TASK 3
 * Create a function cutMaxLength(string, maxlength)
 * You need to cut the exact number of characters(maxLength) from source string.
 * Return value:
 *       if the number of the characters in source string is bigger then maxLength - the string that has been cut
 *       if the number of the characters in source string is smaller then maxLength - the source string itself
 */

function cutMaxLength(string, maxLength) {
  if (string.length > maxLength) {
    return string.slice(0, maxLength) + "...";
  }
  return string;
}

console.log(
  cutMaxLength("Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 8)
);
