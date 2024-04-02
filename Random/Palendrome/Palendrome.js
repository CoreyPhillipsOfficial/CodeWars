// function to determine if a given string is a palendrome
function isPalendrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
}

console.log(isPalendrome('Was it a car or a cat I saw?'));