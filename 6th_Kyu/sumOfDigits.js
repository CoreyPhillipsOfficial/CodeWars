/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/



// function digitalRoot(n) {
//     // initializing sum as a variable
//     let sum = 0;

//     // loop to add the digits of the first number
//     while (n) {
//         sum += n % 10; // add last digit digit of n to sum
//         n = Math.floor(n / 10); //remove last digit of n
//     }

//     // check if sum is a single digit
//     if (sum < 10) {
//         return sum; // if so, return the sum
//     }
//     return digitalRoot(sum); // if not, recursively call digitalRoot with the sum
// }


// shorter way to do this
function digitalRoot(n) {
    return (n - 1) % 9 + 1;
}

// Tests
value1 = 16;
value2 = 942;
value3 = 132189;
value4 = 493193;
value5 = 494863;



console.log(digitalRoot(value1));
console.log(digitalRoot(value2));
console.log(digitalRoot(value3));
console.log(digitalRoot(value4));
console.log(digitalRoot(value5));




