/* TASK - 4
 * Create a function, showMessage(msgText, numberOfShowing)
 * Arguments: msg text - is a text of message that will be shown,
 * numberOfShowing - the number of times that the message will be shown
 * Example: showMessage('Hello', 18) -> will show 'Hello' for the user 18 times
 * */

const showMessage = (msgText, numberOfShowing) => {
  for (let i = 0; i < numberOfShowing; i++) {
    console.log(msgText);
  }
};
showMessage("Hello", 5);
