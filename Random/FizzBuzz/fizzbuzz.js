function printNumbers(n) {
    const list = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            list.push('FizzBuzz');
        } else if (i % 3 === 0) {
            list.push('Fizz');
        } else if (i % 5 === 0) {
            list.push('Buzz');
        } else {
            list.push(i);
        }
    }
    return list;
}

console.log(printNumbers(26));


// function printNumbers(n) {
//     for (let i = 1; i <= n; i++) {

//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');

//         } else if (i % 3 === 0) {
//             console.log('Fizz');

//         } else if (i % 5 === 0) {
//             console.log('Buzz');

//         } else {
//             console.log(i);
//         }

//     }
// }

// console.log(printNumbers(25));