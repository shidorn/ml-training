/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels removed.
 */

function removeVowel(str) {
    let NoVowelStr = str.replace(/[aeiou]/gi, '')
    return NoVowelStr;
}

console.log(removeVowel("Sheldon Pogi"));