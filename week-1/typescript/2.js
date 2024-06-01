"use strict";
/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */
function SumOfArrayTS(arr) {
    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum;
}
console.log(SumOfArrayTS([1, 10, 12]));
