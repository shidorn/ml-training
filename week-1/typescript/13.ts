/**
 * Write a function that accepts a string and converts the first letter of each word to uppercase.
 * @param {string} str The string to convert.
 * @return {string} The string with the first letter converted to uppercase.
 *
 * Example string: "The quick brown fox jumps over the lazy dog"
 * Expected output: "The Quick Brown Fox Jumps Over The Lazy Dog"
 */

function Ucase1stLetterEvryWrd(str: string): string {
    let string = str.toLowerCase().split(' ');
    console.log(string.length);
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }
    return string.join(' ');
}

console.log(Ucase1stLetterEvryWrd("the quick brown fox jumps over the lazy dog"))