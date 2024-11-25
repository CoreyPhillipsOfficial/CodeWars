// const { join } = require("path");

// function reverseString(str) {

// // Step 1. Use split() method to return new array
// let splitString = str.split("");
// console.log(splitString);

// // Step 2. User reverse() method to reverse the newly created array
// let reverseArray = splitString.reverse();
// console.log(reverseArray);

// // Step 3. Use the join() method to join all elements of the array into a string
// let joinArray = reverseArray.join("");
// console.log(joinArray);

// // Step 4. Return the reversed string
// return joinArray

// }

// console.log(reverseString("2pac"));




// // condensed
// function reverseString2(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString2("hello"));




// // without methods
// function reverseString3(str) {
//     // Step 1. Create an empty string that will host the newly created string
//     let newString = "";

//     // Step 2. Create the FOR loop
//     for (let i = str.length - 1; i >= 0; i--){
//         newString += str[i]
//         // console.log(newString);
//     }

//     return newString;
//     }


// console.log(reverseString3("tree"));



// using recursion
function reverseString4(str) {
    
    // charAt() for the specific index
    // substr() for the specific index and everything after it
    return (str === "") ? "" : reverseString4(str.substr(1)) + str.charAt(0);

}

console.log(reverseString4("bumblebee"));
