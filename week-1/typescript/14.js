"use strict";
/**
 * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
 * @param {number[]} arr The array of numbers.
 * @return {string} The highest and lowest numbers in the array.
 *
 * Example array: [5, 2, 8, 1, 9, 3]
 * Expected output: "The lowest number is 1 and the highest number is 9."
 */
function HighLow(arr) {
    var highLowStr = "";
    var sorted = arr.slice().sort(function (a, b) {
        return a - b;
    });
    highLowStr = "The lowest number is " + sorted[0] + " and the highest number is " + sorted[sorted.length - 1] + ". ";
    return highLowStr;
}
console.log(HighLow([5, 2, 8, 1, 9, 3]));
