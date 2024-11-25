const { join } = require("path");

function reverseString(str) {

// Step 1. Use split() method to return new array
let splitString = str.split("");
console.log(splitString);

// Step 2. User reverse() method to reverse the newly created array
let reverseArray = splitString.reverse();
console.log(reverseArray);

// Step 3. Use the join() method to join all elements of the array into a string
let joinArray = reverseArray.join("");
console.log(joinArray);

// Step 4. Return the reversed string
return joinArray

}

console.log(reverseString("2pac"));