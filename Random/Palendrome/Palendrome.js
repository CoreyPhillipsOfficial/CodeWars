// function to determine if a given string is a palendrome
function isPalendrome(str) {

    // clean the string of any symbols and make all letters lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // reverse the string
    const reverseStr = cleanStr.split('').reverse().join('');

    // check whether 
    return cleanStr === reverseStr;
}

console.log(isPalendrome('Was it a car or a cat I saw?'));