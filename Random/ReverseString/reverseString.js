// function that reverses a string with built-in functions
function reverseStringShort(str) {
    // use built-in functions to turn the string into an array, reverse the array, and convert the array back into a string
    return str.split('').reverse().join('');
}

// example usage
const originalStr = 'Hi I\'m Corey!';
const reversedStr = reverseStringShort(originalStr);

console.log(reversedStr);





// function that reverses a string without built-in functions
function reverseString(str) {

    // initialized empty string
    let reversed = ''

    // iterate through characters of str string using for loop
    for (let i = str.length - 1; i >= 0; i--) {

        // concatenate concatenate each character to the 'reversed' string
        reversed += str[i]
    }

    // return the reversed string
    return reversed;
}

console.log(reverseString('Hi I\'m Corey!'));