function digPow(n, p) {
    // Split n into digits and convert each digit to a number
    const numString = n.toString();
    const numDigits = numString.split('').map(Number);

    // Raise each one to a consecutive power starting with p and add together
    let sum = 0;
    for (let i = 0; i < numDigits.length; i++) {
        sum += Math.pow(numDigits[i], p + i);
    }

    // Divide by n
    const result = sum / n;

    // If not a positive integer, return -1
    return Number.isInteger(result) ? result : -1;

}

// Test cases
console.log(digPow(89, 1));    // Output: 1
console.log(digPow(92, 1));    // Output: -1
console.log(digPow(695, 2));   // Output: 2
console.log(digPow(46288, 3)); // Output: 51