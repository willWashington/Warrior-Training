//-------------https://www.codewars.com/kata/grasshopper-summation/train/javascript
//Write a program that finds the summation of every number from 1 to num.
  //The number will always be a positive integer greater than 0.

var summation = function (num) {
  let testNum = 0;
  let result = 0;
  while (testNum != num) {
    testNum++;
    result = testNum + result;
  }
  return result;
};

//---https://www.codewars.com/kata/5772da22b89313a4d50012f7
// Create a function that gives a personalized greeting. This function takes two parameters:
//   name and owner.
// Use conditionals to return the proper message:
// name equals owner	'Hello boss'
// otherwise 'Hello guest'

function greet (name, owner) {
  return (name === owner ? "Hello boss" : "Hello guest");
}

//---https://www.codewars.com/kata/grasshopper-if-slash-else-review/train/javascript
// In the game you are creating, the role of the main function is to check the input
//  and return a call to the appropriate function.
// The preloaded function available are forward() and backward().
// Two variables (FW_COUNT and BW_COUNT) are also predefined - don't touch them and don't worry about them!
// The possible inputs and the required actions are:
// "forward": call the forward() function, and return its result
// "backward": call the backward() function, and return its result
// anything else: return "Not a valid input."

function main (input) {
  switch (input){
    case "forward":
      return forward();
    case "backward":
      return backward();
    default:
      return "Not a valid input."
  }
  }

