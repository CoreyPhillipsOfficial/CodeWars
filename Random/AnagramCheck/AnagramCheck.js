// function to determine if two strings are anagrams of each other
function isAnagram(str1, str2) {

    // remove non-alphanumeric characters and convert string to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // check if lengths of cleaned strings are equal
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // count freq of each character in both strings
    const charCount1 = {}
    const charCount2 = {}

    for (let char of charCount1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of charCount2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // check is character counts in both strings are equal
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }
    return true;
}


// example usage:
const str1 = "listen";
const str2 = "silent";
console.log(isAnagram(str1, str2)); // Output: true

const str3 = "hello";
const str4 = "world";
console.log(isAnagram(str3, str4)); // Output: false