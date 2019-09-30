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

//---https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3, 6) should equal 15

function move (position, roll) {
  return (roll*2)+position;
}

//---https://www.codewars.com/kata/third-angle-of-a-triangle/train/javascript
// You are given two angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
  //--from research: found that all angles of a triangle add up to 180 degrees, therefore:

function otherAngle(a, b) {
  return (180-a)-b;
}

//https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript
// Consider an array of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
function countSheeps(arrayOfSheep) {
  let counter = 0;
  arrayOfSheep.forEach(function(element) {
    if(element === true) {
      counter++
    }
  });
  return counter;
}


