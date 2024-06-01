"use strict";
/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */
function swapCaseString(str) {
    let strSwapped = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            strSwapped += str[i].toUpperCase();
        }
        else {
            strSwapped += str[i].toLowerCase();
        }
    }
    return strSwapped;
}
console.log(swapCaseString("Hello World"));
