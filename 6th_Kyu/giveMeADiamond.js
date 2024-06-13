/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
*/

function diamond(n) {
    if (n <= 0 || n % 2 === 0) {
        return null
    }

    let result = '';
    const midpoint = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
        let stars = i <= midpoint ? i * 2 + 1 : (n - i - 1) * 2 + 1;
        let spaces = (n - stars) / 2;
        result += ' '.repeat(spaces) + '*'.repeat(stars) + '\n';
    }
    return result;
}

console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(9));
console.log(diamond(10));