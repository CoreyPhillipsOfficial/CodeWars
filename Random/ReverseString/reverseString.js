


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